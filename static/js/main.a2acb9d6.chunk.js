(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(54),u=a.n(c),o=(a(67),a(3)),l=a.n(o),s=a(6),i=a(55),d=a(56),p=a(61),h=a(59),m=(a(69),a(70),a(18)),v=a.n(m),f=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,u=t.lastUpdate;if(!a)return"Loading...";var o="".concat(new Date(u).getFullYear(),"-").concat(new Date(u).getMonth()+1<10?"0".concat(new Date(u).getMonth()+1):"".concat(new Date(u).getMonth()+1),"-").concat(new Date(u).getDate()<10?"0".concat(new Date(u).getDate()):"".concat(new Date(u).getDate()));return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"Infected:"),r.a.createElement("h1",null,r.a.createElement(v.a,{start:0,end:a.value,duration:1,separator:","})),r.a.createElement("h2",null,"Last Update:"),r.a.createElement("h2",null,o)),r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"Recovered:"),r.a.createElement("h1",null,r.a.createElement(v.a,{start:0,end:n.value,duration:1,separator:","})),r.a.createElement("h2",null,"Last Update:"),r.a.createElement("h2",null,o)),r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"Deaths:"),r.a.createElement("h1",null,r.a.createElement(v.a,{start:0,end:c.value,duration:1,separator:","})),r.a.createElement("h2",null,"Last Update:"),r.a.createElement("h2",null,o)))},g=a(57),E=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,u=e.country;if(!a)return"";var o=a?r.a.createElement(g.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",null,o)},w=a(60),y=a(19),b=a.n(y),x="https://covid19.mathdro.id/api/",k=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,u,o,s,i,d,p,h,m,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return a="".concat(x,"countries/").concat(t),e.next=4,b.a.get("".concat(a));case 4:return n=e.sent,r=n.data,c=r.confirmed,u=r.recovered,o=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:u,deaths:o,lastUpdate:s});case 11:return e.prev=11,e.next=14,b.a.get("".concat(x,"countries/hun"));case 14:return i=e.sent,d=i.data,p=d.confirmed,h=d.recovered,m=d.deaths,v=d.lastUpdate,e.abrupt("return",{confirmed:p,recovered:h,deaths:m,lastUpdate:v});case 23:e.prev=23,e.t0=e.catch(11),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[11,23]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(x,"countries"));case 3:return t=e.sent,a=t.data.countries,n=a.map((function(e){return e.name})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=(a(186),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),u=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),u?r.a.createElement("div",null,r.a.createElement("select",{className:"dropDown",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{className:"text-change",value:""},"Hungary"),u.map((function(e,t){return r.a.createElement("option",{className:"text-change",key:t,value:e},e)})))):"Loading..."}),j=function(){window.open("https://www.youtube.com/channel/UCmUSwFUpkrdlR2KSxFJomww")},O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:"Hungary"},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,this.setState({data:t}),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"container"},r.a.createElement(D,{handleCountryChange:this.handleCountryChange}),r.a.createElement(f,{data:t}),r.a.createElement(E,{data:t,country:a}),r.a.createElement("img",{onClick:j,src:"https://szeged365.hu/wp-content/uploads/2020/04/BeFunky-collage-scaled.jpg",alt:"legysziT\xf6ltsdBeAK\xe9pet"}))}}]),a}(r.a.Component);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a(187)},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.a2acb9d6.chunk.js.map