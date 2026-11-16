import { useEffect, useState } from "react";


export function Counter({label}){
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(false)
  const [seconds, setSeconds] = useState(0);

  const [obj, setObj] = useState({name: 'adama ', age: 34, State: ' Akwa Ibom'})

  const handleClick = () => {
    if(label === 'Great'){
      setCount1(true)
     setCount(count + 1)
     setObj({...obj, name: 'hello '})
    }else{
      setCount1(false)
      setCount(count + 1)
    }
  };

  useEffect(() => {
    const van = setInterval(() => {
      setSeconds((pre) => pre + 1);
    }, 1000);
  
    return () => clearInterval(van);
  }, []);
  

  return (
    <div>
      {count1 && (
        <>
        <span>{obj.name}</span>
        <span>{obj.age}</span>
        <span>{obj.State}</span>
        <p >{label} : {count}</p>
        </>
      )}
      <button className="flex items-center :hover kdidkei md: dkdk" onClick={handleClick} >
        {label === 'Video' ? (<p>Yes this is a video</p>) : (<p>Yes this is a Audio</p>) }
      </button>
      <p>Seconds: {seconds}</p>;
    </div>
  );
}

function Greeting({ name }) {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log(`Name is ${name}`);
  }, [name]);          // runs when name changes, NOT when count changes
 
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
