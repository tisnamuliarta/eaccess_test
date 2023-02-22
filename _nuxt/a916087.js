(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{974:function(t,e,o){"use strict";o.r(e);var n=o(108),r=o(413),c=o(643),l=o(954),d=o(134),m=o(277),h=o(184),f=o(25),v=o(635),D=o(276),w=o(275),A=o(414),k=(o(35),o(239),o(53),{name:"MasterRole",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,dialogLoading:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],documentType:[],documentStatus:[],itemSearch:[],selected:[],searchStatus:"draft",searchItem:"",search:"",department:{},form:{},defaultItem:{},options:{},optionDivision:{},headers:[{text:"Approval Name",value:"name"},{text:"Callback",value:"callback"},{text:"Action",value:"ACTIONS",align:"center"}],url:"/api/master/approval"}},head:function(){return{title:"Approval"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"},batchItems:function(){return["Delete","Duplicate"]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){},methods:{emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},actions:function(t,e){switch(t){case"Edit":this.editItem(e);break;case"View Files":this.openAttchment(e);break;case"Submit Approval":this.submitDocument(e);break;case"Cancel Approval":this.cancelDocument(e);break;case"Download Document":this.downloadDocument(e);break;case"Delete":this.batchDeleteDocument([e.id]);break;case"Approval Stages":this.$refs.approvalStages.openApprovalStages(e);break;case"Open Editor":this.$refs.formEditor.newData(e.attachment.file_path,e)}},getItemActions:function(t){return"draft"===t.status?["View Files","Open Editor","Submit Approval","Delete"]:"pending"===t.status?["Approval Stages","Cancel Approval"]:"approved"===t.status?["Edit"]:["Edit","Duplicate","Delete"]},getDataFromApi:function(){var t=this;this.loading=!0;this.$axios.get(this.url,{params:{options:this.options}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.defaultItem=Object.assign({},e.data.data.form),t.form=Object.assign({},e.data.data.form),t.documentType=e.data.data.document_type,t.$refs.forms.setDocumentType(t.documentType)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form,this.defaultItem),this.$refs.forms.setDocumentType(this.documentType)},editItem:function(t){this.$refs.forms.editItem(t,"")},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},batchActions:function(t){},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,o=this.statusProcessing;"insert"===o?(this.store("post",this.url,form,"insert",t),e.submitLoad=!1):"update"===o&&(this.store("put",this.url+"/"+this.form.id,form,"update",t),e.submitLoad=!1)},store:function(t,e,data,o){var n=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){"Error"===t.data.status?(n.$swal({type:"error",title:"Error",text:t.data.message}),r.submitLoad=!1):(n.dialog=!1,n.message=t.data.message,setTimeout((function(){return n.message=!1}),8e3),n.getDataFromApi())})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}}),I=k,S=o(62),component=Object(S.a)(I,(function(){var t=this,e=t._self._c;return e(c.a,[e(A.a,[e(r.a,{attrs:{cols:"12"}},[e("div",{staticClass:"mt-0"},[e(D.a,{attrs:{value:t.loading}},[e(w.a,{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),e(l.a,{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"73vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Approval Rules","new-data-text":"New Approval","show-batch-action":!0,"batch-actions":t.batchItems,"show-search-button":!0,"show-search-data":!0,"show-search-item":!1,"show-document-status":!1},on:{emitData:t.emitData,newData:t.newData,batchActions:t.batchActions}})]},proxy:!0},{key:"item.ACTIONS",fn:function(o){var r=o.item;return[e(n.a,{staticClass:"font-weight-bold text-right",attrs:{color:"primary",text:"",small:""},on:{click:function(e){return t.actions("Edit",r)}}},[t._v("\n              Edit\n            ")]),t._v(" "),e(v.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[e(n.a,t._g(t._b({staticClass:"mr-2",attrs:{color:"black",dark:"",icon:""}},"v-btn",c,!1),r),[e(d.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e(m.a,t._l(t.getItemActions(r),(function(o,i){return e(h.a,{key:i,on:{click:function(e){return t.actions(o,r)}}},[e(f.a,[e(f.c,[t._v(t._s(o))])],1)],1)})),1)],1)]}},{key:"item.id",fn:function(o){var n=o.item;return[e(d.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(n)}}},[t._v("\n              mdi-pencil-circle\n            ")]),t._v(" "),e(d.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.dialogPermission.openRolePermissions(n,"Role Permissions","role")}}},[t._v("\n              mdi-gate\n            ")])]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),e("LazyMasterFormApproval",{ref:"forms",attrs:{"form-data":t.form,"document-type":t.documentType,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),t.dialogLoading?e("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);