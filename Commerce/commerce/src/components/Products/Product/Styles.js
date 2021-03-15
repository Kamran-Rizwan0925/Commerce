import {makeStyles} from '@material-ui/core/styles'; 
import zIndex from '@material-ui/core/styles/zIndex';

export default makeStyles(()=>(
    {
        root:{
            // maxWidth: '100%',
            width:'300px',
            height: '300px',
        }, 
        media: {
            backgroundPosition: '50% 70%' 
        },
        CardContent: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between'
        },
        CardActions: {
            paddingTop: '58%',
            display: "flex",
            justifyContent: 'flex-end' 
        },
        price:{
            color: 'white',
            backgroundColor: 'red',
            position: 'absolute',
            right: -60,
            top:-10,
            boxSizing: 'border-box',
            height: '50px',
            width: '170px',
            textAlign: 'center',
            padding: '15px 10px 0px 20px',
            transform: 'rotate(45deg)'
        },
        description:{
            color: 'black',
            display: 'none'
        }
    }
));