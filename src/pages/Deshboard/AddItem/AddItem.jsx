import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";

const AddItem = () => {
    

    const { register, handleSubmit,  formState: { errors }, } = useForm();
    const img_hosting_token=import.meta.env.VITE_Image_Upload_Token;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image',data.image[0]);
        fetch(img_hosting_url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgUrl=imgResponse.data.display_url;
                const {name,price,recipe,category}=data;
                const  newItem={name, price: parseFloat(price) , recipe, category, img: imgUrl}
                
                console.log(newItem)

            }
        })
    }
  console.log(img_hosting_token);
 
    
    return (
        <div className='w-full '>
          
            <SectionTitle
      heading={'Add an item'}
      subHeading={"What's new"}
      ></SectionTitle>
  <form onSubmit={handleSubmit(onSubmit)} className='mx-10' >
          <div className="w-full form-control">
  <label className="label">
    <span className="label-text">Recipe Name*</span>

  </label>
  <input type="text" placeholder="Type your Recipe name" className="w-full input input-bordered"
   {...register("name", { required: true })} />
 
</div>

<div className='flex gap-5'>
<div className="w-full form-control">
  <label className="label">
    <span className="label-text">Category*</span>
   
  </label>
  <select defaultValue='Pick One' className="select select-bordered"  {...register("category", { required: true })}>
    <option disabled >Pick One</option>
    <option>Pizza</option>
    <option>Soup</option>
    <option>Salad</option>
    <option>Drinks</option>
    <option>Dessert</option>
    <option>Deshi</option>
  </select>
</div>

<div className="w-full form-control">
  <label className="label">
    <span className="label-text">Price*</span>

  </label>
  <input type="number" placeholder="Type here" className="w-full input input-bordered"
    {...register("price", { required: true })}
  />
 
</div>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details</span>
  
  </label>
  <textarea className="h-24 textarea textarea-bordered" placeholder="please write about recipe"
   {...register("recipe", { required: true })}></textarea>
  
</div>
<div className="w-full form-control">
  <label className="label">
    <span className="label-text">Item Image*</span>
  
  </label>
  <input type="file" className="w-full file-input file-input-bordered"
    {...register("image", { required: true })} />
 
</div>     
<input type="submit" value='Add Item' className='mt-5 btn btn-sm'/>
      </form>
        </div>
    );
};

export default AddItem;