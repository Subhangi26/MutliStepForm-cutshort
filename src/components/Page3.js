import React, { useContext } from 'react'
import './Page.css';
import user from './user.png';
import team from './team.png';
import {multiStepContext} from '../StepContent';
function Page3() {
  const{setFirst} = useContext(multiStepContext)
  function clicking(e){
    console.log(e.currentTarget.id)
    if(e.currentTarget.id == 'myself'){
      document.getElementById('myself').style.borderColor = 'slateblue'
      document.getElementById('team').style.borderColor = 'gainsboro'
    }else if(e.currentTarget.id == 'team'){
      document.getElementById('team').style.borderColor = 'slateblue'
      document.getElementById('myself').style.borderColor = 'gainsboro'
    }
  }
  return (
    <div className='container'>
      <div className="contain">
        <h4>How are you planning to use Eden?</h4>
        <p style={{color:'gray'}}>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="data1" style={{marginTop:'30px'}}>
        <div className="cardGroup">
          <div className="card" id='myself' onClick={clicking}>
            <img src={user}/>
            <h6 className='al1'>For myself</h6>
            <p className='al1'  style={{color:'gray'}}>Write better. Think more clearly. Stay organized.</p>
          </div>
          <div className="card" id='team' onClick={clicking}>
            <img src={team}/>
            <h6 className='al1'>With my team</h6>
            <p className='al1'  style={{color:'gray'}}>Wikis, docs, tasks & projects, all in one place.</p>
          </div>
        </div>
        <button type="button" className='allbtn' onClick={()=>setFirst(4)}>Create Workspace</button>

      </div>
      </div>
  )
}

export default Page3