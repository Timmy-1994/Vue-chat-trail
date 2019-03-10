<template lang='pug'>
  form.inter-box(@submit.prevent="sendmsg")
    a(href="#")
      font-awesome-icon(icon="paperclip" :style='leftic' )
    a(href="#")
      font-awesome-icon(icon="smile" :style='leftic' )
    .text-box()
      textarea-autosize(
        placeholder="Type something here..."
        ref="someName"
        :min-height=40
        :max-height=150
        :style='textareabg'
        v-model='msg'
      )
      button(
        type='submit'
        :style='submitibgc'
      )
        font-awesome-icon(icon="paper-plane" :style='submitic')
</template>

<script>

export default {
  name: 'interBox',
  data () {
    return {
      msg:'',
    }
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
    }
  },
  methods:{
    sendmsg: function(){
      this.$emit('sendmsg',this.msg)
      this.msg = ''
    }
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
    textarea{
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      padding: 0 0.5em; // top and bottom padding will cause "textarea component" gets wrong height value which uses "contentHeight"
      width:100%;
      box-sizing: border-box;   
      border: none;
      outline: none;
      overflow-y: scroll !important;
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