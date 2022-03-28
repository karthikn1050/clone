import React from "react";
import {  BrowserRouter } from "react-router-dom";
import AuthService from '../../src/services/auth.service'
import '../App.css'
import EventBus from '.././common/EventBus'
class SideBar extends React.Component {
  constructor(props) {
    super(props);
  this.state = { active: !this.props.open || true };
  this.logOut = this.logOut.bind(this);
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

  render = () => {
    const {  showAdminBoard } = this.state;

    return (
      <nav id="sidebar" style={{backgroundColor:"#00394d",color:"white"}}>
        <div class="sidebar-header" style={{backgroundColor:"#00394d"}}>
          <h3><a href="/">Dashboard</a></h3>
        </div>
            <BrowserRouter>
            <div>
        <ul class="list-unstyled components">
        
          <li class="">
            <a
              href="/new"
              data-toggle="collapse"
              aria-expanded="false"
              
            >
              ADR
            </a>
            
          </li>
        </ul>
        <ul class="list-unstyled components">
        
          <li class="">
            <a
              href="https://appstream2.ap-southeast-1.aws.amazon.com/authenticate?parameters=eyJ0eXBlIjoiRU5EX1VTRVIiLCJleHBpcmVzIjoiMTY0ODIxODAyNyIsImF3c0FjY291bnRJZCI6IjAzNjc2MTIyNDgwMiIsInVzZXJJZCI6IlJhZ2h1IiwiY2F0YWxvZ1NvdXJjZSI6InN0YWNrL1NpbXhyYXlTdGFjayIsImZsZWV0UmVmIjoiZmxlZXQvU2lteHJheWZsZWV0IiwiYXBwbGljYXRpb25JZCI6IiIsInVzZXJDb250ZXh0IjoiIiwibWF4VXNlckR1cmF0aW9uSW5TZWNzIjoiNTc2MDAifQ%3D%3D&signature=%2B68ZUuurARJn789Z9He6W6HYRrTF69vlyu0Jd8ILodM%3D"
              data-toggle="collapse"
              aria-expanded="false"
              // target="_blank"
            >
             SimSonic
            </a>
            
          </li>
        </ul>
        <ul class="list-unstyled components">
        
        <li class="">
          <a
            href="https://appstream2.ap-southeast-1.aws.amazon.com/authenticate?parameters=eyJ0eXBlIjoiRU5EX1VTRVIiLCJleHBpcmVzIjoiMTY0ODIxODAyNyIsImF3c0FjY291bnRJZCI6IjAzNjc2MTIyNDgwMiIsInVzZXJJZCI6IlJhZ2h1IiwiY2F0YWxvZ1NvdXJjZSI6InN0YWNrL1NpbXhyYXlTdGFjayIsImZsZWV0UmVmIjoiZmxlZXQvU2lteHJheWZsZWV0IiwiYXBwbGljYXRpb25JZCI6IiIsInVzZXJDb250ZXh0IjoiIiwibWF4VXNlckR1cmF0aW9uSW5TZWNzIjoiNTc2MDAifQ%3D%3D&signature=%2B68ZUuurARJn789Z9He6W6HYRrTF69vlyu0Jd8ILodM%3D"
            data-toggle="collapse"
            aria-expanded="false"
            // target="_blank"
          >
          SimXRay
          </a>
          
        </li>
      </ul>
      <ul class="list-unstyled components">
        
        <li class="">
          <a
            href="https://appstream2.ap-southeast-1.aws.amazon.com/authenticate?parameters=eyJ0eXBlIjoiRU5EX1VTRVIiLCJleHBpcmVzIjoiMTY0ODIxOTQxMSIsImF3c0FjY291bnRJZCI6IjAzNjc2MTIyNDgwMiIsInVzZXJJZCI6IlJhZ2h1cGF0aHkiLCJjYXRhbG9nU291cmNlIjoic3RhY2svR1ROb3RlU3RhY2siLCJmbGVldFJlZiI6ImZsZWV0L0RodmFuaUdUTm90ZWZsZWV0IiwiYXBwbGljYXRpb25JZCI6IiIsInVzZXJDb250ZXh0IjoiIiwibWF4VXNlckR1cmF0aW9uSW5TZWNzIjoiNTc2MDAifQ%3D%3D&signature=fsz6%2F2PSQtLPdLwRiYJiJKfg6%2Fx82CTNCQymlbbskhY%3D"
            data-toggle="collapse"
            aria-expanded="false"
            // target="_blank"
          >
         Dhvani GTNote
          </a>
          
        </li>
      </ul>
        {showAdminBoard && (
        <ul class="list-unstyled components">
        
          <li class="">
            <a
              href="/user-management"
              data-toggle="collapse"
              aria-expanded="false"
              
            >
             User Management
            </a>
            
          </li>
        </ul>
        )}
       {/*  <ul class="list-unstyled components">
        
        <li class="">
          <a
            href="/"
            data-toggle="collapse"
            aria-expanded="false"
            onClick={this.logOut}
          >
          Logout
          </a>
          
        </li>
      </ul> */}
        
        </div>
        
        </BrowserRouter>
      </nav>
    );
  };
}

export default SideBar;
