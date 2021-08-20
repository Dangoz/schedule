import IStreamVideo from '@/interfaces/stream-video.interface'
import { useState, useEffect } from 'react'
import ScheduleStyle from '@/styles/schedule/schedule.module.css'
import Grid from './grid'
import dayjs from 'dayjs'

const Schedule = ({ videos }: { videos: IStreamVideo[] }) => {

  // presets: today, tomorrow, day after tomorrow, ...afterwards
  const generatePresets = (): dayjs.Dayjs[] => {
    let test = dayjs("2021-08-21T16:00:00.000Z");
    let today = dayjs(); 
    let tmr = today.add(1, 'day') ;
    let dfTmr = today.add(2, 'day') ;
    let after = today.add(3, 'day') ;
    // const presets = [today, tmr, dfTmr, after];
    const presets = [today]
    return presets;
  }

  const [presets, setPresets] = useState(null);
  useEffect(() => {
    setPresets(generatePresets())
  }, [])

  return ( <>
    <div className={ScheduleStyle.wrapper}>
      {presets && presets.map((preset, index) => (
        <Grid key={index} criteria={preset} videos={videos} isToday={index === 0} isAfterwards={index === presets.length - 1}/>
      ))}
    </div>
  </>)
}

export default Schedule
