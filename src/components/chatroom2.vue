<template lang='pug'>
  .wrapper
    .chat-box
      b.date 06/16
      msg()
      inter(
        :leftic= 'inters.leftic'
        :submitic= 'inters.submitic'
        :submitibgc= 'inters.submitibgc'
        :textareabg= 'inters.textareabg'
      )
</template>

<script>

import msg from './_msg'
import inter from './_inter'

export default {
  components:{
    msg,
    inter
  },
  name: 'chatroom2',
  data () {
    return {
      msgs:{

      },
      inters:{
        leftic:{color:'#f9be00'},
        submitic:{color:'#4a3d13'},
        submitibgc:{backgroundColor:'#f9be00'},
        textareabg:{backgroundColor:'rgba(256,256,256,0.6)'}
      }
    }
  }
}

/** color sets of msg
 * $yellow: #f9be00;
 * $otherbgc: #4a3d13;
 * $ourbgc: #2d5b1a;
 */

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