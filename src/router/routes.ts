import ChartIcon from '~icons/ic/baseline-bar-chart'
import CopyIcon from '~icons/ic/baseline-content-copy'
import DigitalAnimationIcon from '~icons/ic/baseline-hourglass-empty'
import QRCodeIcon from '~icons/ic/baseline-qrcode'
import HomeIcon from '~icons/ic/sharp-house'
import UserInfoIcon from '~icons/mdi/account-circle'
import UserManagementIcon from '~icons/mdi/account-cog-outline'
import RoleManagementIcon from '~icons/mdi/account-group'
import IconManagementIcon from '~icons/mdi/emoticon-wink'
import ChangePasswordIcon from '~icons/mdi/key'
import PermissionManagementIcon from '~icons/mdi/key-chain'

export const routes = [
  {
    path: '/',
    name: 'base-layout',
    component: () => import('@/layouts/BaseLayout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home'),
        meta: {
          title: 'Menu.Home',
          icon: HomeIcon
        }
      },
      {
        path: '/user-info',
        name: 'user-info',
        component: () => import('@/views/UserInfo'),
        meta: {
          title: 'Menu.UserInfo',
          icon: UserInfoIcon
        }
      },
      {
        path: '/change-password',
        name: 'change-password',
        component: () => import('@/views/ChangePassword'),
        meta: {
          title: 'Menu.ChangePassword',
          icon: ChangePasswordIcon
        }
      },
      {
        path: '/user-management',
        name: 'user-management',
        component: () => import('@/views/UserManagement'),
        meta: {
          title: 'Menu.UserManagement',
          icon: UserManagementIcon
        }
      },
      {
        path: '/role-management',
        name: 'role-management',
        component: () => import('@/views/RoleManagement'),
        meta: {
          title: 'Menu.RoleManagement',
          icon: RoleManagementIcon
        }
      },
      {
        path: '/permission-management',
        name: 'permission-management',
        component: () => import('@/views/PermissionManagement'),
        meta: {
          title: 'Menu.PermissionManagement',
          icon: PermissionManagementIcon
        }
      },
      {
        path: '/icon-management',
        name: 'icon-management',
        component: () => import('@/views/IconManagement'),
        meta: {
          title: 'Menu.IconManagement',
          icon: IconManagementIcon
        }
      },
      {
        path: '/qrcode',
        name: 'qrcode',
        component: () => import('@/views/QRCode'),
        meta: {
          title: 'Menu.QRCode',
          icon: QRCodeIcon
        }
      },
      {
        path: '/clipboard',
        name: 'clipboard',
        component: () => import('@/views/Clipboard'),
        meta: {
          title: 'Menu.Clipboard',
          icon: CopyIcon
        }
      },
      {
        path: '/digital-animation',
        name: 'digital-animation',
        component: () => import('@/views/DigitalAnimation'),
        meta: {
          title: 'Menu.DigitalAnimation',
          icon: DigitalAnimationIcon
        }
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/views/Echarts'),
        meta: {
          title: 'Menu.Echarts',
          icon: ChartIcon
        }
      }
    ]
  },
  {
    path: '/',
    name: 'auth-layout',
    component: () => import('@/layouts/AuthLayout'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
          title: 'Menu.Login',
          disableAuth: true
        }
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/Signup'),
        meta: {
          title: 'Menu.Signup',
          disableAuth: true
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound'),
    meta: {
      title: '404',
      disableAuth: true
    }
  }
]
