<template>
 <div id="topbar">
   <div class="wrapper">
     <span class="logo">Resume</span>
   </div>
  </div>
 </template>

<script>
 export default{
 	name:'Topbar'
 }
</script>

<style scoped lang="scss">
 #topbar{
 	background:#fff;
 	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
>.wrapper{
    min-width:1024px;
    max-width:1440px;
    margin:0 auto;
    height:64px;
 }
>.wrapper{
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 16px;
 }
 .logo{
 font-size:24px;
 color:#000;
  }
 }
   button{ 
     width:72px;
     height:32px;
     border: none;
     cursor: pointer;
     font-size: 18px; // 设计稿上是 20px，看起来太大，就改成 18px 了
     background:#ddd;
     color: #222;
     &:hover{
       box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
     }
     &.primary{
       background:#02af5f;
       color: white;
     }
 
    }
 </style>