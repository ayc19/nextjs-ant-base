import { Typography } from 'antd'
import React, { useState, useEffect } from 'react';

import { getMessage } from '../api/local'

function HomeMessage(props: any) {
  const { message } = props;
  return (
    <div>
      <Typography.Text>{message}</Typography.Text>
    </div>
  )
}

export default function Home() {
  const [message, setMessage] = useState<any>('')
  const fetchData = async () => {
    try {
      const res = await getMessage()
      setMessage(res.data);
    } catch (err) {
      console.log('error getting page ', err);
    }
  }

  // Component did mount equivalent with empty array
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div
      style={{
        // border: '2px solid red',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <Typography.Title>Home page</Typography.Title>
      <HomeMessage message={message}/>
    </div>
  )
}