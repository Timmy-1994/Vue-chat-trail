<template lang='pug'>
  .wrapper
    .chat-box
      b.date 06/16
      msg()
      inter()
</template>

<script>

import msg from './_msg'
import inter from './_inter'

export default {
  components:{
    msg,
    inter
  },
  name: 'chatroom1',
  data () {
    return {
      msgs:{},
      inters:{}
    }
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