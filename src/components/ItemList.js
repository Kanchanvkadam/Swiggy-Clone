import {CDN_URL} from "../utils/constants";


const ItemList = ({itemList}) =>{
    console.log(itemList )
    return(
        <div>
            <div>
                {itemList.map((list)=>
                <div key={list?.card?.info?.id} className="m-4 p-4 border-gray-200 border-b-2 text-left">
                    <div className="flex py-2">
                        <img src={CDN_URL + list?.card?.info?.imageId} />
                        <span>{list?.card?.info?.name} </span>
                        <span> --₹{list?.card?.info?.price ?list?.card?.info?.price/100 : list?.card?.info?.defaultPrice/100}</span>
                    </div>
                    <span className="text-xs">{list?.card?.info?.description}</span>
                </div>
                )}
            </div>
        </div>
    )
}

export default ItemList;