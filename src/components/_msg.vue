<template lang='pug'>
  .msg-wrapper
    .msg-box.our(
      v-for='msg,index in messages'
      :key='index'
      v-if='msg.user==self'
    )
      .msg(:style="ourbgc") {{ msg.message }}
      
    .msg-box.other(
      v-for='msg,index in messages'
      :key='index'
      v-if='msg.user!=self'
    )
      .msg(:style="otherbgc") {{ msg.message }}
    
    //- // SRC TEMPLATE

    //- .msg-box.our(:style="ourbgc")
    //-   .msg=text of our

    //- .msg-box.other(:style="otherbgc")
    //-   .avatar(:style={backgroundImage:'url('+avatar+')'})
    //-   .msg=text of other,text of other,text of other,text of other,text of other,text of other,text of other,text of other,text of other,text of other,

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
      type: String,
      default: 'no url in props'
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
    align-items: center;
    padding: 1em 0.5em;
    flex-wrap: nowrap;
    .avatar{
      margin: 0 0.5em;
      border-radius: 100%;
      width: 45px;
      height: 45px;
      //background-image:
      background-position: center;
      background-size: cover;
      background-color: #000;
    }

    .msg{
      border-radius: 3px;
      min-height: 45px;
      max-width: 80%;
      word-wrap:break-word;
      padding: 0.5em;
      box-sizing: border-box;
      position: relative;// for :after 's abs
      &:after{
        content: '';
        position: absolute;
        border: 5px solid transparent;
        top: 35%;
      }
    }

    &.other {
      .msg{
        background-color: $otherbgc;
        &:after{
          // border-right-color: $otherbgc;
          border-right-color: inherit;
          left: -10px;
        }
      }
    }

    &.our {
      flex-direction: row-reverse;
      .msg{
        background-color: $ourbgc;
        &:after{
          // border-left-color: $ourbgc;
          border-left-color: inherit;
          right: -10px;
        }
      }
    }
  }
}

</style>