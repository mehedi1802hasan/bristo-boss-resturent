import React from 'react';
import { Helmet } from 'react-helmet';
import useCard from '../../../hook/useCard';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyCard = () => {
    const [card,refetch]=useCard();
    
    console.log(card)
    //using reduce method for sum all price
    const total=card.reduce((sum,item)=>item.price + sum,0);
    
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
    
    fetch(`http://localhost:3000/cards/${item._id}`,{
      method:"DELETE"
    })
    .then(res=>res.json()
    .then(data=>{
      if(data.deletedCount>0){
        refetch()
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
      }
    }))
   
  }
})
      
      
     
    }
    return ( 
        <div className='md:mx-52 lg:mx-52 mt-14'>
            <Helmet>
            <title>Bistro | mycard</title>
          </Helmet> 
          <div className='flex gap-10 my-5 font-semibold uppercase justify-evenly'>
        
            <h4> item: {card.length }</h4>
            <h3>Total Price:${total}</h3>
            <button className='bg-orange-400 btn btn-outline btn-sm'>Pay</button>
          </div>
          
          <div className="overflow-x-auto ">
  <table className="table ">
    {/* head */}
    <thead>
  <tr className="text-orange-500">
    <th>#</th>
    <th>Food</th>
    <th>Item Name</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
</thead>

    <tbody >
      {/* row 1 */}
     {
        card.map((item,index)=> <tr
        
        key={item._id}>
            <td>{index + 1 }</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-12 h-12 mask mask-squircle">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td> 
           {item.name}
            </td>
            <td>${item.price}</td>
          <td><button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg"><FaTrash/></button></td>
          </tr>)
     }
    </tbody>
    
  </table>
</div>
          
        </div>
    );
};

export default MyCard;