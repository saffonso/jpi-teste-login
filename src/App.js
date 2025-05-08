import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/esqueceusenha' element={<EsqueceuSenha/>} />
          <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
