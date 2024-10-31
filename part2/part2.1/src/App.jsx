const Header = (props) => {

  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props)=> {
  return (
    <>
    <p> {props.part} {props.exercise} </p>
    </>
  )
}

const Content = (props)=>{

  return (
    <>
    <Part part = {props.part1} exercise ={props.exercise1} />
    <Part part = {props.part2} exercise ={props.exercise2} />
    <Part part = {props.part3} exercise ={props.exercise3} />
    
    </>
  )
}

const Total = (props)=> {
  return (

    <>
    <p>Number of exercises { props.sumOfExercises} </p>
    </>
  )
}
const Course = ({course})=>{
  return(
    <>
    <Header course = {course.name}/>
    <Content
    part1 = {course.parts[0].name} exercise1 = {course.parts[0].exercises}
    part2 = {course.parts[1].name} exercise2 = {course.parts[1].exercises}
    part3 = {course.parts[0].name} exercise3 = {course.parts[2].exercises} 
    />   
    </>
  )
}
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//       <Header course = {course.name}/>
//       <Content
//         part1 = {course.parts[0].name} exercise1 = {course.parts[0].exercises}
//         part2 = {course.parts[1].name} exercise2 = {course.parts[1].exercises}     
//         part3 = {course.parts[0].name} exercise3 = {course.parts[2].exercises}     

//        />
      
//       <Total
//         sumOfExercises = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
//       />
      
//     </div>
//   )
// }

// export default App

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
