(this["webpackJsonptest-pages1"]=this["webpackJsonptest-pages1"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(26),i=a.n(c),o=(a(38),a.p,a(39),a(29)),r=a(2),d=a(1),l=a(10),u=a(27),h=a(28),p=a(33),j=a(32),b=(a(16),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){a(16).get("https://api.diamond-press.com/api/en/Nas/Product/GetProductList?&pageLength=12&currentPageIndex=1&Filter.productSortType=3").then((function(e){s.setState({products:e.data.messageItems[0].data.dataItems})}))},s.addToBasketClicked=function(e){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"add_to_cart",ecommerce:Object(l.a)({},e)});var t=s.state.basket;t.push(e),s.setState({basket:t})},s.deleteFromBasketClicked=function(e,t){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"remove_from_cart",ecommerce:Object(l.a)({},e)});var a=s.state.basket;a.splice(t,1),s.setState({basket:a})},s.payValueChanged=function(e){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"purchase",ecommerce:{value:e}}),s.setState({payValue:e})},s.payBtnClicked=function(){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"begin_checkout",ecommerce:{items:Object(l.a)({},s.state.basket),amountOfMoney:s.state.payValue}}),s.setState({basket:[]})},s.clearBasketClicked=function(){s.setState({basket:[],payValue:""})},s.viewListClicked=function(){s.setState({showList:!s.state.showList},(function(){return s.state.showList&&Object(d.jsx)(d.Fragment,{children:(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"view_item_list",ecommerce:Object(l.a)({},s.state.basket)}))})}))},s.state={products:[],basket:[],payValue:"",showList:!1},s}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[console.log(window.dataLayer,"********"),Object(d.jsx)("div",{children:this.state.products.map((function(t){return!!t.imageUrl&&Object(d.jsxs)("div",{style:{marginTop:"10px",height:"100px",display:"flex"},children:[Object(d.jsx)("img",{style:{width:"100px"},src:"https://api.diamond-press.com".concat(t.imageUrl)}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:t.name}),Object(d.jsx)("button",{onClick:function(){return e.addToBasketClicked(t)},children:"add to basket"})]})]})}))}),Object(d.jsxs)("div",{style:{width:"200px"},children:[Object(d.jsx)("button",{onClick:this.viewListClicked,children:"".concat(this.state.showList?"hide":"show"," basket items")}),Object(d.jsx)("button",{onClick:this.clearBasketClicked,children:"clear basket"}),"basket",this.state.showList&&this.state.basket.map((function(t,a){return Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("p",{children:t.name}),Object(d.jsx)("button",{onClick:function(){return e.deleteFromBasketClicked(t,a)},children:"delete"})]})})),Object(d.jsx)("input",{value:this.state.payValue,onChange:function(t){return e.payValueChanged(t.target.value)},style:{marginTop:"10px"}}),Object(d.jsx)("button",{onClick:this.payBtnClicked,children:"pay"})]})]},window.dataLayer)})}}]),n}(s.a.Component));var m=function(){return window.dataLayer.push({event:"pageview",page:{url:window.location.href,title:window.title}}),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsx)(r.c,{children:Object(d.jsx)(r.a,{path:"/",children:Object(d.jsx)(b,{})})})})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.f8fcaef4.chunk.js.map