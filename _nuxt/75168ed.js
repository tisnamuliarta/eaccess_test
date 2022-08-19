(window.webpackJsonp=window.webpackJsonp||[]).push([[86,21,84,85,88],{601:function(t,e,r){"use strict";r(284);var n=r(285);e.a=Object(n.a)("layout")},603:function(t,e,r){"use strict";r(284);var n=r(285);e.a=Object(n.a)("flex")},604:function(t,e,r){"use strict";var n=r(3),o=(r(47),r(67),r(286),r(12),r(11),r(56),r(101),r(13),r(10),r(16),r(17),r(6)),l=r(111),c=r(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},608:function(t,e,r){"use strict";r.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},o=r(65),l=r(83),c=r.n(l),d=r(108),m=r(126),h=r(52),f=r(587),v=r(283),y=r(579),_=r(132),w=r(282),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[r("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pl-0 pr-0"},[r("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VContainer:f.a,VDialog:v.a,VDivider:y.a,VIcon:_.a,VSpacer:w.a})},645:function(t,e,r){"use strict";r.r(e);r(44),r(92),r(86),r(34),r(11),r(231),r(12);var n={name:"FormTask",props:{title:{type:String,default:""}},data:function(){return{loading:!1,allData:[],documentStatus:[],itemSearch:[],searchStatus:"Y"===this.$auth.user.is_sap_user?"pending":"draft",searchItem:"",search:"",totalData:0,options:{},form:{},listType:"myTicket",headers:[{text:"Task Number",value:"task_number",cellClass:"disable-wrap"},{text:"Title",value:"title",cellClass:"disable-wrap"},{text:"Sub Category",value:"sub_category.category_name",cellClass:"disable-wrap"},{text:"Milestone",value:"section.title",cellClass:"disable-wrap"},{text:"Doc Date",value:"created_at",cellClass:"disable-wrap"},{text:"Due Date",value:"due_date",cellClass:"disable-wrap"},{text:"Assiged To",value:"assignees",cellClass:"disable-wrap"},{text:"Priority",value:"priority.title",cellClass:"disable-wrap"},{text:"Approval",value:"approve",cellClass:"disable-wrap"},{text:"Action",value:"id",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}},computed:{batchItems:function(){return"Y"===this.$auth.user.is_sap_user?["Approve","Reject"]:"draft"===this.searchStatus?["Submit Approval","Delete"]:"pending"===this.searchStatus?["Cancel"]:"approved"===this.searchStatus?["Download"]:("canceled"===this.searchStatus||this.searchStatus,[""])}},mounted:function(){this.getDataFromApi()},methods:{changeList:function(t){this.listType=t,this.getDataFromApi()},getInitial:function(t){var e=t.trim().split(" ");return e.reduce((function(t,r,n){return 0!==n&&n!==e.length-1||(t="".concat(t).concat(r.charAt(0).toUpperCase())),t}),"")},newData:function(){this.$emit("newData")},editItem:function(t){this.form=Object.assign({},t),this.statusProcessing="update",this.$emit("editItem",t)},itemRowBackground:function(t){switch(t.approval){case"Pending":return"bg-orange";default:return"bg-white"}},batchActions:function(t){if(this.selected.length<1)this.$swal({type:"error",title:"Error",text:"Please select at least 1 row!"});else try{var e=this,r=[];switch(t){case"Submit Approval":e.batchSubmitDocument(this.selected);break;case"Delete":this.selected.forEach((function(t){r.push(t.id)})),e.batchDeleteDocument(r);break;case"Cancel":e.batchCancelDocument(this.selected);break;case"Reject":this.$refs.formApproval.editItem(this.selected,"Reject");break;case"Approve":this.$refs.formApproval.editItem(this.selected,"Approve")}}catch(t){this.$swal({type:"error",title:"Error",text:t})}},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0,this.$axios.get("/api/tasks/task",{params:{options:this.options,searchItem:this.searchItem,documentStatus:this.documentStatus,searchStatus:this.searchStatus,search:this.search,listType:this.listType}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.$emit("dataForToolbar",{itemSearch:e.data.filter}),t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},o=r(65),l=r(83),c=r.n(l),d=r(108),m=r(723),h=r(871),f=r(264),v=r(260),y=r(574),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-overlay",{attrs:{value:t.loading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),r("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,"fixed-tabs":"","show-select":"",dense:"","fixed-header":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Ticket Lists","new-data-text":"New Ticket","show-batch-action":!0,"batch-actions":t.batchItems},on:{emitData:t.emitData,newData:t.newData,batchActions:t.batchActions,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.id",fn:function(e){var n=e.item;return[r("v-btn",{staticClass:"font-weight-bold text-right",attrs:{small:"",text:"",color:"primary"},on:{click:function(e){return t.editItem(n)}}},[t._v("\n        Edit\n      ")])]}},{key:"item.assignees",fn:function(e){var n=e.item;return t._l(JSON.parse(n.assignees),(function(e){return r("v-tooltip",{key:e.nik,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[r("v-btn",t._g(t._b({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},"v-btn",l,!1),o),[t._v("\n            "+t._s(t.getInitial(e.name))+"\n          ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e.name))])])}))}},{key:"item.approve",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:"0"===n.approve?"orange":"green",label:"",small:"","text-color":"white"}},["0"===n.approve?r("span",{attrs:{left:""}},[t._v("Pending ")]):r("span",{attrs:{left:""}},[t._v("Approve ")])])]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VChip:m.a,VDataTable:h.a,VOverlay:f.a,VProgressCircular:v.a,VTooltip:y.a})},738:function(t,e,r){"use strict";r.r(e);var n={name:"FormBoard",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,boardnames:["one","two","three","four"],boarddesc:["new","progress","finalizing","complete"],colours:{card:"",cardButtons:"black--text transparent"},tasks:[{title:"a title",short_desc:"this is a short desc, see how i fly",long_desc:"the project involves writing a long sente",priority:3,stage:0,user:"admin",created:1279679227,assigned:["fred","simon","nancy"]},{title:"another thing wrong",short_desc:"fix the thing",long_desc:"not much happening in this description",priority:9,stage:1,user:"admin",created:1579279227,assigned:["admin"]},{title:"one more",short_desc:"this is a short desc, see how i fly",long_desc:"if i was good at writing i would have become a writer or at least something something",priority:1,stage:3,user:"james",created:1579679227,assigned:["joyce","carla","damien"]}],emptytask:{title:"",short_desc:"",long_desc:"",priority:1,stage:1,user:"",created:0,assigned:[],notes:[]},emptynote:{subject:"",message:""}}},methods:{getColor:function(t,e){return"priority"===e?t>8?"red":t>5?"orange":t>2?"blue":"green":"stage"===e?t>=3?"green lighten-3":t>=2?"red lighten-3":t>=1?"orange lighten-3":"blue lighten-3":void 0},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===t&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(t,e,data){var r=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){r.submitLoad=!1,r.$refs.dialogForm.closeDialog(),r.$emit("getDataFromApi")})).catch((function(t){r.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))}}},o=r(65),l=r(83),c=r.n(l),d=r(126),m=r(52),h=r(387),f=r(587),v=r(389),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",t._l(t.boardnames,(function(b,e){return r("v-col",{key:e},[r("v-card",{staticClass:"pa-2",attrs:{color:t.getColor(e,"stage"),"min-height":"400"}},[r("v-card-title",[t._v(t._s(b)+" "+t._s(e))]),t._v(" "),r("v-card-subtitle",[t._v("this board is for "+t._s(t.boarddesc[e]))]),t._v(" "),t._l(t.tasks,(function(i,n){return r("div",{key:n},[i.stage==e?r("v-card",{staticClass:"ma-3",attrs:{color:t.getColor(i.priority,"priority"),width:"250",elevation:"5"}},[r("v-card-title",[t._v(t._s(i.title))]),t._v(" "),r("span",[r("v-card-subtitle",[t._v("by "+t._s(i.user)+" on "+t._s(i.created))]),t._v(" "),r("v-card-text",{staticClass:"black--text"},[t._v(t._s(i.long_desc))])],1)],1):t._e()],1)}))],2)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:h.a,VContainer:f.a,VRow:v.a})},739:function(t,e,r){"use strict";r.r(e);r(56);var n=r(310),o={name:"FormTask",components:{TiptapVuetify:n.p},props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,form:this.formData,statusProcessing:"insert",itemSubCategoy:[],extensions:[n.g,n.a,n.k,n.r,n.o,n.j,n.l,n.c,n.m,n.i,[n.f,{options:{levels:[1,2,3]}}],n.b,n.k,n.d,n.h,n.n,n.e]}},methods:{selectSubCategory:function(){var t=this,e=this.form.department;this.$axios.get("/api/master/department-sub-category/1",{params:{category:e}}).then((function(e){t.$auth.$storage.setState("subCategory",e.data.data),t.itemSubCategoy=t.$auth.$storage.getState("subCategory")}))},returnData:function(data){this.itemSubCategoy=data},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(t){this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===t&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(t,e,data){var r=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){r.submitLoad=!1,r.$refs.dialogForm.closeDialog(),r.$emit("getDataFromApi")})).catch((function(t){r.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))}}},l=r(65),c=r(83),d=r.n(c),m=r(108),h=r(603),f=r(604),v=r(132),y=r(601),_=r(613),w=r(190),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DialogForm",{ref:"dialogForm",attrs:{"max-width":"800px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[r("v-form",{staticClass:"pt-2"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("v-select",{attrs:{items:t.$auth.$storage.getLocalStorage("departments"),label:"Department",placeholder:"Department",outlined:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.selectSubCategory()}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{small:"",icon:""}},[r("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/products/category","Department","")}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("v-select",{attrs:{items:t.itemSubCategoy,label:"Sub category",placeholder:"Sub category",outlined:"",dense:"","hide-details":"auto"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{small:"",icon:""}},[r("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/master/department-sub-category","Sub category "+t.form.department,t.form.department)}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.sub_category,callback:function(e){t.$set(t.form,"sub_category",e)},expression:"form.sub_category"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("v-text-field",{attrs:{label:"Title",placeholder:"Title",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("span",[t._v("Description")]),t._v(" "),r("client-only",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" Loading... ")]},proxy:!0}])},[r("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[r("v-btn",{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),r("LazyFormMaster",{ref:"formMaster",on:{returnData:t.returnData}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{DialogForm:r(608).default}),d()(component,{VBtn:m.a,VFlex:h.a,VForm:f.a,VIcon:v.a,VLayout:y.a,VSelect:_.a,VTextField:w.a})},941:function(t,e,r){"use strict";r.r(e);r(56);var n=r(738),o=r(645),l=r(739),c={name:"FormTask",components:{Board:n.default,List:o.default,Timeline:l.default},props:{defaultForm:{type:Object,default:function(){return{}}},title:{type:String,default:""},searchItem:{type:String,default:""},search:{type:String,default:""},filters:{type:String,default:""},searchStatus:{type:String,default:"Active"},documentStatus:{type:Array,default:function(){return[]}},itemSearch:{type:Array,default:function(){return[]}}},data:function(){return{form:this.formData,alias:null,selectComponent:null}},methods:{changeTab:function(t){var e=this;this.alias=t,this.selectComponent=t,setTimeout((function(){e.$refs.childComponent.getDataFromApi()}),300)},getDataFromApi:function(){this.$emit("getDataFromApi")},openEdititem:function(t){this.$emit("openEdititem",t)}}},d=r(65),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r(t.selectComponent,{ref:"childComponent",tag:"component",attrs:{alias:t.alias,"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.getDataFromApi,openEdititem:t.openEdititem}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);