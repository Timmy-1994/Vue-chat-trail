<template lang='pug'>
  .msg-wrapper
    .msg-box(
      v-for='msg,index in messages'
      :key='index'
      :style="msg.user==self?{justifyContent:'flex-end'}:{justifyContent:'flex-start'}"
    )
      .msg.our(v-if='msg.user==self' :style="ourbgc") {{ msg.message }}
      .avatar(v-if='msg.user!=self' :style="avatar")
      .msg.other(v-if='msg.user!=self' :style="otherbgc") {{ msg.message }}

</template>
<script>

export default {
  name: 'msgBox',
  data () {
    return {}
  },
  props: {
    otherbgc: {
      type: Object,
    },
    ourbgc: {
      type: Object,
    },
    avatar:{
      type: Object,
    },
    messages:{
      type: Array,
      require: true
    },
    self:{
      type: String,
      require: true
    }
  }
}

</script>

<style lang='scss' scoped>

$otherbgc: #cff2ff;
$ourbgc: #fff4cf;

// msg
.msg-wrapper{
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
    
  .msg-box{
    display: flex;
    padding: 1em 0.5em;
    .avatar{
      margin: 0 0.5em;
      border-radius: 100%;
      width: 45px;
      height: 45px;
      //background-image: // inline style by props
      background-position: center center;
      background-size: 80%;
      background-repeat: no-repeat;
      background-color: #fff;
    }

    .msg{
      border-radius: 3px;
      min-height: 45px;
      max-width: 80%;
      word-wrap:break-word;
      padding: 0.5em;
      box-sizing: border-box;
      position: relative;// for :after 's absolute

      &:after{
        content: '';
        position: absolute;
        border: 5px solid transparent;
        top: 35%;
      }

      &.other{
        background-color: $otherbgc;
        border-color: $otherbgc;// could be override by inline style(by pass in props)
        &:after{
          border-right-color: inherit;// just inherit form parent "pseudo dom" couldn't style by inline
          left: -10px;
        }
      }

      &.our{
        background-color: $ourbgc;
        border-color: $otherbgc;// could be override by inline style(by pass in props)
        &:after{
          border-left-color: inherit;// just inherit form parent "pseudo dom" couldn't style by inline
          right: -10px;
        }
      }

    }
  }
}

</style>