import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './pages/Create';
import Redirect from './pages/Redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Create />} />
        <Route path='/u/:id' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
