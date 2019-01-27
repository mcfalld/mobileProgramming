!function(){"use strict";Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),a=n.length>>>0;if(0===a)return!1;var i,r,o=0|t,s=Math.max(0<=o?o:a-Math.abs(o),0);for(;s<a;){if((i=n[s])===(r=e)||"number"==typeof i&&"number"==typeof r&&isNaN(i)&&isNaN(r))return!0;s++}return!1}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null===this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var a=arguments[1],i=0;i<n;){var r=t[i];if(e.call(a,r,i,t))return i;i++}return-1},configurable:!0,writable:!0});var t,a,n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=n.MutationObserver||n.WebKitMutationObserver;if(e){var i=0,r=new e(d),o=n.document.createTextNode("");r.observe(o,{characterData:!0}),t=function(){o.data=i=++i%2}}else if(n.setImmediate||void 0===n.MessageChannel)t="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var e=n.document.createElement("script");e.onreadystatechange=function(){d(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},n.document.documentElement.appendChild(e)}:function(){setTimeout(d,0)};else{var s=new n.MessageChannel;s.port1.onmessage=d,t=function(){s.port2.postMessage(0)}}var l=[];function d(){var e,t;a=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}a=!1}var u=function(e){1!==l.push(e)||a||t()};function c(){}var h={},f=["REJECTED"],v=["FULFILLED"],g=["PENDING"],m=p;function p(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,e!==c&&_(this,e)}function y(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function w(t,n,a){u(function(){var e;try{e=n(a)}catch(e){return h.reject(t,e)}e===t?h.reject(t,new TypeError("Cannot resolve promise with itself")):h.resolve(t,e)})}function b(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function _(t,e){var n=!1;function a(e){n||(n=!0,h.reject(t,e))}function i(e){n||(n=!0,h.resolve(t,e))}var r=C(function(){e(i,a)});"error"===r.status&&a(r.value)}function C(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}p.prototype.finally=function(t){if("function"!=typeof t)return this;var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},p.prototype.catch=function(e){return this.then(null,e)},p.prototype.then=function(e,t){if("function"!=typeof e&&this.state===v||"function"!=typeof t&&this.state===f)return this;var n=new this.constructor(c);this.state!==g?w(n,this.state===v?e:t,this.outcome):this.queue.push(new y(n,e,t));return n},y.prototype.callFulfilled=function(e){h.resolve(this.promise,e)},y.prototype.otherCallFulfilled=function(e){w(this.promise,this.onFulfilled,e)},y.prototype.callRejected=function(e){h.reject(this.promise,e)},y.prototype.otherCallRejected=function(e){w(this.promise,this.onRejected,e)},h.resolve=function(e,t){var n=C(b,t);if("error"===n.status)return h.reject(e,n.value);var a=n.value;if(a)_(e,a);else{e.state=v,e.outcome=t;for(var i=-1,r=e.queue.length;++i<r;)e.queue[i].callFulfilled(t)}return e},h.reject=function(e,t){e.state=f,e.outcome=t;for(var n=-1,a=e.queue.length;++n<a;)e.queue[n].callRejected(t);return e},p.resolve=function(e){if(e instanceof this)return e;return h.resolve(new this(c),e)},p.reject=function(e){var t=new this(c);return h.reject(t,e)},p.all=function(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var a=e.length,i=!1;if(!a)return this.resolve([]);var r=new Array(a),o=0,t=-1,s=new this(c);for(;++t<a;)l(e[t],t);return s;function l(e,t){n.resolve(e).then(function(e){r[t]=e,++o!==a||i||(i=!0,h.resolve(s,r))},function(e){i||(i=!0,h.reject(s,e))})}};var T=0,E={},j=!(p.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,a=!1;if(!n)return this.resolve([]);var i=-1,r=new this(c);for(;++i<n;)o=e[i],t.resolve(o).then(function(e){a||(a=!0,h.resolve(r,e))},function(e){a||(a=!0,h.reject(r,e))});var o;return r});function I(){for(var e in j=!0,E){var t=E[e];"pending"===t.id&&(t.id=window.fastdom[t.method](t.cb))}window.removeEventListener("WebComponentsReady",I)}function x(e,t){if(window.fastdom||j)return window.fastdom[e](t);var n="d2l_fastdom_"+ ++T;return E[n]={method:e,id:"pending",cb:t},window.addEventListener("WebComponentsReady",I),n}var k,N,P,V,R,S={__getIndex:function(){return T},__getIdMap:function(){return E},__reset:function(){T=0,j=!(E={})},clear:function(e){var t=e;if(void 0!==E[e]){if("pending"===E[e].id)return void(E[e].id="cleared");if("cleared"===E[e].id)return;t=E[e].id}window.fastdom&&window.fastdom.clear(t)},measure:function(e){return x("measure",e)},mutate:function(e){return x("mutate",e)}};window.addEventListener("d2l-performance-measure",function(a){var e=/(\?|&)timingdebug=(1|0)/gi.exec(location.search);if(null!==e&&3===e.length){var t="0"!==e[2];try{t?window.sessionStorage.setItem("TimingDebug","1"):window.sessionStorage.removeItem("TimingDebug")}catch(a){}}var n=!1;try{n=null!==window.sessionStorage.getItem("TimingDebug")}catch(a){}n&&S.mutate(function(){var e=document.createElement("div"),t="paint"===a.detail.value.entryType?a.detail.value.startTime:a.detail.value.duration;e.appendChild(document.createTextNode(a.detail.value.name+": "+Math.floor(t)));var n=document.querySelector(".d2l-page-timing");null===n?((n=document.createElement("div")).className="d2l-page-timing",n.appendChild(e),document.body.appendChild(n)):n.appendChild(e)})}),$.widget("vui.vui_changeTracker",{options:{showChanges:!0},_create:function(){var a=this;"false"===this.element.attr("data-show-changes")&&(this.options.showChanges=!1),this.element.data("changedItems",{}).on("vui-change",function(e){var t=$(e.target).attr("id");t&&(a.element.data("changedItems")[t]=!0,a._isTrackingEnabled()&&a.options.showChanges&&!e.isChangeShown&&(a.element.addClass("vui-changed"),e.isChangeShown=!0))}).on("vui-restore",function(e){var t=$(e.target).attr("id");if(t){var n=a.element.data("changedItems");void 0!==n[t]&&delete n[t],a._isTrackingEnabled()&&a.options.showChanges&&0===Object.keys(n).length&&a.element.removeClass("vui-changed")}})},_destroy:function(){$(this.element).removeClass("vui-changed").off("vui-change vui-restore")},_isTrackingEnabled:function(){var e=this.element.closest("[data-track-changes]");return 1===e.length&&"true"===e.attr("data-track-changes")},containsChanges:function(){return 0<Object.keys(this.element.data("changedItems")).length},hasElementChanged:function(e){var t=$(e).attr("id");return!!t&&!0===this.element.data("changedItems")[t]},isChangeShown:function(){return this.element.hasClass("vui-changed")}}),$.widget("vui.vui_changeTracking",{_create:function(){var e=this.element.prop("nodeName");if("INPUT"===e&&"radio"===this.element.attr("type")){var t=this.element.prop("name");if(t){var n=$('input[name="'+t+'"]:checked');n.uniqueId(),this.element.data("selectedId",n.attr("id"))}}var a={me:this};$(document).on("vui-reset",a,this._handleReset),this.element.uniqueId().data("originalValue",this._getValue(this.element)).data("hasChanged",!1).on("change.vui",a,this._handleChange)},_destroy:function(){this.hasChanged()&&this.element.trigger("vui-restore"),$(document).off("vui-reset",this._handleReset),this.element.off("change.vui").removeUniqueId()},_getValue:function(e){var t=e.get(0),n=e.prop("nodeName");if("SELECT"===n)return e.val();if("INPUT"===n){var a=e.attr("type");if("checkbox"===a||"radio"===a)return t.checked}return t.value},_handleChange:function(e){var n=e.data.me,t=n.element,a=t.get(0),i=t.prop("nodeName"),r=t.data("selectedId"),o=t.attr("id");if("INPUT"===i&&"radio"===t.attr("type")){var s=t.prop("name");s&&$('input[name="'+s+'"]').each(function(e){var t=$(this);this!==a&&t.attr("id")===r&&n._triggerEvent(t),t.data("selectedId",o)})}n._triggerEvent(t)},_handleReset:function(e){var t=e.data.me;0<t.element.closest(e.target).length&&t.hasChanged()&&t.element.data("originalValue",t._getValue(t.element)).data("hasChanged",!1).trigger("vui-restore")},_triggerEvent:function(e){var t=this._getValue(e)!==e.data("originalValue");e.data("hasChanged",t).trigger(t?"vui-change":"vui-restore")},hasChanged:function(){return $(this.element).data("hasChanged")}}),k="vui-heading-collapsible-changed",N="vui-heading-collapsible-target",P="vui-heading-collapsible-transition",V="transitionend.vui webkitTransitionEnd.vui",R=function(e,t){("transition"in document.body.style||"webkitTransition"in document.body.style||"MozTransition"in document.body.style)&&!t||(e.originalEvent={propertyName:"height"},e.data.me._handleTransitionEnd(e))},$.widget("vui.vui_collapsibleSection",{_create:function(){var e=this,t=this._getTargetInfo();if(null!==t){this._createAnchor();var n={me:this,inProgress:!1,isHover:!1,scrollTimeout:null};this.element.on("vui-collapse",n,this._handleCollapse).on("vui-expand",n,this._handleExpand).on("click.vui",n,this._handleClick).on("mouseover.vui",n,this._handleHover).on("mouseout.vui",n,this._handleBlur),this.anchor.attr("aria-controls",t.id).attr("aria-expanded",t.isVisible?"true":"false").on("focus",n,this._handleHover).on("blur",n,this._handleBlur),this.icon.attr("class",t.isVisible?"vui-heading-collapsible-icon-collapse":"vui-heading-collapsible-icon-expand"),this.target.vui_changeTracker().addClass(N).attr("aria-hidden",t.isVisible?"false":"true").css("display",t.isVisible?"block":"none").on(V,n,this._handleTransitionEnd).on("vui-expand",n,this._handleExpand).on("vui-change vui-restore",function(){e.anchor.toggleClass(k,$(this).vui_changeTracker("containsChanges"))})}},_destroy:function(){this.element.off("vui-collapse vui-expand click.vui mouseover.vui mouseout.vui vui-collapsibleSection-done"),this.icon.remove(),this.anchor.contents().unwrap(),this.target.removeClass(N+" "+P).off(V+" vui-expand vui-change vui-restore").removeAttr("aria-hidden").removeData("height")},_createAnchor:function(){this.element.contents().wrapAll('<a href="javascript:void(0);"></a>'),this.anchor=this.element.find("a"),this.icon=$("<span></span>"),this.anchor.append(this.icon)},_getTargetInfo:function(){var e=this.element.attr("data-target");if(void 0===e)return null;var t=document.getElementById(e);if(null===t)return null;this.target=$(t);var n={id:e,isVisible:this.target.is(":visible")};return n.isVisible||this.target.css({position:"absolute",visibility:"hidden",display:"block"}),this.target.data("height",this.target.outerHeight(!1)),n.isVisible||this.target.css({position:"static",visibility:"visible",display:"none"}),n},_handleBlur:function(e){e.data.isHover=!1;var t="true"==e.data.me.target.attr("aria-hidden");e.data.me.icon.attr("class",t?"vui-heading-collapsible-icon-expand":"vui-heading-collapsible-icon-collapse")},_handleClick:function(e){var t="true"==e.data.me.target.attr("aria-hidden");$(this).trigger(t?"vui-expand":"vui-collapse")},_handleCollapse:function(e){if(!e.data.inProgress){e.data.inProgress=!0,e.data.me.icon.attr("class",e.data.isHover?"vui-heading-collapsible-icon-expand-h":"vui-heading-collapsible-icon-expand"),e.data.me.anchor.attr("aria-expanded",!1);var t=!1;if(e.data.me.target.is(":visible")){var n=e.data.me.target.outerHeight(!1);e.data.me.target.data("height",n).css("height",n+"px")}else t=!0;setTimeout(function(){e.data&&(t||(t=0===e.data.me.target.data("height")),e.data.me.target.addClass(P).attr("aria-hidden",!0).css("height",""),R(e,t))},50)}},_handleExpand:function(t){t.data.inProgress||(t.data.inProgress=!0,t.data.me.icon.attr("class",t.data.isHover?"vui-heading-collapsible-icon-collapse-h":"vui-heading-collapsible-icon-collapse"),t.data.me.anchor.attr("aria-expanded",!0),t.data.me.target.css("display","block"),setTimeout(function(){if(t.data){var e=t.data.me.target.height()==t.data.me.target.data("height");t.data.me.target.addClass(P).attr("aria-hidden",!1).css({height:t.data.me.target.data("height")+"px"}),t.data.me._scroll(t.data,!0),R(t,e)}},50))},_handleHover:function(e){e.data.isHover=!0;var t="true"==e.data.me.target.attr("aria-hidden");e.data.me.icon.attr("class",t?"vui-heading-collapsible-icon-expand-h":"vui-heading-collapsible-icon-collapse-h")},_handleTransitionEnd:function(e){e&&e.originalEvent&&"height"==e.originalEvent.propertyName&&(e.data.inProgress=!1,e.data.me.target.removeClass(P),"true"==e.data.me.target.attr("aria-hidden")?e.data.me.target.css("display","none"):(e.data.me.target.css("height",""),e.data.me._scroll(e.data,!1)),e.data.me.element.trigger("vui-collapsibleSection-done"))},_scroll:function(e,t){clearTimeout(e.scrollTimeout),e.scrollTimeout=null;var n=e.me.target.offset().top+e.me.target.height()+50,a=$(window).scrollTop(),i=n-(a+$(window).height());0<i&&window.scrollTo(0,a+i),t&&(e.scrollTimeout=setTimeout(function(){e.me._scroll(e,!0)},10))}}),"undefined"==typeof Promise&&(window.Promise=m),window.D2L=window.D2L||{},window.D2L.FastDom=S}();
//# sourceMappingURL=bsi.min.js.map