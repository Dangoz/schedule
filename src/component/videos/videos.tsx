import ICompleteVideo from '@/interfaces/complete-video.interface'
import { useState, useEffect } from 'react'

const Videos = ({ videos }: { videos: ICompleteVideo[] }) => {
  return (
    <div>
      {videos.length} <br/>
      {JSON.stringify(videos, null, 2)}
    </div>
  )
}

export default Videos
