import { useState } from 'react'

const Statistics = (props)=>{
  if (props.total === 0){
    return (
      <>
      No Feedback given
      </>
    );
  }
  return (
    <>
     
     <p>good {props.good} </p>
     <p>neutral {props.neutral} </p>
     <p>bad {props.bad} </p>
     <p>all {props.total}</p>
     <p>average {props.average} </p>
     <p>positive {props.positive}%</p>
     </>
  );
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good  * 1 + bad * -1)/total 
  const positive = (good/total) * 100
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good + 1)}>good </button>
      <button onClick={()=>setNeutral(neutral + 1)}>neutral </button>
      <button onClick={()=> setBad(bad + 1)}>bad</button>
      <br />
      <h1>statistics</h1>
      <Statistics
      good = {good} neutral = {neutral} bad = {bad}
      total = {total} average = {average} positive = {positive}
      />

   
    </div>
  )
}

export default App