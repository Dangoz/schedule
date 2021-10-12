import { useState, useEffect } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import MenuStyle from '@/styles/navigation/menu.module.css'
import ToTop from './toTop'
import DrawerMenu from './drawer'
import IProfile from '@/interfaces/profile.interface'
import ThemeBucket from './themeBucket'
import useTheme from '@/functions/useTheme'

const Menu = ({ profiles }: { profiles: IProfile[] }) => {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const draw = async (e) => {
    setVisible(!visible);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll)
  }, [])
  const scroll = async () => {
    setScrolled(window.scrollY > 150)
  }

  return (
    <>
      <DrawerMenu visible={visible} setVisible={setVisible} profiles={profiles} />

      <div className={MenuStyle.menu} style={{ opacity: scrolled ? 0.8 : 1, backgroundColor: theme.foreground }}>

        <div className={MenuStyle.drawerBlock} >
          {visible
            ? <MenuFoldOutlined className={MenuStyle.drawer} onClick={draw} />
            : <MenuUnfoldOutlined className={MenuStyle.drawer} onClick={draw} />}
        </div>

        <div className={MenuStyle.logoBlock}>
          <img src="/logo_white.png" alt='logo' className={MenuStyle.logo} />
        </div>

        <div className={MenuStyle.placeholder}>
          <ThemeBucket />
        </div>

      </div>

      <ToTop />
    </>
  )
}

export default Menu