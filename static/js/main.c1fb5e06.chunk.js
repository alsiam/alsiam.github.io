(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,s,t){},,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var i=t(1),a=t.n(i),c=t(8),r=t.n(c),n=t(3),l=(t(17),t(43)),j=t(44),d=t(0);function o(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(s&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"asw."}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:"01611 210 222"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{children:"alsiamworld@gmail.com"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return t(!s)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}t(23);var m=t(45),p=t(10);function b(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(p.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer!","Designer!","Conent Creator!"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/myImg.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hi There, I'm"}),Object(d.jsx)("h1",{children:"Saif Al Siam"}),Object(d.jsxs)("h3",{children:["Freelance ",Object(d.jsx)("span",{ref:e})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("div",{className:"iconContainer",children:Object(d.jsx)(m.a,{className:"icon"})})})]})]})}t(24);function O(e){var s=e.id,t=e.title,i=e.active,a=e.setSelected;return Object(d.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return a(s)},children:t})}t(25);var u=[{id:1,title:"social Media app",img:"assets/mark.jpg"},{id:2,title:"social Media app",img:"assets/mark.jpg"},{id:3,title:"social Media app",img:"assets/mark.jpg"},{id:4,title:"social Media app",img:"assets/mark.jpg"}],h=[{id:1,title:"social Media app",img:"assets/mark.jpg"},{id:2,title:"social Media app",img:"assets/mark.jpg"},{id:3,title:"social Media app",img:"assets/mark.jpg"}],x=[{id:1,title:"social Media app",img:"assets/mark.jpg"},{id:2,title:"social Media app",img:"assets/mark.jpg"},{id:3,title:"social Media app",img:"assets/mark.jpg"},{id:4,title:"social Media app",img:"assets/mark.jpg"}],g=[{id:1,title:"social Media app",img:"assets/mark.jpg"},{id:2,title:"social Media app",img:"assets/mark.jpg"},{id:3,title:"social Media app",img:"assets/mark.jpg"},{id:4,title:"social Media app",img:"assets/mark.jpg"},{id:5,title:"social Media app",img:"assets/mark.jpg"}],f=[{id:1,title:"social Media app",img:"assets/mark.jpg"},{id:2,title:"social Media app",img:"assets/mark.jpg"}];function v(){var e=Object(i.useState)("featured"),s=Object(n.a)(e,2),t=s[0],a=s[1],c=Object(i.useState)([]),r=Object(n.a)(c,2),l=r[0],j=r[1];return Object(i.useEffect)((function(){switch(t){case"featured":j(u);break;case"web":j(h);break;case"mobile":j(x);break;case"design":j(g);break;case"contact":j(f);break;default:j(u)}}),[t]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"design",title:"Design"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"},{id:"content",title:"Content"}].map((function(e){return Object(d.jsx)(O,{title:e.title,active:t===e.id,setSelected:a,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})}))})]})}t(26);function k(){var e=Object(i.useState)(0),s=Object(n.a)(e,2),t=s[0],a=s[1],c=[{id:1,title:"social Media app",img:"assets/mark.jpg"},{id:2,title:"Web",img:"assets/mark.jpg"},{id:3,title:"Logo",img:"assets/mark.jpg"},{id:4,title:"function",img:"assets/mark.jpg"}],r=function(e){a("left"===e?t>0?t-1:2:t<c.length-1?t+1:0)};return Object(d.jsxs)("div",{className:"works",id:"works",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:c.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:e.img,alt:""})}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.desc}),Object(d.jsx)("span",{children:"Project"})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return r("right")}})]})}t(27);function N(){return Object(d.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(d.jsx)("h1",{children:"Testimonials"}),Object(d.jsx)("div",{className:"container",children:[{id:1,name:"al Siam",title:"social Media app",img:"assets/mark.jpg",icon:"assets/mark.jpg",desc:"lore ipsum is popular text used by every developer for demo purpose"},{id:2,name:"al Siam world",title:"social Media app",img:"assets/mark.jpg",icon:"assets/mark.jpg",desc:"lore ipsum is popular text used by every developer for demo purpose",featured:!0},{id:3,name:"al Siam here i am",title:"social Media app",img:"assets/mark.jpg",icon:"assets/mark.jpg",desc:"lore ipsum is popular text used by every developer for demo purpose"}].map((function(e){return Object(d.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("img",{src:"assets/mark.jpg",className:"left",alt:""}),Object(d.jsx)("img",{src:e.img,className:"user",alt:""}),Object(d.jsx)("img",{src:e.icon,className:"right",alt:""})]}),Object(d.jsx)("div",{className:"center",children:e.desc}),Object(d.jsxs)("div",{className:"bottom",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("h4",{children:e.title})]})]})}))})]})}t(28);function M(){return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/myImg.png",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact."}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("textarea",{placeholder:"Message"}),Object(d.jsx)("button",{type:"submit",children:"Send"})]})]})]})}t(29),t(30);function C(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(s&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return t(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return t(!1)},children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{onClick:function(){return t(!1)},children:Object(d.jsx)("a",{href:"#works",children:"Works"})}),Object(d.jsx)("li",{onClick:function(){return t(!1)},children:Object(d.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(d.jsx)("li",{onClick:function(){return t(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var w=function(){var e=Object(i.useState)(!1),s=Object(n.a)(e,2),t=s[0],a=s[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(o,{menuOpen:t,setMenuOpen:a}),Object(d.jsx)(C,{menuOpen:t,setMenuOpen:a}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(b,{}),Object(d.jsx)(v,{}),Object(d.jsx)(k,{}),Object(d.jsx)(N,{}),Object(d.jsx)(M,{})]})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.c1fb5e06.chunk.js.map