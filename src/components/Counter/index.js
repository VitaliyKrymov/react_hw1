import {useEffect, useState} from "react";

const Counter = () => {
    const [clicks,setClicks]=useState(0);
    const [step,setStep]=useState(1);

    const showValue =  ( ) => {
        setTimeout(()=>{
            alert(clicks);
        },3000)
    }

    useEffect(() => {
        console.log('render:',clicks,step);
        document.title = `Component rendered. Clicked ${clicks} times`;
        setStep((prevValue)=> prevValue +1)
    },[clicks,setStep]);

    useEffect(()=>{
        console.log('step:',step);
    },[step]);

    useEffect(() => {
        document.title = 'Hello, ' + {step};
    }, [step]);
  return (
      <div>
          <div> Counter:{clicks}</div>
          <div> Step:{step}</div>

          <button onClick={()=>setClicks(clicks+step)}> Counter +{step}</button>
          <br/>
          <button onClick={showValue}> Show value</button>
          <br/>
          <input name='step'
                 value={step}
                 onChange={(e)=>setStep(+e.target.value)}
              />;

      </div>
  )
};

export default Counter;