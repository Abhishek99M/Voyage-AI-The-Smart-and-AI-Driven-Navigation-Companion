# AI Travel Planner

AI Travel Planner is a modern web application designed to help users plan and organize their trips seamlessly. Powered by AI, it assists users by suggesting itineraries, locations to visit, and managing trip details with ease.

![atl](https://github.com/Abhishek99M/AI-TRAVEL-PLANNER/blob/4b376b7da834c57d27e73ab7c1caf1bac101b119/public/landing.jpg)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Features

### Core Features:
- **User Authentication**: Sign up, log in, and access personalized trip information.
- **Trip Creation**: Plan trips by specifying location, budget, and number of days.
- **AI-Powered Suggestions**: Get personalized recommendations for places to visit.
- **Dynamic Itineraries**: Generate day-by-day travel plans with timings and details.
- **Photo Integration**: Fetch and display photos of suggested locations.
- **User Trip Management**: View and manage planned trips.

### Additional Features:
- **Time and Budget Management**: Displays trip details like travel times and budgets.
- **Firebase Integration**: Stores user data and trip information securely.
- **Responsive Design**: Works seamlessly across devices.

---

## Technologies Used

### Frontend:
- **React.js**: For building the user interface.
- **TailwindCSS**: For styling the application.

### Backend & Database:
- **Firebase**: For authentication and database storage.
- **Google Places API**: To fetch place details and photos dynamically.

### Libraries:
- **React Router DOM**: For navigation.
- **Axios**: For making API requests.

---

## Installation and Setup

Follow these steps to run the project locally:

### Prerequisites:
- Node.js installed (v16+ recommended).
- Firebase project set up with authentication and Firestore database enabled.
- Google Cloud project with Places API enabled.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek99M/ai-travel-planner.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ai-travel-planner
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   REACT_APP_GOOGLE_API_KEY=your-google-api-key
   ```

5. Start the development server:
   ```bash
   npm start
   ```
6. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Folder Structure

```
AI-TRAVEL-PLANNER
├── public            # Static assets
├── src
│   ├── components    # Reusable UI components
│   ├── pages         # Page-level components
│   ├── service       # API integrations and Firebase configuration
│   ├── styles        # Global styles
│   ├── utils         # Helper functions
│   └── App.js        # Main application file
└── package.json      # Project metadata and dependencies
```

---

## Key Components

1. **`UserTripCardItem.jsx`**:
   - Displays individual trip details such as location, number of days, and budget.
   - Fetches and displays photos using the Google Places API.

2. **`MyTrips.jsx`**:
   - Displays all trips created by the logged-in user.
   - Retrieves trip data from Firebase Firestore.

3. **`PlacesToVisit.jsx`**:
   - Displays itinerary details for each day of a trip.
   - Integrates with `PlaceCardItem` to render individual places.

---

## Known Issues and Troubleshooting

1. **Error: `prevVal is not iterable`**:
   - Ensure `setUserTrips` initializes with an empty array (`setUserTrips([])`), not `undefined`.

2. **Error: `places.map is not a function`**:
   - Validate that `places` is an array before calling `.map()`.

3. **Firebase Authentication Issues**:
   - Confirm that the Firebase configuration in the `.env` file is correct.

4. **Google API Errors**:
   - Verify that the Google Places API key has the correct permissions and is active.


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

Happy Traveling! ✈️


