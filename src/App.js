import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import EsqueceuSenha from './pages/esqueceusenha/esqueceuSenha';
import Dashboard from './pages/dashboard';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/esqueceusenha' element={<EsqueceuSenha/>} />
          <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
