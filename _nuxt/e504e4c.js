(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{595:function(t,e,n){"use strict";n(281);var o=n(282);e.a=Object(o.a)("layout")},707:function(t,e,n){"use strict";n.r(e);n(55);var o=n(678),r=n.n(o),c=(n(679),{name:"Attachment",components:{Dropzone:r.a},data:function(){return{dialogAttachment:!1,showLoadingAttachment:!1,dialogTitle:"Attachment",options:{url:"https://sbo2.imip.co.id:3001/backendcore_test/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")}},headers:[{text:"Attachment",value:"file_name"},{text:"Action",value:"action"}],items:[],total:0,source_id:null,type:null,row:null}},methods:{openAttachment:function(t,e,n){var o=this;this.dialogAttachment=!0,this.source_id=t,this.type=e,this.row=n,setTimeout((function(){o.getAttachment()}),300)},sendingParams:function(t,e,n){n.append("source_id",this.source_id),n.append("type",this.type)},handleError:function(t,e,n){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var n=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row,type:this.type}),setTimeout((function(){n.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),n.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:e.type,source_id:e.source_id}}).then((function(n){e.items=n.data.data.rows,e.total=n.data.data.total,e.showLoadingAttachment=!1,t.$emit("eventCountAttachment",{total:n.data.data.total,row:t.row,type:t.type})})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}}),l=n(81),d=n(89),h=n.n(d),m=n(106),v=n(123),f=n(54),w=n(382),A=n(862),_=n(280),y=n(130),x=n(595),C=n(384),k=n(279),$=n(565),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.dialogAttachment,callback:function(e){t.dialogAttachment=e},expression:"dialogAttachment"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"font-weight-medium"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")])]),t._v(" "),n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-row",[n("v-col",{staticClass:"mt-0",attrs:{cols:"12",md:"4",sm:"12"}},[n("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,n,o){return t.sendingParams(e,n,o)},"vdropzone-success":function(e,n){return t.reloadAttachment(e,n)},"vdropzone-error":function(e,n,o){return t.handleError(e,n,o)}}})],1),t._v(" "),n("v-col",{staticClass:"mt-0",attrs:{cols:"12",md:"8",sm:"12"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.showLoadingAttachment,dense:""},scopedSlots:t._u([{key:"item.action",fn:function(e){var o=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),r),[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.deleteFile(o)}}},[t._v("\n                        mdi-delete-circle\n                      ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete")])])]}},{key:"item.file_name",fn:function(e){var o=e.item;return[n("a",{attrs:{href:o.file_path,target:"_blank"},domProps:{textContent:t._s(o.file_name)}})]}}],null,!0)})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:function(e){t.dialogAttachment=!1}}},[t._v("\n        close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:w.a,VDataTable:A.a,VDialog:_.a,VIcon:y.a,VLayout:x.a,VRow:C.a,VSpacer:k.a,VTooltip:$.a})}}]);