import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";

import Header from './components/Header';
import Home from './components/Home';



function App() {
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
