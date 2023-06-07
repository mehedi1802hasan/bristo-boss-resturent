import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hook/useMenu';
import { FaEdit,FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
const MangeItem = () => {
    const [menu,refetch]=useMenu()
    const [axiosSecure]=useAxiosSecure()
    const handleDelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res=>{
                console.log('deleted  res', res.data);
          
                if(res.data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
            }
          })
           
    }
  
    return (
    <>
        <div>
            <SectionTitle heading='Manage All Items' subHeading={'Hurry Up'}></SectionTitle>
        </div>
        <div >
        <h3 className='my-5 font-semibold text-center text-red-700'> Total menu:   {menu.length}</h3>
           <div class="overflow-x-auto ">
 <table class="table w-full">

   <thead>
     <tr>
       <th>#</th>
       <th>Image</th>
       <th>Name</th>
        <th>Price</th>
       <th>Update</th>
       <th>Delete</th>
     </tr>
   </thead>
   <tbody>
   
     {
      menu.length &&  menu?.map((item,i)=>
           <tr
           key={item._id}>
       <th>{i + 1}</th>
       <th><img className='w-20' src={item.image} alt="" /></th>
       <td>{item.name}</td>
       <td className='font-serif text-green-500'>${item.price}</td>
       <td className='text-blue-700'><FaEdit/></td>
       <td><button onClick={()=>handleDelete(item)} className="text-red-600 btn btn-ghost btn-lg"><FaTrash/></button></td>
     </tr>)
     }
    
    
     
 
   </tbody>
 </table>
</div>
       </div>
       </>
    );
};

export default MangeItem;