import {  Grid, styled,Box } from '@mui/material';
import {imageUrl} from '../../constants/data';

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    
`;
const Image=styled('img')(({theme})=>({
    display: 'flex',
    marginTop: 20,
    width: '100%',
    [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:'120px'
    
    }


}));



const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
        
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    imageUrl.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} style={{ width: '100%' }} />
                    </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} />
            </>
            
        
    )
}

export default MidSection;
