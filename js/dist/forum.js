module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},,function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},,function(t,e,o){"use strict";o.r(e);var r=o(2),n=o.n(r),a=o(3),i=o.n(a);function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u=o(4),c=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,s(e,o);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e)},n.view=function(){return app.session.user||"true"==sessionStorage.getItem("ageVerify")?"":(this.attrs.enterText||(this.attrs.enterText=app.forum.attribute("age_yes")),this.attrs.exitText||(this.attrs.exitText=app.forum.attribute("age_no")),this.attrs.verifyPrompt||(this.attrs.verifyPrompt=app.forum.attribute("age_prompt")),$(".thegoods").addClass("blur"),m("div",{class:"nonobox"},m("div",{class:"verifybox"},m("div",{class:"verifybox-left",style:{backgroundImage:"url("+app.forum.attribute("age_image")+")",backgroundPosition:"50% 50%"}},m("p",null," ",app.forum.attribute("age_message")," ")),m("div",{class:"verifybox-right"},m("h3",null,"Age Verification"),m("p",null,this.attrs.verifyPrompt),m("button",{id:"consent-enter",class:"btn btn-alpha",onclick:function(t){$(".thegoods").removeClass("blur"),$(".box").hide(),sessionStorage.setItem("ageVerify","true")}},this.attrs.enterText),m("p",{class:"decor-line"},m("span",null,"Or")),m("button",{class:"btn btn-beta",id:"consent-exit",onclick:function(t){window.history.back()}},this.attrs.exitText),m("small",null,"Always enjoy responsibily.")))))},n.oncreate=function(e){t.prototype.oncreate.call(this,e)},r}(o.n(u).a),l=o(0);app.initializers.add("webbinaro/flarum-age-check",(function(){Object(l.extend)(n.a.prototype,"pageContent",(function(t){return t.add("agebox",m(c,null)),$(".DiscussionPage-stream").addClass("thegoods"),t})),Object(l.extend)(i.a.prototype,"sidebarItems",(function(t){return t.add("agebox",m(c,null)),$(".DiscussionList").addClass("thegoods"),$(".item-nav").addClass("thegoods"),$(".App-primaryControl ").addClass("thegoods"),t}))}))}]);
//# sourceMappingURL=forum.js.map