import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resList.map(i=>
                <RestaurantCard key={i.data.id} resData = {i} />
            )}
            </div>
        </div>
    )
}

export default Body;