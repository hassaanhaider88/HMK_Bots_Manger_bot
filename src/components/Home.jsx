import React, { useState } from 'react';
import Navbar from './Navbar';
import { useBotContext } from '../context/BotsContext';
// Single App Component
const AppItem = ({ BotImg ,BotName, index , BotUrl}) => {
  var { UserApps, setUserApps } = useBotContext()
  const [IsDeleteActive, setIsDeleteActive] = useState(false)
  const ShowDelBtn=()=>{
  setIsDeleteActive(!IsDeleteActive)
 }
 
  const HandleBotDelete = (index) => {
   const confirmDelete = window.confirm("Are you sure you want to delete this bot?");
console.log(confirmDelete)
if(confirmDelete){
 const updatedApps = UserApps.filter((app, idx) => idx !== index); 
 setUserApps(updatedApps); 
 localStorage.setItem('UserApps', JSON.stringify(updatedApps));
 setIsDeleteActive(!IsDeleteActive)
}else{
  setIsDeleteActive(!IsDeleteActive)
}
 };

 const RedirectFun=(url)=>{
  const isValidUrl = /^(http|https):\/\//.test(url);
  const fullUrl = isValidUrl ? url : `https://${url}`;
  window.open(fullUrl, '_blank');
}

  return (
    <>
    <div style={styles.itemContainer}>
      <div onClick={()=>RedirectFun(BotUrl)} style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
      <div style={styles.icon}>
        <img src={BotImg} alt={`${BotName} logo`} style={styles.iconImage} />
      </div>
      {/* <a href={BotUrl}> */}
      <div style={styles.text}>
        {BotName}
      </div>
      </div>
      {/* </a> */}
      <div onClick={()=>ShowDelBtn(index)} style={styles.options}>
        ...
      </div>
      <div onClick={()=>HandleBotDelete(index)} className={ `DeleteDiv ${IsDeleteActive ? 'ActiveDel' : ''}`}>
        <span>Delete</span>
      </div>
    </div>
    </>
  );
};


const HomeComponent = () => {
  var { UserApps, setUserApps } = useBotContext()
  return (
    <>
    <div style={styles.container}>
      <h1 style={{fontSize:'40px',color:'white',fontFamily:'Edu AU VIC WA NT Guides'}}>HMK Bots </h1>
      <div style={styles.UserInfo} id='UserInfo'>
      <div style={{display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
      <img style={styles.UserPic} src="https://cdn-icons-png.flaticon.com/512/8392/8392104.png" alt="" />
      <h2 style={{fontSize:'19px',color:'white',fontFamily:'Playfair Display'}}>HMK Agents</h2>
      </div>
      </div>
      {
  UserApps.length === 0 ? (
    <div>
      <img
        width="90%"
        height="80%"
        src="https://cdn-icons-png.flaticon.com/512/11909/11909881.png"
        alt="No Bots"
      />
    </div>
  ) : (
    UserApps.map((app, index) => (
      <AppItem
        key={index}
        index={index}
        BotImg={app.BotImg}
        BotName={app.BotName}
        BotUrl={app.BotUrl}
      />
    ))
  )
}

    </div>
    <div className='Navbar'>
      <Navbar/>
    </div>
    </>
  );
};
 
// Styles for the component
const styles = {
UserInfo:{
width:'100%',
display:'flex',
alignItems:'center',
justifyContent:'center',
padding:'10px 0px'
},
UserPic:{
width:"70px",
height:'70px',
borderRadius:'100%',
cursor:'pointer'
},
  container: {
    width:'100%',
    marginBottom:'100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,102,172,1) 35%, rgba(0,228,255,1) 100%)'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: '50px',
    margin: '6px 0',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #FF00FF',
    position: 'relative', 
  },
  icon: {
    flex: 1,
  },
  iconImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  text: {
    flex: 4,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#000',
    whiteSpace: 'nowrap',     
    overflow: 'hidden',       
    textOverflow: 'ellipsis', 
    transition: 'all 0.3s ease', 
cursor:'pointer',
fontFamily: "Playwrite DE Grund",

  },
  options: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#000',
   cursor:'pointer'

  },
};

export default HomeComponent;
