(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(306)},306:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),i=(a(33),a(4)),o=a(5),s=a(7),m=a(6),u=a(8),d=a(11),E=a(12),g={data:[],selectedData:void 0},p={sentenceList:[]},h=Object(E.c)({blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"FETCH_BLOG_LIST":return a.data=t.payload,a;case"RESET_BLOG_DETAIL":return a.selectedData=void 0,a;case"FETCH_BLOG_DETAIL":return a.selectedData=t.payload.data,a;default:return a}},english:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"FETCH_SENTENCE_LIST":return a.sentenceList=t.payload,a;default:return a}}}),f=[a(22).a],b=Object(E.e)(h,{},Object(E.d)(E.a.apply(void 0,f))),v=function(e){return l.a.createElement(d.a,{store:b},l.a.createElement(l.a.Fragment,null,e.children))},N=(a(40),a(41),a(311)),j=a(310),B="http://localhost:8000",O={"Content-Type":"application/json"},D=function(e){return l.a.createElement("div",{className:"area--ImgHead",style:{backgroundImage:"url(".concat(B,"/static/img/").concat(e.src,")")}},l.a.createElement("h2",{className:"title--ImgHead"},e.title))},y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Profile"),l.a.createElement("div",null,l.a.createElement("section",null,"\u6a5f\u68b0\u5b66\u7fd2\u3068Web\u306e\u52c9\u5f37\u3092\u3057\u3066\u3044\u308b\u30a8\u30f3\u30b8\u30cb\u30a2\u3067\u3059\u3002",l.a.createElement("br",null),"\u82f1\u8a9e\u306e\u52c9\u5f37\u3082\u9811\u5f35\u308d\u3046\u3068\u601d\u3063\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001\u306a\u304b\u306a\u304b\u9032\u307f\u307e\u305b\u3093\u3002",l.a.createElement("br",null),"Web\u306b\u3064\u3044\u3066\u306e\u52c9\u5f37\u304c\u9032\u3093\u3067\u6765\u305f\u306e\u3067\u3044\u3088\u3044\u3088\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u3088\u3046\u3068\u3044\u3046\u4e8b\u306b\u3044\u305f\u308a\u307e\u3057\u305f\u3002",l.a.createElement("br",null),"\u52c9\u5f37\u7528\u306e\u52d5\u753b\u3082\u4e0a\u3052\u305f\u308a\u306a\u3069\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002",l.a.createElement("br",null),"\u610f\u898b\u306a\u3069\u3042\u308c\u3070\u8a00\u3063\u3066\u3044\u305f\u3060\u3051\u308b\u3068\u5b09\u3057\u3044\u3067\u3059\u3002",l.a.createElement("br",null))))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(D,{src:"img_top.jpg",title:"Top"}),l.a.createElement(y,null))}}]),t}(n.Component),_=function(){return function(e){return fetch("http://localhost:8000/api/blog/blog_list",{method:"GET",headers:O}).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(t){var a=t.data;e({type:"FETCH_BLOG_LIST",payload:a})})}},T=function(e){return function(t){return fetch(B+"/api/blog/blog_detail/"+e,{method:"GET",headers:O}).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){t({type:"FETCH_BLOG_DETAIL",payload:e})})}},C=a(9),Y=a.n(C),k=a(308),w=function(e){return l.a.createElement("div",{className:"area-main--BlogList"},e.data.map(function(e){return l.a.createElement("div",{className:"lnk-detail--BlogList"},l.a.createElement(k.a,{to:"/blog/detail/".concat(e.uuid)},l.a.createElement("img",{src:B+e.main_image,className:"img-card--BlogList"})),l.a.createElement(k.a,{className:"ttl-card--BlogList",to:"/blog/detail/".concat(e.uuid)},e.title),l.a.createElement("div",{className:"sub-card--BlogList"},l.a.createElement("div",{className:"created-card--BlogList"},Y()(e.created).format("YYYY/MM/DD")),l.a.createElement("div",{className:"area-taglist--BlogList"},e.tags.map(function(e){return l.a.createElement("div",{className:"tag-card--BlogList"},e.name)}))))}))},x=a(309),M=a(26),I=function(e){return l.a.createElement(x.a,{language:e.lang,style:M.docco},e.code)},F=function(e){return l.a.createElement("div",{className:"area--BlogComment"},l.a.createElement("div",{className:"ttl--BlogComment"},"\u30b3\u30e1\u30f3\u30c8"),l.a.createElement("div",{className:"area-comment--BlogComment"},e.comments.map(function(e){return l.a.createElement("div",{className:"box-comment--BlogComment"},e.name,e.message,Y()(e.created).format("YYYY/MM/DD"),l.a.createElement("button",null,"\u8fd4\u4fe1"),l.a.createElement("div",{className:"area-reply--BlogComment"},e.reply_list.map(function(e){return l.a.createElement("div",{className:"box-reply--BlogComment"},e.message,e.name,Y()(e.created).format("YYYY/MM/DD"))})))})))},S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.resetBlogDetail().then(function(){var t=window.location.href.split("/"),a=t[t.length-1];e.props.fetchBlogDetail(a)})}},{key:"render",value:function(){return void 0==this.props.selectedData?l.a.createElement("div",null,"\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u4e2d\u3067\u3059"):l.a.createElement("div",{className:"area-BlogDetail"},l.a.createElement("div",{className:"area-main--BlogDetail"},l.a.createElement("h3",{className:"ttl3--BlogDetail"},this.props.selectedData.title),l.a.createElement("div",{className:"timestamp--BlogDetail"},l.a.createElement("div",{className:"created--BlogDetail"},l.a.createElement("div",null,"\u4f5c\u6210\u65e5:"),l.a.createElement("div",null,Y()(this.props.selectedData.created).format("YYYY/MM/DD"))),l.a.createElement("div",{className:"edited--BlogDetail"},l.a.createElement("div",null,"\u6700\u7d42\u7de8\u96c6\u65e5:"),l.a.createElement("div",null,Y()(this.props.selectedData.edited).format("YYYY/MM/DD")))),l.a.createElement("div",{className:"area-index--BlogDetail"},l.a.createElement("div",{className:"ttl-index--BlogDetail"},"Table Of Contents"),l.a.createElement("nav",{className:"ul-index--BlogDetail"},this.props.selectedData.sections.map(function(e){return l.a.createElement("li",{className:"li-index--BlogDetail"},l.a.createElement("a",{className:"lnk-index--BlogDetail",href:"#".concat(e.uuid)},e.title))}))),l.a.createElement("div",null,this.props.selectedData.sections.map(function(e){return l.a.createElement("div",{className:"area-section-BlogDetail",id:e.uuid},l.a.createElement("h4",{className:"ttl4--BlogDetail"},e.title),l.a.createElement("div",{className:"area-paragraph--BlogDetail"},e.paragraphs.map(function(e){return e.is_code?l.a.createElement("div",{className:"area-code--BlogDetail"},l.a.createElement(I,{code:e.content,lang:e.programing_language})):l.a.createElement("div",{className:"area-paragraph--BlogDetail"},e.image&&l.a.createElement("div",{className:"area-image-paragraph--BlogDetail"},l.a.createElement("img",{src:"".concat(B).concat(e.image)})),l.a.createElement("div",{className:"area-content-paragraph--BlogDetail"},e.content),l.a.createElement("br",null))})))}))),l.a.createElement(F,{comments:this.props.selectedData.comments}))}}]),t}(n.Component),G=Object(d.b)(function(e){return{selectedData:e.blog.selectedData}},{fetchBlogList:_,fetchBlogDetail:T,resetBlogDetail:function(){return function(e){return new Promise(function(t,a){e({type:"RESET_BLOG_DETAIL"}),t()})}}})(S),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchBlogList()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"area--Blog"},l.a.createElement(D,{src:"img_blog.jpg",title:"Blog"}),l.a.createElement(j.a,{path:"/blog",exact:!0,render:function(t){var a=t.match;return l.a.createElement(w,{data:e.props.data,match:a})}}),l.a.createElement(j.a,{path:"/blog/detail/:uuid",component:G}))}}]),t}(n.Component),A=Object(d.b)(function(e){return{data:e.blog.data}},{fetchBlogList:_,fetchBlogDetail:T})(H),W=function(e){return l.a.createElement("table",{className:"table--EnglishList",border:"1"},l.a.createElement("tr",null,l.a.createElement("th",null,"\u82f1\u6587"),l.a.createElement("th",null,"\u8a33\u6587"),l.a.createElement("th",null,"\u5358\u8a9e"),l.a.createElement("th",null,"\u767b\u9332\u65e5")),e.sentenceList.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.content_eng),l.a.createElement("td",null,e.content_jp),l.a.createElement("td",null,e.vocabularies.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,e.content_eng),l.a.createElement("div",null,e.content_jp))))})),l.a.createElement("td",null,Y()(e.created).format("YYYY/MM/DD")))}))},R=function(e){return l.a.createElement("div",{className:"area--EnglishExplanation"},l.a.createElement("div",null,"\u3053\u306e\u30da\u30fc\u30b8\u306f\u3042\u304f\u307e\u3067\u81ea\u5206\u306e\u82f1\u8a9e\u306e\u52c9\u5f37\u7528\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002",l.a.createElement("br",null),"\u81ea\u5206\u304c\u65e5\u9803\u8aad\u3093\u3067\u3044\u308b\u82f1\u8a9e\u306e\u672c\u3001\u30b5\u30a4\u30c8\u3067\u6c17\u306b\u306a\u3063\u305f\u8868\u73fe\u3001\u8aad\u3081\u306a\u304b\u3063\u305f\u6587\u7ae0 \u306a\u3069\u3092\u30e1\u30e2\u3057\u3066\u304a\u304d\u307e\u3059\u3002"))},J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchSentenceList()}},{key:"render",value:function(){return l.a.createElement("div",{className:"area--English"},l.a.createElement(D,{src:"img_english.jpg",title:"English"}),l.a.createElement("div",{className:""},l.a.createElement(R,null)),l.a.createElement("div",{className:"area-table--English"},l.a.createElement(W,{sentenceList:this.props.sentenceList})))}}]),t}(n.Component),P=Object(d.b)(function(e){return{sentenceList:e.english.sentenceList}},{fetchSentenceList:function(){return function(e){return fetch("http://localhost:8000/api/english/sentence_list",{method:"GET",headers:O}).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(t){var a=t.data;e({type:"FETCH_SENTENCE_LIST",payload:a})})}}})(J),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"area--Contact"},l.a.createElement("form",null,l.a.createElement("label",null,"\u304a\u540d\u524d"),l.a.createElement("input",null),l.a.createElement("label",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),l.a.createElement("input",null),l.a.createElement("label",null,"\u5185\u5bb9"),l.a.createElement("textarea",null),l.a.createElement("button",null,"\u9001\u4fe1")))}}]),t}(n.Component),q=function(){return l.a.createElement(k.a,{className:"area--Logo",to:"/"},"Oggy's Blog")},z=function(){return l.a.createElement("header",null,l.a.createElement(q,null),l.a.createElement("nav",{className:"nav--Header"},l.a.createElement("li",null,l.a.createElement(k.a,{to:"/",className:""},"Top")),l.a.createElement("li",null,l.a.createElement(k.a,{to:"/blog",className:""},"Blog")),l.a.createElement("li",null,l.a.createElement(k.a,{to:"/english",className:""},"English")),l.a.createElement("li",null,l.a.createElement(k.a,{to:"/contact",className:""},"Contact"))))},K=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"copyright--Footer"},"Copyright Akihiro Ogihara All Rights Reserved."),l.a.createElement("div",{className:"email--Footer"},"ogi.hiroaki.0226@gmail.com"))},Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(v,null,l.a.createElement(N.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(z,null),l.a.createElement("main",null,l.a.createElement(j.a,{path:"/",exact:!0,component:L}),l.a.createElement(j.a,{path:"/blog",component:A}),l.a.createElement(j.a,{path:"/english",component:P}),l.a.createElement(j.a,{path:"/contact",component:$})),l.a.createElement(K,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},41:function(e,t,a){}},[[28,2,1]]]);
//# sourceMappingURL=main.43c5cbb3.chunk.js.map