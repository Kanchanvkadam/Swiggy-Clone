import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL, corsProxy } from "../utils/constants";
import useRestaurantManu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantManu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo/100} for Two</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;