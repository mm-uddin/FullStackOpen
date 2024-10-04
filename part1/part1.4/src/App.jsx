import React from 'react'

const Header = (props) => {
  return (
    <h1> {props.course} </h1>
  )
}


// Content

const Content = (props)=> {
 
  return (
  <> 
  <p> {props.part1} {props.exercises1}</p>
  <p> {props.part2} {props.exercises2}</p>
  <p> {props.part3} {props.exercises3}</p>
  
  </>
  );
}



//Total
const Total = (props)=>{
  return (
    <>
    <p>Total number of exercises: {props.total}</p>
    </>
  );
}


// App
const App = () =>{
  
  const course = 'Half Stack application development'
  const parts = [ 
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }

]
  
  return (
    <>
    <Header course = {course}/>

    <Content 
    part1 = {parts[0].name} exercises1 = {parts[0].exercises}
    part2 = {parts[1].name} exercises2 = {parts[1].exercises}
    part3 = {parts[2].name} exercises3 = {parts[2].exercises}
       
    />

    <Total total = {parts[0].exercises +parts[1].exercises + parts[2].exercises} />
    </>
  );
}

export default App