import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/chat";
import SignIn from "./components/sign-in";
import SignOut from "./components/sign-out";

firebase.initializeApp({
  apiKey: "AIzaSyDhvELctEqDmzPI3RjSkSpZ3r4imEbXS4s",
  authDomain: "chateau-41e48.firebaseapp.com",
  projectId: "chateau-41e48",
  storageBucket: "chateau-41e48.appspot.com",
  messagingSenderId: "318389899668",
  appId: "1:318389899668:web:62c06170d4d2ddae7f7f81",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>LET'S HAVE A CHAT!</h1>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? (
          <Chat auth={auth} firestore={firestore} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
