(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={backdrop:"Modal_backdrop__3FAPo",modal:"Modal_modal__P3_V5"}},14:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2ey0n",image:"ImageGalleryItem_image__2xsbt"}},25:function(e,t,a){e.exports={container:"Container_container__3RIox"}},26:function(e,t,a){e.exports={btn:"Button_btn__3xaJM"}},27:function(e,t,a){},29:function(e,t,a){e.exports={overlay:"Loader_overlay__eMvxB"}},5:function(e,t,a){e.exports={header:"Searchbar_header__34uEY",form:"Searchbar_form__XuKjc",btn:"Searchbar_btn__37Gab",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(6),c=a.n(o),s=a(4),i=a.n(s),l=a(15),u=a(7),d=a(8),g=a(9),h=a(11),m=a(10),p=a(24),b=a.n(p),f=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=21551993-ac0c953930521d8ec489a1c57&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=a(25),v=a.n(j),O=a(0);var x=function(e){var t=e.children;return Object(O.jsx)("div",{className:v.a.container,children:t})},y=a(5),_=a.n(y);var w=function(e){var t=e.onHandleSubmit,a=e.onSearchQueryChange,n=e.value;return Object(O.jsx)("header",{className:_.a.header,children:Object(O.jsxs)("form",{className:_.a.form,onSubmit:t,children:[Object(O.jsx)("button",{type:"submit",className:_.a.btn,children:Object(O.jsx)("span",{className:_.a.label,children:"Search"})}),Object(O.jsx)("input",{className:_.a.input,type:"text",value:n,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a})]})})},L=a(13),M=a.n(L),S=document.querySelector("#root"),k=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(O.jsx)("div",{className:M.a.backdrop,onClick:this.handleBackdropClick,children:Object(O.jsx)("div",{className:M.a.modal,children:Object(O.jsx)("img",{src:e,alt:""})})}),S)}}]),a}(n.Component),I=a(26),C=a.n(I);var N=function(e){var t=e.onLoadMore;return Object(O.jsx)("button",{type:"button",className:C.a.btn,onClick:t,children:"Load more"})},U=a(14),R=a.n(U);var q=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onOpenModal;return Object(O.jsx)("li",{className:R.a.item,children:Object(O.jsx)("img",{src:t,alt:n,"data-source":a,className:R.a.image,onClick:r})})},B=a(27),D=a.n(B);var T=function(e){var t=e.images,a=e.onOpenModal;return Object(O.jsx)("ul",{className:D.a.ul,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(O.jsx)(q,{webformatURL:n,largeImageURL:r,tags:o,onOpenModal:a},t)}))})},E=a(28),P=a.n(E),F=(a(74),a(29)),K=a.n(F);var A=function(){return Object(O.jsx)("div",{className:K.a.overlay,children:Object(O.jsx)(P.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})},G=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],largeImageURL:"",page:1,error:null,isLoading:!1,showModal:!1},e.searchImages=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.query,r=a.page,""!==n.trim()){t.next=3;break}return t.abrupt("return"," Please enter a value for search images!");case 3:return e.toggleLoader(),t.prev=4,t.next=7,f(n,r);case 7:o=t.sent,e.setState((function(e){var t=e.images,a=e.page;return{images:[].concat(Object(l.a)(t),Object(l.a)(o)),page:a+1}})),0===o.length&&e.setState({error:"No results were found for ".concat(n,"!")}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),e.setState({error:"Something went wrong. Try again."});case 15:return t.prev=15,e.toggleLoader(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,12,15,18]])}))),e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.searchImages()},e.onLoadMore=function(){e.searchImages(),e.scrollPage()},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleLoader=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scrollPage=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),1e3)},e}return Object(g.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.setState({images:[],page:1,error:null})}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.images,n=e.largeImageURL,r=e.isLoading,o=e.showModal,c=e.error;return Object(O.jsxs)(x,{children:[Object(O.jsx)(w,{onHandleSubmit:this.handleSubmit,onSearchQueryChange:this.handleChange,value:t}),a.length>0&&!c&&Object(O.jsx)(T,{images:a,onOpenModal:this.onOpenModal}),r&&Object(O.jsx)(A,{}),!r&&a.length>=12&&!c&&Object(O.jsx)(N,{onLoadMore:this.onLoadMore}),o&&Object(O.jsx)(k,{onToggleModal:this.toggleModal,largeImageURL:n})]})}}]),a}(n.Component);a(75);c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.eab5c5ce.chunk.js.map