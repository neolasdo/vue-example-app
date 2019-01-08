import Vue from 'vue'
import Router from 'vue-router'

// Main Containers
const MainContainer = () => import('@/containers/MainContainer')

// Admin Containers
const DefaultContainer = () => import('@/containers/admin/DefaultContainer')

// Views
const Dashboard = () => import('@/views/admin/Dashboard')

const Colors = () => import('@/views/components/theme/Colors')
const Typography = () => import('@/views/components/theme/Typography')

const Charts = () => import('@/views/components/Charts')
const Widgets = () => import('@/views/components/Widgets')

// Views - Components
const Cards = () => import('@/views/components/base/Cards')
const Forms = () => import('@/views/components/base/Forms')
const Switches = () => import('@/views/components/base/Switches')
const Tables = () => import('@/views/components/base/Tables')
const Tabs = () => import('@/views/components/base/Tabs')
const Breadcrumbs = () => import('@/views/components/base/Breadcrumbs')
const Carousels = () => import('@/views/components/base/Carousels')
const Collapses = () => import('@/views/components/base/Collapses')
const Jumbotrons = () => import('@/views/components/base/Jumbotrons')
const ListGroups = () => import('@/views/components/base/ListGroups')
const Navs = () => import('@/views/components/base/Navs')
const Navbars = () => import('@/views/components/base/Navbars')
const Paginations = () => import('@/views/components/base/Paginations')
const Popovers = () => import('@/views/components/base/Popovers')
const ProgressBars = () => import('@/views/components/base/ProgressBars')
const Tooltips = () => import('@/views/components/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/components/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/components/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/components/buttons/Dropdowns')
const BrandButtons = () => import('@/views/components/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/components/icons/Flags')
const FontAwesome = () => import('@/views/components/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/components/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/components/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/components/notifications/Alerts')
const Badges = () => import('@/views/components/notifications/Badges')
const Modals = () => import('@/views/components/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// View - Frontend
const Home = () => import('@/views/frontend/Home')

// Users
const Users = () => import('@/views/components/users/Users')
const User = () => import('@/views/components/users/User')

Vue.use(Router);

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        /*-------------------frontend routes----------------------------*/
        {
          path: '/',
          name: 'MainContainer',
          component: MainContainer,
          children: [
            {
              path: '/home',
              name: 'Home',
              component: Home,
            }
          ]
        },
        {
          path: '/pages',
          redirect: '/pages/404',
          name: 'Pages',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '404',
              name: 'Page404',
              component: Page404
            },
            {
              path: '500',
              name: 'Page500',
              component: Page500
            },
            {
              path: 'login',
              name: 'Login',
              component: Login
            },
            {
              path: 'register',
              name: 'Register',
              component: Register
            }
          ]
        },
        /*-------------------admin routes----------------------------*/
        {
          path: '/admin',
          redirect: '/admin/dashboard',
          name: 'AppContainer.vue',
          component: DefaultContainer,
          children: [
            {
              path: 'dashboard',
              name: 'Dashboard',
              component: Dashboard
            },
            {
              path: 'theme',
              redirect: '/theme/colors',
              name: 'Theme',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'colors',
                  name: 'Colors',
                  component: Colors
                },
                {
                  path: 'typography',
                  name: 'Typography',
                  component: Typography
                }
              ]
            },
            {
              path: 'charts',
              name: 'Charts',
              component: Charts
            },
            {
              path: 'widgets',
              name: 'Widgets',
              component: Widgets
            },
            {
              path: 'users',
              meta: { label: 'Users'},
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: '',
                  component: Users,
                },
                {
                  path: ':id',
                  meta: { label: 'User Details'},
                  name: 'User',
                  component: User,
                },
              ]
            },
            {
              path: 'base',
              redirect: '/base/cards',
              name: 'Base',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'cards',
                  name: 'Cards',
                  component: Cards
                },
                {
                  path: 'forms',
                  name: 'Forms',
                  component: Forms
                },
                {
                  path: 'switches',
                  name: 'Switches',
                  component: Switches
                },
                {
                  path: 'tables',
                  name: 'Tables',
                  component: Tables
                },
                {
                  path: 'tabs',
                  name: 'Tabs',
                  component: Tabs
                },
                {
                  path: 'breadcrumbs',
                  name: 'Breadcrumbs',
                  component: Breadcrumbs
                },
                {
                  path: 'carousels',
                  name: 'Carousels',
                  component: Carousels
                },
                {
                  path: 'collapses',
                  name: 'Collapses',
                  component: Collapses
                },
                {
                  path: 'jumbotrons',
                  name: 'Jumbotrons',
                  component: Jumbotrons
                },
                {
                  path: 'list-groups',
                  name: 'List Groups',
                  component: ListGroups
                },
                {
                  path: 'navs',
                  name: 'Navs',
                  component: Navs
                },
                {
                  path: 'navbars',
                  name: 'Navbars',
                  component: Navbars
                },
                {
                  path: 'paginations',
                  name: 'Paginations',
                  component: Paginations
                },
                {
                  path: 'popovers',
                  name: 'Popovers',
                  component: Popovers
                },
                {
                  path: 'progress-bars',
                  name: 'Progress Bars',
                  component: ProgressBars
                },
                {
                  path: 'tooltips',
                  name: 'Tooltips',
                  component: Tooltips
                }
              ]
            },
            {
              path: 'buttons',
              redirect: '/buttons/standard-buttons',
              name: 'Buttons',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'standard-buttons',
                  name: 'Standard Buttons',
                  component: StandardButtons
                },
                {
                  path: 'button-groups',
                  name: 'Button Groups',
                  component: ButtonGroups
                },
                {
                  path: 'dropdowns',
                  name: 'Dropdowns',
                  component: Dropdowns
                },
                {
                  path: 'brand-buttons',
                  name: 'Brand Buttons',
                  component: BrandButtons
                }
              ]
            },
            {
              path: 'icons',
              redirect: '/icons/font-awesome',
              name: 'Icons',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'coreui-icons',
                  name: 'CoreUI Icons',
                  component: CoreUIIcons
                },
                {
                  path: 'flags',
                  name: 'Flags',
                  component: Flags
                },
                {
                  path: 'font-awesome',
                  name: 'Font Awesome',
                  component: FontAwesome
                },
                {
                  path: 'simple-line-icons',
                  name: 'Simple Line Icons',
                  component: SimpleLineIcons
                }
              ]
            },
            {
              path: 'notifications',
              redirect: '/notifications/alerts',
              name: 'Notifications',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'alerts',
                  name: 'Alerts',
                  component: Alerts
                },
                {
                  path: 'badges',
                  name: 'Badges',
                  component: Badges
                },
                {
                  path: 'modals',
                  name: 'Modals',
                  component: Modals
                }
              ]
            }
          ]
        },
      ]
    },
  ]
})
