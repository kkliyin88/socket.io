<template>
  <div>
    <Input v-model="content1"> </Input>
   <Button @click='fayan' >发言</Button>
  </div>
</template>

<script>
  import io from 'socket.io-client'
  const socket = io('http://localhost:8080/job')
  export default {
    name: 'job',
    components: {
    },
    data() {
      return {
        loading: false,
        content1:'',
      }
    },
    mounted(){
      socket.on('connect',function(){ //服务器连接成功的回调函数
        console.log('连接成功');
//      socket.send('服务器你好') //简写
      });
     socket.on('message',function(message){
         console.log('服务器发送过来的消息:',message);
      })
      //监听服务器发送过来的消息
      socket.on('error',function(error){
        console.log('jobError',error);
      })
    },
    methods: {
      fayan(){
        socket.send(this.content1);
      },
    }
  }
</script>
<style scoped>
</style>
