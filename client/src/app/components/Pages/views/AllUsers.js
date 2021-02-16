import React, { useState , useEffect } from 'react';
import Loading from 'react-fullscreen-loading';
import { GetUsers } from "../../services";




export default function AllUsers() {
    const [data, setdata] = useState();
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    GetUsers.getUsers().then(users=>{
      setLoader(false)
      setdata(users)
    });
}, []);

    return (
            <div className="App">
               {Loader ?  <Loading loading loaderColor="#3da9e7 " />:null}
                    {data?.map((user,index)=>{
                        return <div key={index}>
                        <h2>{index}</h2>
                            <h3>{user.name}</h3>
                            <h3>{user.prenom}</h3>
                        <hr/>
                        </div>
                    })}

    </div>

    )
}
