import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './Styles';
// const products = [
//     { id:'1', name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://underarmour.scene7.com/is/image/Underarmour/3021967-101_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'},
//     { id:'2', name: 'Shoes', description: 'Running Shoes', price: '$15', image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/373101/02/sv01/fnd/IND/fmt/png/Corode-IDP-Men'},
//     { id:'3', name: 'Shoes', description: 'Running Shoes', price: '$10', image: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw501fef3d/images/ProductImages/110324/110324_434_l_WR.jpg?sw=900'}
// ]
const Products = ({products, onAddToCart}) => {
    const   classes = useStyles();
    return (
      <main className={classes.content}>
          <div className={classes.toolbar}></div>
          <Grid container justify="space-evenly"  alignItems="center">
              {products.map(product =>{
                  return <Grid item key={product.id} style={{marginTop: '50px'}}>
                      <Product product={product} onAddToCart={onAddToCart}></Product>
                  </Grid>
              })}
          </Grid>
      </main>
    )
}
export default Products;