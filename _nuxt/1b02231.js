(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{971:function(t,e,n){"use strict";n.r(e);var o=n(108),r=n(125),l=n(52),c=n(413),d=n(643),h=n(634),f=n(134),m=n(414),v=n(301),D=n(69),w=n(110),x=(n(6),{name:"MasterRole",data:function(){return{totalData:0,loading:!1,submitLoad:!1,statusProcessing:"insert",dialog:!1,formData:[],url:"/api/new-employee"}},head:function(){return{title:"Config"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.loading=!0,this.$axios.get(this.url).then((function(e){t.loading=!1,t.$refs.childDetails.setDataToDetails(e.data.data.rows,e.data.data.columns,e.data.data.header,t.formData)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},removeData:function(data){var t=this;this.$axios.delete(this.url+"/0",{params:{id:data.id}}).then((function(e){t.$swal({type:"success",title:"Success!",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.getData()}))},save:function(){var t=this;this.submitLoad=!0;var details=this.$refs.childDetails.getAddData();this.$axios.post(this.url,{details:details,formData:this.formData}).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.submitLoad=!1}))}}}),y=n(62),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e(d.a,[e(m.a,{attrs:{"no-gutters":"",align:"center","align-content":"center",justify:"center"}},[e(c.a,{attrs:{cols:"12",md:"8","align-self":"center"}},[e(r.a,{staticClass:"mt-2"},[e(D.a,{attrs:{flat:"",color:"white",dense:""}},[e(w.a,{staticClass:"hidden-xs-only"},[t._v("Data Vehicle")]),t._v(" "),e(h.a,{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),e(v.a),t._v(" "),e(o.a,{attrs:{loading:t.loading,icon:""},on:{click:t.getData}},[e(f.a,[t._v("mdi-refresh")])],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%",height:"75vh",overflow:"hidden"}},[e("LazyTableSimpleNormal",{ref:"childDetails",on:{removeData:t.removeData}})],1),t._v(" "),e(l.a,[e(v.a),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n            Save\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);