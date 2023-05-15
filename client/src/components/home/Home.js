import Navbar from './Navbar';
import Banner from './Banner';
import React,  { useEffect } from 'react';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { InputBase,Box,styled, Typography } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';
const Component=styled(Box)`
padding:20px 10px;
background-color:#f1f3f6
`

function Home() {
    const {products}= useSelector(state => state.getProducts);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
    <>
        <Navbar/>
        <Component>

        <Banner/>
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products}title="Trending Offers"timer={false}/>
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Season's Top Picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accesories" timer={false}/>
        </Component>
        
       
    </>
    );
  }

  export default Home;