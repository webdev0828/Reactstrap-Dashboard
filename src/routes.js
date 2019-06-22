import Buttons from 'views/components/Buttons.jsx';
import Calendar from 'views/Calendar.jsx';
import Charts from 'views/Charts.jsx';
import Dashboard from 'views/Dashboard.jsx';
import ExtendedForms from 'views/forms/ExtendedForms.jsx';
import ExtendedTables from 'views/tables/ExtendedTables.jsx';
import FullScreenMap from 'views/maps/FullScreenMap.jsx';
import GoogleMaps from 'views/maps/GoogleMaps.jsx';
import Grid from 'views/components/Grid.jsx';
import Icons from 'views/components/Icons.jsx';
import Location from './modules/scooters/Location';
import Lock from 'views/pages/Lock.jsx';
import Login from 'views/pages/Login.jsx';
import ManagementTable from './modules/scooters/ManagementTable';
import Notifications from 'views/components/Notifications.jsx';
import Panels from 'views/components/Panels.jsx';
import Pricing from 'views/pages/Pricing.jsx';
import ReactTables from 'views/tables/ReactTables.jsx';
import Register from 'views/pages/Register.jsx';
import RegularForms from 'views/forms/RegularForms.jsx';
import RegularTables from 'views/tables/RegularTables.jsx';
import Rtl from 'views/pages/Rtl.jsx';
import SweetAlert from 'views/components/SweetAlert.jsx';
import Timeline from 'views/pages/Timeline.jsx';
import Typography from 'views/components/Typography.jsx';
import User from 'views/pages/User.jsx';
import UserDetail from './modules/users/UserDetail';
import UsersTable from './modules/users/UsersTable';
import ValidationForms from 'views/forms/ValidationForms.jsx';
import VectorMap from 'views/maps/VectorMap.jsx';
import Widgets from 'views/Widgets.jsx';
import Wizard from 'views/forms/Wizard.jsx';
import VerificationCode from './modules/auth/VerificationCode';

const routes = [
  {
    path: '/dashboard',
    name: 'COSMIC GO',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin'
  },
  {
    collapse: true,
    name: 'Teams',
    rtlName: 'صفحات',
    icon: 'tim-icons icon-molecule-40',
    state: 'teamsCollapse',
    views: [
      {
        path: '/admin-team',
        name: 'Admin Team',
        rtlName: 'عالتسعير',
        mini: 'P',
        rtlMini: 'ع',
        component: Pricing,
        layout: '/auth'
      },
      {
        path: '/add-member',
        name: 'Add Member',
        rtlName: 'صودعم رتل',
        mini: 'RS',
        rtlMini: 'صو',
        component: Rtl,
        layout: '/rtl'
      }
    ]
  },
  {
    collapse: true,
    name: 'USERS',
    icon: 'tim-icons icon_user_rounded',
    state: 'pagesCollapse',
    views: [
      {
        path: '/users-table',
        name: 'Admin Users',
        mini: 'AU',
        component: UsersTable,
        layout: '/admin'
      }
      // {
      //   path: '/rtl-support',
      //   name: 'RTL Support',
      //   rtlName: 'صودعم رتل',
      //   mini: 'RS',
      //   rtlMini: 'صو',
      //   component: Rtl,
      //   layout: '/rtl'
      // },
      // {
      //   path: '/timeline',
      //   name: 'Timeline',
      //   rtlName: 'تيالجدول الزمني',
      //   mini: 'T',
      //   rtlMini: 'تي',
      //   component: Timeline,
      //   layout: '/admin'
      // },
      // {
      //   path: '/register',
      //   name: 'Register',
      //   rtlName: 'تسجيل',
      //   mini: 'R',
      //   rtlMini: 'صع',
      //   component: Register,
      //   layout: '/auth'
      // },
      // {
      //   path: '/lock-screen',
      //   name: 'Lock Screen',
      //   rtlName: 'اقفل الشاشة',
      //   mini: 'LS',
      //   rtlMini: 'هذاع',
      //   component: Lock,
      //   layout: '/auth'
      // },
      // {
      //   path: '/user-profile',
      //   name: 'User Profile',
      //   rtlName: 'ملف تعريفي للمستخدم',
      //   mini: 'UP',
      //   rtlMini: 'شع',
      //   component: User,
      //   layout: '/admin'
      // }
    ]
  },
  {
    collapse: true,
    name: 'SCOOTERS',
    rtlName: 'المكونات',
    icon: 'tim-icons icon_scooter',
    state: 'componentsCollapse',
    views: [
      // {
      //   collapse: true,
      //   name: 'Multi Level Collapse',
      //   rtlName: 'انهيار متعدد المستويات',
      //   mini: 'MLT',
      //   rtlMini: 'ر',
      //   state: 'multiCollapse',
      //   views: [
      //     {
      //       path: '/buttons',
      //       name: 'Buttons',
      //       rtlName: 'وصفت',
      //       mini: 'B',
      //       rtlMini: 'ب',
      //       component: Buttons,
      //       layout: '/admin'
      //     }
      //   ]
      // },
      {
        path: '/management-table',
        name: 'Management',
        rtlName: 'وصفت',
        mini: 'MT',
        rtlMini: 'ب',
        component: ManagementTable,
        layout: '/admin'
      },
      {
        path: '/grid-system',
        name: 'Admin Inventory',
        rtlName: 'نظام الشبكة',
        mini: 'GS',
        rtlMini: 'زو',
        component: Grid,
        layout: '/admin'
      },
      {
        path: '/panels',
        name: 'Add Inventory',
        rtlName: 'لوحات',
        mini: 'P',
        rtlMini: 'ع',
        component: Panels,
        layout: '/admin'
      },
      {
        path: '/location',
        name: 'Location',
        rtlName: 'الحلو تنبيه',
        mini: 'SA',
        rtlMini: 'ومن',
        component: Location,
        layout: '/admin'
      },
      {
        path: '/notifications',
        name: 'Settings',
        rtlName: 'إخطارات',
        mini: 'N',
        rtlMini: 'ن',
        component: Notifications,
        layout: '/admin'
      }
      // {
      //   path: '/icons',
      //   name: 'Icons',
      //   rtlName: 'الرموز',
      //   mini: 'I',
      //   rtlMini: 'و',
      //   component: Icons,
      //   layout: '/admin'
      // },
      // {
      //   path: '/typography',
      //   name: 'Typography',
      //   rtlName: 'طباعة',
      //   mini: 'T',
      //   rtlMini: 'ر',
      //   component: Typography,
      //   layout: '/admin'
      // }
    ]
  },
  {
    collapse: true,
    name: 'Batteries',
    rtlName: 'إستمارات',
    icon: 'tim-icons icon_powerbank_menu',
    state: 'formsCollapse',
    views: [
      {
        path: '/management-table',
        name: 'Management',
        rtlName: 'أشكال عادية',
        mini: 'MT',
        rtlMini: 'صو',
        component: ManagementTable,
        layout: '/admin'
      },
      {
        path: '/extended-forms',
        name: 'Admin Inventory',
        rtlName: 'نماذج موسعة',
        mini: 'EF',
        rtlMini: 'هوو',
        component: ExtendedForms,
        layout: '/admin'
      },
      {
        path: '/validation-forms',
        name: 'Add Inventory',
        rtlName: 'نماذج التحقق من الصحة',
        mini: 'VF',
        rtlMini: 'تو',
        component: ValidationForms,
        layout: '/admin'
      },
      {
        path: '/wizard',
        name: 'Location',
        rtlName: 'ساحر',
        mini: 'W',
        rtlMini: 'ث',
        component: Wizard,
        layout: '/admin'
      },
      {
        path: '/wizard',
        name: 'Settings',
        rtlName: 'ساحر',
        mini: 'W',
        rtlMini: 'ث',
        component: Wizard,
        layout: '/admin'
      }
    ]
  },
  {
    collapse: true,
    name: 'RIDES',
    rtlName: 'الجداول',
    icon: 'tim-icons icon_worldwide',
    state: 'tablesCollapse',
    views: [
      {
        path: '/rides',
        name: 'Historic Rides',
        rtlName: 'طاولات عادية',
        mini: 'RT',
        rtlMini: 'صر',
        component: UsersTable,
        layout: '/admin'
      }
      // {
      //   path: '/extended-tables',
      //   name: 'Extended Tables',
      //   rtlName: 'جداول ممتدة',
      //   mini: 'ET',
      //   rtlMini: 'هور',
      //   component: ExtendedTables,
      //   layout: '/admin'
      // },
      // {
      //   path: '/react-tables',
      //   name: 'React Tables',
      //   rtlName: 'رد فعل الطاولة',
      //   mini: 'RT',
      //   rtlMini: 'در',
      //   component: ReactTables,
      //   layout: '/admin'
      // }
    ]
  },
  {
    collapse: true,
    name: 'BILLING',
    rtlName: 'خرائط',
    icon: 'tim-icons icon_wallet',
    state: 'mapsCollapse',
    views: [
      {
        path: '/google-maps',
        name: 'Payments',
        rtlName: 'خرائط جوجل',
        mini: 'GM',
        rtlMini: 'زم',
        component: GoogleMaps,
        layout: '/admin'
      }
      // {
      //   path: '/full-screen-map',
      //   name: 'Full Screen Map',
      //   rtlName: 'خريطة كاملة الشاشة',
      //   mini: 'FSM',
      //   rtlMini: 'ووم',
      //   component: FullScreenMap,
      //   layout: '/admin'
      // },
      // {
      //   path: '/vector-map',
      //   name: 'Vector Map',
      //   rtlName: 'خريطة المتجه',
      //   mini: 'VM',
      //   rtlMini: 'تم',
      //   component: VectorMap,
      //   layout: '/admin'
      // }
    ]
  },
  {
    collapse: true,
    name: 'SETTINGS',
    rtlName: 'خرائط',
    icon: 'tim-icons icon_feature',
    state: 'mapsCollapse',
    views: [
      {
        path: '/google-maps',
        name: 'Customize',
        rtlName: 'خرائط جوجل',
        mini: 'GM',
        rtlMini: 'زم',
        component: GoogleMaps,
        layout: '/admin'
      }
    ]
  },
  {
    collapse: true,
    name: 'LOGOUT',
    rtlName: 'خرائط',
    icon: 'tim-icons icon_exit',
    state: 'mapsCollapse',
    views: [
      {
        path: '/google-maps',
        name: 'Customize',
        mini: 'GM',
        component: GoogleMaps,
        layout: '/admin'
      },
      {
        path: '/login',
        name: 'Login',
        mini: 'L',
        component: Login,
        layout: '/auth',
        redirect: true
      },
      {
        path: '/user-detail',
        name: 'User Detail',
        mini: 'L',
        component: UserDetail,
        layout: '/admin',
        redirect: true
      },
      {
        path: '/verification-code',
        name: 'verifiocation code',
        mini: 'VC',
        component: VerificationCode,
        layout: '/auth',
        redirect: true
      }
    ]
  }
  // {
  //   path: '/widgets',
  //   name: 'Widgets',
  //   rtlName: 'الحاجيات',
  //   icon: 'tim-icons icon-settings',
  //   component: Widgets,
  //   layout: '/admin'
  // },
  // {
  //   path: '/charts',
  //   name: 'Charts',
  //   rtlName: 'الرسوم البيانية',
  //   icon: 'tim-icons icon-chart-bar-32',
  //   component: Charts,
  //   layout: '/admin'
  // },
  // {
  //   path: '/calendar',
  //   name: 'Calendar',
  //   rtlName: 'التقويم',
  //   icon: 'tim-icons icon-time-alarm',
  //   component: Calendar,
  //   layout: '/admin'
  // }
];

export default routes;
