import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`@/models/${m}`)),
  component,
});

export const getNavData = app => [
  {
    component: dynamicWrapper(app, [], () => import('@/layouts/BasicLayout')),
    layout: 'BasicLayout',
    path: '/',
    name: '工作台',
    key: 'homepage',
    children: [
      {
        name: "我的",
        key: 'app',
        path: '/app/myapp',
        component: dynamicWrapper(app, [], () => import('@/pages/Home'))
      },
      {
        name: "他的",
        key: 'setting',
        path: '/setting/hisapp',
        component: dynamicWrapper(app, [], () => import('@/pages/Setting'))
      },
    ]  
  },
  {
    component: dynamicWrapper(app, [], () => import('@/layouts/BasicLayout')),
    layout: 'FrameLayout',
    path: '/',
    name: '工作台',
    key: 'homepage',
    children: [
      {
        name: "我的",
        key: 'app',
        path: '/app/myapp',
        component: dynamicWrapper(app, [], () => import('@/pages/Home'))
      },
      {
        name: "他的",
        key: 'setting',
        path: '/setting/hisapp',
        component: dynamicWrapper(app, [], () => import('@/pages/Setting'))
      },
    ]  
  },
]    