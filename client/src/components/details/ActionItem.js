import {useState} from 'react';
import { styled, Box, Typography, Grid,Button } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/cartActions';
import {post} from '../../utils/patym';
import {payUsingPaytm} from '../../service/api';
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
const Image=styled('img')(
    {
       width:'95%',
        padding:'15px'
    }
)
const StyledButton = styled(Button)(({theme})=>({
    width: '47%',
    borderRadius: 2,
    height: 50,
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    
        [theme.breakpoints.down('sm')]:{
            width:'48'
        }
    



}))
   


const ActionItem=({product})=>{
    //routing on clicking
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(1);
    const {id} =product;
    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');

    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'abc@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
    
    return (
        <LeftContainer>
            <Box style={{padding:'15px 20px',
        border:'1px solid #f0f0f0', width:'88%',}}>
            <Image src={product.detailUrl}/><br/>
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemToCart()}style={{marginRight: 10, background: '#ff9f00'}}><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        
        </LeftContainer>
    )
}
export default ActionItem;