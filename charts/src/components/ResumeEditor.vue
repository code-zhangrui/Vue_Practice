<template>
 <div id="resumeEditor">
      <nav>
       <ol>
         <li v-for="(item,index) in resume.config" :class="{active: item.field===selected}" @click="selected=item.field"> {{item.field}} </li>
       </ol>
     </nav>
     <ol class="panels">
       <li v-for="item in resume.config" v-show="item.field===selected">

        <div v-if="resume[item.field] instanceof Array">
         <div class="subitem" v-for="(subitem,i) in resume[item.field]">
          <div class="resumeField" v-for="(value,key) in subitem">
           <label>{{key}}</label>
           <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
          </div>
          <hr>
         </div>
        </div>
       <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
        <label>{{key}}</label>
        <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
        </div>
       </li>
     </ol>
 </div>
</template>

<script>
export default{
	name:'ResumeEditor',
	computed:{
       selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab',value)
        }
        
       },
       resume(){
        return this.$store.state.resume
       }
	},
	methods:{
	 changeResumeField(path,value){
	  this.$store.commit('updateResume',{
	   path,value
	  })
	}
  }
}
</script>

<style lang="scss" scoped>
 #resumeEditor{
  background:white;
  box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  display:flex;
  flex-direction:row;
  overflow:auto;
  >nav{
   width:100px;
   background:#343D50;
   color:white;
   cursor:pointer;
   >ol{
    >li{
     height:48px;
     display:flex;
     justify-content:center;
     align-items:center;
     margin-top:16px;
     margin-bottom:16px;
     &.active{
       background:#fff2e3;
       color:#343D50
     }
    }
    li:hover{
      background:#6b778e;
      color:#E1E8EF;
    }
   }
  }
  > .panels{
       flex-grow: 1;
       background:#fff2e3;
       color:#343D50;
       > li {
         padding: 24px;
       }
     }
      svg.icon{
        width: 24px; 
        height: 24px;
     }
   }
    ol{
      list-style: none;
    }
   .resumeField{
     > label{
       display: block;

     }
     input[type=text]{
       margin: 16px 0;
       border: 1px solid #ddd;
       box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
       width: 100%;
       height: 40px;
       padding: 0 8px;
     }
   }
   hr{
     border: none;
     border-top: 1px solid #ddd;
     margin: 24px 0;
     }

</style>
