import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer  from "./components/HomeAdmin/Drawer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class HomeAdmin extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
            username: '',
            password: '',
            submitted: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.dispatch = useDispatch();
	  }

	handleChange(e) {
		
	}
	
	register = () =>{
		
	}

	handleSubmit(e) {
        
    }

  render(){	
  const { classes } = this.props;
  const { username, password, submitted } = this.state;
  return (
    <div>
		<ResponsiveDrawer></ResponsiveDrawer>			
	</div>
  )};
}

const HomeAdminStyled = withStyles(styles)(HomeAdmin) // fiz isso para adicionar um store do reducer
  
export default HomeAdminStyled;