"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[134],{2058:function(e,n,t){t.d(n,{Ir:function(){return l},KL:function(){return f},Mm:function(){return h},b9:function(){return m},nM:function(){return d},p8:function(){return p},rK:function(){return v},ry:function(){return u},tT:function(){return y},wv:function(){return i}});var r=t(4165),a=t(5861),c=t(4569),s=t.n(c),o=t(9697),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,25e3],c=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var p=(0,a.Z)((0,r.Z)().mark((function a(p){var u,d,l;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,p({type:o.Ty}),u="/api/v1/products?keyword=".concat(e,"&page=").concat(n,"&price[gte]=").concat(t[0],"&price[lte]=").concat(t[1],"&ratings[gte]=").concat(i),c&&(u="/api/v1/products?keyword=".concat(e,"&page=").concat(n,"&price[gte]=").concat(t[0],"&price[lte]=").concat(t[1],"&category=").concat(c,"&ratings[gte]=").concat(i)),r.next=6,s().get(u);case 6:d=r.sent,l=d.data,p({type:o.js,payload:l}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),p({type:o.Vh,payload:r.t0.response.data.message});case 14:case"end":return r.stop()}}),a,null,[[0,11]])})));return function(e){return p.apply(this,arguments)}}()},p=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:o.Iq}),e.next=4,s().get("/api/v1/admin/products");case 4:t=e.sent,a=t.data,n({type:o.AT,payload:a.products}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:o.zH,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.TK}),a={headers:{"Content-Type":"application/json"}},n.next=5,s().post("/api/v1/admin/product/new",e,a);case 5:c=n.sent,i=c.data,t({type:o.Cy,payload:i}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:o.J$,payload:n.t0.response.data.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var c,i,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:o.L7}),c={headers:{"Content-Type":"application/json"}},t.next=5,s().put("/api/v1/admin/product/".concat(e),n,c);case 5:i=t.sent,p=i.data,a({type:o.zk,payload:p.success}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:o.ki,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.bi}),n.next=4,s().delete("/api/v1/admin/product/".concat(e));case 4:a=n.sent,c=a.data,t({type:o.cO,payload:c.success}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:o.IX,payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.Uy}),n.next=4,s().get("/api/v1/product/".concat(e));case 4:a=n.sent,c=a.data,t({type:o.xe,payload:c.product}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:o.gh,payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.zK}),a={headers:{"Content-Type":"application/json"}},n.next=5,s().put("/api/v1/review",e,a);case 5:c=n.sent,i=c.data,t({type:o.Yu,payload:i.success}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:o.V_,payload:n.t0.response.data.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.MJ}),n.next=4,s().get("/api/v1/reviews?id=".concat(e));case 4:a=n.sent,c=a.data,t({type:o.zh,payload:c.reviews}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:o.Rc,payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var c,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:o.fz}),t.next=4,s().delete("/api/v1/reviews?id=".concat(e,"&productId=").concat(n));case 4:c=t.sent,i=c.data,a({type:o.g6,payload:i.success}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:o.Om,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:o.pp});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}},6545:function(e,n,t){t.r(n);var r=t(2791),a=(t(8306),t(1760)),c=t(2058),s=t(9434),o=t(9515),i=t(6534),p=t(2815),u=(t(4676),t(7152)),d=(t(5880),t(6760)),l=t(1523),f=t(184);n.default=function(){var e=(0,i.VY)(),n=(0,s.I0)(),t=(0,s.v9)((function(e){return e.products})),v=t.loading,h=t.error,y=t.products;return(0,r.useEffect)((function(){h&&(e.error(h),n((0,c.b9)())),n((0,c.wv)())}),[n,h,e]),(0,f.jsx)(r.Fragment,{children:v?(0,f.jsx)(o.Z,{}):(0,f.jsxs)(r.Fragment,{children:[(0,f.jsx)(a.Z,{title:"Myartworld Resin Shop | Myartworlld"}),(0,f.jsx)("div",{className:"banner",children:(0,f.jsxs)(p.tq,{modules:[u.pt,u.tl],navigation:!0,effect:!0,speed:800,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!0},pagination:{clickable:!0},loop:!0,className:"swiper",children:[(0,f.jsx)(p.o5,{className:"swiperSlide",children:(0,f.jsx)("img",{className:"banners",src:"banner1.webp",alt:"banner"})}),(0,f.jsx)(p.o5,{className:"swiperSlide",children:(0,f.jsx)("img",{className:"banners",src:"banner2.webp",alt:"banner"})}),(0,f.jsx)(p.o5,{className:"swiperSlide",children:(0,f.jsx)("img",{className:"banners",src:"banner3.webp",alt:"banner"})})]})}),(0,f.jsx)("p",{className:"line-1 anim-typewriter",children:"Welcome to MyArtWorld Resin Shop, Exciting  Resin Artwork Below."}),(0,f.jsxs)("h2",{className:"homeHeading",children:["Featured Products ",(0,f.jsx)("p",{children:"Stylish Resin Art & More"})]}),(0,f.jsx)("div",{className:"container",id:"container",children:y&&y.map((function(e){return(0,f.jsx)(d.Z,{product:e},e._id)}))}),(0,f.jsxs)(l.OL,{className:"link",to:"/products",onClick:void window.scrollTo(0,0),children:[(0,f.jsx)("h2",{className:"homeProHeading",children:"See all Products"})," "]}),(0,f.jsx)("p",{className:"line-1 anim-typewriter2",children:"Customized Product Upto 30% Off - All Resin Products & More."}),(0,f.jsxs)("h2",{className:"homeHeading",children:["New Arrivals",(0,f.jsx)("p",{children:"Stylish Resin Art & More"})]}),(0,f.jsx)("div",{className:"container",id:"container",children:y&&y.reverse().map((function(e){return(0,f.jsx)(d.Z,{product:e},e._id)}))})]})})}},6760:function(e,n,t){var r=t(1413),a=(t(2791),t(1523)),c=t(4900),s=t(184);n.Z=function(e){var n=e.product,t=((n.oldPrice-n.price)/n.oldPrice*100).toFixed(),o={size:"small",value:n.ratings,readOnly:!0,precision:.5};return(0,s.jsxs)(a.rU,{className:"productCard",to:"/product/".concat(n._id),children:[(0,s.jsx)("img",{src:n.images[0].url,alt:n.name}),(0,s.jsx)("p",{children:n.name}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.Z,(0,r.Z)({},o)),(0,s.jsxs)("span",{className:"productCardSpan",children:["(",n.numOfReviews," Reviews)"]})]}),(0,s.jsxs)("span",{children:["\u20b9".concat(n.price)," ",(0,s.jsxs)("strong",{children:[(0,s.jsxs)("p",{className:"spanP",children:["\u20b9".concat(n.oldPrice)," "]}),"(".concat(t,"%)off")]})]})]})}},8306:function(){}}]);
//# sourceMappingURL=134.4bebb597.chunk.js.map