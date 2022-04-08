import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Modal,Button } from "react-bootstrap";
import AuthService from "../../services/auth.service";
import axios from "axios";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class UserCreation extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleStack = this.handleStack.bind(this);
    this.handleAppstream = this.handleAppstream.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleADR = this.handleADR.bind(this);
    this.state = {
      username: "",
      email: "",
      fname:"",
      lname:"",
      password: "",
      roles:"",
      successful: false,
      stackname:[],
      message: "",
      isOpen: false,
      appstream:"",
      output:[],
      checkbox:[],
      adr:[]
    };
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handleChange(event) {
    this.setState({fname: event.target.value});
  }
  handleCheckbox(event) {
    const isChecked = event.target.checked;
      if(isChecked){
          this.setState({ checkbox: [...this.state.checkbox, event.target.value] });
      }else{
          let index = this.state.checkbox.indexOf(event.target.value);
          this.state.checkbox.splice(index, 1);
          this.setState({ checkbox: this.state.checkbox });
      }
      console.log(this.state.checkbox)
  }
  handleADR(event) {
    console.log(event.target.value)
    const isChecked = event.target.checked;
      if(isChecked){
          this.setState({ adr:[...this.state.checkbox, event.target.value] });
      }else{
          let index = this.state.adr.indexOf(event.target.value);
          this.state.adr.splice(index, 1);
          this.setState({ adr: this.state.adr });
      }
    
  }
  handleChange2(event) {
    this.setState({lname: event.target.value});
  }
  handleStack(event) {
    this.setState({stackname: event.target.value});
  }
  handleAppstream(event) {
    console.log(event.target.value)
    this.setState({

      appstream : event.target.value
    })
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeRole(e){
    this.setState({
      roles: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    console.log(this.state.adr.length)
    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();
    const article = { 
  
        FirstName: this.state.fname,
        LastName:this.state.lname,
        UserName:this.state.email 
    
     };
if(this.state.appstream ==="true"){
    axios.post('http://localhost:5001/getmodell', article)
      .then(response => this.setState({  output: response.data,
        
      
      }))
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      });
      axios.post('http://localhost:5001/createappstreamuser', {
        username:this.state.email,
        appname:this.state.checkbox
      })
      .then(response => this.setState({  output: response.data,
        
      
      }))
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      });
    }
    setTimeout(() => {
    if(this.state.checkbox.length>0){
    for(let i=0;i<this.state.checkbox.length;i++){
        const article = { 
      
            stackname: this.state.checkbox[i],
            
            UserName:this.state.email 
        
         };
  
        axios.post('http://localhost:5001/stack', article)
          .then(response => this.setState({  output: response.data,
            
          
          }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
    }
  }
},4000)
    if (this.checkBtn.context._errors.length === 0) {
      if(this.state.adr.length>0){
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }
  }

  render() {
    console.log(this.state.checkbox)
    return (
      <div>
      <Button  onClick={() => this.setState({isOpen: true})} style={{marginLeft:"60%"}}>Create User</Button>
      
      <Modal show={this.state.isOpen} onHide={this.closeModal}>
        <Modal.Header >
          <Modal.Title>User Creation</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="col-md-12">
    
    <div >
      

      <Form
        onSubmit={this.handleRegister}
        ref={c => {
          this.form = c;
        }}
      >
        {!this.state.successful && (
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required, vusername]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required, email]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required, vpassword]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">First Name</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.fname}
                onChange={this.handleChange}
            
              />
            </div>  <div className="form-group">
              <label htmlFor="username">Last Name</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.lname}
                onChange={this.handleChange2}
             
              />
            </div>
            <div>
            <div className="form-group">
       <label title='Training or Inference' style={{marginRight:"138px"}} htmlFor='Model'>Create Appstream User</label>
                <select className="form-control" style={{width:'263px'}} onChange={this.handleAppstream} value={this.state.appstream} required>
                <option value="">Select</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                
               </select>
               </div>
               </div>
             
               <div>
              <div>
                <label> Select Apps:
                <label style={{marginLeft:"5px"}}> <input type="checkbox" value="ADR" style={{marginLeft:"10px"}} onChange={this.handleADR}  /> ADR </label>
              <label style={{marginLeft:"5px"}}> <input type="checkbox" value="GTNoteStack" style={{marginLeft:"10px"}} onChange={this.handleCheckbox}  />  GT Note </label>
              <label style={{marginLeft:"5px"}}><input type="checkbox" value="Simsonicstack" style={{marginLeft:"10px"}} onChange={this.handleCheckbox} /> SimSonic  </label>
              <label  style={{marginLeft:"5px"}}>  <input type="checkbox" value="SimxrayStack" style={{marginLeft:"10px"}} onChange={this.handleCheckbox} /> Simxray </label>
              </label>
              </div>
               </div>
            
              
            <div className="form-group">
              <button className="btn btn-primary btn-block">Create User</button>
            </div>
          </div>
        )}

        {this.state.message && (
          <div className="form-group">
            <div
              className={
                this.state.successful
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
              role="alert"
            >
              {this.state.message}
            </div>
          </div>
        )}
        <CheckButton
          style={{ display: "none" }}
          ref={c => {
            this.checkBtn = c;
          }}
        />
      </Form>
      <p>{this.state.output}</p>
    </div>
  </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

     
      </div>
    );
  }
}
