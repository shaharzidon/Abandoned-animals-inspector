import logo from './logo.svg';
import './App.css';
import ImageS from './components/ImegeS';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/home' element={<ImageS/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
