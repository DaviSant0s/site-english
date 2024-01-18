import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordsForm from '../pages/WordsForm';
import SentenceForm from '../pages/SentenceForm';
import TextForm from '../pages/TextForm';
import WordPreview from '../pages/WordPreview';
import Home from '../pages/Home';
import Header from '../components/Header';


export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/WordsForm' element={<WordsForm />}/>
                <Route path='/SentenceForm' element={<SentenceForm />}/>
                <Route path='/TextForm' element={<TextForm />}/>
                <Route path='/WordPreview' element={<WordPreview />}/>
                <Route path='/' exact element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}