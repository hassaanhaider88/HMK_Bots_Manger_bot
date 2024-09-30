import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { IoImagesOutline } from "react-icons/io5";
import { useBotContext } from '../context/BotsContext';

const CreateNew = () => {
  const { ImageUrl, setImageUrl, UserBotname, setUserBotname, UserBotUrl, setUserBotUrl, CreateNewBotError } = useBotContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;  
        setImageUrl(base64String); 
        localStorage.setItem('uploadedImage', base64String); 
      };
      reader.readAsDataURL(file); 
    }
  };

  // useEffect(() => {
  //   const savedImage = localStorage.getItem('uploadedImage'); 
  //   if (savedImage) {
  //     setImageUrl(savedImage); 
  //   }
  // }, [setImageUrl]);

  return (
    <>
      <div style={styles.container}>
        <h1 style={{ fontSize: '40px', color: 'white', fontFamily: 'Edu AU VIC WA NT Guides' }}>HMK Bots</h1>
        <span style={styles.text}>
          {CreateNewBotError ? (
            <p style={{ fontSize: '23px', margin: '0px', color: 'red' }}>All Fields Required!</p>
          ) : (
            <p style={{ fontSize: '23px', margin: '0px', color: 'white' }}>Create New Bot Link</p>
          )}
        </span>
        <form className='FormInCreateNewCP'>
          <div className='ImgAndNameUrl'>
            <div className='Img'>
              <label htmlFor="FileChoose">
                <div id="ImageContainer">
                  {ImageUrl ? (
                    <img
                      src={ImageUrl} // Use Base64 string from context
                      alt="Uploaded"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <IoImagesOutline size={60} color="#ccc" />
                  )}
                </div>
              </label>
              <input onChange={handleFileChange} required type="file" id='FileChoose' hidden />
            </div>
            <div className='NameAndUrl'>
              <input required value={UserBotname} onChange={(e) => setUserBotname(e.target.value)} className='InputField' type="text" placeholder='Enter Bot Name ..' />
              <input required value={UserBotUrl} onChange={(e) => setUserBotUrl(e.target.value)} className='InputField' type="url" placeholder='Bot URL like https://t.me/examplebot' />
            </div>
          </div>
        </form>
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

};

export default CreateNew;
