import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/login';
import Auth from './pages/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
