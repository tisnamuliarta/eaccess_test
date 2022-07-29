(window.webpackJsonp=window.webpackJsonp||[]).push([[20,87],{593:function(t,e,r){"use strict";r(280);var o=r(281);e.a=Object(o.a)("layout")},727:function(t,e,r){"use strict";r.r(e);r(26);var o={name:"Taskcard",props:{loading:{type:Boolean,default:!0},pending:{type:Number,default:0},onProcess:{type:Number,default:0},complete:{type:Number,default:0},workspaceTitle:{type:String,default:null},workspace:{type:Array,default:function(){return[]}}},data:function(){return{workspaceRow:this.workspace}},methods:{setWorkSpace:function(t){this.workspaceRow=t},nextPage:function(t){return this.$router.push({path:"/tasks",query:{board:t.id,department:t.department,userId:this.$auth.user.id,display:"List"}})}}},n=r(81),c=r(89),l=r.n(c),d=r(730),v=r(123),m=r(54),h=r(380),f=r(570),k=r(130),w=r(382),_=r(714),S=r(278),y=r(694),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{"no-gutters":""}},[t.workspaceTitle?r("v-col",{attrs:{cols:"12"}},[r("v-subheader",{staticClass:"font-weight-bold"},[t._v(t._s(t.workspaceTitle))])],1):t._e(),t._v(" "),t.workspaceTitle?r("v-col",{attrs:{cols:"12"}},[r("v-divider")],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-row",{attrs:{"no-gutters":""}},[t._l(6,(function(e){return r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],key:e,staticClass:"pt-3 pa-3",attrs:{cols:"12",sm:"3",md:"2"}},[r("v-skeleton-loader",{attrs:{type:"card"}})],1)})),t._v(" "),t._l(t.workspaceRow,(function(e){return r("v-col",{key:e.department,staticClass:"pt-3 pa-3",attrs:{cols:"12",sm:"3",md:"3"}},[t.loading?t._e():r("v-card",{staticClass:"mx-auto",staticStyle:{cursor:"pointer"},attrs:{elevation:"0",color:"green"},on:{click:function(r){return t.nextPage(e)}}},[r("v-card-text",{staticStyle:{height:"90px"}},[r("span",{staticClass:"subtitle-1 white--text",staticStyle:{"text-transform":"capitalize !important"}},[t._v(t._s(e.department))])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-badge",{attrs:{content:t.pending,value:t.pending,color:"green",overlap:""}},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-vuetify ")])],1),t._v(" "),r("v-badge",{attrs:{content:t.onProcess,value:t.onProcess,color:"green",overlap:""}},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-vuetify ")])],1),t._v(" "),r("v-badge",{attrs:{content:t.complete,value:t.complete,color:"green",overlap:""}},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-vuetify ")])],1)],1)],1)],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBadge:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCol:h.a,VDivider:f.a,VIcon:k.a,VRow:w.a,VSkeletonLoader:_.a,VSpacer:S.a,VSubheader:y.a})},903:function(t,e,r){"use strict";r.r(e);r(42),r(228),r(12);var o={name:"MasterRole",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loading:!0,workspace:[],workspaceAssign:[],allData:[],documentStatus:[],departments:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",displayStyle:"card",form:{},defaultItem:{},options:{},headers:[{text:"Role Name",value:"name"},{text:"Description",value:"description"},{text:"Guard",value:"guard_name"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Tasks"}},computed:{formTitle:function(){return-1===this.editedIndex?"New Task":"Edit Task"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},mounted:function(){this.refreshData()},methods:{refreshData:function(){this.getDepartments(),this.getWorkSpace()},newData:function(){this.editedIndex=-1,this.$refs.formTask.newData(this.form)},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.formTask.editItem(t)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getWorkSpace:function(){var t=this;this.loading=!0,this.$axios.get("/api/tasks/workspace",{params:{displayStyle:this.displayStyle}}).then((function(e){t.loading=!1,t.workspace=e.data.data.rows,t.workspaceAssign=e.data.data.assignees,t.$refs.taskCardAssign.setWorkSpace(t.workspaceAssign),t.form=e.data.data.form}))},getDepartments:function(){var t=this;this.$axios.get("/api/master/departments").then((function(e){t.$auth.$storage.setLocalStorage("departments",e.data)}))},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/products/product",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},n=r(81),c=r(89),l=r.n(c),d=r(106),v=r(123),m=r(380),h=r(579),f=r(570),k=r(130),w=r(593),_=r(382),S=r(278),y=r(71),x=r(131),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{wrap:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-toolbar",{attrs:{color:"grey lighten-1",extended:"",flat:""}}),t._v(" "),r("v-card",{staticClass:"mx-auto",staticStyle:{"margin-top":"-64px"},attrs:{flat:"","max-width":"95%"}},[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",{staticClass:"black--text"},[t._v(" Workspace ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-apps")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:function(e){return t.newData()}}},[r("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1),t._v(" "),r("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.refreshData}},[r("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("TasksTaskCard",{ref:"taskCardAssign",attrs:{loading:t.loading,workspace:t.workspaceAssign,"workspace-title":"Assign To You"}})],1)],1),t._v(" "),r("LazyTasksFormTask",{ref:"formTask",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getWorkSpace}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{TasksTaskCard:r(727).default}),l()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VContainer:h.a,VDivider:f.a,VIcon:k.a,VLayout:w.a,VRow:_.a,VSpacer:S.a,VToolbar:y.a,VToolbarTitle:x.a})}}]);