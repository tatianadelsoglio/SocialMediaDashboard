(this.webpackJsonpsocialmediadashboard=this.webpackJsonpsocialmediadashboard||[]).push([[0],[,,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),i=s(4),n=s.n(i),r=(s(10),s(3)),o=(s(11),s(12),s(0));var l=function(e){var c=e.children;return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"header-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Social Media Dashboard"}),Object(o.jsx)("p",{className:"header-total",children:"Total Followers: 23, 004"})]}),c]})})})},d=s(5);s(14);var j=function(e){var c=e.username,s=e.followers,a=e.todayFollowers,t=e.icon,i=e.name,n="card ".concat(i);return Object(o.jsxs)("article",{className:n,children:[Object(o.jsxs)("p",{className:"card-title",children:[Object(o.jsx)("img",{src:t,alt:""}),c]}),Object(o.jsxs)("p",{className:"card-followers",children:[Object(o.jsx)("span",{className:"card-followers-number",children:s}),Object(o.jsx)("span",{className:"card-followers-title",children:"Followers"})]}),Object(o.jsxs)("p",{className:"card-today",children:[Object(o.jsx)("img",{src:"images/icon-up.svg",alt:""}),a," Today"]})]})},m=(s(15),[{username:"@tatianadelsoglio",id:1,followers:"1596",todayFollowers:12,icon:"images/icon-facebook.svg",name:"facebook"},{username:"@tatianadelsoglio",id:2,followers:"28k",todayFollowers:20,icon:"images/icon-twitter.svg",name:"twitter"},{username:"@tatianadelsoglio",id:3,followers:"6k",todayFollowers:30,icon:"images/icon-instagram.svg",name:"instagram"},{username:"@tatianadelsoglio",id:4,followers:"12k",todayFollowers:-50,icon:"images/icon-youtube.svg",name:"youtube"}]);var h=function(){return Object(o.jsx)("section",{className:"top-cards",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"grid",children:m.map((function(e){return Object(o.jsx)(j,Object(d.a)({},e),e.id)}))})})})};s(16);function b(e){var c=e.growth,s=e.pageViews,a=e.icon;return Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("p",{className:"card-small-views",children:"Page Views"}),Object(o.jsx)("p",{className:"card-small-icon",children:Object(o.jsx)("img",{src:a,alt:""})}),Object(o.jsx)("p",{className:"card-small-number",children:s}),Object(o.jsx)("p",{className:"card-small-percentage",children:Object(o.jsxs)("span",{children:[Object(o.jsx)("img",{src:"images/icon-up.svg",alt:""}),c,"%"]})})]})}s(17);var u=[{icon:"images/icon-facebook.svg",pageViews:"87",growth:3,key:1},{icon:"images/icon-twitter.svg",pageViews:"52",growth:2257,key:2},{icon:"images/icon-instagram.svg",pageViews:"5462",growth:1375,key:3},{icon:"images/icon-youtube.svg",pageViews:"117",growth:303,key:4}];function g(){return Object(o.jsx)("section",{className:"overview",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Overview - Today"}),Object(o.jsx)("div",{className:"grid",children:u.map((function(e){var c=e.icon,s=e.pageViews,a=e.growth,t=e.key;return Object(o.jsx)(b,{icon:c,pageViews:s,growth:a},t)}))})]})})}s(18);var O=function(e){var c=e.setDarkMode,s=e.checked,t=e.setChecked,i=Object(a.useRef)(null);return Object(o.jsxs)("div",{className:"dark-mode",children:[Object(o.jsx)("p",{className:"dark-mode-title",children:"Dark Mode"}),Object(o.jsx)("input",{ref:i,onChange:function(){t(i.current.checked),c(i.current.checked)},type:"checkbox",checked:s,className:"checkbox",id:"checkbox"}),Object(o.jsx)("label",{className:"switch",htmlFor:"checkbox"})]})};var x=function(){var e=Object(a.useState)(!1),c=Object(r.a)(e,2),s=c[0],t=c[1],i=Object(a.useState)(!1),n=Object(r.a)(i,2),d=n[0],j=n[1],m=s?"is-dark-mode":"is-light-mode";function b(e){t(e.matches),j(e.matches)}return Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.addListener(b),t(e.matches),j(e.matches),function(){e.removeListener(b)}}),[]),Object(o.jsxs)("main",{className:m,children:[Object(o.jsx)(l,{children:Object(o.jsx)(O,{setDarkMode:t,checked:d,setChecked:j})}),Object(o.jsx)(h,{}),Object(o.jsx)(g,{})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,i=c.getLCP,n=c.getTTFB;s(e),a(e),t(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),w()}],[[19,1,2]]]);
//# sourceMappingURL=main.3d28adc6.chunk.js.map