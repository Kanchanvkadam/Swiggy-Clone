import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log(json);
        updateedSwiggyAPI(json);
    }

    const updateedSwiggyAPI = (json) => {
        json.data.cards.map((i) => {
            if (i.card.card.id === 'top_brands_for_you') {
                setRestaurantList(i?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurantList(i?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
        });
    }

    //conditional rendering
    return restaurantList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
            <div  className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                    console.log(searchText);
                    const filteredRestaurant =  restaurantList.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredRestaurant)
                }}>Search</button>
            </div>
                <button className="filter-btn" onClick={() => {
                    const filterList = restaurantList.filter((res) => res?.info?.avgRating > 4.5);
                    setRestaurantList(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurantList.map(i =>
                    <Link key={i.info?.id} to={"/restaurants/"+i.info?.id}><RestaurantCard resData={i} /></Link>
                )}
            </div>
        </div>
    )
}

export default Body;