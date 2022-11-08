import React from 'react';
import "./Navbar.css";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import {Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"





const toggleHeaderVisibility = () => {
    document.getElementById('header-links').classList.toggle('show')
}

function changeHeaderOnScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) document.querySelector('header').style.padding = '10px 0'
        else if (window.scrollY < 100) document.querySelector('header').style.padding = '20px 0';
    })
}

const Navbar = () => {
  

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="sticky" sx={{
                background: 'white', boxShadow: 'initial',
                maxHeight: '200px', overflow: 'hidden', transition: '500ms ease'
            }} onLoad={changeHeaderOnScroll}>
                <Toolbar sx={{
                    width: '100%', maxWidth: '1400px', margin: 'auto',
                }}>

            <Box id="header-location">
                <p> located upperhill <p>behind Kenya National library </p><p>on chyulu road</p>Nariobi</p>
                 <a href="https://googlemaps.com">
                      <FontAwesomeIcon icon={faLocationDot} className="location" />
                 </a>
            </Box>
                    <NavLink to="/">
                        <Box id='header-logo'>
                            <Box component="img" src="/images/logo.jpg" sx={{ width: '200px' }} />
                            {/* <img src="/images/logo.jpg" alt="" style={{ width: '100%',height:'50px' }} /> */}
                        </Box>
                    </NavLink>
                    <Box id="header-menu-toggler">
                        <IconButton size="large" edge="start"
                            aria-label="open drawer"
                            onClick={toggleHeaderVisibility}>
                            <MenuIcon color="primary" />
                        </IconButton>
                    </Box>
                    <Box noWrap id="header-links" >
                        <NavLink to="/" exact
                            activeClassName="active"
                            onClick={toggleHeaderVisibility}>
                            <Typography variant="h6">Home</Typography>
                        </NavLink>
                        <NavLink to="/cars" activeClassName="active"
                            onClick={toggleHeaderVisibility}>
                            <Typography variant="h6">Explore</Typography>
                        </NavLink>
                        <NavLink to="/about" activeClassName="active"
                            onClick={toggleHeaderVisibility}>
                            <Typography variant="h6">About</Typography>
                        </NavLink>
                        <NavLink to="/contact" activeClassName="active"
                            onClick={toggleHeaderVisibility}>
                            <Typography variant="h6">Contact</Typography>
                        </NavLink>
                        
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    sx={{ padding: '5px', margin: 0 }}
                                >
                                    
                                        <Box sx={{ width: '30px', height: '30px', background: '#ff000055', borderRadius: '50%', overflow: 'hidden' }}>
                                            <img src='https' alt="" style={{ width: '100%' }} />
                                        </Box>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}>
                                    <NavLink to="/profile" style={{
                                        textDecoration: 'none', color: 'inherit'
                                    }} >
                                        <MenuItem sx={{ px: 4 }}
                                            onClick={() => { handleClose(); toggleHeaderVisibility() }}
                                        >Profile
                                        </MenuItem>
                                    </NavLink>
                                    
                                </Menu>
                            </div>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;