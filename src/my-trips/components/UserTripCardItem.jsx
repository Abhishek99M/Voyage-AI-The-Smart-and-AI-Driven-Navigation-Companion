import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
    const [photourl, setPhotoUrl] = useState("/placeholder.jpg");

    useEffect(() => {
    
        trip && GetPlacePhoto();
        
    },[trip])

    const GetPlacePhoto = async () => {
        try {
          if (!trip?.userSelection?.location?.label) {
            console.warn('Location label is missing. Skipping API call.');
            return;
          }
    
          const data = {
            textQuery: trip?.userSelection?.location?.label,
          };
    
          console.log('Data being sent:', data);
          const result = await GetPlaceDetails(data);
    
          const photoName = result.data?.places?.[0]?.photos?.[3]?.name || null;
    
          if (photoName) {
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
            setPhotoUrl(PhotoUrl);
          } else {
            console.warn('Photo not found. Using placeholder image.');
          }
        } catch (error) {
          console.error('Error fetching place photo:', error);
          setPhotoUrl('/placeholder.jpg'); // Fallback
        }
    };
  return (
    <Link to={'/view-trip/'+trip?.id}>
        <div className='hover:scale-105 transition-all '>
            <img src={photourl?photourl:'/placeholder.jpg'} 
            className='object-cover rounded-xl h-[220px]'/>
            <div>
                <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
                <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.traveler} in {trip?.userSelection?.budget} Budget</h2>
            </div>
        </div>
    </Link>
  )
}

export default UserTripCardItem
