import { useState } from 'react'
import HomeComponent from './components/Home';
import CreateNew from './components/CreateNew';
import Developer from './components/Developer';
import { useBotContext } from './context/BotsContext';

function App() {
  var {IsHomeCP,IsCreateNewCP} = useBotContext()

  return (
    <>
     <div style={{width:"100%",minHeight:'100vh',display:'flex', alignItems:'center',justifyContent:'center',background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,102,172,1) 35%, rgba(0,228,255,1) 100%)'}}>
      {
        IsHomeCP ?  < HomeComponent /> : IsCreateNewCP ? <CreateNew/> : <Developer/>
      }
    
     </div>
    </>
  )
}

export default App
