import React, { useReducer } from 'react';
import { SettingOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '', < HomeOutlined/>),

  // AppstoreOutlined example with sub menus
  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),

  getItem('Settings', 'settings', <SettingOutlined />),
];


export default function NavigationMenu() {
  const router = useRouter();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
    router.push(`/${e.key}`)
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: '100%', height: '100vh' }}
      mode="vertical"
      items={items}
    />
  )
}
