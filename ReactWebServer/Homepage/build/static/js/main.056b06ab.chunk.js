(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},70:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(22),c=n.n(r),i=(n(61),n(62),n(63),n(2)),s=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"XKCD Browser"})})},o=n(5),u=(n(70),n(6)),l=n.n(u),m=n(15),p=n(32),b=n(11),j=n(4),d={url:"https://xkcd.now.sh/?comic=700",month:"2",num:700,year:"2010",news:"",safe_title:"Complexion",transcript:"",alt:"Why do all my attempts at science end with me being punched by Batman?  (P.S. benzoyl peroxide soap works great.)",img:"https://imgs.xkcd.com/comics/complexion.png",title:"Complexion",day:"10",comments:[{}],ratings:[{}]},h=n(43),f=Object(p.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FIRST":return Object(j.a)(Object(j.a)({},t),{},{num:e.payload.num,url:e.payload.url,img:e.payload.img,title:e.payload.title,day:e.payload.day,month:e.payload.month,year:e.payload.year,alt:e.payload.alt});case"PREVIOUS":return 1===t.num?t:Object(j.a)(Object(j.a)({},t),{},{num:e.payload.num,url:e.payload.url,img:e.payload.img,title:e.payload.title,day:e.payload.day,month:e.payload.month,year:e.payload.year,alt:e.payload.alt});case"NEXT":case"RANDOM":case"LAST":return Object(j.a)(Object(j.a)({},t),{},{num:e.payload.num,url:e.payload.url,img:e.payload.img,title:e.payload.title,day:e.payload.day,month:e.payload.month,year:e.payload.year,alt:e.payload.alt});case"ADD":return Object(j.a)(Object(j.a)({},t),{},{comments:[].concat(Object(b.a)(t.comments),[e.payload.newComment])});case"ADD_STARS":return Object(j.a)(Object(j.a)({},t),{},{ratings:[].concat(Object(b.a)(t.ratings),[e.payload.newRating])});default:return t}}),Object(p.a)(h.a)),y=n(44),O=n.n(y),g=function(t,e,n){return function(){var a=Object(m.a)(l.a.mark((function a(r,c){var i,s,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=f.getState(),o=parseInt(i.num),s=n?parseInt(e):e,f.dispatch({type:t,payload:{newRating:{comicNum:o,stars:s}}});case 4:case"end":return a.stop()}}),a)})));return function(t,e){return a.apply(this,arguments)}}()},A=function(){var t=Object(o.c)();return Object(i.jsxs)("div",{className:"buttonWrapper",children:[Object(i.jsx)("button",{onClick:function(){var e;t((e="FIRST",function(){var t=Object(m.a)(l.a.mark((function t(n,a){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://xkcd.now.sh/?comic=1").then((function(t){return t.json()}));case 3:r=t.sent,c=parseInt(r.num),f.dispatch({type:e,payload:{url:"https://xkcd.now.sh/?comic=",month:r.month,num:c,year:r.year,news:r.news,safe_title:r.safe_title,transcript:r.transcript,alt:r.alt,img:r.img,title:r.title,day:r.day}});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"First"}),Object(i.jsx)("button",{onClick:function(){t(function(){var t=Object(m.a)(l.a.mark((function t(e,n){var a,r,c,i,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.getState(),r=parseInt(a.num),c="https://xkcd.now.sh/?comic="+(r-1),t.next=5,fetch(c).then((function(t){return t.json()}));case 5:i=t.sent,s=parseInt(i.num),f.dispatch({type:"PREVIOUS",payload:{url:"https://xkcd.now.sh/?comic=",month:i.month,num:s,year:i.year,news:i.news,safe_title:i.safe_title,transcript:i.transcript,alt:i.alt,img:i.img,title:i.title,day:i.day}});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},children:"Previous"}),Object(i.jsx)("button",{onClick:function(){t(function(){var t=Object(m.a)(l.a.mark((function t(e,n){var a,r,c,i,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.getState(),r=parseInt(a.num),c="https://xkcd.now.sh/?comic="+(r+1),t.next=5,fetch(c).then((function(t){return t.json()}));case 5:i=t.sent,s=parseInt(i.num),f.dispatch({type:"NEXT",payload:{url:"https://xkcd.now.sh/?comic=",month:i.month,num:s,year:i.year,news:i.news,safe_title:i.safe_title,transcript:i.transcript,alt:i.alt,img:i.img,title:i.title,day:i.day}});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},children:"Next"}),Object(i.jsx)("button",{onClick:function(){var e;t((e="RANDOM",function(){var t=Object(m.a)(l.a.mark((function t(n,a){var r,c,i,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Math.floor(2465*Math.random())+1,c="https://xkcd.now.sh/?comic="+r,t.next=4,fetch(c).then((function(t){return t.json()}));case 4:i=t.sent,s=parseInt(i.num),f.dispatch({type:e,payload:{url:"https://xkcd.now.sh/?comic=",month:i.month,num:s,year:i.year,news:i.news,safe_title:i.safe_title,transcript:i.transcript,alt:i.alt,img:i.img,title:i.title,day:i.day}});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Random"}),Object(i.jsx)("button",{onClick:function(){var e;t((e="LAST",function(){var t=Object(m.a)(l.a.mark((function t(n,a){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://xkcd.now.sh/?comic=latest").then((function(t){return t.json()}));case 3:r=t.sent,c=parseInt(r.num),f.dispatch({type:e,payload:{url:"https://xkcd.now.sh/?comic=",month:r.month,num:c,year:r.year,news:r.news,safe_title:r.safe_title,transcript:r.transcript,alt:r.alt,img:r.img,title:r.title,day:r.day}});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Last"})]})},x=(Object(o.b)((function(t){return{num:t.num,url:t.url,month:t.month,year:t.year,news:t.news,safe_title:t.safe_title,transcript:t.transcript,alt:t.alt,img:t.img,title:t.title,day:t.day}}))(A),Object(o.b)((function(t){return{num:t.num,url:t.url,month:t.month,year:t.year,news:t.news,safe_title:t.safe_title,transcript:t.transcript,alt:t.alt,img:t.img,title:t.title,day:t.day}}),(function(t){return{previousClick:function(){return t({type:"PREVIOUS"})},nextClick:function(){return t({type:"NEXT"})},randomClick:function(){return t({type:"RANDOM"})}}}))(A)),w=n(23),v=n(9),k=n(26),D=n(25),S=(n(73),function(t){Object(k.a)(n,t);var e=Object(D.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t=this.props.num,e=this.props.day,n=this.props.month,a=this.props.year;switch(n){case"1":n="January";break;case"2":n="February";break;case"3":n="March";break;case"4":n="April";break;case"5":n="May";break;case"6":n="June";break;case"7":n="July";break;case"8":n="August";break;case"9":n="September";break;case"10":n="October";break;case"11":n="November";break;case"12":n="December"}return Object(i.jsxs)("div",{className:"comicWrapper",children:[Object(i.jsx)("span",{children:this.props.title}),Object(i.jsx)("img",{src:this.props.img,alt:""}),Object(i.jsx)("span",{children:this.props.alt}),Object(i.jsxs)("span",{children:["#",t,", drawn on ",n," ",e," ",a]})]})}}]),n}(a.Component)),I=Object(o.b)((function(t){return{num:t.num,url:t.url,img:t.img,title:t.title,day:t.day,month:t.month,year:t.year,alt:t.alt}}),null)(S),N=n(18),R=(n(74),function(){var t=Object(a.useState)(""),e=Object(N.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),s=Object(N.a)(c,2),u=s[0],p=s[1],b=Object(o.c)(),j=function(){document.getElementById("form").reset()};return""!==n&&""!==u?Object(i.jsxs)("div",{className:"formWrapper",children:[Object(i.jsx)("form",{children:Object(i.jsxs)("label",{children:["Name:",Object(i.jsx)("input",{onChange:function(t){return r(t.target.value)}})]})}),Object(i.jsx)("form",{id:"form",children:Object(i.jsxs)("label",{children:["Comment:",Object(i.jsx)("input",{onChange:function(t){return p(t.target.value)}})]})}),Object(i.jsx)("button",{className:"bottomFormSpacer",onClick:function(){b(function(t,e,n){return function(){var a=Object(m.a)(l.a.mark((function a(r,c){var i,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=f.getState(),s=parseInt(i.num),f.dispatch({type:t,payload:{newComment:{comicNum:s,userName:e,userComment:n,time:O()().format("LLL")}}});case 3:case"end":return a.stop()}}),a)})));return function(t,e){return a.apply(this,arguments)}}()}("ADD",n,u)),p(""),j()},children:"Submit Comment"})]}):Object(i.jsxs)("div",{className:"formWrapper",children:[Object(i.jsx)("form",{children:Object(i.jsxs)("label",{children:["Name:",Object(i.jsx)("input",{onChange:function(t){return r(t.target.value)}})]})}),Object(i.jsx)("form",{children:Object(i.jsxs)("label",{children:["Comment:",Object(i.jsx)("input",{onChange:function(t){return p(t.target.value)}})]})})]})}),C=(Object(o.b)((function(t){return{comments:t.comments}}))(R),n(75),function(t){Object(k.a)(n,t);var e=Object(D.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t,e=this.props.comments,n="",a=this.props.num;for(t=0;t<e.length;t++)a===e[t].comicNum&&(n+="<ul>",n+="<li>",n+=e[t].userName+" - ",n+=e[t].userComment,n+="<i> - "+e[t].time+"</i>",n+="</li>",n+="</ul>");return""===n?Object(i.jsx)("div",{}):Object(i.jsx)("div",{className:"comments",children:Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})}}]),n}(a.Component)),T=Object(o.b)((function(t){return{num:t.num,comments:t.comments}}),null)(C),E=(n(3),n(51)),B=n(94),M=n(50),J=n.n(M),U=n(45),L=n.n(U),W=n(46),Y=n.n(W),P=n(47),Q=n.n(P),F=n(48),V=n.n(F),Z=n(49),G=n.n(Z),H=n(93);n(76),Object(E.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(B.a),L.a,Y.a,Q.a,V.a,G.a;var X=function(){var t=Object(o.c)();return Object(i.jsx)("div",{className:"ratingWrapper",children:Object(i.jsx)(H.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(i.jsx)(B.a,{onClick:function(e){var n=e.target.attributes[1].value,a=n.substring(17,n.length);if(""!==a)switch(a){case"4-5":t(g("ADD_STARS",4.5,!1));break;case"3-5":t(g("ADD_STARS",3.5,!1));break;case"2-5":t(g("ADD_STARS",2.5,!1));break;case"1-5":t(g("ADD_STARS",1.5,!1));break;case"0-5":t(g("ADD_STARS",.5,!1));break;default:t(g("ADD_STARS",a,!0))}},name:"customized-empty",defaultValue:5,precision:.5,emptyIcon:Object(i.jsx)(J.a,{fontSize:"inherit"})})})})},z=(Object(o.b)((function(t){return{ratings:t.ratings}}))(X),n(78),function(t){Object(k.a)(n,t);var e=Object(D.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t,e=this.props.ratings,n=this.props.num,a=0,r=0,c=!1;if(e.length>1)for(t=1;t<e.length;t++)console.log("ComicNumber: "+n),console.log("Ratings[i].comicNum: "+e[t].comicNum),n===e[t].comicNum&&(a+=e[t].stars,r++,c=!0);return c?(a=(a/r).toFixed(2),Object(i.jsx)("div",{className:"ratingWrapper",children:Object(i.jsxs)("span",{children:[" Average rating: ",a," "]})})):Object(i.jsx)("div",{className:"ratingWrapper"})}}]),n}(a.Component)),K=Object(o.b)((function(t){return{num:t.num,ratings:t.ratings}}),null)(z),q=(n(79),function(){return Object(i.jsx)("div",{className:"github",children:Object(i.jsx)("div",{className:"center",children:Object(i.jsx)("a",{href:"https://github.com/MayDevelops/WebProjects/tree/master/ReactWebServer/Homepage",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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",alt:""})})})})});var _=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(x,{}),Object(i.jsx)(I,{}),Object(i.jsx)(X,{}),Object(i.jsx)(K,{}),Object(i.jsx)(R,{}),Object(i.jsx)(T,{}),Object(i.jsx)(q,{})]})},$=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};c.a.render(Object(i.jsx)(o.a,{store:f,children:Object(i.jsx)(_,{})}),document.getElementById("root")),$()}},[[80,1,2]]]);
//# sourceMappingURL=main.056b06ab.chunk.js.map