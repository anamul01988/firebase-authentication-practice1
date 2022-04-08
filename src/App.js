
import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>{

    signInWithPopup(auth, googleProvider)
  .then((result) => {
     const user = result.user;
     console.log(user)
     setUser(user);  //aita state a pathacci     
  }).catch((error) => {
     console.log(error);
  });

  }
  const handleFacebookSignIn = ()=>{
    signInWithPopup(auth, facebookProvider)
    // console.log(auth, facebookProvider)
    .then(result=> {
      const user = result.user;
      
      console.log(user)
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const handleGithubSignIn = ()=>{
      console.log('git')
      signInWithPopup(auth, githubProvider)
      // console.log(auth, facebookProvider)
      .then(result=> {
        const user = result.user;
        
        console.log(user)
      })
      .catch(error =>{
        console.error(error);
      })
  }
  return (
    <div className="App">
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
        <button onClick={handleGithubSignIn}>Github Sign In</button>
        <h3>Name: {user?.displayName}</h3>
        <img src={user?.photoURL} alt="tyuh" />
        <h4>Gmail: {user?.email}</h4>
    </div>
  );
}

export default App;
