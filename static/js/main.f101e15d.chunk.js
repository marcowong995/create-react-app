(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(26),s=c.n(a),j=c(11),i=c(7),b=c(44),d=c(45),u=c(46),l=c(47),o=c(48),O=c(2);function x(){return Object(O.jsx)(b.a,{color:"dark",dark:!0,children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(u.a,{href:"/",children:"My Team"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(j.b,{className:"btn btn-primary",to:"/add",children:"Add User"})})})]})})}var h=c(13),m=c(29),p=function(e,t){switch(t.type){case"REMOVE_USER":return{users:e.users.filter((function(e){return e.id!==t.payload}))};case"ADD_USER":return{users:[t.payload].concat(Object(m.a)(e.users))};case"EDIT_USER":var c=t.payload;return{users:e.users.map((function(e){return e.id===c.id?c:e}))};default:return e}},f={users:[]},v=Object(n.createContext)(f),y=function(e){var t=e.children,c=Object(n.useReducer)(p,f),r=Object(h.a)(c,2),a=r[0],s=r[1];return Object(O.jsx)(v.Provider,{value:{users:a.users,removeUser:function(e){s({type:"REMOVE_USER",payload:e})},addUser:function(e){s({type:"ADD_USER",payload:e})},editUser:function(e){s({type:"EDIT_USER",payload:e})}},children:t})},E=c(49),g=c(50),U=c(51);function N(){var e=Object(n.useContext)(v),t=e.users,c=e.removeUser;return Object(O.jsx)(E.a,{className:"mt-4",children:t.length>0?Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsx)(g.a,{children:Object(O.jsxs)("div",{className:"m1-auto",style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("strong",{children:e.name}),Object(O.jsxs)("span",{children:[Object(O.jsx)(j.b,{className:"btn btn-warning mr-1",to:"/edit/"+e.id,children:"Edit"}),Object(O.jsx)(U.a,{onClick:function(){return c(e.id)},color:"danger",children:"Delete"})]})]})},e.id)}))}):Object(O.jsx)("h4",{className:"text-center",children:"No User"})})}function S(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(N,{})]})}var C=c(28),R=c(52),D=c(53),_=c(54),k=c(55);function w(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(v).addUser,s=Object(i.f)();return Object(O.jsxs)(R.a,{onSubmit:function(){var e={id:Object(C.v4)(),name:c};a(e),s.push("/")},children:[Object(O.jsxs)(D.a,{children:[Object(O.jsx)(_.a,{children:"Name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(k.a,{type:"text",name:"name",onChange:function(e){r(e.target.value)},placeholder:"Enter Name"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(U.a,{type:"submit",children:"Submit"}),Object(O.jsx)(j.b,{to:"/",className:"btn btn-danger ml-2",children:"Cancel"})]})}var M=c(16),A=c(22);function I(e){var t=Object(n.useState)({id:"",name:""}),c=Object(h.a)(t,2),r=c[0],a=c[1],s=Object(n.useContext)(v),b=s.users,d=s.editUser,u=Object(i.f)(),l=e.match.params.id;Object(n.useEffect)((function(){var e=l,t=b.find((function(t){return t.id===e}));a(t)}),[l,b]);return Object(O.jsxs)(R.a,{onSubmit:function(){d(r),u.push("/")},children:[Object(O.jsxs)(D.a,{children:[Object(O.jsx)(_.a,{children:"Name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(k.a,{type:"text",name:"name",value:r.name,onChange:function(e){a(Object(A.a)(Object(A.a)({},r),{},Object(M.a)({},e.target.name,e.target.value)))},placeholder:"Enter Name"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(U.a,{type:"submit",children:"Edit Name"}),Object(O.jsx)(j.b,{to:"/",className:"btn btn-danger ml-2",children:"Cancel"})]})}c(42);var T=function(){return Object(O.jsx)("div",{style:{maxWidth:"30rem",margin:"4rem auto"},children:Object(O.jsx)(y,{children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",component:S}),Object(O.jsx)(i.a,{path:"/add",component:w}),Object(O.jsx)(i.a,{path:"/edit/:id",component:I})]})})})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f101e15d.chunk.js.map