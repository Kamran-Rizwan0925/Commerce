import React, {useState , useEffect} from 'react';
import { commerce } from './lib/commerce';
import {Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const fetchProducts = async ()=>{
        const {data} = await commerce.products.list();
        // console.log(data);
        let prods = data.map(prod=>{
            return{
                id: prod.id,
                name: prod.name,
                price: prod.price.raw,
                description: prod.description.p, 
                image: prod.media.source
            }
        });
        setProducts(prods);

    }
    const fetchCart = async ()=>{
        const fetchCart = await commerce.cart.retrieve();
        
        setCart(fetchCart);
    }

    const handleAddToCart = async (productId, quantity)=>{
        const { cart} = await commerce.cart.add(productId,quantity);
        // console.log(cart);
        setCart(cart);
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();    
    },[]);

    const handleUpdateCartQty = async (productId, quantity) =>{
        const { cart } = await commerce.cart.update(productId, { quantity});
        setCart(cart);
    }
    const handleRemoveFromCart = async (productId) =>{
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }
    const handleEmptyCart = async (productId, quantity) =>{
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }
    const refreshCart = async ()=>{
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) =>{
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
             setErrorMessage(error.data.error.message)
        }
    }
    return (
        <Router>
            <div>   
                <Navbar totalItems = {cart.total_items}></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}></Products>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        ></Cart>
                    </Route>
                    <Route exact path="/checkout">
                       <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout}
                       error={errorMessage}></Checkout>

                    </Route>
                    
                </Switch>
                
            </div>
        </Router>
        
    )
}
export default App;