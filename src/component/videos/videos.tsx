import ICompleteVideo from '@/interfaces/complete-video.interface'
import { useState, useEffect } from 'react'

const Videos = ({ videos }: { videos: ICompleteVideo[] }) => {
  return (
    <div>
      {videos.length}
    </div>
  )
}

export default Videos
