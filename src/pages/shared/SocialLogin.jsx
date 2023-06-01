import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation()
   const from=location?.state?.from?.pathName || '/'
    const handleGoogle=()=>{
        googleLogin()
        .then(result=>{
          const googlelogged=result.user;
          
          /////
          const saveUser={name:googlelogged.displayName,email: googlelogged.email}
          fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res=>res.json())
          .then(()=>{
          
                navigate(from, { replace: true });

            
          })
          ////
          console.log(googlelogged)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Google Login successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
         .catch(error=>{
          console.log(error.message)
         })
      }
    return (
        
       <div>
         <div className="divider"></div>
         <div className='flex justify-center'>  
            <img className='w-14'  onClick={handleGoogle}  src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />
           
        </div>
        <div className="divider"></div>
       </div>
    );
};

export default SocialLogin;