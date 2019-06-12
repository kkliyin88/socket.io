<template>
  <div>
   <Input v-model="content1"></Input>
   <Button @click='fayan'  >发言</Button>
    <Button @click="join('red')" style='margin-left: 10px;' >进入红房间</Button>
    <Button @click="join('green')" style='margin-left: 10px;' >进入绿房间</Button>
    
     <Button @click="leave('red')" style='margin-left: 10px;' >离开红房间</Button>
    <Button @click="leave('green')" style='margin-left: 10px;' >离开绿房间</Button>
  </div>
</template>

<script>
//import {post,get} from './axios/axios.js';
  import io from 'socket.io-client'
    //const socket = io('ws://localhost:8080')  //可以有很多种写法io()==io('ws://localhost:8080')默认
    const socket = io('http://localhost:8080/info')  //命名空间info
    //socket = io.connect('ws://localhost:8080')
//const socket = io()
  
  export default {
    name: 'info',
    components: {
    },
    data() {
      return {
        loading: false,
        content1:'',
      }
    },
    mounted(){
      console.log('socket',socket)
      socket.on('connect',function(){ //服务器连接成功的回调函数
        console.log('连接成功');
//      socket.send('服务器你好') //简写
      });
     socket.on('message',function(message){
         console.log('服务器发送过来的消息:',message);
      })
      socket.on('error',function(error){
         console.log('infoError',error);
      })
    },
    methods: {
      fayan(){
        socket.send(this.content1)
      },
      join(name){
        socket.emit('join',name)
      },
      leave(name){
        socket.emit('leave',name)
      },
    }
  }
</script>
<style scoped>
</style>
