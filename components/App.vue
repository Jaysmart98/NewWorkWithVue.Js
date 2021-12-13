<template>
<div>
  <AddStudent @addStudent="addStudentParent"/>
    <!-- <Button text="Edit" color="brown"/>
    <Button text="Delete" color="red"/>
    <Button text="Rusticate" color="black"/> -->
<h1>List of students</h1>
<a :href="googlelink">go to google</a>
<!-- <img src="" alt=""> -->
<ul>
  <li v-for="(student,index) in students" :key="index">
    <span :class="student.Gender">{{student.Name}}</span>
    <span>{{student.Email}}</span>
    <span>{{student.Password}}</span>
    <span>{{student.Gender}}</span> 
    <button>Delete</button>
  </li>
</ul>
</div>
</template> 

<script>
import AddStudent from './components/AddStudent.vue'
// import Button from './components/Button.vue'
export default {
  data(){
    return{
      Name: "",
      Email: "",
      Password:"",
      Gender:"",
      students:[],
      googlelink:"www.google.com"
      // age:22
    }
  },
 methods:{
addStudentParent(Obj){
this.students.push(Obj);
console.log(this.students);
}
 },
 components:{
  AddStudent,
  // Button  
 }
}
// -- {{name}}{{age}} 
//  <div v-show="name=='praise'">Hello</div> 
// <!-- <div v-if="name=='Dami'">Hello</div> -->
</script>

<style>
.male{
  color:blue;
}
.female{
  color:rgb(228, 25, 150);
}
</style>
