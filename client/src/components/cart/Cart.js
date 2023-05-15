import { useSelector, useDispatch } from 'react-redux';//custom-hook
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { useEffect } from 'react';
import { post } from '../../utils/patym';
import { payUsingPaytm } from '../../service/api';


//compo
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;


const Cart=()=>
{
    const {cartItems}=useSelector(state=>state.cart);
    const { id } = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
    
    return (
        <>
    {

        cartItems.length?
        <Container container>
            <LeftComponent item lg={9} md={9} xs={12}>
                <Header>
                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography> 
                </Header>
                {
                     cartItems.map(item => (
                        <CartItem item={item} />
                    ))
                }
                <BottomWrapper>
                <StyledButton onClick={() => buyNow()} variant="contained">Place Order</StyledButton>
                    </BottomWrapper>
                

            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems={cartItems}/>
            </Grid>


        </Container>:
        <EmptyCart/>
    }

        </>

    )
}
export default Cart;