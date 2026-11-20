import React, {useState, useEffect, use} from 'react'
import { useNavigate } from 'react-router-dom'
import { getJSON } from '../../lib/Fetch'
import { toast } from 'react-toastify'
import './Home.css'


const Home = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(()=>{
    const FetchIt = async ()=>{
      setLoading(true)
      try {
        const response = await getJSON("https://jsonplaceholder.typicode.com/users")
        setUsers(response)
        // toast.success('Information was receive successfull!🔥🔥')
      } catch (error) {
        console.log(error)
        // toast.error(error.message)
        setError(error.message)
      }finally{setLoading(false)}
    }
    FetchIt()
  }, [])
  

  
  console.log(users)
  return (
    <div className='HomePage'>
        <aside className='sidemand'>
          {error && <p style={{width: '100%', fontSize: '15px', fontWeight: 'bold', padding: '0 15px', textAlign: 'center'}}>Oops!, we couldn't reach our server, try again.</p>}
          {loading && <div className='spinner'><span></span></div>}
          {users.map((user, index)=>(
            <div className='userTag' key={user.id}>
                <p>{user.name}</p>
                <small>{(user.username)}</small>
            </div>
          ))}
        </aside>
        <div></div>
    </div>
  )
}

export default Home;