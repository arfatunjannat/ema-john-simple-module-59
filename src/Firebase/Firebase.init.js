import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
--------------- Step-1: initial setup
1.firebase: create project
2.create web app
3.get configuration
4.initialize firebase
5.Enable auth method


------------------
Step-2:setup component
1.Create Login Component
2.Create Register Component
3.Create Route for Login and Register 


------------------
Step-3: set auth system
1.set up sign in method 
2.Create Register Component
3.user State
4.special observer
5.return necessary  method and states from useFirebase

-------------------------
Steps-4: create auth context hook | (useAuth)
1.create a auth context
2.create context auth provider
3.set Context provider context value
3.use auth provider
4.create useAuth Hook

----------------------------
Step-5: create private route
1.create private route
2.set private route

-----------------------
Step-6: Redirect after login

1.after login redirect user to their desired destination.
2.

*/