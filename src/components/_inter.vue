<template lang='pug'>
  .inter-box()
    a(href="#")
      font-awesome-icon(icon="paperclip" :style='leftic' )
    a(href="#")
      font-awesome-icon(icon="smile" :style='leftic' )
    .text-box()
      textarea-autosize(
          placeholder="Type something here..."
          ref="someName"
          :min-height=40
          :max-height=200
          :style='textareabg'
        )
      button(:style='submitibgc')
        font-awesome-icon(icon="paper-plane" :style='submitic')
</template>

<script>

export default {
  name: 'interBox',
  data () {
    return {}
  },
  props:{
    leftic:{
      type: Object
    },
    submitic:{
      type: Object
    },
    submitibgc:{
      type: Object
    },
    textareabg:{
      type: Object
    },
  }
}
</script>

<style lang='scss' scoped>

$main: #00aff0;

// footer input
.inter-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0,0,0,0.5);
  padding: 1em 0;

  svg{
    font-size: 20px;
    color: $main;
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
      background-color: $main;
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