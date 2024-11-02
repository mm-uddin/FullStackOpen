
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

export default Course