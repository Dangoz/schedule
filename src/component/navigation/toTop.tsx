import ToTopStyle from '@/styles/navigation/toTop.module.css'
import { useState, useEffect } from 'react'
import { BackTop, Button } from 'antd'
import { RocketFilled, RocketOutlined, RocketTwoTone } from '@ant-design/icons'
import useTheme from '@/functions/useTheme'

const ToTop = () => {
  const theme = useTheme()
  const [mouseInside, setMouseInside] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scroll)
  }, [])

  const mouseEnter = async (e) => setMouseInside(true)
  const mouseLeave = async (e) => setMouseInside(false)

  const scroll = async () => {
    if (window.scrollY < 450) {
      setTimeout(() => {
        setMouseInside(false)
      }, 300)
    }
  }

  return (
    <>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={ToTopStyle.warpper}>
        <BackTop className={ToTopStyle.backTop} duration={500} visibilityHeight={450}>
          <Button
            type="default"
            className={ToTopStyle.button}
            shape={'circle'}
            style={{ backgroundColor: theme.foreground }}
          >
            {mouseInside ? (
              <RocketFilled className={ToTopStyle.rocket} style={{ color: theme.textHigh }} />
            ) : (
              <RocketOutlined className={ToTopStyle.rocket} style={{ color: theme.textLow }} />
            )}
          </Button>
        </BackTop>
      </div>
    </>
  )
}

export default ToTop
