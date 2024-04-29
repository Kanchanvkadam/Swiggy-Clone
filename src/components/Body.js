import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log(json);
        //console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus==false){
        return <h1>Looks like you're Offline!! Pleasecheck your internet Connection</h1>
    }

    const {setUserName, loggedInUser} = useContext(UserContext);

    //conditional rendering
    return restaurantList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
            <div  className="search m-4 p-4">
                <input type="text" className="border border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button
                    className="bg-pink-200 px-2 mx-2 border border-red-950"
                     onClick={()=>{
                    console.log(searchText);
                    const filteredRestaurant =  restaurantList.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredRestaurant)
                }}>Search</button>
            </div>
            <div className="flex items-center">
                <button
                    className="bg-pink-200 px-2 mx-2 border border-red-950"
                    onClick={() => {
                    const filterList = restaurantList.filter((res) => res?.info?.avgRating > 4.5);
                    setRestaurantList(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex items-center">
                <label className="p-1">UserName : </label>
                <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurantList.map(i =>
                    <Link key={i.info?.id} to={"/restaurants/"+i.info?.id}>
                        {
                            i.info.promoted? <RestaurantCardPromoted resData={i}/>: <RestaurantCard resData={i} />
                        }
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;