import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    backgroundColor: '#f2f2f2',
    padding: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));