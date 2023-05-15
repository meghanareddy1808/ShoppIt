import {useEffect,useState} from 'react';
import { styled, Box, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom'; //to get anything from url
import {getProductDetails} from '../../redux/actions/productActions';
import { getProductById } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';
const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;
const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))
const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;





const DetailView=()=>
{
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);
    
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id, loading]);
    console.log(product)

    return(
        <Component>
            
            { product && Object.keys(product).length &&
            <Container container>
                <Grid item ={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                   
                        <ProductDetail product={product}/>
                </RightContainer>
            </Container>

            }
        
          
        </Component>
    )
}

export default DetailView;