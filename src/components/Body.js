import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [restaurantList, setRestaurantList] =useState([]);

    useEffect(()=>{
        fetchData();
    },[])

     const fetchData= async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log(json);
        updateedSwiggyAPI(json);
    }

    const updateedSwiggyAPI = (json)=>{
        json.data.cards.map((i)=>{
            if(i.card.card.id ==='top_brands_for_you' ){
                setRestaurantList(i?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
        });
    }

    if(restaurantList.length ===0){
        return <Shimmer />
    }

    return(
        <div className="body">
            <div className="filter">
            <button  className="filter-btn" onClick={() =>{
                const filterList = restaurantList.filter((res)=> res?.info?.avgRating>4);
                setRestaurantList(filterList);
            }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {restaurantList.map(i=>
                <RestaurantCard key={i.info?.id} resData = {i} />
            )}
            </div>
        </div>
    )
}

export default Body;