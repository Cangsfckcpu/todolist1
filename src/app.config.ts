export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/info/index',
    'pages/todo-detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    custom:true,
    color:'#7A7E83',
    selectedColor:'#3cc51f',
    backgroundColor:'#ffffff',
    list:[
      {
        pagePath:'pages/index/index',
        iconPath:'image/icon_component.png',
        selectedIconPath:'image/icon_component_HL.png',
        text:'tabbar1'
      },
      {
        pagePath:'pages/info/index',
        iconPath:'image/icon_API.png',
        selectedIconPath:'image/icon_API_HL.png',
        text:'tabbar2'
      }
    ]
  }
})
