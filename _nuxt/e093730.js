(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{637:function(t,e,o){var content=o(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("2b022ff9",content,!0,{sourceMap:!1})},674:function(t,e,o){"use strict";o(637)},675:function(t,e,o){var n=o(19)(!1);n.push([t.i,".pdf-container[data-v-2cdfcba0]{height:83vh}div#customToolbar[data-v-2cdfcba0]{position:absolute;right:0;margin-right:10px}.button[data-v-2cdfcba0]{background-color:#4caf50;border:none;color:#fff;padding:8px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:12px}.hidden[data-v-2cdfcba0]{display:none!important}.button1[data-v-2cdfcba0]{background-color:#4caf50}.button2[data-v-2cdfcba0]{background-color:#008cba}.button3[data-v-2cdfcba0]{background-color:#c3a00b}",""]),t.exports=n},686:function(t,e,o){"use strict";o.r(e);o(27),o(37),o(44),o(82),o(56),o(187),o(31),o(12);var n=o(704),r=o.n(n),d={name:"PSPDFKit",data:function(){return{pdfFile:"",PSPDFKitInstance:null,display1:"",display2:"",display3:"",item:[]}},watch:{pdfFile:function(t){t&&this.loadPSPDFKit()}},methods:{setSource:function(t,e){var o=this;this.item=e,this.pdfFile=t,this.display1="",this.display2="",this.display3="",this.loadPSPDFKit(e).then((function(t){o.$emit("loaded",t)}))},getCoordinate:function(){var t=this,e=this.PSPDFKitInstance;Promise.all(Array.from({length:e.totalPageCount}).map((function(t,o){return e.getAnnotations(o)}))).then((function(e){var o=e.map((function(t){return t.toJS()})).flat();t.$emit("coordinate",o)}))},getDataCoordinate:function(){var t=this.PSPDFKitInstance;Promise.all(Array.from({length:t.totalPageCount}).map((function(e,o){return t.getAnnotations(o)}))).then((function(t){return t.map((function(t){return t.toJS()})).flat()}))},loadPSPDFKit:function(t){var e=this,o="".concat(window.location.protocol,"//").concat(window.location.host,"/js/");r.a.unload(".pdf-container");var n=[],d=this.item;return"Y"===d.digisign_coordinate&&"Y"===d.meterai_coordinate?n=[{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"combine",name:"combine",pageIndex:d.sign_page-1,stampType:"Custom",color:"#C3A00B",title:"METERAI AND SIGN",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:("Y"===d.digisign_coordinate&&(n="Y"===d.meterai_coordinate?[{v:1,bbox:[parseFloat(d.meterai_left),parseFloat(d.meterai_top),parseFloat(d.meterai_width),parseFloat(d.meterai_height)],id:"sign",name:"sign",pageIndex:d.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"},{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"sign",name:"sign",pageIndex:d.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:[{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"sign",name:"sign",pageIndex:d.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]),"Y"===d.meterai_coordinate&&(n="Y"===d.digisign_coordinate?[{v:1,bbox:[parseFloat(d.meterai_left),parseFloat(d.meterai_top),parseFloat(d.meterai_width),parseFloat(d.meterai_height)],id:"sign",name:"sign",pageIndex:d.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"},{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"sign",name:"sign",pageIndex:d.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:[{v:1,bbox:[parseFloat(d.meterai_left),parseFloat(d.meterai_top),parseFloat(d.meterai_width),parseFloat(d.meterai_height)],id:"sign",name:"sign",pageIndex:d.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}])),r.a.load({document:e.pdfFile,container:".pdf-container",baseUrl:o,instantJSON:{annotations:n,format:"https://pspdfkit.com/instant-json/v1"}}).then((function(t){e.PSPDFKitInstance=t;var o=t.toolbarItems,n=t.viewState;t.setViewState(n.merge({scrollMode:r.a.ScrollMode.PER_SPREAD})),t.setToolbarItems(o.filter((function(t){return"pager"===t.type}))),document.getElementById("createAnnotationMaterai").onclick=function(o){var n=new r.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Custom",id:"materai",title:"METERAI",color:new r.a.Color({r:50,g:205,b:50}),boundingBox:new r.a.Geometry.Rect({left:50,top:50,width:70,height:70})});t.create(n),e.display3="hidden"},document.getElementById("createAnnotationSign").onclick=function(o){var n=new r.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Custom",id:"sign",title:"SIGN HERE",color:new r.a.Color({r:0,g:51,b:79}),boundingBox:new r.a.Geometry.Rect({left:120,top:50,width:105,height:70})});t.create(n),e.display3="hidden"},document.getElementById("createAnnotationCombine").onclick=function(o){var n=new r.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Approved",id:"combine",title:"METERAI AND SIGN",color:new r.a.Color({r:195,g:160,b:11}),boundingBox:new r.a.Geometry.Rect({left:200,top:50,width:175,height:70})});t.create(n),e.display1="hidden",e.display2="hidden"},t.addEventListener("annotations.delete",(function(t){e.display1="",e.display2="",e.display3=""}))}))}}},c=(o(674),o(81)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"customToolbar"}},[o("button",{class:"button button1 "+t.display1,attrs:{id:"createAnnotationMaterai"}},[t._v("\n      METERAI\n    ")]),t._v(" "),o("button",{class:"button button2 "+t.display2,attrs:{id:"createAnnotationSign"}},[t._v("\n      SIGN\n    ")]),t._v(" "),o("button",{class:"button button3 "+t.display3,attrs:{id:"createAnnotationCombine"}},[t._v("\n      METERAI AND SIGN\n    ")])]),t._v(" "),o("div",{staticClass:"pdf-container"})])}),[],!1,null,"2cdfcba0",null);e.default=component.exports}}]);