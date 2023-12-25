import { useState, useEffect } from 'react'
import { fetchChannelsApi } from '@/apis/article'


const useChannel = () => {
  const [ channels, setChannels ] = useState([])

  useEffect(() => {
    fetchChannelsApi().then(res => {
      console.log(res);
      setChannels(res.data.data.channels)
    })
  }, [])

  return { channels }
}

export {
  useChannel
}