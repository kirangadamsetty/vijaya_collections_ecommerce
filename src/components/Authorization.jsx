import { useRef, useState } from "react";
import "../styles/form.css"
import { auth } from "../../firebaseConfig";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import  Button from "react-bootstrap/Button"; // Adjust if you're using a different UI lib
function Authorization() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [newUser , setNewUser] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const handleSubmitForm = (e) => {
    e.preventDefault(); // Prevent actual form submission

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = newUser ? name.current.value : "";

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordValue);
   
    if(newUser  && nameValue === ""){
       setErrorMessage("Please enter your name")
    }
    else if(emailValue === ""){
       setErrorMessage("Please enter your email")
    }else if(passwordValue === ""){
       setErrorMessage("Please enter your Password")
    }
    else if(emailValid === false){
        setErrorMessage("Please enter valid email")
    }else if(passwordValid === false){
        setErrorMessage("Please enter valid password")
    }else {
      if(newUser){
createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  })
       
} 
   else if(!newUser){
signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setErrorMessage("Sucess")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + errorMessage)
  });
   }


    }

  };

  return (
    <Container>
    <Row >
    <Col className  = "m-auto">
    <form onSubmit={handleSubmitForm} className = "form-container bg-body-secondary">
   <h3 className = "my-3">{newUser ? "Signup Form" : "SignIn Form"}</h3>
     {newUser && <input ref={name} type="text" placeholder="Full Name" />}
      <input ref={email} type="text" placeholder="Email" />
      <input ref={password} type="password" placeholder="Password" />
       <p className ="mt-2 error-message">{errorMessage}</p>
      <Button  className="custom-button mb-1" type="submit">Submit</Button>
       <p onClick = {()=>{setNewUser(!newUser);setErrorMessage("")}} className = "form-para">{newUser ? "Existing user?" : "New User?"} <strong >{ newUser ? "SignIn" : "SignUp"}</strong></p>
    </form>
    </Col>
    </Row>
    </Container>
  );
}

export default Authorization;
