//ADR Main Page 
import React from 'react'
import axios from 'axios';
import '../Login.css';
import {Modal,Button} from 'react-bootstrap'
import Login from './Home'
import { Logout } from './usermanagement/logout';
import AuthService from '../services/auth.service';
import BoardUser from './usermanagement/board-user.component';
import { MapInteractionCSS } from 'react-map-interaction';
import Magnifier from "react-magnifier";
import {

  GlassMagnifier,

} from "react-image-magnifiers";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
class MultiCheckBox extends React.Component{

    constructor(){
        super();
        this.state = {
            checkbox:[],
            courses: [],
            //courses,course means Dataset
            course: "",
            s3path: "",
            x1:"",
            y1:"",
            h:"",
            w:"",
            s3imgpath:"",
            loading: true,
            height:"",
            detect_model:"",
            triton_output:"",
            confidence:"",
            confclass:[],
            confobj:[],
            errorMessage:"",
            currentUsers: { username: "" },
            segpoints:[],
            s3segpath:"",
            width:"",
            isOpen: false,
            isOpens:false,
            isOpenss:false,
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            options: [
              { label: "Object Detection", value: "detection" },
              { label: "Classification", value: "classification" },
              { label: "Segmentation", value: "segmentation" },
            ],
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    openModals = () => this.setState({ isOpens: true });
    closeModals = () => this.setState({ isOpens: false });

    openModalss = () => this.setState({ isOpenss: true });
    closeModalss = () => this.setState({ isOpenss: false });

    handleChangeCourse = event => {
      this.setState({ course: event.target.value });
    };
    handleChange = event => {
      this.setState({ model: event.target.value });
    };
  
    getUnique(arr, comp) {
      const unique = arr
        //store the comparison values in array
        .map(e => e[comp])
  
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
  
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
  
        .map(e => arr[e]);
  
      return unique;
    }
  /*   handleSubmit(event) {
      
      event.preventDefault();
      axios.post('http://localhost:3000/getmodell', {
        model: this.state.model,
        dataset:this.state.course,
        path:this.state.checkbox,
      })
       .then((res) => {
        // Res.data is the response from your server
        console.log(res.data);
        
        
      });
    } */
  

    handleInputChange(event) {
      const isChecked = event.target.checked;
      if(isChecked){
          this.setState({ checkbox: [...this.state.checkbox, event.target.value] });
      }else{
          let index = this.state.checkbox.indexOf(event.target.value);
          this.state.checkbox.splice(index, 1);
          this.setState({ checkbox: this.state.checkbox });
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
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUsers: currentUser, userReady: true })
    
    /* axios.get('http://localhost:5000/files')
    .then(response => this.setState({ courses: response.data })); */
    if (user) {
     axios.post('http://localhost:5001/files',{
     
      Username:user.username
      
    } )
        .then(response => this.setState({  courses: response.data,
           
        
        })
       
      )
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
      }
  }

  

    submit(){
      if(this.state.model==="classification"){
      const article = { 
      
          model: this.state.model,
          dataset:this.state.course,
          path:this.state.checkbox 
      
       };

      axios.post('http://localhost:5000/home', {
        body:JSON.stringify({ 

      model_details :[ 
        {
          model_name: "dhvani_rcnn",
          dataset:this.state.course,
          input_path:this.state.checkbox,
          }
        ]
        })
      
      })
        .then(response => this.setState({  confclass: response.data,
           loading: false,
        
        }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
        
       this.openModal();
       this.setState({
         loading: true
       })
      }
      else if(this.state.model==="detection"){
        const article = {  
          model: this.state.model,
          dataset:this.state.course,
          path:this.state.checkbox,
          id:"7"
               };
  
        axios.post('http://localhost:5000/home', 
          {
            body:JSON.stringify({
              model_details:[{ 
              model_name: "dhvani_rcnn",
                dataset:this.state.course,
                input_path:this.state.checkbox,
                confidence_thresh: "0.9",
                device: "gpu",
                aws_uname: "user_dhvani",
                aws_password: "dhvani!@#$",
                save_mask: "False",
                save_json: "True",
                save_mapimage: "True",
                _comment : "/mnt/01D65D21C63DA140/Documents/bmw_webapp_14_10/input_Test/IMG00178.png"
              }]})
            
          }
        )
          .then(response => this.setState({ confobj:response.data,
             loading: false,
          
          }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
          
         this.openModals();
         this.setState({
          loading: true
        })

      }

      if(this.state.model==="segmentation"){
        const article = {  
          model: this.state.model,
          dataset:this.state.course,
          path:this.state.checkbox,
          id:"8"
               };
  
        axios.post('http://localhost:5000/home', {
          body:JSON.stringify({ 

        model_details :[ 
          {
            model_name: "dhvani_rcnn",
            dataset:this.state.course,
            input_path:this.state.checkbox,
            }
          ]
          })
        
        })
          .then(response => this.setState({ segpoints:response.data,
             loading: false,
          
          }))
          .catch(error => {
              this.setState({ errorMessage: error.message});
              console.error('There was an error!', error);
          });
          
         this.openModalss();
         this.setState({
          loading: true
        })

      }
     
    }
    



    render(){
console.log(this.state.confobj)

      const flatArray = [].concat.apply([], this.state.confobj);

const flatMap = flatArray.reduce((accum, e) => {
  if (!accum[e.name]) {
    accum[e.name] = {
      name: e.name,
      bbox: [e.bbox],
      confidence: [[e.confidence]],
      class: e.class,
      width:e.width,
      height:e.height
    };
  } else {
    accum[e.name].confidence.push([e.confidence]);
    accum[e.name].bbox.push(e.bbox);
  }
  return accum;
}, {});

console.log(Object.values(flatMap));
const obj = Object.values(flatMap);
      const uniqueCouse = this.getUnique(this.state.courses, "dataset");
     
      const courses = this.state.courses;
      const course = this.state.course;
      const options = this.state.options;

      const segpoints= this.state.segpoints;
      
      const {confobj,confclass}=this.state;
 
      const filterDropdown = courses.filter(function(result) {
        return result.dataset === course;
      });
      
        return(
          
            <div className="container">
              <BoardUser />
              
              <div className="row">
                <div className="col-3">
                  <Login />
                </div>
             
      <div
      className="col-3"
      style={{
        paddingBottom: "100px",
        paddingTop: "20px",
        alignItems: "center",
      }}
    >
      <label
        className=""
        style={{ paddingTop: "5px", marginTop: "5px" }}
      >
       Dataset
        
          <select
            className="custom-select"
            
              value={this.state.course}
              onChange={this.handleChangeCourse} key="" style={{ paddingTop: "5px", marginTop: "10px" }}
          >
            
            <option>--Select--</option>
              {uniqueCouse.map(course => (
                <option key={course.id} value={course.dataset}>
                  {course.dataset}
                </option>
              ))}
          </select>
      </label>
      
    </div>
      <div
      className="col-3"
      style={{
        paddingBottom: "100px",
        paddingTop: "20px",
        alignItems: "center",
      }}
    >
      <label
        className=""
        style={{ paddingTop: "5px", marginTop: "5px" }}
      >
        Model
        
          <select
            className="custom-select"
            name="example"
            value={this.state.model}
            onChange={this.handleChange}
            style={{ paddingTop: "5px", marginTop: "10px" }}
          >
            <option>--Select--</option>
            {options.map((option) => (
              <option
                value={option.value} 
                onChange={(e) => this.setState({ model: e.target.value })}
              >
                {option.label}
              </option>
            ))}
          </select>
      </label>
      
    </div>
    <div class="form-row col-3">
                            <div class="col-md-12 text-center">
                            
                                <button type="submit" class="btn btn-success" onClick={()=>this.submit() } style={{  marginTop: "60px" }}>Inference</button>
                            </div>
                        
                            
                        </div>
                        {/* <div class="col-2">
                          <Logout />
                        </div> */}
                <div class="col-12">
                    <div class="row" >
                        <br /><br />
                        
                        {filterDropdown.map((course) => (
                        <div class="form-row " >
                            <div class="form-group col-12">
                                
                                <div class="form-check form-check-inline" >
                                    <input class="form-check-input" type="checkbox" name="checkbox" id={`${course.id}`} value={`${course.path}`} onChange={this.handleInputChange} />
                                    <label class="form-check-label" for="inlineCheckboxh1" ><img
                        key={course.id}
                        src={`${course.path}`}
                       
                        className=""
                        alt="img" 
                      /></label>
                                </div>
                               
                            </div>
                        </div>))}
     
                    </div>
                    
                </div>
                
{/*<Button variant="primary" onClick={this.openModal}style={{marginTop:'5%',marginLeft:'47%'}}>
          					  Show
        				  </Button>  */}

<Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={this.state.isOpen} onHide={this.closeModal}>
		<div id="oc-alert-container"></div>
          <Modal.Header closeButton>
		  
            <Modal.Title>Inference Output</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div  >{this.state.loading ? <div class="loader"><i style={{ marginLeft: "43%",marginTop:"30%" }}>Please Wait Loading...</i></div> : null}</div>
          {confclass.map(classification => (     
          <div class="card " style={{ marginLeft: "27%",marginRight:"29%" }}>
  <div class="row no-gutters">
    <div class="col-12">
      <img src={classification.s3_bucketpath} class="card-img" alt="..."style={{ width: "512px",height:"512px" }} />
    </div>
    
    <div class="">
      <div class="card-body">
        <h5 class="card-title" style={{textTransform:"capitalize"}}>{classification.class}</h5>
        <p class="card-text">Confidence:{classification.confidence}</p>
      </div>
    </div>
  </div>
</div>
 ))}
			
		  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div>
        <Modal 
      size="lg"
      centered show={this.state.isOpens} onHide={this.closeModals}>
		<div id="oc-alert-container"></div>
          <Modal.Header closeButton>
		  
            <Modal.Title>Inference Output</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div  >{this.state.loading ? <div class="loader"><i style={{ marginLeft: "43%",marginTop:"30%" }}>Please Wait Loading...</i></div> : null}</div>
          <Carousel responsive={responsive} autoPlay={false}  autoPlaySpeed={90000} swipeable={false}
          transitionDuration={500}
  draggable={false}> 
          {confobj.map(object => (  
         
      <div style={{marginLeft:"27%",matginBottom:"20px"}}>
         <Magnifier zoomFactor='2' src={`data:image/jpg;base64,${object.data}`} width={512} height={512}  />
         </div>

          ))}
</Carousel>
		  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModals}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        </div>


        <div>
        <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={this.state.isOpenss} onHide={this.closeModalss}>
		<div id="oc-alert-container"></div>
          <Modal.Header closeButton>
		  
            <Modal.Title>Inference Output</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div  >{this.state.loading ? <div class="loader"><i style={{ marginLeft: "43%",marginTop:"30%" }}>Please Wait Loading...</i></div> : null}</div>
          {segpoints.map(segmentation => (  
          <div class="img-overlay-wrap" style={{ marginLeft: "27%" }}>

  <img src={segmentation.s3_bucketpath} style={{ height:"512px" , width:"512px"}} alt="" />
  <svg height="512px" width="512px">
  <polygon points={segmentation.segmentation} 
    style={{height:"512px" ,width:"512px",fill:"red",stroke:"white",opacity:".5"
}}/></svg>

<h3>Threshold:{segmentation.pred_score}</h3>
</div>
          ))}

		  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModalss}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        </div>
     
                  
            </div>
           
            </div>
        )  
    }
}

export default MultiCheckBox;