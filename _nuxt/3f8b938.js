(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{652:function(t,e,n){"use strict";var o=n(7),r=n(662).start;o({target:"String",proto:!0,forced:n(663)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},655:function(t,e,n){"use strict";n(303);var o=n(304);e.a=Object(o.a)("layout")},656:function(t,e,n){"use strict";n(303);var o=n(304);e.a=Object(o.a)("flex")},662:function(t,e,n){var o=n(23),r=n(137),l=n(46),c=n(307),d=n(74),h=o(c),f=o("".slice),m=Math.ceil,w=function(t){return function(e,n,o){var c,w,v=l(d(e)),D=r(n),C=v.length,y=void 0===o?" ":l(o);return D<=C||""==y?v:((w=h(y,m((c=D-C)/y.length))).length>c&&(w=f(w,0,c)),t?v+w:w+v)}};t.exports={start:w(!1),end:w(!0)}},663:function(t,e,n){var o=n(113);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},672:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=672},994:function(t,e,n){"use strict";n.r(e);var o=n(108),r=n(125),l=n(52),c=n(656),d=n(134),h=n(655),f=n(301),m=n(69),w=n(110),v=(n(6),n(12),n(53),n(671)),D=(n(673),{name:"MasterRole",components:{HotTable:v.a},data:function(){return{totalData:0,loading:!1,submitLoad:!1,statusProcessing:"insert",dialog:!1,formData:[],url:"/api/master/department-sub-category",settings:{licenseKey:"non-commercial-and-evaluation",colHeaders:["ID","Department","Sub Category"],columns:[{data:"id",width:30,height:26,wordWrap:!1},{data:"category_name",type:"dropdown",width:120,height:26,wordWrap:!1,source:function(t,e){e(window.details.$auth.$storage.getLocalStorage("departments"))},strict:!0,filter:!1,allowInvalid:!1},{data:"title",width:200,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0]},contextMenu:{callback:function(t,e){var n=window.details;"remove_row"===t&&(n.isInvDetailChanges=!0,n.isInvChanges=!0)}},beforeRemoveRow:function(t,e,n,source){var o=window.details,r=prompt("Are your sure want to delete this rows?"),l=[];return""===r&&(n.forEach((function(t,e){var n=o.$refs.details.hotInstance.getDataAtCell(t,0);n&&l.push(n)})),l.length>0&&o.removeData(l),!0)}},detailsRoot:"detailsRoot"}},head:function(){return{title:"Sub Category"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},created:function(){this.getDepartments(),this.setInstance()},mounted:function(){this.getData()},methods:{setInstance:function(){window.details=this},getDepartments:function(){var t=this;this.$axios.get("/api/master/departments").then((function(e){t.$auth.$storage.setLocalStorage("departments",e.data)}))},getData:function(){var t=this;this.loading=!0,this.$axios.get(this.url).then((function(e){t.loading=!1;var n=t;setTimeout((function(){n.$refs.details.hotInstance.loadData(e.data.data.all)}),300)})).finally((function(){t.loading=!1}))},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1)},removeData:function(data){var t=this;this.$axios.delete(this.url+"/0",{params:{id:data.id}}).then((function(e){t.$swal({type:"success",title:"Success!",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.getData()}))},save:function(){var t=this;this.submitLoad=!0;var details=this.$refs.details.hotInstance.getSourceData();this.$axios.post(this.url,{details:details,formData:this.formData}).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.submitLoad=!1}))}}}),C=n(62),component=Object(C.a)(D,(function(){var t=this,e=t._self._c;return e(h.a,[e(c.a,{attrs:{sm12:"",md6:"","offset-md3":""}},[e(r.a,{staticClass:"mt-2"},[e(l.d,[e(m.a,{attrs:{flat:"",color:"white",dense:""}},[e(w.a,{staticClass:"hidden-xs-only"},[t._v("Sub Category")]),t._v(" "),e(f.a),t._v(" "),e(o.a,{attrs:{loading:t.loading,icon:""},on:{click:t.getData}},[e(d.a,[t._v("mdi-refresh")])],1)],1)],1),t._v(" "),e("div",{staticClass:"scroll-container"},[e("hot-table",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1),t._v(" "),e(l.a,[e(o.a,{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(e){return t.addLine()}}},[t._v("\n          Add Line\n        ")]),t._v(" "),e(f.a),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);