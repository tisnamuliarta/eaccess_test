(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{924:function(e,t,n){"use strict";n.r(t);var o={name:"DialogDelete",props:{url:{type:String,default:""}},data:function(){return{dialog:!1,loading:!1}},methods:{openDialog:function(e){this.dialog=!0,this.url=e},deleteRows:function(){var e=this,t=this;this.loading=!0,this.$axios.delete(this.url).then((function(n){e.loading=!1,t.$emit("showMessage",n.data.message),e.dialog=!1})).catch((function(t){e.loading=!1,e.dialog=!1}))}}},l=n(81),r=n(89),d=n.n(r),c=n(106),v=n(123),h=n(54),f=n(280),w=n(279),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      Delete record?\n    ")]),e._v(" "),n("v-card-text",[e._v("\n      Are you sure you want to delete the records?\n    ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n        No\n      ")]),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:e.loading},on:{click:function(t){return e.deleteRows()}}},[e._v("\n        Yes, Delete\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDialog:f.a,VSpacer:w.a})}}]);