import './App.css';
// import PetCards from './components/cards/PetCards';
import SignInSide from './pages/signInSide/SignInSide';
import Home from './pages/home/Home';
import BasicModal from './components/BasicModal/BasicModal';


function App() {
  return (
    <div className="App">
      <SignInSide></SignInSide>
      <Home></Home>
    </div>
  );
}

export default App;
