import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo coordinates, ticket pricing, rating, Time Travel each of the location for 5 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I cannot directly access and display real-time information, including hotel prices, availability, images, and current ratings.  Hotel prices and availability are dynamic and change constantly.  Also, I cannot access and display image URLs.  Therefore, I'll provide a template JSON structure you can populate with data from websites like Booking.com, Expedia, Google Hotels, TripAdvisor, etc.\n\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, NV\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Hotel Name 1\",\n      \"hotelAddress\": \"123 Main St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": 75, \n        \"notes\": \"per night, approximate\"\n      },\n      \"hotelImageUrl\": \"replace_with_image_url\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1699,\n        \"longitude\": -115.1398\n      },\n      \"rating\": 3.8,\n      \"description\": \"Budget-friendly hotel near the Strip.\"\n    },\n    {\n      \"hotelName\": \"Hotel Name 2\",\n      \"hotelAddress\": \"456 Oak Ave, Las Vegas, NV 89109\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": 60,\n        \"notes\": \"per night, approximate\"\n      },\n      \"hotelImageUrl\": \"replace_with_image_url\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1750,\n        \"longitude\": -115.1400\n      },\n      \"rating\": 3.5,\n      \"description\": \"Basic hotel off the Strip, good value.\"\n    },\n     {\n      \"hotelName\": \"Hotel Name 3\",\n      \"hotelAddress\": \"789 Pine Ln, Las Vegas, NV 89101\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": 85,\n        \"notes\": \"per night, approximate\"\n      },\n      \"hotelImageUrl\": \"replace_with_image_url\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1215,\n        \"longitude\": -115.1739\n      },\n      \"rating\": 4.0,\n      \"description\": \"Clean and comfortable budget-friendly option\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"The Strip (walkable section)\",\n        \"placeDetails\": \"Walk the south end of the Strip, see the Bellagio fountains, admire the architecture.\",\n        \"placeImageUrl\": \"replace_with_image_url\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1146,\n          \"longitude\": -115.1728\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"timeToVisit\": \"Afternoon/Evening\"\n      },\n      {\n        \"placeName\": \"In-N-Out Burger\",\n        \"placeDetails\": \"Grab a cheap and delicious burger for dinner.\",\n        \"placeImageUrl\": \"replace_with_image_url\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.11,\n          \"longitude\": -115.17\n        },\n        \"ticketPricing\": \"Cost of meal\",\n        \"rating\": 4.0,\n        \"timeToVisit\": \"Evening\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Visit the Fremont Street Experience, see the Viva Vision light show.\",\n        \"placeImageUrl\": \"replace_with_image_url\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1699,\n          \"longitude\": -115.1400\n        },\n        \"ticketPricing\": \"Free (light show)\",\n        \"rating\": 4.2,\n        \"timeToVisit\": \"Evening\"\n      },\n\n      {\n        \"placeName\": \"Downtown Container Park\",\n        \"placeDetails\": \"Unique shops and restaurants in shipping containers.\",\n        \"placeImageUrl\": \"replace_with_image_url\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1699,\n          \"longitude\": -115.1400\n        },\n        \"ticketPricing\": \"Free entry\",\n        \"rating\": 4.0,\n        \"timeToVisit\": \"Afternoon\"\n      }\n    ],\n    \"day3\": [\n      {\n        \"placeName\": \"Seven Magic Mountains\",\n        \"placeDetails\": \"Colorful art installation outside of the city (requires transportation).\",\n        \"placeImageUrl\": \"replace_with_image_url\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.0560,\n          \"longitude\": -114.9989\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.3,\n        \"timeToVisit\": \"Afternoon\"\n      }\n    ]\n  }\n}\n```\n\nRemember to replace the placeholder values with actual data you find online.  For transportation to Seven Magic Mountains, consider ride-sharing services or public transport if possible, as this will save money compared to renting a car.  Always check opening hours and pricing before you go, as these can change.\n"},
          ],
        },
      ],
    });
  
   
