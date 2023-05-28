import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
const Registration = () => {
    const {registration}=useContext(AuthContext)
    const handleRegistration=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.password.value;
        console.log(name,email,password)
        registration(email,password)
        .then(result=>{
            const signgedUp=result.user;
            console.log(signgedUp)
            alert('registration successfully')
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
      <form onSubmit={handleRegistration} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="enter your name" className="input input-bordered" />
        </div>
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
      
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Registration</button>
          
         
          
        </div>
        <h3 className='text-center'><Link to='/login'>Have you account? <span className='font-bold text-green-500'>Login</span> </Link></h3>

      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;