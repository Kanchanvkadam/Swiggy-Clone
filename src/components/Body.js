import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () =>{
    const [restaurantList, setRestaurantList] =useState(resList);

    return(
        <div className="body">
            <div className="filter">
            <button  className="filter-btn" onClick={() =>{
                const filterList = restaurantList.filter((res)=> res.data.avgRating>4);
                setRestaurantList(filterList);
            }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {restaurantList.map(i=>
                <RestaurantCard key={i.data.id} resData = {i} />
            )}
            </div>
        </div>
    )
}

export default Body;