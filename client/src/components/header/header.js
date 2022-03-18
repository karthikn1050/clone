import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Logo from './logoo.png'
import AuthService from '../../services/auth.service';
import EventBus from '../../common/EventBus';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import ApartmentIcon from '@mui/icons-material/Apartment';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
  render() {
    const currentUser = this.state.currentUser
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#00394d"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src={Logo} alt="Dhvani AI" style={{width:"100px", height:"40px"}}/>
          </IconButton>
          
          <Typography  sx={{ flexGrow: 1 }}></Typography>
          <Button  startIcon={<HomeIcon />} variant="h6" component="div"  style ={{marginRight:"20px"}} >
           Home
          </Button>
         {/*  <Button variant="h6" startIcon={<CallIcon />} component="div" style ={{marginRight:"20px"}} >
           Contact 
          </Button>
          <Button variant="h6" startIcon={<ApartmentIcon />} component="div"  style ={{marginRight:"15px"}} >
            About 
          </Button> */}

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              
              <li className="nav-item">
             
                <Button color="inherit" href='/login'style={{borderColor:"white",backgroundColor:"red"}} onClick={this.logOut}>Logout</Button>
                 
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
              <Button color="inherit" href='/'style={{borderColor:"white",backgroundColor:"green"}}>Login</Button>
              </li>

             
            </div>
          )}
         
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}
}