import React from 'react';
import Navbar from './Navbar';
import { FaExternalLinkAlt } from "react-icons/fa";
// Single App Component
const AppItem = ({ icon, name , RedirectUrl}) => {
const RedirectFun=(url)=>{
  const isValidUrl = /^(http|https):\/\//.test(url);
  const fullUrl = isValidUrl ? url : `https://${url}`;
  window.open(fullUrl, '_blank');
}
  return (
    <div style={styles.itemContainer}>
      <div style={styles.icon}>
        <img src={icon} alt={`${name} logo`} style={styles.iconImage} />
        
      </div>
      <div style={styles.text}>
        {name}
      </div>
      <div style={styles.options}>
      <button onClick={()=>RedirectFun(RedirectUrl)} className='CreateNewButton' style={{background:"linear-gradient(90deg, rgba(0,228,255,1) 0%, rgba(15,102,172,1) 100%)",color:"white"}}>
        <FaExternalLinkAlt/>
      </button>
      </div>
    </div>
  );
};

// Main Component to display all app items
const Developer = () => {
  const SubscritApps = [
    { icon: 'https://cdn-icons-png.flaticon.com/128/3665/3665173.png', name: 'Subscribe At YouTube', RedirectUrl : 'https://youtube.com/@hassaanhaider313?si=55fPmmkU190u3fUL' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3116/3116491.png', name: 'Follow At TikTok', RedirectUrl : 'https://www.tiktok.com/@songlesssongs' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3665/3665172.png', name: 'Follow At LinkedIn', RedirectUrl : 'https://www.linkedin.com/in/hassaan-haider-627272294' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3670/3670124.png', name: 'FaceBook Followers', RedirectUrl : 'https://www.facebook.com/CodeWeb88' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/1409/1409946.png', name: 'Follow At Instagram', RedirectUrl : 'https://www.instagram.com/hassaanhaiderhmk?igsh=YzljYTk1ODg3Zg==' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3665/3665148.png', name: 'Subscribe At Twitter', RedirectUrl : 'https:/www.x.com/hassaanhaider88' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504957.png', name: 'Call At Whatsapp', RedirectUrl : 'https://wa.me/message/DORB3T47ZZ2DB1' },
    { icon:'https://cdn-icons-png.flaticon.com/128/2504/2504941.png', name :'Meet At Telegram', RedirectUrl: 'https://t.me/hmkcodeweb' },
    { icon:'https://cdn-icons-png.flaticon.com/128/5968/5968534.png', name :'Mail Us',
     RedirectUrl: 'mailto:hassaahaider088@gmail.com' },
  ];

  return (
    <>
    <div style={styles.container}>
  {/* /* font-family: "", cursive; */ }
      <h1 style={{fontSize:'40px',color:'white',fontFamily:'Edu AU VIC WA NT Guides'}}>HMK Bots </h1>
      <span style={styles.text} >
        <p style={{fontSize:'23px',margin:'0px',color:'white'}}>Please Follow Us</p>
      </span>
      {SubscritApps.map((app, index) => (
        <AppItem key={index} icon={app.icon} name={app.name} RedirectUrl={app.RedirectUrl} />
      ))}
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
    marginBottom:'100px',
    width:'100%',
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

export default Developer;
