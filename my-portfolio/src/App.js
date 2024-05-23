import React, { useEffect, useState } from 'react';
import './App.css'; 
import Portfolio from './Portfolio';
import LoadingIcon from './loading/loading.jsx';

function App() {
  const [isloading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },3000);  // 3 second for loading

    return()=> clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {isloading ?(
        <LoadingIcon />
      ):(
        <Portfolio />
      )}
    </div>
  );
}

export default App;
