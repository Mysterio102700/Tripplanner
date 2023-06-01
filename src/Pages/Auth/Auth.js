import React, { useState ,useEffect,useNavigate } from "react";
import "./Auth.css";

const Auth = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [buttonValue, setButtonValue] = useState("");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event) => {
    const value = event.target.value;
    setButtonValue(value);
    handleFlip()
  };

  const [showSignup, setshowSignup] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [signupSuccess, setsignupSuccess] = useState(false);
  const [authResponse, setauthResponse] = useState("");
  const [hidepass, sethidepass] = useState(false);
  const Navigate = useNavigate();

  const togglehandler = () => {
    clearState();
    setshowSignup(!showSignup);
  };

  const clearState = () => {
    setusername("");
    setpassword("");
    setemail("");
    setshowSignup(false);
    setsignupSuccess(false);
    setauthResponse("");
  };

  const signUphandler = async () => {
    const user = { username, password, email };

    if (!username || !password || !email) {
      setauthResponse("User Name, Password and Email are required !!");
      setsignupSuccess(false);
      return;
    }

    try {
      const { data } = await SignUp(user);
      console.log(data);

      clearState();

      setsignupSuccess(true);
      setauthResponse(data.message);
    } catch (error) {
      console.log(error);
      setsignupSuccess(false);
      setauthResponse(error.response.data.message);
    }
  };

  const signInhandler = async () => {
    const user = { username, password };

    if (!username || !password) {
      setauthResponse("User Name,  and Password  are required !!");
      setsignupSuccess(false);
      return;
    }

    try {
      const response = await SignIn(user);
      // console.log(response);
      await createCart();
      Navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Applying on mount
            document.body.style.overflow = "hidden";
    // Applying on unmount    
            return () => {
              document.body.style.overflow = "visible";
            }
          }, [])

  const hidepassword = () => {
    sethidepass(!hidepass);
  };  

  const renderComponent = () => {
    return (
      <>
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>
                <button value="Admin" onClick={handleButtonClick}>
                  Admin
                </button>
                <button value="User" onClick={handleButtonClick}>
                  User
                </button>
              </div>
            </div>
            <div className="flip-card-back">
            <div className="login-wrapper">
                <h5 className="text-center">
                  {showSignup ? "Sign Up" : "Sign In"}
                </h5>
                {showSignup && (
                  <div className="input-group user">
                    {/* <span>Email</span> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                )}
                
                <div className="input-group">
                  {/* <span>Username</span> <br /> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    autoFocus
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  {/* <span>Password</span> <br />     */}
                  <input
                    type={hidepass ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <i
                    className={
                      hidepass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
                    }
                    onClick={hidepassword}
                  ></i>
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn"
                    value={showSignup ? "Sign Up" : "Log In"}
                    onClick={showSignup ? signUphandler : signInhandler}
                  />
                </div>
              
                <div className="auth-msg">
                  {showSignup
                    ? "Already have a account !!"
                    : "Don't have an account ?"}
                  <button className="button" onClick={togglehandler}>
                    {showSignup ? "login" : "signup"}
                  </button>
                </div>
                {
                  <div
                    className={
                      signupSuccess
                        ? "auth-response text-info text center"
                        : "auth-response text-danger text center"
                    }
                  >
                    {authResponse}
                  </div>
                }
              </div>  
            </div>
          </div>
          <button onClick={handleFlip}>Flip</button>
        </div>
      </>
    );
  };
  return renderComponent();
};

export default Auth;
