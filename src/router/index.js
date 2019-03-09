import Vue from 'vue'
import Router from 'vue-router'
// import chatroom1 from '@/components/chatroom1'
import chatroom1 from '@/components/chatroom1'
import chatroom2 from '@/components/chatroom2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chatroom1',
      name: 'chatroom-ladyout-1',
      component: chatroom1
    },
    {
      path: '/chatroom2',
      name: 'chatroom-ladyout-2',
      component: chatroom2
    }
  ]
})
