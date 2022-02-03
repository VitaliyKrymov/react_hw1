import {useState} from "react";

const Counter = () => {
    const [clicks,setClicks]=useState(0);
    const [step,setStep]=useState(1);

    const showValue=()=>{
        setTimeout(()=>{
            alert(clicks);
        },3000)
    }

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
              />console.log(e);

      </div>
  )
};

export default Counter;