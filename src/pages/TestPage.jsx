import React, { useEffect, useState } from 'react';
import axios from 'axios';



const TestPage = () => {

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts") // Example API
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);


useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setPosts(response.data);
    })

}, []);

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-8'>
     
    

      {posts.map((post) => (
            
     <div className='p-4 bg-white shadow-md mb-2 rounded-md'>
  

     <h2 className='text-2xl text-blue-600 mb-3 '> {post.title}</h2>
      {post.body}<br/>

     
     
     </div>



      ))}




    </div>
  );
};

export default TestPage;