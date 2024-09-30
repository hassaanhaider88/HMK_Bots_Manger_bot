import React from 'react';
import { useBotContext } from '../context/BotsContext';

const Navbar = () => {
  var {IsHomeCP,IsDeveloper,HomeIconClick,CreateNewClick,DeveloperClick,HandleCreateNewBot} = useBotContext()
  return (
   <>
   {
    IsHomeCP || IsDeveloper ?  <div className='NavBarComponentContainer'>
    <div className='NavBarComponent'>
      <svg onClick={HomeIconClick} id='HomeIcon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M258.5 104.1c-1.5-1.2-3.5-1.2-5 0l-156 124.8c-.9.8-1.5 1.9-1.5 3.1v230c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V322c0-1.1.9-2 2-2h92c1.1 0 2 .9 2 2v140c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V232c0-1.2-.6-2.4-1.5-3.1l-156-124.8z"></path><path d="M458.7 204.2l-189-151.4C265.9 49.7 261 48 256 48s-9.9 1.7-13.7 4.8L160 119.7V77.5c0-1.1-.9-2-2-2H98c-1.1 0-2 .9-2 2v92.2l-42.7 35.1c-3.1 2.5-5.1 6.2-5.3 10.2-.2 4 1.3 7.9 4.1 10.7 2.6 2.6 6.1 4.1 9.9 4.1 3.2 0 6.3-1.1 8.8-3.1l183.9-148c.5-.4.9-.4 1.3-.4s.8.1 1.3.4l183.9 147.4c2.5 2 5.6 3.1 8.8 3.1 3.7 0 7.2-1.4 9.9-4.1 2.9-2.8 4.4-6.7 4.2-10.7-.3-4-2.2-7.7-5.4-10.2z"></path></svg>
    </div>
    <div onClick={CreateNewClick} className='NavBarComponent'>
      <svg id='CreateNew' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"></path></svg>
    </div>
    <div onClick={DeveloperClick} className='NavBarComponent'>
      <svg id='Developer' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path></svg>
    </div>
  </div>
   : 
   <div className='CreateNewButtons'>
   <button onClick={HomeIconClick} className='CreateNewButton'>Cancel</button>
   <button onClick={HandleCreateNewBot} className='CreateNewButton' style={{background:"linear-gradient(90deg, rgba(0,228,255,1) 0%, rgba(15,102,172,1) 100%)",color:"white"}}>Create</button>
   </div> 
   }

   </>
  )
}

export default Navbar