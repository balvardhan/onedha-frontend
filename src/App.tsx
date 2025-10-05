import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { env } from './config/env'

function App() {
  const [data, setData] = useState(null);
  
  const handleCheckServer = async () => {
    const response = await axios.get(`${env.apiUrl}/api/v1/test/msg`);
    setData(response.data.data);
  }

  return (
    <>
      <div>
      <button onClick={handleCheckServer}>Check Server</button>
      <p>{data}</p>
      </div>
    </>
  )
}

export default App
