import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  return (
    <div className="hold-transition login-page">
      {user && <Navigate to="/admin" replace />}
      <div className="login-box">
        <div className="login-logo">
          <Link style={{ textDecoration: "none" }} to="/">
            My DietDiary
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <form onSubmit={loginUser}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
