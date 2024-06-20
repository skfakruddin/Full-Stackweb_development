import "./Login.css";
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { userLoginContext } from "../../contexts/userLoginContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Login() {
  const { loginUser, userLoginStatus } = useContext(userLoginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onUserLogin = (userInput) => {
    loginUser(userInput);
  };

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate('/home');
    }
  }, [userLoginStatus, navigate]);

  return (
    <div>
      <p className="display-3 text-center">User Login</p>
      <div className="row">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          <form
            className="mx-auto mt-5 bg-secondary opacity-75 rounded-2 p-3"
            onSubmit={handleSubmit(onUserLogin)}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger lead">*Username is required</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger lead">*Password is required</p>
              )}
            </div>
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
