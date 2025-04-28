import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/login';
import Auth from './pages/auth';
import EsqueceuSenha from './pages/esqueceuSenha';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Auth/>}/>
          <Route path='/esqueceusenha' element={<EsqueceuSenha/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
