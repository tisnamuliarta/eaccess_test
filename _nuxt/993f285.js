(window.webpackJsonp=window.webpackJsonp||[]).push([[35,22],{1011:function(t,e,r){"use strict";r.r(e);var o=r(108),l=r(413),n=r(643),d=r(659),h=r(134),c=r(414),v=r(762),f=(r(6),r(12),r(39),r(45),r(242),r(195),r(53),r(743)),m=r.n(f),_=(r(744),{name:"FormDocument",components:{Dropzone:m.a},props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,dialogLoading:!1,form:this.formData,selectedItem:[],documentType:[],itemCategory:[],arrayEsign:[],arrayMaterai:[],itemBank:[],itemTax:[],items:[],menu:"",statusProcessing:"insert",coordinateData:[],options:{url:"https://sbo2.imip.co.id:3001/backendcore_test/api/attachment",maxFiles:1,timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,acceptedFiles:"application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")}}}},mounted:function(){},methods:{newData:function(t){this.arrayMaterai=[],this.arrayEsign=[],this.coordinateData=[],this.$refs.dialogFormUpload.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},t),this.getAttachment()},editItem:function(t){this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},coordinate:function(data){this.coordinateData=[],this.coordinateData=data},downloadFile:function(t){var e=this;this.arrayMaterai=[],this.arrayEsign=[];var r=this.arrayMaterai,o=this.arrayEsign;this.dialogLoading=!0,this.coordinateData.forEach((function(element,t){t%2==0?r.push({visLLX:element.boundingBox.left,visLLY:800-parseFloat(element.boundingBox.top),visURX:parseFloat(element.boundingBox.left)+100,visURY:800-parseFloat(element.boundingBox.top)-100,pageIndex:element.pageIndex}):o.push({visLLX:element.boundingBox.left,visLLY:800-parseFloat(element.boundingBox.top),visURX:parseFloat(element.boundingBox.left)+100,visURY:800-parseFloat(element.boundingBox.top)-100,pageIndex:element.pageIndex})})),this.$axios.get(this.url+"/materai",{params:{arrayMaterai:JSON.stringify(r),arrayEsign:JSON.stringify(o),id:this.form.id},responseType:"arraybuffer"}).then((function(r){e.dialogLoading=!1;var o=new Blob([r.data],{type:"application/pdf"}),l=window.URL.createObjectURL(o),link=document.createElement("a");link.href=window.URL.createObjectURL(o),link.download=t.file_name,document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(l)}),100)})).finally((function(){return e.dialogLoading=!1}))},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogFormUpload.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},sendingParams:function(t,e,r){r.append("source_id",this.form.id),r.append("type","peruri")},handleError:function(t,e,r){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var r=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){r.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,r=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),r.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}}),w=r(62),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("DialogForm",{ref:"dialogFormUpload",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e(d.a,{staticClass:"pt-0"},[e(n.a,[e(c.a,{attrs:{"no-gutters":""}},[t.items.length<1?e(l.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[e("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,r,o){return t.sendingParams(e,r,o)},"vdropzone-success":function(e,r){return t.reloadAttachment(e,r)},"vdropzone-error":function(e,r,o){return t.handleError(e,r,o)}}})],1):t._e(),t._v(" "),t.items.length>0?e(l.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[e(v.a,{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("File Name")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Delete")])])]),t._v(" "),e("tbody",t._l(t.items,(function(r,i){return e("tr",{key:i},[e("td",{staticClass:"text-left"},[e("a",{attrs:{href:r.file_path,target:"_blank"}},[t._v(t._s(r.file_name))])]),t._v(" "),e("td",{staticClass:"text-center"},[e(o.a,{attrs:{small:"",color:"red",dark:"",icon:""},on:{click:function(e){return t.deleteFile(r)}}},[e(h.a,[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}],null,!1,2430794272)})],1):t._e()],1)],1)],1)]},proxy:!0}])}),t._v(" "),e("LazyDocumentEditor",{ref:"formEditor",attrs:{"form-data":t.form,"document-type":t.documentType,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{coordinate:t.coordinate}}),t._v(" "),t.dialogLoading?e("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogForm:r(666).default})},659:function(t,e,r){"use strict";var o=r(4),l=(r(48),r(64),r(305),r(13),r(6),r(12),r(53),r(100),r(14),r(11),r(16),r(17),r(8)),n=r(111),d=r(136);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(n.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},666:function(t,e,r){"use strict";r.r(e);var o=r(108),l=r(125),n=r(52),d=r(643),h=r(302),c=r(634),v=r(134),f=r(301),m={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},_=r(62),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(h.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(l.a,[e(n.d,[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e(f.a),t._v(" "),e(o.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e(v.a,[t._v("mdi-close-circle")])],1)],1),t._v(" "),e(c.a),t._v(" "),e(n.c,{staticClass:"pl-0 pr-0"},[e(d.a,{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),e(c.a),t._v(" "),e(n.a,[e(f.a),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},723:function(t,e,r){var content=r(724);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("146bc305",content,!0,{sourceMap:!1})},724:function(t,e,r){var o=r(18)(!1);o.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=o},762:function(t,e,r){"use strict";r(14),r(11),r(13),r(6),r(16),r(12),r(17);var o=r(4),l=(r(26),r(723),r(0)),n=r(24),d=r(8);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(n.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(l.i)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})}}]);