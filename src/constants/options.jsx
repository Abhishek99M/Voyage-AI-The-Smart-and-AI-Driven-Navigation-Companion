export const SelectTravelesList = [
    {
    id:1,
    title:"just me",
    desc:"A sole traveles in exploration",
    icon:"✈️",
    people:"1"
    },
    {
    id:2,
    title:"A Couple",
    desc:"Two traveles in tandem",
    icon:"🍻",
    people:"2 People"
    },
    {
    id:3,
    title:"Family",
    desc:"A group of fun loving adv",
    icon:"🏠",
    people:"3 to 5 People"
    },
    {
    id:4,
    title:"Friends",
    desc:"A bunch of thrill-seekes",
    icon:"🏏",
    people:"5 to 10 People"
    },
    
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:"Cheap",
        desc:"Stay conscious of costs",
        icon:"💸",
    },
    {
        id:2,
        title:"Moderate",
        desc:"Keep coston the average side",
        icon:"💰",
    },
    {
        id:3,
        title:"Luxury",
        desc:"Stay conscious of costs",
        icon:"🤑",
    },
]

export const AI_PROMPT="Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in  A.M. / P.M. clock format and should be a time interval in JSON format."