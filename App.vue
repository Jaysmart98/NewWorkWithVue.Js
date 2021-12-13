<template>
   <div id="inp1">
     <fieldset>
       <h1>Simple Inventory system</h1>
        <hr> <h3>Purchase Goods online.... </h3> <hr>
        
     <input v-model="productName" placeholder="Productname">
     <input v-model="price" placeholder="price" type="number">
      <input v-model="firstname" placeholder="firstname">
     <input v-model="lastname" placeholder="lastname">
     <input v-model="email" placeholder="email" type="email">
     <input v-model="password" placeholder="password" type="password">


     <button @click="register">Register</button>
     <button @click="login">Login</button>
     <button @click="UploadGoods">Upload</button>
     <button @click="RetrieveGoods">Retrieve</button>
     <button @click="DeleteGoods">DeleteGoods</button>
     
 <hr>
     <section>
                <table border="2" width="300px" height="100px">
         <tr> 
            <th>S/N</th>
            <td>Name</td>
            <th>type</th>
            <th>price</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
          </table>
     </section>
     </fieldset>



    <!-- <router-link to ="/">Home</router-link>|
    <router-link to ="/about">About</router-link>|
    <router-link to ="/PageNotFound">PageNotFound</router-link>
    <router-view/>

<h1>my name is {{displayName}}</h1>
<h1>Im from the Department of {{displayDept}}</h1>
<h1>my age is {{$store.getters.displayAge}}</h1>
<button @click="changeName">Change Name</button>
<button @click="changeDept">Change Department</button>
<button @click="increaseAge">Increase Age</button>
<button @click="$store.dispatch('grow')">grow OLDER</button>
<button @click="$store.dispatch('growByFour')">GrowByFour</button>

     <div id="nav">
          <router-link to="/">Admin</router-link>
           <router-link to="/">Admin</router-link>
            <router-link to="/">Admin</router-link>
     </div> -->

    </div>
</template>
<script>
import axios from 'axios'
//  import {mapGetters} from 'vuex';

export default {
  data(){
     return{
       productName: '',
       price: ''
     }
  },

  // computed:{
  //   ...mapGetters(['displayName','displayDept','displayAge'])
  // },
  methods:{
    changeName(){
      this.$store.dispatch('changeName')
    },
    changeDept(){
      this.$store.dispatch('changeDept')
    },
    increaseAge(){
      this.$store.dispatch('increaseAge')
    },

   register(){
  let {email, password, firstname, lastname, productName, price} = this;
   axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADy9ndxcyVGCBsXH3kbhsNV77JWh52zvM",
   {email, password, firstname, lastname, productName, price, returnSecureToken: true }). then (
   res=>{
     localStorage.setItem("token", res.data.idToken);
     console.log(res.data)
   }
 )},
     login(){
         
     },

     UploadGoods(){
        let {productName, price}= this;
        let token = localStorage.getItem('token');
        axios.post(`https://myfirstproject-a4f6f-default-rtdb.firebaseio.com/goods.json?auth=${token}`,{
          productName, price
        }).then(res=>{
          console.log(res.data);
        })
     },
     RetrieveGoods(){
        let {productName, price}= this;
        axios.get('https://myfirstproject-a4f6f-default-rtdb.firebaseio.com/-MqTnYzgWaRtzpii6GPk.json',{
          productName, price
        }).then(res=>{
          console.log(res.data);
        })
     },
     DeleteGoods(){
        let {productName, price}= this;
        axios.delete('https://myfirstproject-a4f6f-default-rtdb.firebaseio.com/-MqTnYzgWaRtzpii6GPk.json',{
          productName, price
        }).then(res=>{
          console.log(res.data);
        })
     },
      
     
  }
}
</script>




<style>
#inp1{
 margin-left: 20px;
 color: rgb(5, 61, 61);

}
button{
  background-color:black ;
  color: white;
}
input{
  color: rgb(9, 9, 73);
  border: 3x solid aqua;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
