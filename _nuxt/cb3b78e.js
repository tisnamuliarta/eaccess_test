(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{905:function(t,e,o){"use strict";o.r(e);o(42),o(228),o(55);var n={name:"BatchApproval",data:function(){return{dialog:!1,loading:!1,btnLoading:!1,singleSelect:!1,selected:[],itemGroupSearch:[],selectedItems:[],itemSearch:["Category","DocNum","Item Code","Item Name","Whs"],search:"",searchType:"",row:0,itemGroups:null,totalData:0,options:{},form:{},allData:[],headers:[{text:"Process Name",value:"name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Callback Message",value:"callback_message",sortable:!1,filterable:!1},{text:"Callback Trace",value:"callback_trace"}]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){var t=this;this.$echo.channel("BatchProgress."+this.$auth.user.id).on("batch.status",(function(e){t.row=e.document_id,t.getDataFromApi()}))},methods:{formatDate:function(t){return t.ResponseDate?this.$moment(new Date(parseInt(t.ResponseDate.substr(6)))).format("YYYY-MM-DD HH:mm:ss"):""},openApprovalDialog:function(t){var e=this;this.dialog=!0,this.row=t.id,this.search="",this.searchType="",this.selected=[],this.allData=[],setTimeout((function(){return e.getDataFromApi()}),100),this.form=t},reProcess:function(){var t=this;this.btnLoading=!0,this.$axios.post("/api/approval/batch-reprocess/"+this.row).then((function(e){t.btnLoading=!1,t.getDataFromApi(),t.$emit("getDataFromApi"),t.closeDialog()})).catch((function(e){t.btnLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},closeDialog:function(){this.dialog=!1},selectItems:function(){this.$emit("selectItems",{row:this.row,selected:this.selected}),this.closeDialog()},changeSelect:function(t){this.selectedItems=t,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,o=window.localStorage.getItem("cherry_token");this.$axios.get("/api/approval/batch-status/"+this.row,{params:{options:e.options,doc_id:e.form.id,searchType:e.searchType,selectedItems:e.selectedItems,itemGroups:e.itemGroups,search:e.search,cherry_token:o}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total})).catch((function(e){t.loading=!1}))}}},l=o(81),r=o(89),c=o.n(r),d=o(106),h=o(123),m=o(54),v=o(860),f=o(279),D=o(570),w=o(130),_=o(278),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"font-weight-medium"},[t._v("Batch Approval Status")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,dense:"",headers:t.headers,loading:t.loading,items:t.allData,options:t.options,"single-select":t.singleSelect,"server-items-length":t.totalData,"item-key":"Keys","show-select":""},on:{"update:options":function(e){t.options=e}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),"pending"!==t.form.status?o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.btnLoading},on:{click:t.reProcess}},[t._v("\n        Re-Process\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDataTable:v.a,VDialog:f.a,VDivider:D.a,VIcon:w.a,VSpacer:_.a})}}]);