(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{803:function(t,e,o){"use strict";o.r(e);var r=o(125),n=o(52),d=o(413),c=o(643),l=o(414),h={name:"FormBoard",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,boardnames:["one","two","three","four"],boarddesc:["new","progress","finalizing","complete"],colours:{card:"",cardButtons:"black--text transparent"},tasks:[{title:"a title",short_desc:"this is a short desc, see how i fly",long_desc:"the project involves writing a long sente",priority:3,stage:0,user:"admin",created:1279679227,assigned:["fred","simon","nancy"]},{title:"another thing wrong",short_desc:"fix the thing",long_desc:"not much happening in this description",priority:9,stage:1,user:"admin",created:1579279227,assigned:["admin"]},{title:"one more",short_desc:"this is a short desc, see how i fly",long_desc:"if i was good at writing i would have become a writer or at least something something",priority:1,stage:3,user:"james",created:1579679227,assigned:["joyce","carla","damien"]}],emptytask:{title:"",short_desc:"",long_desc:"",priority:1,stage:1,user:"",created:0,assigned:[],notes:[]},emptynote:{subject:"",message:""}}},methods:{getColor:function(t,e){return"priority"===e?t>8?"red":t>5?"orange":t>2?"blue":"green":"stage"===e?t>=3?"green lighten-3":t>=2?"red lighten-3":t>=1?"orange lighten-3":"blue lighten-3":void 0},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===t&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(t,e,data){var o=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.submitLoad=!1,o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}},m=o(62),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,[e(l.a,t._l(t.boardnames,(function(b,o){return e(d.a,{key:o},[e(r.a,{staticClass:"pa-2",attrs:{color:t.getColor(o,"stage"),"min-height":"400"}},[e(n.d,[t._v(t._s(b)+" "+t._s(o))]),t._v(" "),e(n.b,[t._v("this board is for "+t._s(t.boarddesc[o]))]),t._v(" "),t._l(t.tasks,(function(i,d){return e("div",{key:d},[i.stage==o?e(r.a,{staticClass:"ma-3",attrs:{color:t.getColor(i.priority,"priority"),width:"250",elevation:"5"}},[e(n.d,[t._v(t._s(i.title))]),t._v(" "),e("span",[e(n.b,[t._v("by "+t._s(i.user)+" on "+t._s(i.created))]),t._v(" "),e(n.c,{staticClass:"black--text"},[t._v(t._s(i.long_desc))])],1)],1):t._e()],1)}))],2)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);