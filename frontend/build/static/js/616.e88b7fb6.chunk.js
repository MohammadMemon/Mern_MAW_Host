"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[616],{7616:function(c,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(2791),s=n(1523),t=n(184),i=function(c){var e=c.item,n=c.deleteCartItems;return"Alphabet Keychain"===e.name?(0,t.jsxs)("div",{className:"CartItemCard",children:[(0,t.jsx)("img",{src:e.image,alt:"ssa"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.rU,{to:"/product/".concat(e.product),children:e.name}),(0,t.jsx)("span",{children:"Price: \u20b9".concat(e.oldPrice)}),(0,t.jsx)("span",{children:"Discounted Price: \u20b9".concat(e.price)}),(0,t.jsxs)("span",{children:["Alphabet Selected: ",(0,t.jsx)("strong",{children:e.alphabet})," "]}),(0,t.jsx)("p",{onClick:function(){return n(e.product)},children:"Remove"})]})]}):"Alphabet Keychain with Name"===e.name?(0,t.jsxs)("div",{className:"CartItemCard Big",children:[(0,t.jsx)("img",{src:e.image,alt:"ssa"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.rU,{to:"/product/".concat(e.product),children:e.name}),(0,t.jsx)("span",{children:"Price: \u20b9".concat(e.oldPrice)}),(0,t.jsx)("span",{children:"Discounted Price: \u20b9".concat(e.price)}),(0,t.jsxs)("span",{children:["Alphabet Selected: ",(0,t.jsx)("strong",{children:e.alphabet})," "]}),(0,t.jsxs)("span",{children:["Name: ",(0,t.jsx)("strong",{children:e.nameOne})," "]}),(0,t.jsx)("p",{onClick:function(){return n(e.product)},children:"Remove"})]})]}):"Couple Keychain"===e.name?(0,t.jsxs)("div",{className:"CartItemCard Big",children:[(0,t.jsx)("img",{src:e.image,alt:"ssa"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.rU,{to:"/product/".concat(e.product),children:e.name}),(0,t.jsx)("span",{children:"Price: \u20b9".concat(e.oldPrice)}),(0,t.jsx)("span",{children:"Discounted Price: \u20b9".concat(e.price)}),(0,t.jsxs)("span",{children:["First Name: ",(0,t.jsx)("strong",{children:e.nameOne})," "]}),(0,t.jsxs)("span",{children:["Second Name: ",(0,t.jsx)("strong",{children:e.nameTwo})," "]}),(0,t.jsx)("p",{onClick:function(){return n(e.product)},children:"Remove"})]})]}):"Heart Shape Keychain"===e.name||"Pop-Socket"===e.name?(0,t.jsxs)("div",{className:"CartItemCard",children:[(0,t.jsx)("img",{src:e.image,alt:"ssa"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.rU,{to:"/product/".concat(e.product),children:e.name}),(0,t.jsx)("span",{children:"Price: \u20b9".concat(e.oldPrice)}),(0,t.jsx)("span",{children:"Discounted Price: \u20b9".concat(e.price)}),(0,t.jsxs)("span",{children:["Name: ",(0,t.jsx)("strong",{children:e.nameOne})," "]}),(0,t.jsx)("p",{onClick:function(){return n(e.product)},children:"Remove"})]})]}):(0,t.jsxs)("div",{className:"CartItemCard",children:[(0,t.jsx)("img",{src:e.image,alt:"ssa"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.rU,{to:"/product/".concat(e.product),children:e.name}),(0,t.jsx)("span",{children:"Price: \u20b9".concat(e.oldPrice)}),(0,t.jsx)("span",{children:"Discounted Price: \u20b9".concat(e.price)}),(0,t.jsx)("p",{onClick:function(){return n(e.product)},children:"Remove"})]})]})},a=n(9434),d=n(9817),l=n(8302),o=n(7296),u=n(1760),h=function(c){var e=c.history,n=(0,a.I0)(),h=(0,a.v9)((function(c){return c.cart})).cartItems,x=function(c){n((0,d.Sg)(c))},j=h.reduce((function(c,e){return c+e.quantity*e.oldPrice}),0)-h.reduce((function(c,e){return c+e.quantity*e.price}),0);return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(u.Z,{title:"Myartworld/Cart"}),0===h.length?(0,t.jsxs)("div",{className:"emptyCart",children:[(0,t.jsx)(o.Z,{}),(0,t.jsx)(l.Z,{children:"No Product in Your Cart"}),(0,t.jsx)(s.rU,{to:"/products",children:"View Products"})]}):(0,t.jsx)(r.Fragment,{children:(0,t.jsxs)("div",{className:"cartPage",children:[(0,t.jsxs)("div",{className:"cartHeader",children:[(0,t.jsx)("p",{children:"Product"}),(0,t.jsx)("p",{children:"Quantity"}),(0,t.jsx)("p",{children:"Subtotal"})]}),h&&h.map((function(c){return(0,t.jsxs)("div",{className:"cartContainer",children:[(0,t.jsx)(i,{item:c,deleteCartItems:x}),(0,t.jsxs)("div",{className:"cartInput",children:[(0,t.jsx)("button",{onClick:function(){return function(c,e){var r=e-1;1>=e||n((0,d.DW)(c,r))}(c.product,c.quantity)},children:"-"}),(0,t.jsx)("input",{type:"number",value:c.quantity,readOnly:!0}),(0,t.jsx)("button",{onClick:function(){return function(c,e,r){var s=e+1;r<=e||n((0,d.DW)(c,s))}(c.product,c.quantity,c.Stock)},children:"+"})]}),(0,t.jsx)("p",{className:"cartSubtotal",children:"\u20b9".concat(c.price*c.quantity)})]},c.product)})),(0,t.jsxs)("div",{className:"cartGrossProfit",children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"cartGrossProfitBox borderTop",children:[(0,t.jsx)("p",{children:"Total"}),(0,t.jsx)("p",{children:"\u20b9".concat(h.reduce((function(c,e){return c+e.quantity*e.oldPrice}),0))})]}),(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"cartGrossProfitBox",children:[(0,t.jsx)("p",{children:"Discount"}),(0,t.jsx)("p",{children:"-\u20b9".concat(j)})]}),(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"cartGrossProfitBox",children:[(0,t.jsx)("p",{children:"Gross Total"}),(0,t.jsx)("p",{children:"\u20b9".concat(h.reduce((function(c,e){return c+e.quantity*e.price}),0))})]}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{className:"checkOutBtn",children:(0,t.jsx)("button",{onClick:function(){e.push("/login?redirect=shipping")},children:"Check Out"})})]})]})})]})}},7296:function(c,e,n){var r=n(4836),s=n(5263);e.Z=void 0;var t=s(n(2791)),i=(0,r(n(4894)).default)(t.createElement("path",{d:"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"}),"RemoveShoppingCart");e.Z=i}}]);
//# sourceMappingURL=616.e88b7fb6.chunk.js.map