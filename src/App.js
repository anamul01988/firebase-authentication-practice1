
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState();

  const handleGoogleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
     const user = result.user;
     console.log(user)
     setUser(user);  //aita state a pathacci     
  }).catch((error) => {
     console.log(error);
  });

  }
  return (
    <div className="App">
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        <h3>Name: {user?.displayName}</h3>
        <img src={user?.photoURL} alt="tyuh" />
        <h4>Gmail: {user?.email}</h4>
    </div>
  );
}

export default App;
