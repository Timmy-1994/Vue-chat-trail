<template lang='pug'>
  .wrapper
    .chat-box
      b.date 00/00
      msg(
        :messages= 'messages'
        :self= 'user'
        :avatar= 'msgStyle.avatar'
      )
      inter(
        @sendmsg= 'sendmsg'
      )
</template>

<script>

import msg from './_msg'
import inter from './_inter'
import io from 'socket.io-client'

export default {
  components:{
    msg,
    inter
  },
  name: 'chatroom1',
  data () {
    return {
      user: 'chatroom-user-1',
      messages: [], // obj in array
      socket : io('localhost:3001'),
      msgStyle:{
        avatar: {backgroundImage: "url('./static/logo.png')"}
      },
      interStyle:{}
    }
  },
  methods:{
    sendmsg:function(msg){
      this.socket.emit('SEND_MESSAGE', {
          user: this.user,
          message: msg
      });
    }
  },
  mounted() {
    /**
     *  data : object
     *  this.message : array
    */
    this.socket.on('MESSAGE', (data) => {      
      this.messages.push(data);
      // or this.messages = [...this.messages, data];
    });
  }
}

</script>

<style lang='scss' scoped>

$mainbg: #00aff0;
$textcolor: #000;

// outerbox
.chat-box{
  background: $mainbg;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 375px;
  height: 667px;
  font-size: 15px;
  color: $textcolor;

  b.date{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    margin-top: 1em;
    border-radius: 16px;
    width: 60px;
    height: 28px;
    line-height: 28px;
    background-color: rgba(0,0,0,0.15);
    color: #fff;
    text-align: center;
    align-self: center;
  }

}

</style>