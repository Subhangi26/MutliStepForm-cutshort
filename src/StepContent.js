import React, {useState} from 'react';
import App from './App';

export const multiStepContext = React.createContext();
const StepContent = ()=>{
    const[first,setFirst] = useState(1);

    return(
        <div>
            <multiStepContext.Provider value={{first,setFirst}}>
                <App/>
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContent;