import './App.css';
import Home from './components/Home';
import ViewCalcular from './components/ViewCalculate';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
   return (
      <div>  
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element={<ViewCalcular/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
