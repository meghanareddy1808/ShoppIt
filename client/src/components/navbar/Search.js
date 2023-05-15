import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts} from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
const Searchcontainer=styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;

`
const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
display:flex;


`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
function Search() {
  const [ text, setText ] = useState('');
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }
    const {products} = useSelector(state => state.getProducts);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
    
      <Searchcontainer>
      <InputSearchBase
      placeholder='Search for products,brands and more'
      onChange={(e)=>getText(e.target.value)}
      value={text}
      />
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      {
        text && 
        <ListWrapper hidden={open}>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link 
                  to={`/product/${product.id}`} 
                  style={{ textDecoration:'none', color:'inherit'}}
                  onClick={() => setText=('')}  
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }  
        </ListWrapper>
      }
      </Searchcontainer>
      
        
      
    );
  }
  
  export default Search;