import { useState } from 'react'
import { Divider } from 'antd'
import { ClockCircleOutlined, YoutubeOutlined, PlaySquareFilled } from '@ant-design/icons'
import ICompleteVideo from '@/interfaces/completeVideo.interface'
import IProfile from '@/interfaces/profile.interface'
import CardStyle from '@/styles/videos/card.module.css'
import dayjs from 'dayjs'
import { parseDuration } from '@/functions/helpers'
import useTheme from '@/functions/useTheme'

const Card = ({ video }: { video: ICompleteVideo }) => {
  const theme = useTheme()
  const [timestamp] = useState(dayjs(video.availableAt))

  return (
    <>
      <div className={CardStyle.card}>
        <a href={`${video.link}`} target={'_blank'}>
          <div className={CardStyle.content}>
            <div className={CardStyle.durationWrapper}>
              <div className={CardStyle.duration}>{parseDuration(video.duration)}</div>
            </div>
            <div className={CardStyle.hovering}>
              <div className={CardStyle.mask} />
              <div className={CardStyle.youtubeIconWrapper}>
                <YoutubeOutlined className={CardStyle.youtubeIcon} />
              </div>
            </div>
            <img src={video.thumbnail} className={CardStyle.thumbnail} />
          </div>
        </a>

        <a href={`${video.link}`} target={'_blank'}>
          <div className={CardStyle.title}>{video.title}</div>
        </a>

        <div className={CardStyle.bottom}>
          <div className={CardStyle.viewWrapper} style={{ color: theme.textLow }}>
            {<PlaySquareFilled className={CardStyle.icon} />}
            <div className={CardStyle.view}>{video.liveViewCount}</div>
          </div>

          <div className={CardStyle.dateWrapper} style={{ color: theme.textLow }}>
            {<ClockCircleOutlined className={CardStyle.icon} />}
            <div className={CardStyle.date}>{timestamp.format('YYYY/MM/DD')}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
