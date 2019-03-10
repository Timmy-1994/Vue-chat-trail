<template lang='pug'>
  #app
    //- img(src="./assets/logo.png")
    header
      a(target="_blank" href="#/chatroom1") ChatRoom : style-1 user-1
      a(target="_blank" href="#/chatroom2") ChatRoom : style-2 user-2
    router-view
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='scss'>

//scrollbar
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  margin:10px 0 0 0;
}
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.5);
}

#app{
  font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1000px;
  margin: 0 auto;
  header{
    text-align: center;
    margin: 50px 0;
    a{
      padding: 15px;
    }
  }
}

</style>
