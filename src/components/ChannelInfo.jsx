import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useYoutubeAPi } from '../context/YoutubeContext'

function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeAPi()
  const { data: url } = useQuery(['channel', id],
  () => youtube.channelImageURL(id), { staleTime: 1000 * 60 * 5})
  return (
    <div className='flex my-4 mb-8 items-center'>
        {url && <img className='w-10 h-10 rounded-full' alt={name} src={url}/>}
        <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  )
}

export default ChannelInfo