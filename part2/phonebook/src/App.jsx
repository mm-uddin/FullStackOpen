import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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