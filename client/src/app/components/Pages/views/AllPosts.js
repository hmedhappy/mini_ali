import React, { useState , useEffect } from 'react';
import Loading from 'react-fullscreen-loading';
import { GetPosts } from "../../services";




export default function AllPosts() {
    const [data, setdata] = useState();
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    GetPosts.getPosts().then(posts=>{
      setdata(posts);
      setLoader(false);
    })
}, []);
console.log(data)

    return (
            <div className="App">
               {Loader ?  <Loading loading loaderColor="#3da9e7 " />:null}
                    {data?.map((user,index)=>{
                        return <div key={index}>
                        <h2>{index}</h2>
                            <h3>{user.name}</h3>
                            <p>{user.description}</p>
                        <hr/>
                        </div>
                    })}

    </div>

    )
}
