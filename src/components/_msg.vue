<template lang='pug'>
  .msg-wrapper
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.other
      .avatar
      .msg otherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherotherother
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.our
      //.avatar
      .msg our
    .msg-box.other
      .avatar
      .msg other 
</template>

<script>

export default {
  name: 'msgBox',
  data () {
    return {}
  },
  props: {
    othersidebgc: {
      type: String,
    },
    oursidebgc: {
      type: String,
    },
    avatar:{
      type: String,
      default: 'no url in props'
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
          border-right-color: $otherbgc;
          left: -10px;
        }
      }
    }

    &.our {
      flex-direction: row-reverse;
      .msg{
        background-color: $ourbgc;
        &:after{
          border-left-color: $ourbgc;
          right: -10px;
        }
      }
    }
  }
}

</style>