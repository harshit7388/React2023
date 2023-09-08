import React, { useState, useEffect } from "react";

function APicalls() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return(
    <>
   {
    posts.map((x)=>{
        return(
            <div key=  {x.id}>
                <h2>{x.title}</h2>
                <h2>{x.body}</h2>
                <div>  
                    Delete
                </div>

            </div>
        )
    })
   }
    </>
  )
}
export default APicalls;
