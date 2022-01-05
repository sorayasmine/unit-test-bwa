<template>
  <div id="app">
    <p ref="labelInputRef">Input your name</p>
    <input ref="inputRef" type="text" v-model="name" />
    <button ref="buttonRef" @click="isBtnClicked = true">click</button>
    <p ref="greetingRef" v-if="isBtnClicked">Welcome, {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {
  //   HelloWorld,
  data() {
    return {
      name: "",
      isBtnClicked: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
