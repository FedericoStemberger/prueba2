import "./navbar.css";
import { BiCart } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <header  className="container">
      <div className="logo">
        <img src="../../../logo.png" alt="Logo Stemberger"></img>
      </div>
      <nav className="categorias">
        {/* <CartWidget /> */}
        {/* <BiCart /> */}
        <ul>
            <li>Inicio</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
        </ul>
        
      </nav>
    </header>
  )
};

export default Navbar;