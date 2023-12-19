import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SingUp';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/app' element={<HomeScreen/>}/>
    </Routes>
  );
}

export default App;
