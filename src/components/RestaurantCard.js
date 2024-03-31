import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const { resData} = props;
    const {
        cloudinaryImageId,
        name, 
        cuisines, 
        avgRating,
        costForTwo, 
        sla 
    } = resData?.info;
    return(
        <div className="m-4 p-3 w-[250px] rounded-md bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:border border-solid border-slate-950">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export const WithPromotedLabel = (RestaurantCard) => {
    return (props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;