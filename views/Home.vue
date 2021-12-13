<template>

  <div class="home">
      <h1>I am the home page</h1>
      <p>{{fullname}}</p>

      <input type="text" placeholder="name">
      <input type="text" placeholder="email">
      <input type="text" placeholder="password">

            <button @click="SignIn()">Sign In</button>
      <p id="display"> </p>
  </div>

</template>

<script>

export default {
  name: 'Home',

  data(){

  },

  methods:{
    transferMoney(){
      alert('Transfer sucessfully')
     
      this.$router.go(1)
      this.$router.push('/about')
    }
    
  }
}
</script>
