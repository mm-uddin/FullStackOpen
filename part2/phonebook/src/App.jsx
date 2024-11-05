import { useState, useEffect } from 'react'
import axios from "axios"
const App = () => {
  const [persons, setPersons] = useState([{}])

  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = event =>{
    setNewName(event.target.value)
  }

  const handleEvent = (event) => {
    event.preventDefault()
   const newPerson = {
    name: newName,
    number: number,
   }
   const nameExist = persons.some(person => person.name === newPerson.name)

   if (!nameExist){
    setPersons(persons.concat(newPerson))
   } else {
    alert(`${newName} is already added to phonebook`)
   }
   
   
   setNewName('')
   setNumber('')
  }

  const handleNumber = event =>{
    setNumber(event.target.value)
  }

 
  const hook = ()=>{
    axios.get('http://localhost:3001/persons')
    .then(response=> {
      setPersons(response.data)
    })
  }

  useEffect(hook,[])
  return (
    <div>
      <h2>Phonebook</h2>
            
      <form onSubmit={handleEvent}>
        <div>
          name: <input onChange={handleChange} value = {newName}/>
        </div>
        <div>
          number: <input onChange={handleNumber} value = {number}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(person=> <p key={person.name}>{person.name} {person.number}</p>)}

    </div>
  )
}

export default App