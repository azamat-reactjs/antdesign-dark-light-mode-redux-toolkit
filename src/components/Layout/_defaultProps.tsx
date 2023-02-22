export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: 'Welcome',
        icon: null,
        component: null
      },
      {
        path: '/admin',
        name: 'Admin',
        icon: null,
        access: 'canAdmin',
        component: null,
        routes: [
          {
            path: '/admin/sub-page1',
            name: '1',
            icon: null,
            component: null
          },
          {
            path: '/admin/sub-page2',
            name: '2',
            icon: null,
            component: null
          },
          {
            path: '/admin/sub-page3',
            name: '3',
            icon: null,
            component: null
          }
        ]
      }
    ]
  },
  location: {
    pathname: '/'
  },
  appList: [
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    },
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: '',
      target: '_blank'
    },
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    },
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    },

    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    },
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    },
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    },
    {
      icon: null,
      title: 'Title',
      desc: 'Description',
      url: ''
    }
  ]
}
