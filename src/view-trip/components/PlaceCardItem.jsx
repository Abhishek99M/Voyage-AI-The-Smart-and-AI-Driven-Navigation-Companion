//import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { useEffect, useState } from 'react'
//import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  const [photourl, setPhotoUrl] = useState('/placeholder.jpg'); // Default placeholder

  useEffect(() => {
    
    place &&  GetPlacePhoto();
    
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: place?.placeName,
      };

      const result = await GetPlaceDetails(data);

      // Safely access the photos array
      const photoName = result.data?.places?.[0]?.photos?.[3]?.name || null;

      if (photoName) {
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotoUrl(PhotoUrl);
      } else {
        console.warn('Photo not found for place. Using placeholder image.');
      }
    } catch (error) {
      console.error('Error fetching place photo:', error);
      setPhotoUrl('/placeholder.jpg'); // Fallback on error
    }
  };

  const ticketPricing =
    typeof place.ticketPricing === 'string'
      ? place.ticketPricing
      : `${place.ticketPricing?.amount || 'Free'} ${place.ticketPricing?.currency || ''} ${place.ticketPricing?.notes || ''}`;

  // // Safely handle timeToVisit
  // const timeToVisit = place.timeToVisit
  //   ? `${place.timeToVisit.startTime || 'N/A'} - ${place.timeToVisit.endTime || 'N/A'}`
  //   : 'No specific time mentioned';

 return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName+","+place?.hotelAddress} target='_blank'>
        <div className='border rounded-xl p-3 mt-3 flex gap-5 hover:scale-105 transition-all
        hover:shadow-md cursor-pointer'>
        <img src={photourl?photourl:'/placeholder.jpg'} className='w-[130px] h-[130px] rounded-xl object-cover'/>
        <div>
            <h2 className='font-bold text-lg'>{place.placeName}</h2>
            <p className="text-sm text-gray-400">{place.placeDetails}</p>
            <p className="text-sm text-gray-500">⭐ {place.rating} stars</p>
            <p className="text-sm text-gray-500">💰 {ticketPricing || 'Free Of Cost'}</p>
            {/* <p className="text-sm text-gray-500">⏰ {timeToVisit}</p> */}
            
            {/* <p className="text-sm text-gray-500">{place.ticketPricing}</p> */}
            {/* <Button className="p-2 h-8 w-8 border rounded"><FaMapLocationDot /></Button> */}
        </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem
