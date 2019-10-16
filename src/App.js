import React, {useState} from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import DisplayMembers from './components/DisplayMembers';

function App() {

  const [members, setMembers] = useState([]);


  const addMember = member =>{
    setMembers(members => [...members, member]);
  };


  return (
    <div className="App">
      <h2>
        Team Members Form
      </h2>
      <RegistrationForm addMember={addMember}/>
      <div className="team-members"><DisplayMembers members={members}/></div>
    </div>
  );
}

export default App;
