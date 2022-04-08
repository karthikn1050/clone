import React from 'react';
import Admin from './register.component'
import 'bootstrap'
import axios from 'axios';
//import { Button } from 'react-bootstrap';
import AuthService from '../../services/auth.service';
import Appstream from './appstream';
import Stack from './stackassign';
import UserCreation from './UserCreation';
export default class User extends React.Component {
  constructor(){
    super();
    this.state = {
      userlist:[],
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      appstream:[]
    }
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
    axios.get('http://localhost:5001/userlist')
        .then(response => this.setState({ userlist: response.data }));
        axios.get('http://localhost:5001/getappstreamuser')
        .then(response => this.setState({ appstream: response.data }));
   
  }

  deleteRow(id, e){
    axios.delete(`http://localhost:5001/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const userlist = this.state.userlist.filter(item => item.id !== id);
        this.setState({ userlist });
      })
  
  }

  deleteAppsRow(id, e){
    axios.delete(`http://localhost:5001/appdelete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const appstream = this.state.appstream.filter(item => item.username !== id);
        this.setState({ appstream });
      })

      axios.delete(`http://localhost:5001/del/${id}`)
      .then(res => {
        console.log(res);
        alert(res.data);
  
      })

  }
  
    render() {
      const userlist= this.state.userlist;
      const {  showAdminBoard } = this.state;
      const currentUser = this.state
      return (
      <>
       {showAdminBoard && (
      <div className="col-10" style={{marginTop:"5%"}} >
       
        <h2 style={{marginRight:""}}>ADR Users</h2>
        <UserCreation />
         {/*  <Admin />
          <Appstream />
          <Stack /> */}
          {/*<Button href="/login" style={{marginLeft:"60%",marginTop:"10px"}}>User Login</Button>*/}
          <table class="table" style={{marginTop:"3%" , width:"80%",marginLeft:"120px"}}>
  <thead class="thead-light" >
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
     {/*  <th scope="col">Role</th> */}
      <th scope="col">CreatedAt</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {userlist.map(table => ( 
    <tr>
      <th scope="row">{table.id}</th>
      <td>{table.username}</td>
      <td>{table.email}</td>
      {/* <td>User</td> */}
      <td>{table.createdAt}</td>
      <td>  
     <button className="btn btn-danger" onClick={(e) => this.deleteRow(table.id, e)}>Delete</button>  
          </td> 
    </tr>
  ))}
    
    
  </tbody>
</table>
<h2 style={{marginLeft:"10px"}}>Appstream Users</h2>
<table class="table" style={{marginTop:"3%" , width:"80%",marginLeft:"120px"}}>
  <thead class="thead-light" >
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">App Allocated</th>
      <th scope="col">CreatedAt</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {this.state.appstream.map(table => ( 
    <tr>
      <th scope="row">{table.id}</th>
      <td>{table.username}</td>
      <td>{table.AppName.replace(/^"(.+(?="$))"$/, '$1')}</td>
      <td>{table.createdAt}</td>
      <td>  
     <button className="btn btn-danger" onClick={(e) => this.deleteAppsRow(table.username, e)}>Delete</button>  
          </td> 
    </tr>
  ))}
    
    
  </tbody>
</table>
       
          </div>
           )}
          </>
      )
    }
  }