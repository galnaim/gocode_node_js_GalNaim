import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useContext } from 'react';
// import ProductContext from '../../contexts/ProductContext';
import Cart from '../Cart/Cart';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const { CartArray, removeFromCart, emptyCart } = useContext(ProductContext);

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
<Cart/>
      {/* {CartArray.map((item) => (
        <React.Fragment key={item.id}>
          <div id={item.id} value={item.title}>
            {item.title}
          </div>
          <button
            id={item.id}
            value={item.title}
            onClick={() => removeFromCart(item.id)}
          >
            Remove From Cart{" "}
          </button>
        </React.Fragment>
                  
      ))} */}


      </List>
      {/* <Divider />
      <List>
      <button onClick={() => emptyCart()}>
            Empty Cart
          </button>
       </List> */}
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}>View Your Cart</Button>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}