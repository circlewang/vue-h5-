<template>
  <div class="animate">
    <div class="first" @click="handleClickFirst">
      <transition name="slide-left">
        <img v-if="first_show" src="../assets/images/2/2-1-1.png" class="first-left" />
      </transition>
      <transition name="slide-right">
        <img v-if="first_show" src="../assets/images/2/2-1-2.png" class="first-right" />
      </transition>
    </div>
    <div class="second" @click="handleClickSecond">
      <transition name="slide-left">
        <img v-if="second_show" src="../assets/images/2/2-2-1.png" class="second-left" />
      </transition>
      <transition name="slide-right">
        <img v-if="second_show" src="../assets/images/2/2-2-2.png" class="second-right" />
      </transition>
    </div>
    <div class="third" @click="handlePage">
      <img v-if="third_show" src="../assets/images/2/2-3.gif" class="third-img" />
    </div>
    <top></top>
  </div>
</template>

<script>
import Top from "./top";
export default {
  name: "AnimateSection",
  components: { Top },
  data() {
    return {
      first_show: true,
      second_show: false,
      third_show: false
    };
  },
  methods: {
    handleClickFirst() {
      this.first_show = false;
      this.second_show = true;
    },
    handleClickSecond() {
      this.second_show = false;
      this.third_show = true;
    },
    handlePage() {
      this.$emit("animateEnd", 12);
    }
  }
};
</script>

<style lang="less" scoped>
.slide-left-enter-active {
  transition: all 0.3s ease;
}
.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
.slide-right-enter-active {
  transition: all 0.3s ease;
}
.slide-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 1.5, 0.8, 1);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.animate {
  width: 100%;
  min-height: 100vh;
  .first {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    .first-left {
      width: 50%;
      display: block;
      min-height: 100vh;
    }
    .first-right {
      width: 50%;
      display: block;
      min-height: 100vh;
    }
  }
  .second {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    .second-left {
      width: 50%;
      display: block;
      min-height: 100vh;
    }
    .second-right {
      width: 50%;
      display: block;
      min-height: 100vh;
    }
  }
  .third{
      width: 100%;
      background-color: #ffe202;
      .third-img{
          width: 100%;
          min-height:100vh ;
      }
  }
}
</style>
