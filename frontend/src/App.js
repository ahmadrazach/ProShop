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
import ProductScreen from './screens/ProductScreen';
const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <main className="py-3">
      <Container>
      <Routes>
        <Route exact path='/product/:id' element={<ProductScreen/>}/>
        <Route exact path='/' element={<HomeScreen/>} />
        </Routes>
      </Container>
      </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
