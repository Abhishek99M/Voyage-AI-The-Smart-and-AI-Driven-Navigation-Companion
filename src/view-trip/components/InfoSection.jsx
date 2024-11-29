import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { useEffect, useState } from 'react'
import { FaShareAltSquare } from "react-icons/fa";

function InfoSection({trip}) {

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
    <div>
        <img src={photourl?photourl:'/placeholder.jpg'} className='h-[340px] w-full object-cover rounded-xl ' alt="Not found" />   
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label }</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>💰 {trip?.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>🚗 No. Of Travelers: {trip.userSelection?.traveler}</h2>
                </div>    
            </div>
            <Button><FaShareAltSquare /></Button>
        </div>  
    </div>
  )
}


export default InfoSection
