import RestuarantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/* //RestuarantCard */}
                {/* <RestuarantCard resName="Siddhi Foods" cuisine="Burger,Pizza,Biryani"/>  */}
                {/* <RestuarantCard resName="KFC" cuisine="Fast food,Biryani"/> */}
                {/* <RestuarantCard resData = {resList[0]}/>
                <RestuarantCard resData = {resList[1]}/>
                <RestuarantCard resData = {resList[2]}/>
                <RestuarantCard resData = {resList[3]}/>
                <RestuarantCard resData = {resList[4]}/>
                <RestuarantCard resData = {resList[5]}/>
                <RestuarantCard resData = {resList[6]}/>
                <RestuarantCard resData = {resList[7]}/> */}
                {
                    resList.map(restaurent => <RestuarantCard key={restaurent.info.id} resData = {restaurent}/>)
                }
            </div>
        </div>
    )
}

export default Body;
