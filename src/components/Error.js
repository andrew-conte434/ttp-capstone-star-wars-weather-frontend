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
        <h1 className="error-title">oops. Couldn't find data on that city.</h1>
        {/* <Link to="/">BACK TO HOME</Link> */}

        <div class="box-2">
          <div class="btn btn-two">
            <span>Back To Home</span>
          </div>
        </div>

        {/* <button className="error-button" type="submit">
          Back to Home
        </button> */}
      </div>
    </div>
  );
}
