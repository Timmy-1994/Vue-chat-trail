<template lang='pug'>
  .wrapper
    .chat-box
      b.date 06/16
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
      .inter-box
        a(href="#")
          font-awesome-icon(icon="paperclip")
        a(href="#")
          font-awesome-icon(icon="smile")
        .text-box
          textarea-autosize(
            placeholder="Type something here..."
            ref="someName"
            :min-height=40
            :max-height=200
            )
          button 
            font-awesome-icon(icon="paper-plane")
</template>

<script>


export default {
  name: 'chatroom1',
  data () {
    return {
      msg: '1'
    }
  }
}
</script>

<style lang='scss' scoped>

$blue: #00aff0;

$otherbgc: #cff2ff;
$ourbgc: #fff4cf;

$sendbtnc: #cff2ff;

$textcolor: #000;

//scrollbar
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.5);
}

// outerbox
.chat-box{
  background: $blue;
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

// footer input
.inter-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0,0,0,0.5);
  padding: 1em 0;
  svg{
    font-size: 20px;
    color: $blue;
  }
  .text-box{
    width: 70%;
    display: flex;
    height: 100%;
    textarea{
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      padding: 0.5em;
      width:100%;
      box-sizing: border-box;   
      border: none;
      outline: none;
      overflow-y: scroll !important;
      max-height: 100%;
    }
    button{
      background-color: $blue;
      border: 0;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      svg{
        color:#fff;
      }
    }
  }
}

</style>