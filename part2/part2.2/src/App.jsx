
const Header = ({name})=> {
  return(
    <>
    <h1>{name} </h1>
    </>
  )
}


const Part = ({name, exercises})=> {
  return (
<>
    {name} {exercises}
  
    </>
  )
}

const Content = ({parts})=> {
  return (
    <>
    {
      parts.map(part => <p key = {part.id}> {part.name} {part.exercises} </p>)
    }
    </>
  )
}

const Total = ({parts})=>{
  return (
    <>
    <p>
      <strong>total of </strong>
 {
    parts.reduce((accumulator,currentValue)=> {
     
     return accumulator + currentValue.exercises

    }, 0)
}

<strong> exercises</strong>
    </p>
    </>
  )
}

const Course = ({course})=>{
  return (
    <>
   
   <Header name = {course.name}/>
   <Content parts = {course.parts}/>
   <Total parts = {course.parts}/>

    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return courses.map(course=> < Course key = {course.id} course = {course}/>)
}

export default App
