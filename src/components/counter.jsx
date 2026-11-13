import { useEffect, useState } from "react";


export function Counter({label}){
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(false)


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
    </div>
  );
}

