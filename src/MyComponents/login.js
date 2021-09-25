import React from 'react'
// import React, { useState } from 'react';

export const Login = () => {
  
  var x=true;
  let save = (e) => {
    e.preventDefault();
    
    alert("working")
    
   
    

   
    // console.log(account);
  }
  






    return (
      <div className="w-75 mx-auto" >
  <form name ="myform"  onSubmit={save} >
    
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"  className="form-control" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input   type="password" className="form-control"  name="password" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


      </div>
    )
}