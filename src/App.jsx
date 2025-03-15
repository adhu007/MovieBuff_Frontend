
import { Route, Routes } from 'react-router-dom';
import "./CSS/App.css"
import HomePage from './Pages/HomePage';
import Favorites from './Pages/Favorites';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddMovie from './Components/AddMovie';
import Footer from './Components/Footer';
import { MovieProvider } from './Contexts/MovieContext';

function App() {

  return (
    <>      
          <MovieProvider>
          <NavBar/>      
          <main className="main-content">
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/addmovie" element={<AddMovie/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            </Routes>
          </main>
          <Footer/>
          </MovieProvider>
    </>
   
  );
}


export default App
