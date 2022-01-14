import {useState, useEffect} from "react";
import {db} from "./firebase-config/firebase-config";
import {collection,getDocs, addDoc,updateDoc,doc} from "@firebase/firestore";

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [test,setTest] = useState([]);
  const testCollectionRef = collection(db, "test")

  const createUser =async () => {
    await addDoc(testCollectionRef,{name: newName,age: Number(newAge)});
  }
  const updateAge = async (id, age) => {
    const testDoc = doc(db,"test",id)
    const newAge = {
      age: age+1
    }
    console.log(newAge);
    await updateDoc(testDoc,newAge)
  }
  useEffect(() => {
    
    const getTest = async () => {
      const data = await getDocs(testCollectionRef);
      setTest(data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })))
    }
    getTest();
  }, [testCollectionRef])
  return (
    <div>
      <input type="text" onChange={event => {setNewName(event.target.value)}}/>
      <input type="number" onChange={event => {setNewAge(Number(event.target.value))}}/>
      <button onClick={createUser}>add </button>
      {test.map(test => {
        return <div>
          <h1>Name: {test.name}</h1>
          <h1>Age: {test.age}</h1>
          <button onClick={() => updateAge(test.id,test.age)}> Increase age</button>
        </div>
      })}
    </div>
  );
}

export default App;
