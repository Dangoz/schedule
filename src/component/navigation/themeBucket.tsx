import { BgColorsOutlined } from '@ant-design/icons'
import { Menu, Dropdown } from 'antd'
import BucketStyle from '@/styles/navigation/bucket.module.css'
import themes from '@/state/themes/themes'
import useTheme from '@/functions/useTheme'
import themeStore from '@/state/themes/themeStore'
import { switchTheme } from '@/state/themes/actions'
import { useRouter } from 'next/router'

const ThemeBucket = () => {
  const theme = useTheme();
  const router = useRouter();

  const select = (name: string) => {
    themeStore.dispatch(switchTheme(name));
    localStorage.setItem('theme', name);

    if (router.pathname === '/') router.reload();
  }

  const menu = (
    <Menu style={{ backgroundColor: theme.foreground }}>
      {themes.map(th => (
        <div className={BucketStyle.themeWrapper} onClick={() => select(th.name)} key={th.name}
          style={{ border: th === theme ? '2px solid white' : '' }}>

          <div className={BucketStyle.left} style={{ backgroundColor: th.foreground }} ></div>
          <div className={BucketStyle.right} style={{ backgroundColor: th.background }} ></div>
        </div>
      ))}
    </Menu>
  );

  return (<>
    <Dropdown overlay={menu} trigger={["click"]} arrow>
      <BgColorsOutlined className={BucketStyle.theme} />
    </Dropdown>
  </>)
}

export default ThemeBucket