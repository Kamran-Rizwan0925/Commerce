import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../assets/logo.png';
import useStyles from './Styles';
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}></img>
                        Commerce
                    </Typography>
                    <div className={classes.grow}></div>
                    {  location.pathname === '/' && (
                        <div className={classes.button}>
                        
                        <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color='s'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCartIcon style={{color: 'white'}}></ShoppingCartIcon>
                            </Badge>
                        </IconButton>
                    
                        
                    </div> )
                }
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
