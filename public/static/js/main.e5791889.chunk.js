(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{113:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(6),s=n.n(r),o=n(7),i=n(22),l=n(63),u=n(4),j="[ui] Open modal",d="[ui] Close modal",b="[event] Set active",m="[event] Logout event",p="[event] Add new",O="[event] Clear active event",f="[event] updated",h="[event] deleted",v="[event] loaded",x="[auth] Finish checking login state",g="[auth] Login",y="[auth] Logout",N={checking:!0},w=n(55),k={events:[],activeEvent:null},E={modalOpen:!1},S=Object(i.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case O:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:Object(w.a)(t.payload)});case m:return Object(u.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case x:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,T=Object(i.e)(S,C(Object(i.a)(l.a))),D=n(35),P=n(8),A=n(11),I=n.n(A),L=n(21),_=n(17),R=n.n(_),G="https://drab-pear-basket-clam-cuff.cyclic.app/api",J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-Type":"application/json","x-token":c},body:JSON.stringify(t)})},H=n(19),F=n.n(H),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:F()(e.end).toDate(),start:F()(e.start).toDate()})}))},U=function(e){return{type:p,payload:e}},X=function(){return{type:O}},q=function(e){return{type:f,payload:e}},z=function(){return{type:h}},B=function(e){return{type:v,payload:e}},K=function(){return{type:x}},Q=function(e){return{type:g,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:m}),e(Y())}},Y=function(){return{type:y}},Z=n(14),$=n(25),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(Z.a)(t,2),a=n[0],r=n[1],s=function(){r(e)},o=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},a),{},Object($.a)({},t.name,t.value)))};return[a,o,s]},te=(n(76),function(){var e=Object(o.b)(),t=ee({loginEmail:"",loginPassword:""}),n=Object(Z.a)(t,2),c=n[0],r=n[1],s=c.loginEmail,i=c.loginPassword,l=ee({registerName:"",registerEmail:"",registerPassword1:"",registerPassword2:""}),u=Object(Z.a)(l,2),j=u[0],d=u[1],b=j.registerName,m=j.registerEmail,p=j.registerPassword1,O=j.registerPassword2;return Object(a.jsx)("div",{className:"login-container",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Log in"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=s,a=i,function(){var e=Object(L.a)(I.a.mark((function e(t){var c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-time",(new Date).getTime()),t(Q({uid:r.uid,name:r.name}))):R.a.fire("Error!",r.message,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"loginEmail",value:s,onChange:r})}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"loginPassword",value:i,onChange:r}),Object(a.jsx)("p",{className:"helpTextLogin",children:"The password must be at least 6 characters long."})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Sign in"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),p!==O)return R.a.fire("Error!","Passwords must be the same.","error");var n,a,c;e((n=m,a=p,c=b,function(){var e=Object(L.a)(I.a.mark((function e(t){var r,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(s=e.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-time",(new Date).getTime()),t(Q({uid:s.uid,name:s.name}))):R.a.fire("Error!",s.message,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"registerName",value:b,onChange:d})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"registerEmail",value:m,onChange:d})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"registerPassword1",value:p,onChange:d})}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeat password",name:"registerPassword2",value:O,onChange:d}),Object(a.jsx)("p",{className:"helpTextRgister",children:"The password must be at least 6 characters long."})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})})}),ne=n(54),ae=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(W())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Logout"})]})]})},ce=function(e){var t=e.event,n=t.title,c=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("span",{children:[" - ",c.name]})]})},re=n(49),se=n.n(re),oe=n(50),ie=n.n(oe),le=function(){return{type:j}},ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var je=F()().minutes(0).seconds(0).add(1,"hours"),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(c.useState)(je.toDate()),s=Object(Z.a)(r,2),i=s[0],l=s[1],j=Object(c.useState)(de.toDate()),b=Object(Z.a)(j,2),m=b[0],p=b[1],O=Object(c.useState)(!0),f=Object(Z.a)(O,2),h=f[0],v=f[1],x=Object(c.useState)(be),g=Object(Z.a)(x,2),y=g[0],N=g[1],w=y.notes,k=y.title,E=y.start,S=y.end;Object(c.useEffect)((function(){t?(N(t),l(t.start),p(t.end)):(N(be),l(be.start),p(be.end))}),[t,N]);var C=function(e){var t=e.target;N(Object(u.a)(Object(u.a)({},y),{},Object($.a)({},t.name,t.value)))},T=function(){n({type:d}),n(X()),N(be)};return Object(a.jsxs)(se.a,{isOpen:e,onRequestClose:T,style:ue,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",ariaHideApp:!1,children:[Object(a.jsxs)("h1",{children:[t?"Edit event":"New event"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a=F()(E),c=F()(S);return a.isSameOrAfter(c)?R.a.fire("Error!","The finish date must be greater than the start date.","error"):k.trim().length<2?v(!1):(n(t?function(e){return function(){var t=Object(L.a)(I.a.mark((function t(n){var a,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V("events/".concat(e.id),e,"PUT");case 3:return a=t.sent,t.next=6,a.json();case 6:(c=t.sent).ok?n(q(e)):R.a.fire("Error!",c.message,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(y):function(e){return function(){var t=Object(L.a)(I.a.mark((function t(n,a){var c,r,s,o,i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,s=c.name,t.prev=1,t.next=4,V("events",e,"POST");case 4:return o=t.sent,t.next=7,o.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:r,name:s},n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(y)),v(!0),void T())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Start date and time"}),Object(a.jsx)(ie.a,{onChange:function(e){l(e),N(Object(u.a)(Object(u.a)({},y),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Finish date and time"}),Object(a.jsx)(ie.a,{onChange:function(e){p(e),N(Object(u.a)(Object(u.a)({},y),{},{end:e}))},value:m,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Title and notes"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"Event title",name:"title",autoComplete:"off",value:k,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"A short description"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:w,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Additional Information"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Save"})]})]})]})},pe=(n(111),function(){var e=Object(o.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(t){e(le())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})}),Oe=function(){var e=Object(o.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(L.a)(I.a.mark((function e(t,n){var a,c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(z()):R.a.fire("Error!",r.message,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Delete event"})]})},fe=Object(ne.b)(F.a),he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,s=Object(o.c)((function(e){return e.auth})).uid,i=Object(c.useState)(localStorage.getItem("lastView")||"month"),l=Object(Z.a)(i,2),u=l[0],j=l[1];Object(c.useEffect)((function(){e(function(){var e=Object(L.a)(I.a.mark((function e(t){var n,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=M(a.events),t(B(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(ae,{}),Object(a.jsx)(ne.a,{className:"rbc-calendar",localizer:fe,events:n,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:s===e.user._id?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(){e(le())},onSelectEvent:function(t){e(function(e){return{type:b,payload:e}}(t))},onView:function(e){j(e),localStorage.setItem("lastView",e)},onSelectSlot:function(){e(X())},selectable:!0,view:u,components:{event:ce}}),Object(a.jsx)(me,{}),Object(a.jsx)(pe,{}),r&&Object(a.jsx)(Oe,{})]})},ve=n(38),xe=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ve.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(u.a)(Object(u.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(u.a)({},e)):Object(a.jsx)(P.a,{to:"/login"})}}))},ge=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ve.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(u.a)(Object(u.a)({},c),{},{component:function(e){return t?Object(a.jsx)(P.a,{to:"/"}):Object(a.jsx)(n,Object(u.a)({},e))}}))},ye=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(L.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-time",(new Date).getTime()),t(Q({uid:a.uid,name:a.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)("h1",{children:"Loading..."})}):Object(a.jsx)(D.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(P.d,{children:[Object(a.jsx)(ge,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(a.jsx)(xe,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(a.jsx)(P.a,{to:"/"})]})})})},Ne=function(){return Object(a.jsx)(o.a,{store:T,children:Object(a.jsx)(ye,{})})};n(113);s.a.render(Object(a.jsx)(Ne,{}),document.getElementById("root"))},76:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.e5791889.chunk.js.map