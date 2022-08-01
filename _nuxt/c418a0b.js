(window.webpackJsonp=window.webpackJsonp||[]).push([[19,83],{595:function(t,e,r){"use strict";r(281);var n=r(282);e.a=Object(n.a)("layout")},639:function(t,e,r){"use strict";r.r(e);r(42),r(90),r(84),r(31),r(11),r(228),r(12);var n={name:"FormTask",props:{title:{type:String,default:""}},data:function(){return{loading:!1,allData:[],documentStatus:[],itemSearch:[],searchStatus:"Y"===this.$auth.user.is_sap_user?"pending":"draft",searchItem:"",search:"",totalData:0,options:{},form:{},listType:"myTicket",headers:[{text:"Task Number",value:"task_number",cellClass:"disable-wrap"},{text:"Title",value:"title",cellClass:"disable-wrap"},{text:"Sub Category",value:"sub_category.category_name",cellClass:"disable-wrap"},{text:"Milestone",value:"section.title",cellClass:"disable-wrap"},{text:"Doc Date",value:"created_at",cellClass:"disable-wrap"},{text:"Due Date",value:"due_date",cellClass:"disable-wrap"},{text:"Assiged To",value:"assignees",cellClass:"disable-wrap"},{text:"Priority",value:"priority.title",cellClass:"disable-wrap"},{text:"Approval",value:"approve",cellClass:"disable-wrap"},{text:"Action",value:"id",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}},computed:{batchItems:function(){return"Y"===this.$auth.user.is_sap_user?["Approve","Reject"]:"draft"===this.searchStatus?["Submit Approval","Delete"]:"pending"===this.searchStatus?["Cancel"]:"approved"===this.searchStatus?["Download"]:("canceled"===this.searchStatus||this.searchStatus,[""])}},mounted:function(){this.getDataFromApi()},methods:{changeList:function(t){this.listType=t,this.getDataFromApi()},getInitial:function(t){var e=t.trim().split(" ");return e.reduce((function(t,r,n){return 0!==n&&n!==e.length-1||(t="".concat(t).concat(r.charAt(0).toUpperCase())),t}),"")},newData:function(){this.$emit("newData")},editItem:function(t){this.form=Object.assign({},t),this.statusProcessing="update",this.$emit("editItem",t)},itemRowBackground:function(t){switch(t.approval){case"Pending":return"bg-orange";default:return"bg-white"}},batchActions:function(t){if(this.selected.length<1)this.$swal({type:"error",title:"Error",text:"Please select at least 1 row!"});else try{var e=this,r=[];switch(t){case"Submit Approval":e.batchSubmitDocument(this.selected);break;case"Delete":this.selected.forEach((function(t){r.push(t.id)})),e.batchDeleteDocument(r);break;case"Cancel":e.batchCancelDocument(this.selected);break;case"Reject":this.$refs.formApproval.editItem(this.selected,"Reject");break;case"Approve":this.$refs.formApproval.editItem(this.selected,"Approve")}}catch(t){this.$swal({type:"error",title:"Error",text:t})}},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0,this.$axios.get("/api/tasks/task",{params:{options:this.options,searchItem:this.searchItem,documentStatus:this.documentStatus,searchStatus:this.searchStatus,search:this.search,listType:this.listType}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.$emit("dataForToolbar",{itemSearch:e.data.filter}),t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},o=r(81),c=r(89),l=r.n(c),d=r(106),h=r(715),m=r(862),f=r(261),v=r(257),k=r(565),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-overlay",{attrs:{value:t.loading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),r("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,"fixed-tabs":"","show-select":"",dense:"","fixed-header":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Ticket Lists","new-data-text":"New Ticket","show-batch-action":!0,"batch-actions":t.batchItems},on:{emitData:t.emitData,newData:t.newData,batchActions:t.batchActions,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.id",fn:function(e){var n=e.item;return[r("v-btn",{staticClass:"font-weight-bold text-right",attrs:{small:"",text:"",color:"primary"},on:{click:function(e){return t.editItem(n)}}},[t._v("\n        Edit\n      ")])]}},{key:"item.assignees",fn:function(e){var n=e.item;return t._l(JSON.parse(n.assignees),(function(e){return r("v-tooltip",{key:e.nik,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},"v-btn",c,!1),o),[t._v("\n            "+t._s(t.getInitial(e.name))+"\n          ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e.name))])])}))}},{key:"item.approve",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:"0"===n.approve?"orange":"green",label:"",small:"","text-color":"white"}},["0"===n.approve?r("span",{attrs:{left:""}},[t._v("Pending ")]):r("span",{attrs:{left:""}},[t._v("Approve ")])])]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VChip:h.a,VDataTable:m.a,VOverlay:f.a,VProgressCircular:v.a,VTooltip:k.a})},685:function(t,e,r){"use strict";r.r(e);var n={name:"MasterRole",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loading:!0,workspace:[],workspaceAssign:[],allData:[],documentStatus:[],departments:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",displayStyle:"card",form:{},defaultItem:{},options:{},countMyTicket:null,countTeamTicket:null,countAssignTicket:null,listType:"myTicket",headers:[{text:"Role Name",value:"name"},{text:"Description",value:"description"},{text:"Guard",value:"guard_name"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Tasks"}},computed:{formTitle:function(){return-1===this.editedIndex?"New Task":"Edit Task"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},mounted:function(){this.refreshData()},methods:{refreshData:function(){this.getDepartments(),this.getWorkSpace()},getDataFromApi:function(){this.$refs.taskList.getDataFromApi()},setCountTeamTicket:function(data){this.countTeamTicket=data},setCountAssignTicket:function(data){this.countAssignTicket=data},setCountMyTicket:function(data){this.countMyTicket=data},changeList:function(t){this.listType=t,this.$refs.taskList.changeList(t)},newData:function(){this.editedIndex=-1,this.$refs.formTask.newData(this.form)},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.formTask.editItem(t)},getWorkSpace:function(){var t=this;this.loading=!0,this.$axios.get("/api/tasks/workspace",{params:{displayStyle:this.displayStyle}}).then((function(e){t.loading=!1,t.workspace=e.data.data.rows,t.workspaceAssign=e.data.data.assignees,t.form=e.data.data.form,t.countMyTicket=e.data.data.countMyTicket,t.countAssignTicket=e.data.data.countAssignTicket,t.countTeamTicket=e.data.data.countTeamTicket})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDepartments:function(){var t=this;this.$axios.get("/api/master/departments").then((function(e){t.$auth.$storage.setLocalStorage("departments",e.data)}))}}},o=r(81),c=r(89),l=r.n(c),d=r(123),h=r(382),m=r(581),f=r(595),v=r(384),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{wrap:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[r("v-container",{attrs:{fluid:""}},[r("TasksFormList",{ref:"taskList",attrs:{loading:t.loading,workspace:t.workspaceAssign},on:{setCountMyTicket:t.setCountMyTicket,setCountAssignTicket:t.setCountAssignTicket,setCountTeamTicket:t.setCountTeamTicket,newData:t.newData,editItem:t.editItem}})],1)],1),t._v(" "),r("LazyTasksFormTask",{ref:"formTask",attrs:{"form-data":t.form,"list-type":t.listType,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{TasksFormList:r(639).default}),l()(component,{VCard:d.a,VCol:h.a,VContainer:m.a,VLayout:f.a,VRow:v.a})}}]);