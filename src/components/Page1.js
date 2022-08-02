import React, { useContext ,useState} from 'react'
import './Page.css';
import Form from 'react-bootstrap/Form';
import {multiStepContext} from '../StepContent';
function Page1(props) {
  const{setFirst} = useContext(multiStepContext);
  const[displayName,setDisplayName] = useState('')
  const nameTransfer=(e)=>{
    setDisplayName(e.target.value) 
  }
  localStorage.setItem('displayName',displayName)
  return (
    <div className='container'>
      <div className="contain">
        <h4>Welcome! First things first...</h4>
        <p style={{color:'gray'}}>You can always change them later.</p>
      </div>
      <div className="form1">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className='leftItems' style={{fontSize:'14px', fontWeight:'600'}}>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Steve Jobs" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='leftItems' style={{fontSize:'14px', fontWeight:'600'}}>Display Name</Form.Label>
            <Form.Control type="text" placeholder="Steve" onChange={(e)=>nameTransfer(e)} id='displayName'/>
          </Form.Group>
          </Form>
          <button type="button" className='allbtn' onClick={()=>setFirst(2)}>Create Workspace</button>
        
      </div>
    </div>
  )
}

export default Page1