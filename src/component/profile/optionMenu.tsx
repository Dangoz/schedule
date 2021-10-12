import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button, Row, Col } from 'antd'
import { SolutionOutlined, VideoCameraOutlined } from '@ant-design/icons'
import OptionMenuStyle from '@/styles/profile/option-menu.module.css'
import IProfile from '@/interfaces/profile.interface'

const OptionMenu = ({ talent }: { talent: IProfile }) => {
  const pbutton = useRef(null);
  const vbutton = useRef(null);
  const photoRef = useRef(null);
  const nameRef = useRef(null);

  const router = useRouter();
  const query = router.query.talent;

  useEffect(() => {
    !require('@/config/isMobile')(navigator.userAgent) &&
      window.addEventListener('mousemove', mousemove);
  }, [])

  const mousemove = (e) => {
    if (!pbutton.current) return;
    pbutton.current.style.transform = `translate3d(${getOffset(e.clientX, window.innerWidth, 28)}px, 
    ${getOffset(e.clientY, window.innerHeight, 10)}px, -50px)`;
    vbutton.current.style.transform = `translate3d(${getOffset(e.clientX, window.innerWidth, 33)}px, 
    ${getOffset(e.clientY, window.innerHeight, 13)}px, -50px)`;
    photoRef.current.style.transform = `translate3d(${getOffset(e.clientX, window.innerWidth, 57)}px, 
    ${getOffset(e.clientY, window.innerHeight, 20)}px, -100px)`;
    nameRef.current.style.transform = `translate3d(${getOffset(e.clientX, window.innerWidth, 100)}px, 
    ${getOffset(e.clientY, window.innerHeight, 30)}px, -50px)`;

    // rotateX(${getOffset(e.clientY, window.innerHeight, 0)}deg) 
    // rotateY(${getOffset(e.clientX, window.innerWidth, 0)}deg)
  }

  const getOffset = (position, windowInner, distance) => {
    return (distance * 2) * (position / windowInner) - distance;
  }

  return (
    <div className={OptionMenuStyle.wrapper}>

      <div className={OptionMenuStyle.banner} style={{ backgroundImage: `url(${talent.banner})` }} />

      <Row justify={'center'} className={OptionMenuStyle.row}>
        <Col key={'nameCard'} className={OptionMenuStyle.col} >
          <div className={OptionMenuStyle.nameCard}>
            <img src={talent.photo} className={OptionMenuStyle.thumbnail} ref={element => photoRef.current = element} />
            <div className={OptionMenuStyle.name} ref={element => nameRef.current = element}>{talent.name}</div>
          </div>
        </Col>

        <Col key={'buttons'} className={OptionMenuStyle.col} >
          <div className={OptionMenuStyle.buttons}>
            <Link href={`/v/${query[0]}`}>
              <Button type={'primary'} ref={element => pbutton.current = element}
                className={query.length === 1 ? OptionMenuStyle.buttonActive : OptionMenuStyle.button}>
                <SolutionOutlined />Profile
              </Button></Link>
            <Link href={`/v/${query[0]}/videos`}>
              <Button type={'primary'} ref={element => vbutton.current = element}
                className={query[1] === 'videos' ? OptionMenuStyle.buttonActive : OptionMenuStyle.button}>
                <VideoCameraOutlined />Videos
              </Button></Link>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default OptionMenu
