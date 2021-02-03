import React from 'react';
import { withRouter,Link } from "react-router-dom";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:"",
           password:""
        }
    }

    componentDidMount() {
        }
        Login = () =>{
          if(this.state.email &&  this.state.password ){
          let email = localStorage.getItem("email");
          let password = localStorage.getItem("password");
          if(email == this.state.email &&  password == this.state.password){
          this.props.history.push("/dashboard");
         }
         else{
           alert("Email or Password Incorrect")
         }
        }
        else{
          alert("Please Enter Email Password")
        }
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
         }
            render() {

        return (
            <div className="body">
            <div className="cont">
            <div className="form sign-in">
              <h2>Sign Up </h2>
              <label>
                <span>Email Address</span>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
              <button className="submit" type="button" onClick={this.Login}>Sign In</button>
              {/* <p className="forgot-pass">Forgot Password ?</p> */}
              <div className="social-media">
                <ul>
                  <li><img src="assets/images/facebook.png" /></li>
                  <li><img src="assets/images/twitter.png" /></li>
                  <li><img src="assets/images/linkedin.png" /></li>
                  <li><img src="assets/images/instagram.png" /></li>
                </ul>
              </div>
            </div>
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
                <Link  className="m-in"to="/" > Sign Up</Link>
                </div>
              </div>
                </div>
          </div>
           </div>
           )
    }
}

export default Login;