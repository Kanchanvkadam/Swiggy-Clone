import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL, corsProxy } from "../utils/constants";
import useRestaurantManu from "../utils/useRestaurantMenu";
import RestauranrtCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantManu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const catagories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((i)=>
        i.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(catagories);
    return (
        <div className="text-center">
            <h1 className="font-bold m-4 text-2xl ">{name}</h1>
            <h3 className="font-bold">{cuisines.join(", ")}</h3>
            {catagories.map((i)=>
                <RestauranrtCategory data={i?.card?.card}/>
            )}


            {/* <h3>{costForTwo/100} for Two</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;
