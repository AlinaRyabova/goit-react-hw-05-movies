"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{9257:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i,c,s,o=t(5861),u=t(9439),p=t(4687),l=t.n(p),d=t(2791),f=t(7689),h=t(1087),x=t(3995),v=t(7593),g=t(168),m=t(1109),w=m.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),j=m.Z.ul(a||(a=(0,g.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),y=m.Z.ul(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),Z=(0,m.Z)(h.rU)(c||(c=(0,g.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #5a0341;\n"]))),b=(m.Z.button(s||(s=(0,g.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 3px solid #57035f;\n  color: #57044c;\n  font-weight: 400;\n  font-size: 20px;\n"]))),t(184)),k=function(){var n,e,t=(0,f.UO)().movieId,r=(0,d.useState)(null),a=(0,u.Z)(r,2),i=a[0],c=a[1],s=(0,d.useState)(!1),p=(0,u.Z)(s,2),g=p[0],m=p[1],k=(0,f.TH)();if((0,d.useEffect)((function(){var n=function(){var n=(0,o.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,x.Y5)(t);case 4:e=n.sent,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),!i)return null;var _=i.title,U=i.release_date,S=i.popularity,C=i.overview,z=i.genres,A=i.poster_path,G=i.original_title;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.rU,{to:null!==(n=null===(e=k.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",style:{textDecoration:"none",fontWeight:600,fontSize:"18px",color:"#5a0341"},children:"Go back"}),g&&(0,b.jsx)(v.Z,{}),(0,b.jsxs)(w,{children:[(0,b.jsx)("img",{width:"300px",src:A?"https://image.tmdb.org/t/p/w500".concat(A):"https://ichef.bbci.co.uk/news/640/cpsprodpb/C7CA/production/_104864115_b1fef570-1bdf-441d-9724-3a72e5d46e91.jpg",alt:G}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h1",{children:[_," (",U.slice(0,4),")"]}),(0,b.jsxs)("p",{children:["User score: ",S]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:C}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)(j,{children:z.map((function(n){return(0,b.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,b.jsx)("hr",{}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Additional information"}),(0,b.jsxs)(y,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(Z,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(Z,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)("hr",{}),(0,b.jsx)(f.j3,{})]})]})}},3995:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return o},Y5:function(){return p},y:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="df31fc31c1506c9b998d39d3a9f0dd23",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.a97d4bf9.chunk.js.map