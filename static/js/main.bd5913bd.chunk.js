(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),r=c(22),s=c.n(r),o=(c(31),c(32),c(72)),a=c(11),l=c(3),d=Object(o.a)((function(e){return console.log(e),{menuBox:{display:"flex",flexDirection:"column",position:"absolute",top:"2px",height:e.spacing(0),minWidth:e.spacing(15)},menuText:{color:e.palette.text.secondary}}})),p=function(){var e=d();return Object(l.jsxs)("div",{open:!0,className:e.menuBox,BackdropProps:{invisible:!0},variant:"persistant",children:[Object(l.jsx)(a.b,{to:"/",children:"Home"}),Object(l.jsx)(a.b,{to:"/weather",children:"Weather"})]})},x=function(){return Object(l.jsx)("div",{children:"Testing to see if this works"})},j=c(6),u=(c(36),c(26)),b=c.n(u),f=Object(o.a)((function(e){return{cardBox:{display:"flex",flexDirection:"column",border:"1px solid black",borderRadius:"5px",maxWidth:e.spacing(60),margin:"5px"},imgBox:{width:e.spacing(10)},basicDescription:{display:"flex",flexDirection:"row"}}})),m=function(e){var t=e.period,c=f(),i=t.startTime.split("T")[0].split("-");i[1];return Object(l.jsxs)("div",{className:c.cardBox,children:[Object(l.jsxs)("div",{className:c.basicDescription,children:[Object(l.jsx)("img",{className:c.imgBox,src:t.icon}),t.name," - ",i[1],"/",i[2],"/",i[0],Object(l.jsx)("br",{}),"Temperature : ",t.temperature," ",t.temperatureUnit,Object(l.jsx)("br",{}),"Short Forcast : ",t.shortForecast,Object(l.jsx)("br",{}),"Wind: ",t.windSpeed," ",t.windDirection]}),Object(l.jsxs)("div",{children:["Forcast : ",t.detailedForecast]})]})},h=Object(o.a)((function(e){return{weatherBox:{display:"flex",flexDirection:"column",margin:"5px"}}})),O=function(){var e=Object(i.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(),s=Object(j.a)(r,2),o=s[0],a=s[1],d=Object(i.useState)([]),p=Object(j.a)(d,2),x=p[0],u=p[1],f=h();return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),a(e.coords.longitude)})),Object(i.useEffect)((function(){b.a.getForecast("default",c,o).then((function(e){u(e.data.properties.periods),console.log(e.data.properties.periods)})).catch((function(e){return e}))}),[c,o]),Object(l.jsx)("div",{className:f.weatherBox,children:x.map((function(e){return Object(l.jsx)(m,{period:e},e.number)}))})},g=c(2),v=Object(o.a)((function(e){return console.log(e),{appBox:{display:"flex",flexDirection:"row",maxWidth:e.spacing(100),left:e.spacing(0),top:e.spacing(2)},menuBox:{display:"flex",flexDirection:"column",position:"fixed",top:e.spacing(2),left:e.spacing(0)},menuText:{color:e.palette.text.secondary},routeBox:{display:"flex",position:"relative",left:e.spacing(10)}}})),B=function(){var e=v();return Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:e.appBox,children:[Object(l.jsx)("div",{className:e.menuBox,children:Object(l.jsx)(p,{})}),Object(l.jsx)("div",{className:e.routeBox,children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{path:"/",element:Object(l.jsx)(x,{})}),Object(l.jsx)(g.a,{path:"/weather",element:Object(l.jsx)(O,{})})]})})]})})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bd5913bd.chunk.js.map