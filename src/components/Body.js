import { useEffect, useState } from "react";
import RestuarantCard from "./RestaurantCard";
import resList from './../utils/mockData';

const Body = () => {
    const [resList2,setResList] = useState(resList);

useEffect(() => {
    fetchData();
} , []);

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setResList(json.data.cards[3].card.card);
}

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterdList = resList2.filter((restaurant) => restaurant.info.avgRating > 4); 
                    console.log(resList);
                    setResList(filterdList);
                    }}>Top Rated Restaurants</button>
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
