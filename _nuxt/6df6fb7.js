(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{742:function(t,e,r){"use strict";r.r(e);var o={name:"FormBoard",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,boardnames:["one","two","three","four"],boarddesc:["new","progress","finalizing","complete"],colours:{card:"",cardButtons:"black--text transparent"},tasks:[{title:"a title",short_desc:"this is a short desc, see how i fly",long_desc:"the project involves writing a long sente",priority:3,stage:0,user:"admin",created:1279679227,assigned:["fred","simon","nancy"]},{title:"another thing wrong",short_desc:"fix the thing",long_desc:"not much happening in this description",priority:9,stage:1,user:"admin",created:1579279227,assigned:["admin"]},{title:"one more",short_desc:"this is a short desc, see how i fly",long_desc:"if i was good at writing i would have become a writer or at least something something",priority:1,stage:3,user:"james",created:1579679227,assigned:["joyce","carla","damien"]}],emptytask:{title:"",short_desc:"",long_desc:"",priority:1,stage:1,user:"",created:0,assigned:[],notes:[]},emptynote:{subject:"",message:""}}},methods:{getColor:function(t,e){return"priority"===e?t>8?"red":t>5?"orange":t>2?"blue":"green":"stage"===e?t>=3?"green lighten-3":t>=2?"red lighten-3":t>=1?"orange lighten-3":"blue lighten-3":void 0},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===t&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(t,e,data){var r=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){r.submitLoad=!1,r.$refs.dialogForm.closeDialog(),r.$emit("getDataFromApi")})).catch((function(t){r.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))}}},n=r(65),d=r(83),c=r.n(d),l=r(126),h=r(52),m=r(391),f=r(591),v=r(393),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",t._l(t.boardnames,(function(b,e){return r("v-col",{key:e},[r("v-card",{staticClass:"pa-2",attrs:{color:t.getColor(e,"stage"),"min-height":"400"}},[r("v-card-title",[t._v(t._s(b)+" "+t._s(e))]),t._v(" "),r("v-card-subtitle",[t._v("this board is for "+t._s(t.boarddesc[e]))]),t._v(" "),t._l(t.tasks,(function(i,o){return r("div",{key:o},[i.stage==e?r("v-card",{staticClass:"ma-3",attrs:{color:t.getColor(i.priority,"priority"),width:"250",elevation:"5"}},[r("v-card-title",[t._v(t._s(i.title))]),t._v(" "),r("span",[r("v-card-subtitle",[t._v("by "+t._s(i.user)+" on "+t._s(i.created))]),t._v(" "),r("v-card-text",{staticClass:"black--text"},[t._v(t._s(i.long_desc))])],1)],1):t._e()],1)}))],2)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:l.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCol:m.a,VContainer:f.a,VRow:v.a})}}]);