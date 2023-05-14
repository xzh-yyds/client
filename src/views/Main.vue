<template>
    <el-container class="container">
        <el-header>
          <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
              rel="stylesheet"
          />
          <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
              rel="stylesheet"
          />
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="changeUrl(`/home`)">
                <img class="img" src="../assets/image/icosahedron.png" alt="">
                <span style="margin-left: 8px;">Home</span>
            </el-menu-item>
            <el-menu-item index="2" @click="changeUrl(`/identification`)">
                Microservice Identification
            </el-menu-item>
            <el-menu-item index="3" @click="changeUrl(`/guidance`)">
                Classifier Guidance
            </el-menu-item>
            <el-menu-item index="4" @click="changeUrl(`/evaluation`)">
                Evaluations
            </el-menu-item>
            <el-menu-item index="5" @click="changeUrl(`/reference`)">
                References
            </el-menu-item>
            <el-menu-item index="6" @click="changeUrl(`/faq`)">
                FAQ
            </el-menu-item>
            <el-menu-item index="7">
                <img class="img" src="../assets/image/github.jpg" alt="" >
                <a style="margin-left: 8px;" href="https://github.com/zwc233/guided-diffusion" target="_blank">Github</a>
            </el-menu-item>
            <el-menu-item index="8">
                <span>你好, admin</span>
                &nbsp;&nbsp;
                <img class = "avator" src="../assets/image/avator.jpg" alt="">
            </el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css"

export default {
    data() {
        return {}
    },
    methods: {
        changeUrl(url) {
            if(this.$route.path !== url) {
                this.$router.push(url)
            }
        }
    },
    components: {
      
    }
}
</script>

<style lang="less" scoped>
.container {
  font-family: "Roboto", sans-serif;
  color: #2c3e50;
}

.centered-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 5em;
}

.big_left_title {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 3em;
}

.centered-image {
  width: 100%;
  text-align: center;
}

.centered-text {
  text-align: center;
  max-width: 73em;
  margin-bottom: 1em;
}

.left-image, .right-image {
  position: absolute;
}

.left-image {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.right-image {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  line-height: 1.5em;
}

.el-menu-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-family: "Roboto", sans-serif;
  font-weight: 20;
  color: #303133;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  .img {
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  };
  .avator {
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  };
}

.el-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 20;
  color: #303133;
}

.el-menu {
  background: linear-gradient(to bottom, #ADD8E6, #FFFFFF) !important;
}

html, body {
  margin: 0;
  padding: 0;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>