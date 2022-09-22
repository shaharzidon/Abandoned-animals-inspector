import './App.css';
import SignInSide from './pages/signInSide/SignInSide';
import Home from './pages/home/Home';
import {Routes,Route} from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<SignInSide/>} />
      <Route path='Home' element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
