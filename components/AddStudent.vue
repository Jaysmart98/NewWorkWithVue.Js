<template>
    <div class="bg-white shadow w-100">
<!-- <p>{{name}}</p> -->

<h1>Enter Details</h1>
<input type="text" placeholder="Name" v-model="Name">
<input type="text" placeholder="Email" v-model="Email">
<input type="text" placeholder="Password" v-model="Password">
<input type="text" placeholder="Gender" v-model="Gender">
<input type="submit"  @click="addStudent()">

</div>
</template>

<script>
export default {
    data(){
        return{
Name:"",
Email:"",
Password:"",
Gender:"",
Obj:""
        }
    },
methods:{
addStudent(){
      let{Name,Email,Password,Gender,Obj}=this
      Obj ={Name,Email,Password,Gender}
this.$emit('addStudent',Obj)
}
}
}
</script>

<style>

</style>