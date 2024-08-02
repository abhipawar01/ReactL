import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo " src="https://img.freepik.com/premium-vector/food-store-logo-template-design_316488-1625.jpg" />
            </div>
            <div className="navitems"> 
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
    "info": {
    "id": "234875",
    "name": "Adil Hotel",
    "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    "locality": "Rautha Wada",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Tandoor"
    ],
    "avgRating": 4.4,
    "parentId": "27123",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 45,
    "lastMileTravel": 12.6,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "12.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹349",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "213358",
    "name": "Apni Rasoi Family Dhaba",
    "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
    "locality": "Vishnu Nagar",
    "areaName": "Parasia Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Indian",
    "South Indian",
    "Chinese"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "35024",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 46,
    "lastMileTravel": 13.9,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "13.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-chhindwara-213358",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "618037",
    "name": "Jai Ganesh Bhojnalaya",
    "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
    "locality": "Railway Colony",
    "areaName": "Bus stand",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Indian",
    "Chinese"
    ],
    "avgRating": 3.8,
    "veg": true,
    "parentId": "368432",
    "avgRatingString": "3.8",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 41,
    "lastMileTravel": 11,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "11.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹299",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/jai-ganesh-bhojnalaya-railway-colony-bus-stand-chhindwara-618037",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "257428",
    "name": "Raajbagh Restaurant ",
    "cloudinaryImageId": "xvyrclhxftulsglktaek",
    "locality": "Seoni Road",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Indian",
    "Chinese",
    "Fast Food",
    "Beverages"
    ],
    "avgRating": 3.7,
    "veg": true,
    "parentId": "164019",
    "avgRatingString": "3.7",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 56,
    "lastMileTravel": 10.8,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "10.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹110"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "150586",
    "name": "Accord International",
    "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
    "locality": "Parasia Road",
    "areaName": "Vishnu Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Continental",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "26828",
    "avgRatingString": "4.3",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 57,
    "lastMileTravel": 14.3,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "14.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/accord-international-parasia-road-vishnu-nagar-chhindwara-150586",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "774546",
    "name": "Shree Naivedyam",
    "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
    "locality": "Khajri Road",
    "areaName": "Chhindwara City",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "South Indian",
    "Pizzas",
    "Beverages"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "428968",
    "avgRatingString": "4.3",
    "totalRatingsString": "20+",
    "sla": {
    "deliveryTime": 48,
    "lastMileTravel": 11.7,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "11.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/shree-naivedyam-khajri-road-chhindwara-city-chhindwara-774546",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "658210",
    "name": "The Fusion Lounge",
    "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
    "locality": "Triloki nagar",
    "areaName": "Railway Station",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Chinese",
    "Beverages",
    "Fast Food",
    "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "395453",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 50,
    "lastMileTravel": 9.9,
    "serviceability": "SERVICEABLE",
    "slaString": "50-55 mins",
    "lastMileTravelString": "9.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-fusion-lounge-triloki-nagar-railway-station-chhindwara-658210",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "630193",
    "name": "Champaran Handi Restaurant",
    "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
    "locality": "Sinchai Colony",
    "areaName": "Nagpur road",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian"
    ],
    "avgRating": 4.2,
    "parentId": "376324",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 47,
    "lastMileTravel": 11.9,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "11.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-942893cd-3fe9-4455-8c04-ad1ed4e6d3ed"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/champaran-handi-restaurant-sinchai-colony-nagpur-road-chhindwara-630193",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]
const RestuarantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,deliveryTime} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-img" alt = "Burger"src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + resData.info.cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{deliveryTime}Min</h4>
        </div>
    )
}
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

const AppLayout = () => {
    return (
        <div className="app">
            {/* //Header */}
            <Header/>
            {/* //body */}
            <Body/>
            {/* //footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)




//core react syntax to create a element ----
//  const heading = React.createElement("h1" , {id:"heading"},"Hello React" );
//  const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//JSX 

// const jsxHeading = <h1 className="heading">Created using JSX Syntax</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));

// //React Components

// const HeadingTwo = () => {
//     return <h1>Hello World</h1>;


// const number = 100000;
// const HeadingOne = ( () => 
//     <div>
//         {/* component composition */}
//         <Title /> 
//         {number}
//         <h1>Hello Wolrd Two</h1>
//     </div>
// );

// const Title = () => (
//         <h1 className="head" tabIndex="5">
//             Namaste React using JSX;
//         </h1>
// );

// const HeadingThree = () => <h1>Hello Wolrd three</h1>;

// root.render(jsxHeading)
// root.render(<HeadingOne/>)