import React from 'react';
import PlaceCardItem from './PlaceCardItem';
function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg mt-3">Places to Visit</h2>
      <div>
        {Object.entries(trip?.tripData?.itinerary || {}).sort().map(([day, places], index) => (
            <div key={index} className="mt-4">
              <h2 className="font-medium text-lg">{day}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {Array.isArray(places) && places.length > 0 ? (
                  places.map((place, placeIndex) => {// Handle time display
                    const timeDisplay =
                      typeof place.timeToVisit === 'string'
                        ? place.timeToVisit
                        : place.timeInterval
                        ? place.timeInterval
                        : place.timeToVisit
                        ? `${place.timeToVisit.startTime || 'N/A'} - ${place.timeToVisit.endTime || 'N/A'}`
                        : 'No time specified';
                    return (<div key={placeIndex} className="">
                        <p className="font-medium text-sm text-orange-500">🕒 {timeDisplay}</p>
                        <PlaceCardItem place={place} /></div>);})) : (
                  <p className="text-gray-500 text-sm">No places to visit for this day.</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>);}
export default PlacesToVisit;
