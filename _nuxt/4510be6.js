(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{424:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2065bca8",content,!0,{sourceMap:!1})},425:function(t,e,n){var o=n(12)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},449:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("dc0628f2",content,!0,{sourceMap:!1})},450:function(t,e,n){var o=n(12)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},457:function(t,e,n){"use strict";var o=n(115),r=n(2),c=(n(24),n(59),n(55),n(46),n(54),n(114),n(9),n(5),n(7),n(14),n(8),n(15),n(424),n(694)),l=n(426),d=n(191),h=n(452),v=n(196),f=n(453),m=n(451),x=n(53),y=n(195),_=n(11),w=n(6),A=n(1);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(_.a)(l.a,d.a,h.a,v.a,f.a,m.a,x.a);e.a=O.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===A.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(A.h)(this.maxWidth),width:"auto"===this.width?void 0:Object(A.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},471:function(t,e,n){"use strict";n(193);var o=n(194);e.a=Object(o.a)("layout")},473:function(t,e,n){"use strict";var o=n(2),r=(n(24),n(449),n(426)),c=n(28),l=n(464),d=n(191),h=n(465),v=n(53),f=n(1),m=n(6),x=n(11);e.a=Object(x.a)(c.a,l.a,d.a,h.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.u)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},476:function(t,e,n){"use strict";n(193);var o=n(194);e.a=Object(o.a)("flex")},709:function(t,e,n){"use strict";n.r(e);n(55),n(31),n(192),n(7),n(17);var o={name:"ApprovalList",data:function(){return{tab:null,items:[],totalData:0,allData:[],dataFilter:[],counter:0,loading:!0,dialogFilter:!1,dialogLoading:!1,btnLoading:!1,dialog:!1,dialogAction:!1,options:{},itemSearch:[],itemStatus:[],selected:[],search:"",searchItem:"",statusDocument:"",loadNewBtn:!1,loadingModal:!1,isDataSet:!1,isDisable:!1,loadingApprove:!1,loadingReject:!1,titleAction:"Approve",actionIcon:"mdi-check",statusApproval:"Pending",itemReqType:["Normal","For Restock SubWH"],actionText:null,Division:{},U_NIK:{},headers:[{text:"Type",value:"TypeName"},{text:"Document Reference ID",value:"DocumentReferenceID"},{text:"Request Date",value:"DocDate"},{text:"Details",value:"Details"},{text:"Created By",value:"RequesterName"},{text:"Status Document",value:"StatusId"},{text:"",value:"ApproveToken"}],itemDivision:[],itemUserNIK:[],itemCompany:[],itemUserWhs:[]}},head:function(){return{title:"Approval Request"}},computed:{formTitle:function(){return"Approve"===this.titleAction?"Approve Document":"Reject Document"}},watch:{options:{handler:function(){var t=this;setTimeout((function(){t.getDataFromApi()}),200)},deep:!0},search:function(){var t=this;setTimeout((function(){t.getDataFromApi()}),200)}},created:function(){var t=this;setTimeout((function(){t.getDataFromApi()}),200)},methods:{formatDate:function(t){return this.$moment(new Date(parseInt(t.DocDate.substr(6)))).format("YYYY-MM-DD HH:mm:ss")},emitData:function(data){this.items=data.documentStatus,this.itemSearch=data.itemSearch,this.statusApproval=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.getDataFromApi()},getDataFilter:function(t){this.statusApproval=t,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0,this.selected=[];var e=this,n=window.localStorage.getItem("cherry_token");this.$axios.get("/api/reservation/approval-list",{params:{options:e.options,search:e.search,search_item:e.searchItem,status_document:e.statusDocument,status_approval:e.statusApproval,cherry_token:n}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.data.filter,t.itemStatus=e.data.data.status,t.items=e.data.data.ApprovalStatus})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},deleteItem:function(t){var e=this;this.$axios.delete("/api/reservation/"+t.U_DocEntry).then((function(t){e.getDataFromApi()}))},openAction:function(t){var e=this;this.$swal({title:"Are you sure?",text:"Are you sure want to process selected data?",type:"warning",showCancelButton:!0,confirmButtonColor:"#22ac62",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(n){n.value&&e.postAction(t)}))},postAction:function(t){var e=this;"Approved"===t?this.loadingApprove=!0:this.loadingReject=!0,this.$axios.post("/api/reservation/action",{selected:this.selected,action:t}).then((function(t){e.$swal({type:"success",title:"Success",text:t.data.message}),setTimeout((function(){e.getDataFromApi()}),300)})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(n){"Approved"===t?e.loadingApprove=!1:e.loadingReject=!1}))}}},r=n(52),c=n(70),l=n.n(c),d=n(199),h=n(430),v=n(415),f=n(697),m=n(457),x=n(403),y=n(476),_=n(177),w=n(471),A=n(413),D=n(44),k=n(116),O=n(473),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",[t._v("\n        Approval Request\n      ")]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[n("v-card",[n("v-card-title",[t._v("Filter Form")]),t._v(" "),n("v-card-text",[n("LazyTableFilter",{staticClass:"hidden-sm-and-up",attrs:{"document-status":t.items,"search-status":t.statusApproval,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogFilter=!1}}},[t._v("\n              Close\n            ")])],1)],1)],1),t._v(" "),n("LazyTableFilter",{staticClass:"hidden-sm-and-down",attrs:{"document-status":t.items,"search-status":t.statusApproval,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}}),t._v(" "),n("v-btn",{staticClass:"d-md-none d-lg-none d-sm-flex d-xs-flex",attrs:{icon:"",color:"green",dark:""},on:{click:function(e){t.dialogFilter=!0}}},[n("v-icon",[t._v("mdi-filter-variant")])],1),t._v(" "),n("v-btn",{staticClass:"ml-3",attrs:{tile:"",small:"",color:"success",loading:t.loadingApprove},on:{click:function(e){return t.openAction("Approved")}}},[n("v-icon",{attrs:{left:""}},[t._v("\n          mdi-check-circle\n        ")]),t._v("\n        Approve\n      ")],1),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{tile:"",small:"",color:"red",loading:t.loadingReject},on:{click:function(e){return t.openAction("Rejected")}}},[n("v-icon",{attrs:{left:""}},[t._v("\n          mdi-close-circle\n        ")]),t._v("\n        Reject\n      ")],1),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[n("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"Code","show-select":"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.Details",fn:function(e){var o=e.item;return[n("span",{domProps:{innerHTML:t._s(o.Details)}})]}},{key:"item.DocDate",fn:function(e){var o=e.item;return[n("span",{domProps:{textContent:t._s(t.$moment(new Date(parseInt(o.DocDate.substr(6)))).format("YYYY-MM-DD HH:mm:ss"))}})]}},{key:"item.ApproveToken",fn:function(e){var o=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),r),[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.approvalStages.openApprovalStages(o)}}},[t._v("\n                  mdi-format-line-weight\n                ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Approval Details")])])]}},{key:"item.DocumentReferenceID",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{text:"",small:"",color:"orange"},on:{click:function(e){return t.$router.push({path:"/reservation/form",query:{id:o.U_DocEntry,status:"update"}})}}},[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-arrow-right-bold\n            ")]),t._v("\n            "+t._s(o.DocumentReferenceID)+"\n          ")],1)]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),t._v(" "),t.dialogLoading?n("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),n("LazySnackbar",{ref:"snackbar"}),t._v(" "),n("LazyResvApprovalDetails",{ref:"approvalStages"})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDataTable:f.a,VDialog:m.a,VDivider:x.a,VFlex:y.a,VIcon:_.a,VLayout:w.a,VSpacer:A.a,VToolbar:D.a,VToolbarTitle:k.a,VTooltip:O.a})}}]);