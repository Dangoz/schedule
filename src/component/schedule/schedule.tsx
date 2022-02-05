import IStreamVideo from '@/interfaces/streamVideo.interface'
import IProfile from '@/interfaces/profile.interface'
import { useState, useEffect } from 'react'
import ScheduleStyle from '@/styles/schedule/schedule.module.css'
import Grid from './grid'
import dayjs from 'dayjs'

const Schedule = ({ videos, profiles }: { videos: IStreamVideo[]; profiles: IProfile[] }) => {
  // presets: today, tomorrow, day after tomorrow, ...afterwards
  const generatePresets = (): dayjs.Dayjs[] => {
    let today = dayjs()
    let tmr = today.add(1, 'day')
    let dfTmr = today.add(2, 'day')
    let after = today.add(3, 'day')
    const presets = [today, tmr, dfTmr, after]
    return presets
  }

  const [presets, setPresets] = useState(null)
  useEffect(() => {
    setPresets(generatePresets())
  }, [])

  return (
    <>
      <div className={ScheduleStyle.wrapper}>
        {presets &&
          presets.map((preset, index) => (
            <Grid
              key={index}
              criteria={preset}
              videos={videos}
              isToday={index === 0}
              isAfterwards={index === presets.length - 1}
              profiles={profiles}
            />
          ))}
      </div>
    </>
  )
}

export default Schedule
