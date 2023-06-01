import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield,FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
const AllUsers = () => {
    const {data: users = [], refetch}=useQuery(['users'],async()=>{
        const res=await fetch('http://localhost:3000/users')
        return res.json();
    })
    
    const handleAdmin=user=>{
        fetch(`http://localhost:3000/users/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
         .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now!! `,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })       
         }  
  
    const handleDelete=(user)=>{
        
           
    }
  
    return (
        <div >
         <h3 className='my-5 font-semibold text-center text-red-700'> Total Users:   {users.length}</h3>
            <div class="overflow-x-auto ">
  <table class="table w-full">
 
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
      {
        users.map((user,i)=>
            <tr
            key={user._id}>
        <th>{i + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role =='admin'? 'admin' : <button onClick={()=>handleAdmin(user)} className="btn btn-ghost btn-lg"><FaUserShield/></button>}</td>
        <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-lg"><FaTrash/></button></td>
      </tr>)
      }
     
     
      
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;