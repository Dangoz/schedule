import { useState, useEffect } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import MenuStyle from '@/styles/navigation/menu.module.css'
import ToTop from './toTop'
import DrawerMenu from './drawer'
import IProfile from '@/interfaces/profile.interface'
const { Header, Sider, Content, Footer } = Layout;

const Menu = ({ profiles }: { profiles: IProfile[] }) => {
  const [visible, setVisible] = useState(false);

  const draw = async (e) => {
    setVisible(!visible);
  }

  return (
    <>
      <DrawerMenu visible={visible} setVisible={setVisible} profiles={profiles} />
      {/* <Layout> */}
      <div className={MenuStyle.menu}>

        <div className={MenuStyle.drawerBlock} >
          {visible
            ? <MenuFoldOutlined className={MenuStyle.drawer} onClick={draw} />
            : <MenuUnfoldOutlined className={MenuStyle.drawer} onClick={draw} />}
        </div>

        <div className={MenuStyle.logoBlock}>
          <img src="/logo_white.png" alt='logo' className={MenuStyle.logo} />
        </div>

        <div className={MenuStyle.placeholder}>

        </div>

      </div>
      {/* </Layout> */}

      <ToTop />
    </>
  )
}

export default Menu