/*!
 * jQuery HC-MobileNav
 * ===================
 * Version: 2.0.4
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-mobile-nav
 * Description: jQuery plugin for converting menus to mobile navigations
 * License: MIT
 */
!function(C,e){"use strict";var a,l,y=e.document,w=(/iPad|iPhone|iPod/.test(navigator.userAgent)||!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))&&!e.MSStream,x=function(e){return e.stopPropagation()},T=function(n,a,l){return function(e){n&&e.preventDefault(),a&&e.stopPropagation(),"function"==typeof l&&l()}},B=(a=C("head"),l="hc-mobile-nav-style",function(e){var n=a.find("style#"+l);n.length?n.html(e):C('<style id="'+l+'">'+e+"</style>").appendTo(a)}),E=0;C.fn.extend({hcMobileNav:function(e){if(!this.length)return this;var l,m=C.extend({},{maxWidth:1024,offCanvas:!0,directionFrom:"left",levelEffect:"transform",levelSpacing:40,disableBody:!0,closeOnClick:!0,customToggle:null,navClass:"",insertClose:!0,insertBack:!0,labelClose:"Close",labelBack:"Back"},e),b=C(y.getElementsByTagName("html")[0]),g=(C(y),C(y.body)),k=(l=function(e){var n=["Webkit","Moz","Ms","O"],a=(y.body||y.documentElement).style,l=e.charAt(0).toUpperCase()+e.slice(1);if(void 0!==a[e])return e;for(var o=0;o<n.length;o++)if(void 0!==a[n[o]+l])return n[o]+l;return!1}("transform"),function(e,n){if(l){var a="left"===m.directionFrom?n:-n;e.css(l,"translate3d("+a+"px,0,0)")}else e.css(m.directionFrom,n)});return this.each(function(){var e=C(this),n=void 0,a=!1,l=0;if(e.is("ul"))n=e.clone().wrap("<nav>").parent();else if(e.is("nav"))n=e.clone();else if(!(n=e.find("nav, ul").first().clone()).length)return void console.log("%c! HC MobileNav:%c There is no <nav> or <ul> elements in your menu.","color: red","color: black");var o=n.find("ul");if(o.length){var c={},s="hc-nav-"+ ++E,i=n.children("ul").wrapAll('<div class="nav-wrapper nav-wrapper-1">').parent().on("click",x).wrap('<div class="nav-container">').parent(),r="\n          .hc-nav-trigger."+s+",\n          .hc-mobile-nav."+s+" {\n            display: block;\n          }\n          .hc-nav."+s+" {\n            display: none;\n          }";m.maxWidth&&(r="@media screen and (max-width: "+(m.maxWidth-1)+"px) {\n            "+r+"\n          }"),B(r,"hc-mobile-nav-style"),n.on("click",x).removeAttr("id").removeClass().addClass("\n            hc-mobile-nav\n            "+s+"\n            "+(m.navClass||"")+"\n            nav-levels-"+m.levelEffect+"\n            direction-from-"+m.directionFrom+"\n            "+(m.offCanvas?"off-canvas":"")+"\n            "+(m.disableBody?"disable-body":"")+"\n            "+(w?"is-ios":"")+"\n          ").find("[id]").removeAttr("id"),m.disableBody&&n.on("click",f),m.closeOnClick&&o.find("li").children("a").on("click",f),!1!==m.insertClose&&C('<li class="nav-close"><a href="#">'+(m.labelClose||"")+"<span></span></a></li>").prependTo(o.first()).children("a").on("click",T(!0,!0,f)),o.each(function(){var e=C(this),n=e.parents("li").length;if(0!==n){var a=e.parent().addClass("nav-parent"),l=a.children("a");c[n]||(c[n]=[]),c[n].push({nav:e});var o=c[n].length-1;if(c[n][o].wrapper=e.closest(".nav-wrapper"),e.wrap('<div class="nav-wrapper nav-wrapper-'+(n+1)+'">').parent().on("click",x),"none"===m.levelEffect)return;var r=C('<span class="nav-next">').appendTo(l),t=C('<label for="'+s+"-"+n+"-"+o+'">').on("click",x),i=C('<input type="checkbox" id="'+s+"-"+n+"-"+o+'">').attr("data-level",n).attr("data-index",o).on("change",p);c[n][o].checkbox=i,a.prepend(i),l.attr("href")&&"#"!==l.attr("href")?r.append(t):l.on("click",T(!0,!0)).prepend(t),!1!==m.insertBack&&"transform"===m.levelEffect&&C('<li class="nav-back"><a href="#">'+(m.labelBack||"")+"<span></span></a></li>").prependTo(e).children("a").on("click",T(!0,!0,function(){return u(n,o)}))}});var t=function(e,n){if(c[e]&&c[e][n]){var a=c[e][n].checkbox,l=a.parent("li"),o=c[e][n].wrapper;a.prop("checked",!1),o.removeClass("sub-level-open"),l.removeClass("level-open")}};if(g.prepend(n),m.customToggle)C(m.customToggle).addClass(s).on("click",h);else{var d=C('<a class="hc-nav-trigger '+s+'"><span></span></a>').on("click",h);e.addClass("hc-nav "+s).after(d)}}else console.log("%c! HC MobileNav:%c Menu must contain <ul> element.","color: red","color: black");function p(){var e,n,a,l,o=C(this),r=Number(o.attr("data-level")),t=Number(o.attr("data-index"));o.prop("checked")?(n=t,a=c[e=r][n].checkbox.parent("li"),(l=c[e][n].wrapper).addClass("sub-level-open"),a.addClass("level-open"),"transform"===m.levelEffect&&(l.on("click",function(){return u(e,n)}),k(i,e*m.levelSpacing))):u(r,t)}function v(){a=!0,n.addClass("nav-open"),m.disableBody&&(l=b.scrollTop()||g.scrollTop(),g.addClass("hc-nav-open"),l&&g.css("top",-l),y.body.scrollHeight>y.body.offsetHeight&&b.addClass("hc-yscroll"))}function f(){a=!1,n.removeClass("nav-open"),i.removeAttr("style"),u(0),m.disableBody&&(g.removeClass("hc-nav-open"),b.removeClass("hc-yscroll"),l&&(g.css("top","").scrollTop(l),b.scrollTop(l),l=0))}function h(e){e.preventDefault(),e.stopPropagation(),a?f():v()}function u(e,n){for(var a=e;a<=Object.keys(c).length;a++){if(0!==a)if(a==e&&void 0!==n){if(t(a,n),"transform"===m.levelEffect)c[a][n].wrapper.off("click").on("click",x),k(i,(a-1)*m.levelSpacing)}else for(var l in c[a]){if(t(a,l),"transform"===m.levelEffect)c[a][l].wrapper.off("click").on("click",x),a==e&&k(i,(a-1)*m.levelSpacing)}}}})}})}(jQuery,"undefined"!=typeof window?window:this);