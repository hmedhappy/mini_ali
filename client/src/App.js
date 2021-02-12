import React, { useState , useEffect } from 'react';
import './style/App.css';
import Loading from 'react-fullscreen-loading';
 import { GetUsers } from "./app/components/services";




function App() {
  const [data, setdata] = useState();
  const [Loader, setLoader] = useState(true);
  
  
  useEffect(() => {
      GetUsers.getUsers().then(users=>{
        setLoader(false)
        setdata(users)
      });
  }, []);

  console.log(data);
  return (
    <div className="App">
     
          this is app
    </div>
  );
}

export default App;
