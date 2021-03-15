import React from 'react'
import {Card, CardMedia,CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './Styles';
const Product = ({ product,onAddToCart }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} >
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h6' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h6' className={classes.price}
                    >
                        {'Rs '+ product.price + '/-'}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML = {{__html: product.description }} variant='body2' className={classes.description}/>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)} >
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </IconButton>
            </CardActions>
            </CardMedia>
        </Card>
    )
}

export default Product;
