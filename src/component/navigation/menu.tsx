import { useState, useEffect } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import MenuStyle from '@/styles/navigation/menu.module.css'
import ToTop from './toTop'
import DrawerMenu from './drawer'

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const { Header, Sider, Content, Footer } = Layout;
  const draw = async (e) => {
    setVisible(!visible);
  }
  useEffect(() => {
    console.log('initial:', visible)
  }, [])
  useEffect(() => {
    console.log('changed:', visible)
  }, [visible])

  return (
    <>
      <DrawerMenu visible={visible} setVisible={setVisible} />
      {/* <Layout> */}
      <div className={MenuStyle.menu}>

        <div className={MenuStyle.drawerBlock} >
          {visible
            ? <MenuFoldOutlined className={MenuStyle.drawer} onClick={draw} />
            : <MenuUnfoldOutlined className={MenuStyle.drawer} onClick={draw} />}
        </div>

        <div className={MenuStyle.logoBlock}>
          <img src='logo_white.png' alt='logo' className={MenuStyle.logo} />
        </div>

        <div className={MenuStyle.placeholder}>

        </div>

      </div>
      {/* </Layout> */}

      ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />
      ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />
      ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />
      ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />
      ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />
      ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />ab<br />
      <ToTop />
    </>
  )
}

export default Menu