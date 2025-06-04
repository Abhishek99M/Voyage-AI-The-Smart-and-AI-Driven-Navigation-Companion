import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog]= useState(false);
  
  useEffect(() => {
    console.log(user);
  },[])

  const login = useGoogleLogin({
    onSuccess:(codeResp)=> GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers:{
          Authorization:`Bearer ${tokenInfo?.access_token}`,
          Accept:"Application/json"
        }
      }).then((resp) => {
        console.log(resp);
        localStorage.setItem('user',JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
        
      })
  }

  return (
    <div className="bg-earthly-green-200 p-3 shadow-sm flex flex-col md:flex-row justify-between items-center px-4">
      <img src="/logo.svg"/>
      
      <div>

        {user ?
          
          <div className='flex md:flex-row items-center gap-3"'>
            
              {/* here we add new trips as we want */}              
              <a href='/create-trip' className='text-black'>
                <Button variant="outline" 
                className="rounded-full text-sm md:text-base mx-2" >+ Create Trip</Button>
              </a>
              {/* here we see our trips which we create before */}
              <a href='/my-trips' className='text-black'>
                <Button variant="outline" 
                className="rounded-full text-sm md:text-base">My Trips</Button>
              </a>
            
            <Popover>
              <PopoverTrigger className='object-cover bg-transparent'>
                <img src={user?.picture}  className='h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full'/>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={() => {
                  googleLogout;
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

          </div>
          :
          <Button onClick={() => setOpenDialog(true)} className="text-sm md:text-base">Sign In</Button>
        }
      </div>
      <Dialog open={openDialog}>
        
        <DialogContent>
          <DialogHeader>
            
            <DialogDescription>
              <img src='/logo.svg' className="w-20 mx-auto" alt="Dialog Logo"/>
              <h2 className='font-bold text-lg mt-7 text-center'>Sign In With Google</h2>
              <p className="text-center">Sign in to the app with Google authentication securely</p>

              <Button 
              onClick={login}
              className="mt-5 w-full flex gap-4 items-center justify-center text-sm md:text-base">            
                <FcGoogle className="h-6 w-6 md:h-8 md:w-8" style={{ width: '35px', height: '35px' }} />
                Sign In With Google
                </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default Header

