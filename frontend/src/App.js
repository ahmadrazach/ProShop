import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <main className="py-3">
      <Container>
        <Routes>
         
        <Route path='/' element={<HomeScreen/>} exact/>
       
        </Routes>
        
      </Container>
      </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
