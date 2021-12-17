import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import SideBar from "./components/Sidebar";
import PrivateRoute from './components/usermanagement/private';
//import Apps from './components/login'
//import Inference from './components/inference';
import New from './components/new'
import adminboard from './components/usermanagement/dashboard.js';
import Login from './components/usermanagement/login.component';
import profile from './components/usermanagement/profile.component'
import Admin from './components/usermanagement/board-admin.component'
import user from './components/usermanagement/board-user.component'
import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";
class App extends Component {
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
    return (
      <>
       <BrowserRouter>
       
        
        </BrowserRouter>
      <div className="App">
       
             <Router>
        <div className="wrapper">
        
          <SideBar  />
    
            <Route exact path="/home" component={Home} />
          
      
          <Route exact path="/" component={Login} />
        
       
       <PrivateRoute exact path="/user-management" component={adminboard} />
       <Route exact path="/profile" component={profile} />
      {/*  <Route exact path="/login" component={Apps} /> */}
       <Route exact path="/admin" component={Admin} />
       <Route exact path="/user" component={user} />
     
       <PrivateRoute path="/new" component ={New} />
     
       
      {/*  <PrivateRoute path="/homes" component={Home}/> */}
          
 
        </div>
      </Router>
      </div>
      </>
    );
  }
}

export default App;
