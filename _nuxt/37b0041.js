(window.webpackJsonp=window.webpackJsonp||[]).push([[33,31],{1010:function(t,e,o){"use strict";o.r(e);o(94),o(6),o(39),o(45),o(242),o(195);var n={name:"App",data:function(){return{pdfFile:this.pdfFile||"/document.pdf"}},methods:{handleLoaded:function(t){console.log("PSPDFKit has loaded: ",t)},openDocument:function(t){this.pdfFile&&this.pdfFile.startsWith("blob:")&&window.URL.revokeObjectURL(this.pdfFile),this.pdfFile=window.URL.createObjectURL(t.target.files[0])}}},r=(o(880),o(62)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[t._v(" Open PDF ")]),t._v(" "),e("input",{staticClass:"btn",attrs:{id:"file-upload",type:"file"},on:{change:t.openDocument}}),t._v(" "),e("DocumentPSPDFKitContainer",{attrs:{"pdf-file":t.pdfFile},on:{loaded:t.handleLoaded}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocumentPSPDFKitContainer:o(752).default})},703:function(t,e,o){var content=o(737);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("4d5bd08a",content,!0,{sourceMap:!1})},736:function(t,e,o){"use strict";o(703)},737:function(t,e,o){var n=o(18)(!1);n.push([t.i,".pdf-container[data-v-20932a6e]{height:83vh}div#custom-toolbar[data-v-20932a6e]{position:absolute;right:0;margin-right:10px}.button[data-v-20932a6e]{background-color:#4caf50;border:none;color:#fff;padding:8px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:12px}.hidden[data-v-20932a6e]{display:none!important}.button1[data-v-20932a6e]{background-color:#4caf50}.button2[data-v-20932a6e]{background-color:#008cba}.button3[data-v-20932a6e]{background-color:#c3a00b}",""]),t.exports=n},752:function(t,e,o){"use strict";o.r(e);o(6),o(39),o(45),o(82),o(57),o(197),o(198),o(36),o(13);var n=o(735),r=o.n(n),d={name:"PSPDFKit",data:function(){return{pdfFile:"",PSPDFKitInstance:null,display1:"",display2:"",display3:"",item:[]}},watch:{pdfFile:function(t){t&&this.loadPSPDFKit()}},methods:{setSource:function(t,e){var o=this;this.item=e,this.pdfFile=t,this.display1="",this.display2="",this.display3="",this.loadPSPDFKit(e).then((function(t){o.$emit("loaded",t)}))},getCoordinate:function(){var t=this,e=this.PSPDFKitInstance;Promise.all(Array.from({length:e.totalPageCount}).map((function(t,o){return e.getAnnotations(o)}))).then((function(e){var o=e.map((function(t){return t.toJS()})).flat();t.$emit("coordinate",o)}))},getDataCoordinate:function(){var t=this.PSPDFKitInstance;Promise.all(Array.from({length:t.totalPageCount}).map((function(e,o){return t.getAnnotations(o)}))).then((function(t){return t.map((function(t){return t.toJS()})).flat()}))},loadPSPDFKit:function(t){var e=this,o="".concat(window.location.protocol,"//").concat(window.location.host,"/js/");r.a.unload(".pdf-container");var n=[],d=this.item;return"Y"===d.digisign_coordinate&&"Y"===d.meterai_coordinate?n=[{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"combine",name:"combine",pageIndex:d.sign_page-1,stampType:"Custom",color:"#C3A00B",title:"METERAI AND SIGN",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:("Y"===d.digisign_coordinate&&(n="Y"===d.meterai_coordinate?[{v:1,bbox:[parseFloat(d.meterai_left),parseFloat(d.meterai_top),parseFloat(d.meterai_width),parseFloat(d.meterai_height)],id:"sign",name:"sign",pageIndex:d.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"},{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"sign",name:"sign",pageIndex:d.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:[{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"sign",name:"sign",pageIndex:d.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]),"Y"===d.meterai_coordinate&&(n="Y"===d.digisign_coordinate?[{v:1,bbox:[parseFloat(d.meterai_left),parseFloat(d.meterai_top),parseFloat(d.meterai_width),parseFloat(d.meterai_height)],id:"sign",name:"sign",pageIndex:d.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"},{v:1,bbox:[parseFloat(d.digisign_left),parseFloat(d.digisign_top),parseFloat(d.digisign_width),parseFloat(d.digisign_height)],id:"sign",name:"sign",pageIndex:d.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:[{v:1,bbox:[parseFloat(d.meterai_left),parseFloat(d.meterai_top),parseFloat(d.meterai_width),parseFloat(d.meterai_height)],id:"sign",name:"sign",pageIndex:d.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}])),r.a.load({document:e.pdfFile,container:".pdf-container",baseUrl:o,instantJSON:{annotations:n,format:"https://pspdfkit.com/instant-json/v1"}}).then((function(t){e.PSPDFKitInstance=t;var o=t.toolbarItems,n=t.viewState;t.setViewState(n.merge({scrollMode:r.a.ScrollMode.PER_SPREAD})),t.setToolbarItems(o.filter((function(t){return"pager"===t.type}))),document.getElementById("createAnnotationMaterai").onclick=function(o){var n=new r.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Custom",id:"materai",title:"METERAI",color:new r.a.Color({r:50,g:205,b:50}),boundingBox:new r.a.Geometry.Rect({left:50,top:50,width:70,height:70})});t.create(n),e.display3="hidden"},document.getElementById("createAnnotationSign").onclick=function(o){var n=new r.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Custom",id:"sign",title:"SIGN HERE",color:new r.a.Color({r:0,g:51,b:79}),boundingBox:new r.a.Geometry.Rect({left:120,top:50,width:105,height:70})});t.create(n),e.display3="hidden"},document.getElementById("createAnnotationCombine").onclick=function(o){var n=new r.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Approved",id:"combine",title:"METERAI AND SIGN",color:new r.a.Color({r:195,g:160,b:11}),boundingBox:new r.a.Geometry.Rect({left:200,top:50,width:175,height:70})});t.create(n),e.display1="hidden",e.display2="hidden"},t.addEventListener("annotations.delete",(function(t){e.display1="",e.display2="",e.display3=""}))}))}}},l=(o(736),o(62)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"custom-toolbar"}},[e("button",{class:"button button1 "+t.display1,attrs:{id:"createAnnotationMaterai"}},[t._v("\n      METERAI\n    ")]),t._v(" "),e("button",{class:"button button2 "+t.display2,attrs:{id:"createAnnotationSign"}},[t._v("\n      SIGN\n    ")]),t._v(" "),e("button",{class:"button button3 "+t.display3,attrs:{id:"createAnnotationCombine"}},[t._v("\n      METERAI AND SIGN\n    ")])]),t._v(" "),e("div",{staticClass:"pdf-container"})])}),[],!1,null,"20932a6e",null);e.default=component.exports},794:function(t,e,o){var content=o(881);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("186a7260",content,!0,{sourceMap:!1})},880:function(t,e,o){"use strict";o(794)},881:function(t,e,o){var n=o(18)(!1);n.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;color:#2c3e50}body{margin:0}input[type=file]{display:none}.custom-file-upload{border:1px solid #ccc;border-radius:4px;display:inline-block;padding:6px 12px;cursor:pointer;background:#4a8fed;color:#fff;font:inherit;font-size:16px;font-weight:700}",""]),t.exports=n}}]);