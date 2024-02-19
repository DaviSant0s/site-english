import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordsForm from '../pages/WordsForm';
import SentenceForm from '../pages/SentenceForm';
import TextForm from '../pages/TextForm';
import WordPreview from '../pages/WordPreview';
import Home from '../pages/Home';
import Header from '../components/Header';
import Words from '../pages/Words';
import Texts from '../pages/Texts';
import Sentences from '../pages/Sentences';
import TextPreview from '../pages/TextPreview';


export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/wordsForm' element={<WordsForm />}/>
                <Route path='/sentenceForm' element={<SentenceForm />}/>
                <Route path='/textForm' element={<TextForm />}/>
                <Route path='/words' element={<Words/>}/>
                <Route path='/sentences' element={<Sentences/>}/>
                <Route path='/texts' element={<Texts/>}/>
                <Route path='/textPreview' element={<TextPreview/>}/>
                <Route path='/wordPreview' element={<WordPreview />}/>
                <Route path='/' exact element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}