import React,{useContext} from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import icon from './components/icon.png';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { multiStepContext } from './StepContent';
function App() {
  const{first,second,three,four} = useContext(multiStepContext);
  let showStep = (step)=>{
    switch(step){
      case 1:
        return <Page1/>
      case 2:
        return <Page2/>
      case 3:
        return <Page3/>
      case 4:
        return <Page4/>  
    }
  }
  return (
    <div className='App'>
      <header>
        <div className='heading my-2'>
          <img src={icon} alt="Icon" />
          <h3>Eden</h3>
        </div>
        <div className='center-stepper my-5'>
          <Stepper orientation='horizontal' activeStep={first - 1}>
            <Step>
             <StepLabel></StepLabel>
            </Step>
            <Step>
             <StepLabel></StepLabel>
            </Step>
            <Step>
             <StepLabel></StepLabel>
            </Step>
            <Step>
             <StepLabel></StepLabel>
            </Step>
          </Stepper>
          </div>
          {showStep(first)}
          </header>
    </div>
  );
}

export default App;
