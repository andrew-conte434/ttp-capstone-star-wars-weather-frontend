import {
    Link,
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route,
    useNavigate,
  } from "react-router-dom";
  import "../styles/Error.css";
  import HomePage from "./HomePage";
  import { Context } from "./Context";
  
  export default function Error() {
    const navigate = useNavigate();
  
    const goToHome = () => {
      navigate("/");
    };
  
    return (
      <div className="error-page">
        <div>
          <h1 className="error-title">oops. Could not find data on that city.</h1>
  
          <div className="box-1">
            <div className="btn btn-one">
              <Link to={"/"} className={"btn-link"}>
                <span>Back To Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }