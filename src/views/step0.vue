<template>
  <div class="container--fluid">
    <div class="d-flex justify-center">
      <div style="width: 50%">
        <div id="main-block">
          <div class="st1-btn" @click="goToStep1" ></div>
          <div class="st2-btn" @click="goToStep2" ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#main-block {
  background-image: url("../assets/image/step_1.png");
  height: 900px;
  width: 100%;
  position: relative;
}
.st1-btn {
  width: 330px;
  height: 95px;
  position: absolute;
  left: 17%;
  top: 4%;
}

.st2-btn {
  width: 330px;
  height: 95px;
  position: absolute;
  left: 17%;
  top: 17%;
}
</style>
<script>
export default {
  name: 'Step1',
  data: () => {
    return {

    }
  },
  methods: {
    goToStep1 () {
      this.$router.push({name: 'Step1'})
    },
    goToStep2 () {
      this.$router.push({name: 'Step2'})
    }
  },
  mounted() {
  }
}
</script>
