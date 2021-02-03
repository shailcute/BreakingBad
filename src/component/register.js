import React from 'react';
import { withRouter,Link } from "react-router-dom";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           name:"",
           email:"",
           password:""
        }
    }

    componentDidMount() {
        }
        handleChange =(e) => {
         console.log(e.target.name +""+ e.target.value)
          let val =  e.target.name ;
          if(val == "email"){
          this.setState({
            email : e.target.value
          })
        }
        else if(val == "password"){
          this.setState({
            password : e.target.value
          })
         }
         else if(val == "name"){
          this.setState({
            name : e.target.value
          })
         }
        }
        Register = () =>{
          if(this.state.email &&  this.state.password && this.state.email &&  this.state.name ){
          localStorage.setItem("email", this.state.email);
          localStorage.setItem("password", this.state.password);
          this.props.history.push("/dashboard");
          }
          else{
            alert("All Fields Are Mandatory")
          }
        }
            render() {

        return (
            <div className="body">
            <div className="cont s-signup">
             <div className="sub-cont">
              <div className="img">
                <div className="img-text m-up">
                  <h2>New here?</h2>
                  <p>Sign up and discover great amount of new opportunities!</p>
                </div>
                <div className="img-text m-in">
                  <h2>One of us?</h2>
                  <p>If you already has an account, just sign in. We've missed you!</p>
                </div>
                <div className="img-btn">
                <Link  className="m-in"to="/login" > Sign In</Link>
                
                </div>
              </div>
              <div className="form sign-up">
                <h2>Sign Up</h2>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
               
                <button type="button" className="submit" onClick={this.Register}>Sign Up Now</button>
              </div>
            </div>
          </div>
          </div>
           )
    }
}

export default withRouter(Register);