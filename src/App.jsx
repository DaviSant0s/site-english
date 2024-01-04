import Home from "./pages/Home";
import './App.css';
import Header from "./components/Header";
import WordsForm from "./pages/WordsForm";

function App() {
    return (
      <div className="App-container">
        <Header/>
        {/* <Home/> */}
        <WordsForm/>
      </div>
    );
  }
  
export default App;