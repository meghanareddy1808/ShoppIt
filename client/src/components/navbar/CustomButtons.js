import {useState,useContext} from 'react';
import { Button ,Box,styled, Typography,Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import {DataContext} from '../../context/DataProvider';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        fontSize: 12,
        alignItems: 'center',
        
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration:'none',
    color:'inherit',

    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const LoginButton=styled(Button)`
  color:#2874f0;
  background:#FFFFFF;
  text-transform:none;
  padding:5px 40px;
  margin-left:10px;
  border-radius:2px;
  box-shadow:none;
  font-weight:600;
  height:32px;

`
   




const CustomButtoms=()=>
{
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart);
    const openDialog=()=>{

        setOpen(true);
    }

    return(
        <Wrapper>
             {
                account ? <Profile account={account} setAccount={setAccount} /> :
                 
                
            
            <LoginButton variant="contained" onClick={()=>openDialog()}> Login</LoginButton>
             }
<Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
<Typography style={{marginTop:3}}>More</Typography>
<Container to="/cart">
    <Badge badgeContent={cartItems?.length} color="secondary">
    <ShoppingCartIcon/>
    </Badge>

    <Typography style={{ marginLeft: 10 }}>Cart</Typography>

</Container>
<LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButtoms;
