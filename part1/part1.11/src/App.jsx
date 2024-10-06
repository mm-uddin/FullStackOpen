import { useState } from 'react'

const StatisticLine = (props) =>{
  return (
    <>
    <tr>
    <td> {props.text} </td> <td> {props.value} {props.symbol} </td>
    </tr>
    </>
  );
}

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
    <table>
    <tbody>
     <StatisticLine text = "good" value = {props.good}/>
     <StatisticLine text = "neutral" value = {props.neutral}/>
     <StatisticLine text = "bad" value = {props.bad}/>
     <StatisticLine text = "total" value = {props.total}/>
     <StatisticLine text = "average" value = {props.average}/>
     <StatisticLine text = "positive" value = {props.positive} symbol='%' />
     </tbody>
     </table>
    </>
  );
}

const Button = (props) => {
  return (

    <>
    <button onClick={props.onClick}> {props.text} </button>
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
  const setToGood = ()=>setGood(good + 1)
  const setToNeutral = ()=>setNeutral(neutral + 1)
  const setToBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {setToGood} text = "good"></Button>
      <Button onClick = {setToNeutral} text = "neutral"></Button>
      <Button onClick = {setToBad} text = "bad"></Button>
      <br/>
      <h1>statistics</h1>
      <Statistics
      good = {good} neutral = {neutral} bad = {bad}
      total = {total} average = {average} positive = {positive}
      />

   
    </div>
  )
}

export default App