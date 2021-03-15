import React from 'react'
import {Container, Grid, Typography, Button} from '@material-ui/core';
import useStyles from './Styles';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';
const Cart = ({ cart , handleEmptyCart,handleRemoveFromCart,handleUpdateCartQty  }) => {
    console.log(cart);
    
    const classes = useStyles();
    const EmptyCart = ()=>{
        return (
            <Typography  variant="subtitle1" style={{marginTop: '20px'}}>You have no items in your shopping cart.
            <Link to="/" className={classes.link}><u>Start adding some!</u></Link></Typography>
        )
    }
    const FilledCart = () =>{
        return (
        <>
            <Grid container spacing={5} style={{padding: '20px 0'}}>
                 { cart.line_items.map(item => (
                     <Grid item xs={12} sm={3} key={item.id}>
                         <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}></CartItem>
                     </Grid>
                 ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant='h5'>
                        Total Amount: <b>{ cart.subtotal.formatted_with_symbol}</b> 
                    </Typography>
                    <div>
                        <Button onClick={handleEmptyCart} className={classes.emptyButton} size="medium" type="button" variant="contained" color="secondary">Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="medium" type="button" variant="contained" color="secondary">Checkout</Button>
                    </div>
            </div>
        </>);
    }
    if(!cart.line_items)
        return (<h1>Loading...</h1>);
    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography className={classes.title} variant="h4" gutterBottom >Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart></EmptyCart> : <FilledCart></FilledCart>}
        </Container>
    )
}

export default Cart
