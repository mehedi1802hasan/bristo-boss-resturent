import React from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha  } from 'react-simple-captcha';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const location=useLocation();
  const from = location.state?.from?.pathname || "/";

    const captchaRef=useRef(null);
    const [disabled,setDisabled]=useState(true)
    const {googleLogin,login}=useContext(AuthContext)
    const handleCaptcha=e=>{
        const user_captcha_value=captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
           setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        //loginWIth email,passs firebase
        login(email, password)
        .then((result) => {
          const logged = result.user;
          console.log(logged);
          alert('Login successful');
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.meessage);
        });
    
    }
    const handleGoogle=()=>{
      googleLogin()
      .then(result=>{
        const googlelogged=result.user;
        console.log(googlelogged)
        alert('google login successfully');
        navigate(from, { replace: true });
      })
       .catch(error=>{
        console.log(error.message)
       })
    }
    return (
        <div>
    <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
    <div className="w-1/2 text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="flex-shrink-0 w-1/2 max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text"ref={captchaRef} name='captcha' placeholder="enter the valid captcha input" className="input input-bordered" />
        <button onClick={handleCaptcha} className='btn btn-outline'>Validate</button>
        </div>
        <div className="mt-6 form-control">
          <button disabled={disabled} className="btn btn-primary">Login</button>
          <br />
          <button onClick={handleGoogle} disabled={disabled} className="btn btn-primary">Google</button>
          
        </div>
        <h3 className='text-center'><Link to='/registration'>Are you new? <span className='font-bold text-green-500'>Registration</span> </Link></h3>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;