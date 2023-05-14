<template>
    <div>
        <h1 class="centered-content">
            <span style="margin-right: 15px; align-items: center;">Monolith to Microservice for</span>
            <div style="text-align: center;">
                <img class="java" src="../assets/image/java.png" alt="">
                <span style="color: #409EFF; margin-left: 5px;">Application</span>
            </div>
        </h1>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 75px;
  .java {
    height: 150px;
    width: 300px;
  }
}
</style>