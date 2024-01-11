import Home from "./pages/Home";
import './App.css';
import Header from "./components/Header";
import WordsForm from "./pages/WordsForm";
import SentenceForm from "./pages/SentenceForm";
import TextForm from "./pages/TextForm";
import Container from "./components/Container";

function App() {
    return (
      <div className="App-container">
        <Header/>
        <Home/>
        {/* <WordsForm/> */}
        {/* <SentenceForm/> */}
        {/* <TextForm/> */}
      </div>
    );
  }
  
export default App;