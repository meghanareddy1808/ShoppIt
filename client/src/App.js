import './App.css';
import Header from './components/navbar/Header';
import Home from './components/home/Home';
import DetalView from '../src/components/details/DetailView';
import {Box,styled} from '@mui/material';
import DataProvider from './context/DataProvider';
import Cart from './components/cart/Cart';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>

    <Header/>
    <Box style={{marginTop:54}}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<DetalView/>}/>
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
    
    </Box>
    </BrowserRouter>
    
    
      
    </DataProvider>
  );
}

export default App;
