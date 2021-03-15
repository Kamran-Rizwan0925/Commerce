import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 200,
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price:{
    backgroundColor: 'red',
    color: 'white',
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '2px 4px'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));