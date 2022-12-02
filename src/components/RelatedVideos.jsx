import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useYoutubeAPi } from '../context/YoutubeContext'
import VideoCard from './VideoCard'

function RelatedVideos({ id }) {
  const { youtube } = useYoutubeAPi()
  const { isloading, error, data: videos } = useQuery(['channel', id],
  () => youtube.relatedVideos(id), { staleTime: 1000 * 60 * 5})
  return (
    <>
      {isloading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && <ul>
        {videos.map((it) => (
          <VideoCard key={it.id} video={it} type='list' />
        ))}  
      </ul>}
    </>
  )
}

export default RelatedVideos