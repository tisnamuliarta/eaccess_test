(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{713:function(e,t,n){var content=n(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("6c113494",content,!0,{sourceMap:!1})},745:function(e,t,n){"use strict";n(713)},746:function(e,t,n){var r=n(19)(!1);r.push([e.i,".logo[data-v-567df22c]{max-width:180px;margin:0 auto;text-align:center}",""]),e.exports=r},866:function(e,t,n){"use strict";n.r(t);var r=n(34),o=(n(99),n(42),n(73),{name:"LoginPage",layout:"auth",middleware:"guest",created:function(){this.cekSession()},methods:{cekSession:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$auth,t.next=3,e.$fpjs.getVisitorData({extendedResult:!0});case 3:return r=t.sent,o=r.visitorId,e.$auth.$storage.setState("visitorData",r),e.$auth.$storage.setState("sessions_key",o),e.$auth.$storage.setLocalStorage("app.default_name","E-FORM"),e.$route.query.sessions_key?(o=e.$route.query.sessions_key,e.$router.replace("/")):e.$auth.$storage.getState("sessions_key")&&(o=e.$auth.$storage.getState("sessions_key")),t.next=11,e.$axios.get("/api/auth/session",{params:{sessions_key:o}});case 11:if(!(c=t.sent).data.session){t.next=22;break}return t.next=15,e.$axios.get("https://appdev.imip.co.id/e-portalapi/api/auth/me",{headers:{Authorization:"Bearer "+c.data.session.bearer_token}});case 15:return d=t.sent,t.next=18,n.loginWith("local",{data:{username:d.data.user.username,sessions_key:o,language:"en",app_name:"E-FORM"}});case 18:(l=t.sent).data.auth.token||e.$swal({type:"error",title:l.data.auth.MessageTitle,text:l.data.auth.Message}),t.next=22;break;case 22:case"end":return t.stop()}}),t)})))()}}}),c=(n(745),n(81)),d=n(89),l=n.n(d),h=n(581),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h5",{staticClass:"v-heading font-weight-medium text-center text-h5 text-sm-h6 my-5"},[e._v("\n    Redirecting...\n  ")])])}),[],!1,null,"567df22c",null);t.default=component.exports;l()(component,{VContainer:h.a})}}]);