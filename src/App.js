import { useEffect, useState } from 'react';
import './App.css';
import User from './Coponent/User/User';

function App() {
const[users, setUsers] = useState([ ])
const [ userCount, setUserCount] = useState([ ]);

useEffect( () =>{
  fetch('https://randomuser.me/api/?results=20')
  .then(res =>res.json())
  .then(data =>{
                             setUsers(data.results);
                              console.log (data.results);
    const names =data.results.map(user => user.name);
   // console.log(names);
  })
  .catch(error => window.alert(error))
}, [ ] )

const handleAddUser = (user) => {
console.log("add",user);
const newUser =[...userCount, user];
setUserCount(newUser);
}
  return (
   
    <div className="App">
      
      <h1>User Loaded : {users.length}</h1>
      <div className ="user-information">
      <div className="some-information">
        { 
          users.map(user =><User handleAddUser={handleAddUser} user={user}></User>)
        }
        </div>
        <div className="more-information">
             <h1>Selected User Details</h1>
            <h4>Selected User : {userCount.length}</h4>
            <h4>User image : img{}</h4>
         </div>
         </div>
    </div>
  );
}

export default App;
