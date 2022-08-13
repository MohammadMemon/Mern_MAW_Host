"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[865],{9817:function(e,t,n){n.d(t,{DW:function(){return o},Sg:function(){return u},l5:function(){return l}});var r=n(4165),i=n(5861),a=n(7254),s=n(4569),c=n.n(s),o=function(e,t,n,s,o){return function(){var u=(0,i.Z)((0,r.Z)().mark((function i(u,l){var d,p;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c().get("/api/v1/product/".concat(e));case 2:d=r.sent,p=d.data,u({type:a.G2,payload:{product:p.product._id,name:p.product.name,price:p.product.price,oldPrice:p.product.oldPrice,image:p.product.images[0].url,Stock:p.product.Stock,quantity:t,alphabet:n,nameOne:s,nameTwo:o}}),localStorage.setItem("cartItems",JSON.stringify(l().cart.cartItems));case 6:case"end":return r.stop()}}),i)})));return function(e,t){return u.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:a.in,payload:e}),localStorage.setItem("cartItems",JSON.stringify(i().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:a.EE,payload:e}),localStorage.setItem("shippingInfo",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},1975:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(2791),i=n(8302),a=n(7084),s=n(968),c=n(5119),o=n(5946),u=n(7463),l=n(2444),d=n(184),p=function(e){var t=e.activeStep,n=[{label:(0,d.jsx)(i.Z,{children:"Shipping Details"}),icon:(0,d.jsx)(o.Z,{})},{label:(0,d.jsx)(i.Z,{children:"Confirm Order"}),icon:(0,d.jsx)(u.Z,{})},{label:(0,d.jsx)(i.Z,{children:"Payment"}),icon:(0,d.jsx)(l.Z,{})}];return(0,d.jsx)(r.Fragment,{children:(0,d.jsx)(a.Z,{alternativeLabel:!0,activeStep:t,style:{boxSizing:"border-box"},children:n.map((function(e,n){return(0,d.jsx)(s.Z,{active:t===n,completed:t>=n,children:(0,d.jsx)(c.Z,{style:{color:t>=n?"#fa6643":"rgba(0, 0, 0, 0.649)"},icon:e.icon,children:e.label})},n)}))})})}},6865:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(885),i=n(2791),a=n(9434),s=n(9817),c=n(1760),o=n(3713),u=n(9112),l=n(8927),d=n(487),p=n(4600),h=n(85),f=n(6127),x=n(6534),v=n(1975),g=n(184),j=function(e){var t=e.history,n=(0,a.I0)(),j=(0,x.VY)(),m=(0,a.v9)((function(e){return e.cart})),Z=m.shippingInfo,y=(0,i.useState)(Z.address),S=(0,r.Z)(y,2),b=S[0],C=S[1],N=(0,i.useState)(Z.city),I=(0,r.Z)(N,2),k=I[0],w=I[1],q=(0,i.useState)(Z.state),P=(0,r.Z)(q,2),O=P[0],D=P[1],F=(0,i.useState)(Z.country),z=(0,r.Z)(F,2),J=z[0],L=z[1],B=(0,i.useState)(Z.pinCode),E=(0,r.Z)(B,2),T=E[0],A=E[1],G=(0,i.useState)(Z.phoneNo),H=(0,r.Z)(G,2),V=H[0],W=H[1];return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(c.Z,{title:"Shipping Details"}),(0,g.jsx)(v.Z,{activeStep:0}),(0,g.jsx)("div",{className:"shippingContainer",children:(0,g.jsxs)("div",{className:"shippingBox",children:[(0,g.jsx)("h2",{className:"shippingHeading",children:"Shipping Details"}),(0,g.jsxs)("form",{className:"shippingForm",encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),V.length<10||V.length>10?j.error("Phone Number should be 10 digits Long"):T.length<6||T.length>6?j.error("Pincode should be 6 digits Long"):(n((0,s.l5)({address:b,city:k,state:O,country:J,pinCode:T,phoneNo:V})),t.push("/confirm/order"))},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(u.Z,{}),(0,g.jsx)("input",{type:"text",placeholder:"Full Address",required:!0,value:b,onChange:function(e){return C(e.target.value)}})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(l.Z,{}),(0,g.jsx)("input",{type:"text",placeholder:"City",required:!0,value:k,onChange:function(e){return w(e.target.value)}})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(o.Z,{}),(0,g.jsx)("input",{type:"number",placeholder:"Pin Code",required:!0,value:T,onChange:function(e){return A(e.target.value)},size:"6"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(p.Z,{}),(0,g.jsx)("input",{type:"number",placeholder:"Phone Number",required:!0,value:V,onChange:function(e){return W(e.target.value)},size:"10"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(d.Z,{}),(0,g.jsxs)("select",{required:!0,value:J,onChange:function(e){return L(e.target.value)},children:[(0,g.jsx)("option",{value:"",children:"Country"}),(0,g.jsx)("option",{value:"IN",children:"India"})]})]}),J&&(0,g.jsxs)("div",{children:[(0,g.jsx)(h.Z,{}),(0,g.jsxs)("select",{required:!0,value:O,onChange:function(e){return D(e.target.value)},children:[(0,g.jsx)("option",{value:"",children:"State"}),f.State&&f.State.getStatesOfCountry(J).map((function(e){return(0,g.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)}))]})]}),(0,g.jsx)("input",{type:"submit",value:"Continue",className:"shippingBtn",disabled:!O})]})]})})]})}},1760:function(e,t,n){n(2791);var r=n(4270),i=n(184);t.Z=function(e){var t=e.title,n=e.description;return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("meta",{name:"description",content:n})]})}}}]);
//# sourceMappingURL=865.cbbbeaf6.chunk.js.map