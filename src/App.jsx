import Home from "./pages/Home";
import './App.css';
import Header from "./components/Header";
import InsertWords from "./pages/InsertWords";

function App() {
    return (
      <div className="App-container">
        <Header/>
        {/* <Home/> */}
        <InsertWords/>
      </div>
    );
  }
  
export default App;