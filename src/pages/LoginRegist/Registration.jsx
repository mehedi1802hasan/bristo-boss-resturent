import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin';
const Registration = () => {
    const {registration,updateUserProfile}=useContext(AuthContext);
   
    const handleRegistration=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.password.value;
        const photoUrl=form.photoUrl.value;
        console.log(name,email,password,photoUrl)
        registration(email,password)
        .then(result=>{
            const signgedUp=result.user;
            console.log(signgedUp)
            //alert('registration successfully');
            
            updateUserProfile( name ,photoUrl)
            .then(()=>{
              console.log('user profile info updated',);
              const saveUser={name,email}
              fetch('http://localhost:3000/users',{
                method:"POST",
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.insertedId){
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
            
            })
            .catch(error => console.log(error))
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
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name='photoUrl' placeholder="enter the photUrl" className="input input-bordered" />
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
        <SocialLogin/>

        <h3 className='text-center'><Link to='/login'>Have you account? <span className='font-bold text-green-500'>Login</span> </Link></h3>

      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;