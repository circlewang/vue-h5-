<template>
  <div class="home">
    <home-section v-if="isIndex" @click.native="handleFirst"></home-section>
    <animate-section v-if="isSecond" @animateEnd="animateEnd"></animate-section>
    <brand-section v-if="isThird"></brand-section>
  </div>
</template>

<script>
import HomeSection from "./HomeSection";
import AnimateSection from "./AnimateSection";
import BrandSection from "./AnimateSection";
export default {
  name: "Home",
  components: { HomeSection, AnimateSection, BrandSection },
  data() {
    return {
      isIndex: true,
      isSecond: false,
      isThird: false,
      isEnd: ""
    };
  },
  methods: {
    handleFirst(){
      this.isIndex=false;
      this.isSecond=true;
    },
    animateEnd(e) {
      // console.log("e", e);
      let that=this;
      that.isEnd = e;
      // console.log("this.isEnd", this.isEnd);
      if (that.isEnd==12) {
        console.log(1)
        that.isSecond=false;
        console.log(2)
        that.isThird = true;
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  width: 100%;
}
</style>
