import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../context/useAuth';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const {user} = useAuth();
    return (
        <>
        <h1 className='text'>this is shipping</h1>
        <div className='form'>
            
             <br />
            <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("email")} placeholder='email' /> 
      <br />
      <input defaultValue={user.email}  {...register("password")}placeholder='password' /> 
      <br />
      <input {...register("description")}placeholder='description' /> 
      <br />
      <input {...register("phone")}placeholder='phone' /> 
      <br />
      <input {...register("city")}placeholder='city' /> 
      <br />
      
      
      <input type="submit" />
    </form>
        </div>
        </>
    );
};

export default Shipping;
