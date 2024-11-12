import { useEffect, useState } from "react";
import "./Items.css";
import Item from "./../item/Item";
import ItemSkeleton from "./../item-skeleton/ItemSkeleton";
import { items } from "@wix/data";
import { createClient, OAuthStrategy } from "@wix/sdk";

// utility function to transform wix based image url to standard image url
function getWixImageUrl(wixImageUrl) {
  if (!wixImageUrl.startsWith("wix:image://")) return wixImageUrl;

  // Remove the wix:image:// prefix
  const [, imageId] = wixImageUrl.replace("wix:image://", "").split("/");

  // Construct the URL
  return `https://static.wixstatic.com/media/${imageId}`;
}

const Items = ({}) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals([]);

    const myWixClient = createClient({
      modules: { items },
      auth: OAuthStrategy({
        clientId: "53a01a61-171f-41da-97fb-0a62a73c9246",
      }),
    });

    myWixClient.items
      .queryDataItems({
        dataCollectionId: "PizzaMenu",
        consistentRead: true,
      })
      .ascending("_createdDate")
      .find()
      .then((res) => {
        // Sort items explicitly by createdDate.$date in descending order
        const sortedItems = res._items.sort(
          (a, b) =>
            new Date(a.data._createdDate.$date) -
            new Date(b.data._createdDate.$date)
        );
        console.log(sortedItems);
        setMeals(sortedItems);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="items">
        {meals.length
          ? meals.map((meal, i) => (
              <Item
                key={i}
                image={getWixImageUrl(meal.data.image)}
                name={meal.data.name}
                rating={meal.data.rating}
                price={meal.data.price}
              />
            ))
          : Array.from(Array(12).keys()).map((item, i) => (
              <ItemSkeleton key={i} />
            ))}
      </div>
    </>
  );
};

export default Items;
