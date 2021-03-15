import React, {useState, useEffect} from 'react'
import {CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import {Link, useHistory } from 'react-router-dom';
import makeStyles from './Styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];
const Checkout = ({ cart, order, onCaptureCheckout,error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = makeStyles();
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const history = useHistory();
    const timeout = ()=>{
        setTimeout(()=>{
                setIsFinished(true);
        }, 3000);
    }
    let Confirmation = () => order.customer ? (
      <>
           <div>
               <Typography variant='h5'>Thank you for your purchase.{order.customer.firstname}{order.customer.lastname}</Typography>
               <Divider className={classes.divider}></Divider>
               <Typography variant='subtitle2'>Order ref: {order.customer_reference} </Typography>
               <br></br>
               <Button variant='outlined' type='button' component={Link} to="/">Back To Home</Button>
           </div>
        </>
    ): isFinished ? (
        <>
        <div>
            <Typography variant='h5'>Thank you for your purchase.</Typography>
            <Divider className={classes.divider}></Divider>
            
            <br></br>
            <Button variant='outlined' type='button' component={Link} to="/">Back To Home</Button>
        </div>
     </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress></CircularProgress>
        </div>
    );

    if(error){
        <>
            <Typography variant='h5'>Error: {error}</Typography>
            <hr/>
            <Button variant='outlined' type='button' component={Link} to="/">Back To Home</Button>
        </>
    }
    useEffect(()=>{
        const generateToken = async () =>{
            try {
                console.log(cart);
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
                console.log(token);
                setCheckoutToken(token);
            } catch (error) {
                history.pushState('/');
            }
            
        }
        generateToken();
    }, [cart]);
    const [shippingData, setShippingData] = useState({});

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const Form = ()=> {
       return activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> : 
       <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} 
       onCaptureCheckout={onCaptureCheckout} nextStep={nextStep}
       backStep={backStep} timeout={timeout} />
    //    return <AddressForm checkoutToken={checkoutToken}/> 
    }
   
    const next = (data)=>{
        setShippingData(data);
        nextStep();
    }
    return (
        <>
            <CssBaseline></CssBaseline>
            <div className={classes.toolbar}></div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(step =>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    
                    { 
                        activeStep === steps.length ? 
                        <Confirmation/> : checkoutToken && <Form/>
                    }
                </Paper>
            </main>
        </>
    )
}

export default Checkout;
