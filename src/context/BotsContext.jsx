import { createContext, useContext, useState } from "react";

const BotsContext = createContext();

export const BotsContextProvider=({children})=>{

 const [UserApps, setUserApps] = useState(() => {
  // Retrieve the stored data from localStorage on initial render
  const savedUserApps = localStorage.getItem('UserApps');
  return savedUserApps ? JSON.parse(savedUserApps) : [];
});
  const [IsHomeCP, setIsHomeCP] = useState(true); //CP srand for Component
  const [IsCreateNewCP, setIsCreateNewCP] = useState(false);
  const [IsDeveloper, setIsDeveloper] = useState(false);
  const [ImageUrl,setImageUrl] = useState('');
  const [UserBotname,setUserBotname] = useState('');
  const [UserBotUrl,setUserBotUrl] = useState('');
  const [CreateNewBotError, setCreateNewBotError] = useState(false)
  const [IsDeleteActive, setIsDeleteActive] = useState(false)

  const HomeIconClick=()=>{
    setIsHomeCP(true);
    setIsCreateNewCP(false)
    setIsDeveloper(false)
  }
  const CreateNewClick=()=>{
    setIsHomeCP(false);
    setIsCreateNewCP(true)
    setIsDeveloper(false)
  }
  const DeveloperClick=()=>{
    setIsHomeCP(false);
    setIsCreateNewCP(false)
    setIsDeveloper(true)
  }
const HandleCreateNewBot=()=>{
  if (ImageUrl === '' || UserBotUrl === '' || UserBotname === '') {
    setCreateNewBotError(true);
    setTimeout(() => {
      setCreateNewBotError(false);
    }, 4000);
  } else {
    const newBot = {
      BotImg: ImageUrl,
      BotName: UserBotname,
      BotUrl: UserBotUrl,
    };
    const updatedUserApps = [...UserApps, newBot];
    setUserApps(updatedUserApps);
    localStorage.setItem('UserApps', JSON.stringify(updatedUserApps));
    setImageUrl('');
    setUserBotUrl('');
    setUserBotname('');
    HomeIconClick();
  }

}

   return <BotsContext.Provider value={{IsHomeCP, UserApps, setUserApps,setIsHomeCP,IsCreateNewCP, setIsCreateNewCP,IsDeveloper, setIsDeveloper,HomeIconClick,CreateNewClick,DeveloperClick, HandleCreateNewBot,ImageUrl,setImageUrl, UserBotname,setUserBotname, UserBotUrl,setUserBotUrl , CreateNewBotError, setCreateNewBotError, IsDeleteActive, setIsDeleteActive }}>
               {children}
         </BotsContext.Provider>
}


export const useBotContext = () => {
  return useContext(BotsContext); 
};