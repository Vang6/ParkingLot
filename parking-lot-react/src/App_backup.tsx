import {useState, useEffect} from 'react';
import './App.css';
import { Testpage } from './pages';
import {db} from "./firebase/init"
import {collection, getDocs, addDoc} from "firebase/firestore"

function App() {
  const [newName, setNewName]= useState("")
  const [newAge, setNewAge]= useState(0)
  const [users, setUsers]= useState([])
  const userCollectionsRef= collection(db, "users")
  const dictionaryCollectionsRef= collection(db, "dictionary.carmodels")
  
  const createUser= async () => {
    await addDoc(userCollectionsRef, {name: newName, age:newAge})
  }
  /*"name": "Fortuner",
        "brand": "Toyota",
        "type": "SUV",
        "description": "ABC",
        "ev": false*/ 
  const createCarModels= async () => {
    await addDoc(dictionaryCollectionsRef, {name: newName, age:newAge})
  }
  useEffect(()=>{
    const getUsers=async() => {
      const data = await getDocs(userCollectionsRef)
      //console.log(data);
      data.forEach((doc)=>{
        console.log(doc.data());
      })
      //setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc, id})))
    }
    getUsers()
  }, [])
  return <div className="App">
    <input placeholder="Name..." 
    onChange={(event) => {
      setNewName(event.target.value)
      }} />
    <input type="number" placeholder="Age..." 
    onChange={(event) => {
      setNewAge(+event.target.value)
      }}
       />
    <button onClick={createUser}>Create User</button>
    <button onClick={createCarModels}>Create Car Models</button>
    <h1>Test</h1>
  </div>
}

export default App;
