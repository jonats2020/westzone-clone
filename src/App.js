import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";

import Header from './components/Header';
import Home from './components/Home';
import { auth } from "./services/firebase";
import { useStateValue } from "./services/StateProvider";



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log("The user is", authUser);

      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else
      {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <Header />
      <div className="app">
        <Route exact path="/" component={Home} />
      {/* <Body /> */}
      {/* <Footer /> */}
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
