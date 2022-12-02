import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAgo } from '../utils/date'

function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet
  const navigate = useNavigate()
  const isList = type === 'list'
  return (
    <li className={isList? 'flex gap-1 m-2 cursor-pointer' : 'cursor-pointer'} 
        onClick={() => { navigate(`/videos/watch/${video.id}`, { state: { video: video }})}}
    >
        <img className={isList? 'w-60 mr-2' : 'w-full'} alt={title} src={thumbnails.medium.url}/>
        <div>
            <p>{title}</p>
            <p>{channelTitle}</p>
            <p>{formatAgo(publishedAt)}</p>
        </div>
    </li>
  )
}

export default VideoCard