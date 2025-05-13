import { useState, useEffect } from "react";



  const Createform = () => {
   

  return (
    <div className='createPostPage'>
      <form className="cpContainer" >
        <h1 className="text-white text-xl">Create New Post</h1>
        <div className="inputGp">
          <label htmlFor="" className="text-white">Title:</label>
          <input
            required
            type="text"
            placeholder='Title...'
            
          />
        </div>
        <div className="inputGp">
          <label htmlFor="" className="text-white">Post:</label>
          <textarea
            name=""
            required
            placeholder='Post...'
           
          />
        </div>
        <button type="submit" >
          Create Post
        </button>
      </form>
      
    </div>
  );
};



export default Createform
