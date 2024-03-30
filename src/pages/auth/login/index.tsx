import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './style.scss'
import { useDispatch } from 'react-redux';
import { setAppState } from 'redux/features/appStateSlice';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickSubmit = () => {
        dispatch(
            setAppState({
              token: "erhtjejrt",
              user: {name: "Test App"},
              isRememberMe: true,
            })
          );
        navigate("/dashboard", { replace: true });
    }

  return (
    <div className="auth-page">
        <div className="login-box">
            <img src="https://vidya.orden.co.in/static/media/Orden-logo-white.ae7f352a46c3b47840f5.png" alt="logo" className='logo' />
            {/* <h4>LOGIN</h4> */}
            <p>Enter your details below for login</p>
            <form action="" className="horizontal-form mt-4">
                <div className="form-group mb-4">
                    <label htmlFor="">Email</label>
                    <input type="text" className='form-control' placeholder='john.doe@mailinator.com' />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="">Password</label>
                    <input type="password" className='form-control' placeholder='******' />
                </div>
                <div className="form-group mb-4">
                    <div className="remeber-section">
                        <div className="left">
                            <input type="checkbox" className='theme-checkbox' value="checking" />
                            <label htmlFor="checking">Remember me</label>
                        </div>
                        <div className="right">
                            <p>Forgot Password?</p>
                        </div>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <Link to="/dashboard" relative="path" onClick={onClickSubmit}>
                        <button className='w-full custom-active-button rounded-lg'>Login</button>
                    </Link>
                </div>
                <div className="form-group mb-4">
                    <h6>Don't have an Account? <span>Signup</span></h6>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login