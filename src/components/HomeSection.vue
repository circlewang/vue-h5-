<template>
  <div class="container">
    <div class="home">
      <video class="home-video" controls poster="../assets/images/home.png" src="https://oss.abmau.com/%E5%B9%BF%E5%91%8A%E7%89%8720190624.mp4"></video>
      <img src="../assets/images/1/1-bg.jpg" class="home-img">
    </div>
    <top ></top>
  </div>
</template>

<script>
import Top from './top'
export default {
  name: 'HomeSection',
  components:{Top},
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container{
  width: 100%;
  min-height: 100vh;
  background-color: #ffe202;
  position: relative;
  .home{
    width: 100%;
    .home-img{
      width: 100%;
      max-height: 100%;
      z-index: 0;
      // margin: -20% 0 20% 0;
    }
    .home-video{
      width: 100%;
      z-index: 1;
      position: absolute;
      top:30%;
    }
    
  }
  
}
</style>
