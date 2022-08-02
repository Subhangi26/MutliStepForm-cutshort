import React, { useContext } from 'react'
import './Page.css';
import tick from './tick.png';
import {multiStepContext} from '../StepContent';
function Page4() {
  const{setFirst} = useContext(multiStepContext)
  let a = localStorage.getItem('displayName')
  return (
    <div className='container'>
      <div className='my-4'><img src={tick} alt="Tick" /></div>
      <div className="contain">
        {a.length>0 ?<h4>Congratulations, {a}!</h4> : <h4>Congratulations, Steve!</h4>}
        
        <p style={{color:'gray'}}>You have completed onboarding, you can start using the Eden!</p>
      </div>
      <div className="data1" style={{marginTop:'30px'}}>
        <button type="button" className='allbtn' onClick={()=>setFirst(4)}>Launch Eden</button>
      </div>
    
    </div>
  );
}

export default Page4;