import React, { useContext, useState } from 'react'
import './Page.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {multiStepContext} from '../StepContent';
function Page2() {
  const{setFirst} = useContext(multiStepContext) 
  return (
    <div className='container'>
      <div className="contain">
          <h4>Let's set up a home for all your work</h4>
          <p style={{color:'gray'}}>You can always create another workspace later.</p>
      </div>
      <div className="data1">
        <Form>
          <Form.Group style={{marginBottom:'15px'}}>
            <Form.Label className='leftItems' style={{fontSize:'14px', fontWeight:'600'}}>Workspace Name</Form.Label>
            <Form.Control type="text" placeholder="Eden" id='workSpaceName'/>
          </Form.Group>

          <Form.Label className='leftItems' htmlFor="basic-url" style={{fontSize:'14px', fontWeight:'600'}}>Workspace URL<span style={{color:'gray'}}>(optional)</span></Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">www.eden.com/</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Example'/>
            </InputGroup>
        </Form>
        <button type="button" className='allbtn' onClick={()=>setFirst(3)}>Create Workspace</button>
      </div>
    </div>
  )
}

export default Page2