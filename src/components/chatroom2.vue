<template lang='pug'>
  .wrapper
    .chat-box
      b.date 00/00
      msg(
        :otherbgc= 'msgStyle.otherbgc'
        :ourbgc= 'msgStyle.ourbgc'
        :avatar= 'msgStyle.avatar'
        :messages= 'messages'
        :self= 'user'
      )
      inter(
        :leftic= 'interStyle.leftic'
        :submitic= 'interStyle.submitic'
        :submitibgc= 'interStyle.submitibgc'
        :textareabg= 'interStyle.textareabg'
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
  name: 'chatroom2',
  data () {
    return {
      user: 'chatroom-user-2',
      messages: [], // obj in array
      socket : io('localhost:3001'),
      msgStyle:{
        otherbgc: {backgroundColor:'#4a3d13',borderColor:'#4a3d13'},
        ourbgc: {backgroundColor:'#2d5b1a',borderColor:'#2d5b1a'},
        avatar: {backgroundImage: "url('./static/logo.png')"}
      },
      interStyle:{
        leftic:{color:'#f9be00'},
        submitic:{color:'#4a3d13'},
        submitibgc:{backgroundColor:'#f9be00'},
        textareabg:{backgroundColor:'rgba(256,256,256,0.6)'}
      }
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

$mainbg: #f9be00;
$textcolor: #fff;

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