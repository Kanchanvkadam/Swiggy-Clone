import ItemList from "./ItemList"

const RestauranrtCategory = ({data}) =>{
    console.log(data?.itemCards)
    console.log(data?.title)

    return (
    <div>
        <div className="w-6/12 bg-gray-50 mx-auto my-2 shadow-lg p-4 ">
            <div className="flex justify-between">
                <span className=" font-bold text-lg">{data?.title}({data.itemCards.length})</span>
                <span className="">♨️</span>
            </div>
            <ItemList itemList={data?.itemCards} />

        </div>
        
    </div>)
}
 export default RestauranrtCategory;