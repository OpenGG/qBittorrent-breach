webpackJsonp([1],{125:function(t,e){},126:function(t,e){},127:function(t,e){},128:function(t,e){},129:function(t,e){},130:function(t,e){},131:function(t,e){},134:function(t,e,n){n(131),n(130);var r=n(54)(n(68),n(136),"data-v-df70466c",null);t.exports=r.exports},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h3",[t._v("CSRF demo")]),t._v(" "),t.csrf?n("csrf"):n("button",{on:{click:t.runCSRF}},[t._v("RUN")])],1)},staticRenderFns:[]}},136:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"csrf"},[n("div",[t._v("\n    Server address: "+t._s(t.server)+"\n  ")]),t._v(" "),n("div",[t._v("Cases("+t._s(t.cases.length)+"):\n    "),n("span",{},[t._v(t._s(t.pendings)+"(pending)")]),t._v(",\n    "),n("span",{staticClass:"case-positive"},[t._v(t._s(t.positives)+"(positive)")]),t._v(",\n    "),n("span",{staticClass:"case-negative"},[t._v(t._s(t.negatives)+"(negative)")]),t._v(".\n  ")]),t._v(" "),n("el-table",{attrs:{data:t.cases,"row-class-name":t.tableRowClassName}},[n("el-table-column",{attrs:{label:"execute",width:"120"},scopedSlots:t._u([["default",function(e){return[n("el-button",{attrs:{type:"positive"===e.row.state?"danger":"",size:"small"},on:{click:function(n){t.execute(e.row)}}},[t._v("\n          execute\n        ")])]}]])}),t._v(" "),n("el-table-column",{attrs:{label:"state",prop:"state",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"command",label:"command","min-width":"300"}})],1)],1)},staticRenderFns:[]}},30:function(t,e,n){"use strict";var r="";e.a={set:function(t){r=t.replace(/\/$/,"")},get:function(){return r},resolve:function(t){var e=("/"+t).replace(/\/{2,}/,"/");return""+r+e}}},55:function(t,e,n){"use strict";var r=n(31),a=n.n(r),o=n(43),s=n.n(o),i=n(119),c=n.n(i),u=n(118),l=n.n(u),f=n(117),p=n.n(f),d=n(125),m=(n.n(d),n(128)),v=(n.n(m),n(127)),h=(n.n(v),n(126));n.n(h);e.a=function(t){t.use(s.a),t.use(c.a),t.use(l.a),a()(t.prototype,{$msgbox:p.a,$alert:p.a.alert,$confirm:p.a.confirm,$prompt:p.a.prompt})}},56:function(t,e,n){n(129);var r=n(54)(n(67),n(135),null,null);t.exports=r.exports},57:function(t,e,n){"use strict";var r=n(69),a=n.n(r),o=n(59),s=n(60),i=n(58),c=n(64),u=n(65),l=n(63),f=function(){return[n.i(o.a)("/logout",s.a,n.i(c.a)(),["Now refresh qBittorrent webui","Check your login state, have you been logged out?"]),n.i(o.a)("/command/shutdown",s.a,n.i(c.a)(),["Now check your qBittorrent process","Is qBittorrent exited?"]),n.i(o.a)("/command/download",function(t){return n.i(l.a)(t,{urls:"http://sample-file.bazadanni.com/download/applications/torrent/sample.torrent",savepath:"/tmp",paused:"true"},!0)},n.i(c.a)(),["Now check your qBittorrent tasks",'Is there a new task named "sample"?']),n.i(o.a)("/command/upload",function(t){return n.i(l.a)(t,{torrents:{type:"blob",data:n.i(i.a)("ZDEwOmNyZWF0ZWQgYnkxOTpxQml0dG9ycmVudCB2My4zLjEwMTM6Y3JlYXRpb24gZGF0ZWkxNDkzOTYyNTQ4ZTQ6aW5mb2Q2Omxlbmd0aGk0N2U0Om5hbWU4OnByb3h5LmpzMTI6cGllY2UgbGVuZ3RoaTE2Mzg0ZTY6cGllY2VzMjA6OLtJNZtIaLqMR/MZaBICPSBCvullODp1cmwtbGlzdDA6ZQ=="),filename:"proxy.js.torrent"},savepath:"/tmp",paused:"true"},!0)},n.i(c.a)(),["Now check your qBittorrent tasks",'Is there a new task named "proxy.js"?']),n.i(o.a)("/command/pauseAll",function(t){return n.i(l.a)(t)},n.i(c.a)("Make sure you have some tasks running"),["Now check your qBittorrent tasks","Are all the torrents paused?"]),n.i(o.a)("/command/resumeAll",function(t){return n.i(l.a)(t)},n.i(c.a)("Make sure you have some tasks paused"),["Now check your qBittorrent tasks","Are all the torrents resumed?"]),n.i(o.a)("/command/setGlobalDlLimit",function(t){return n.i(l.a)(t,{limit:1024})},n.i(c.a)(),["Now check the global download limit for your qBittorrent","Is the global download limit now 1KiB/s?"]),n.i(o.a)("/command/setGlobalUpLimit",function(t){return n.i(l.a)(t,{limit:1024})},n.i(c.a)(),["Now check the global upload limit for your qBittorrent","Is the global upload limit now 1KiB/s?"]),n.i(o.a)("/command/addCategory",function(t){return n.i(l.a)(t,{category:"csrf-category"})},n.i(c.a)(),["Now check the categories of your qBittorrent",'Is there a new category named "csrf-category"?']),n.i(o.a)("/command/removeCategories",function(t){return n.i(l.a)(t,{categories:"csrf-category"})},n.i(c.a)(),["Now check the categories of your qBittorrent",'Is there the category "csrf-category" removed?']),n.i(o.a)("/command/setPreferences",function(t){return n.i(l.a)(t,{json:a()({save_path:u.a.gen()})})},n.i(c.a)(),function(){return["Now check the default download path of your qBittorrent",'Is the default download path now "'+u.a.get()+'"?']}),n.i(o.a)("/command/toggleAlternativeSpeedLimits",function(t){return n.i(l.a)(t)},n.i(c.a)(),["Now check your qBittorrent UI","Is the alternate speed state toggled?"])]};e.a=f},58:function(t,e,n){"use strict";var r=function(t){for(var e=atob(t),n=e.length,r=new ArrayBuffer(n),a=new Uint8Array(r),o=0;o<n;o+=1)a[o]=e.charCodeAt(o);return new Blob([a])};e.a=r},59:function(t,e,n){"use strict";var r=n(30),a=function(t,e,n,a){return{type:"CSRF",state:"pending",command:t,test:function(){return e(r.a.resolve(t))},prepare:n,confirm:a}};e.a=a},60:function(t,e,n){"use strict";var r=n(17),a=n.n(r),o=function(t){return new a.a(function(e){var n=new Image;n.src=t,n.onload=e,n.onerror=e})};e.a=o},61:function(t,e,n){"use strict";var r=function(t){for(var e="function"==typeof t?t():t,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var o=Array.isArray(e)?e.concat(r):[e].concat(r);if(o.length>1){var s=this.$createElement;return s("ol",null,o.map(function(t){return s("li",null,t)}))}return o[0]};e.a=r},62:function(t,e,n){"use strict";var r=n(31),a=n.n(r),o=function(t){return a()({closeOnClickModal:!1,closeOnPressEscape:!1,showCancelButton:!1,lockScroll:!0,showClose:!1,confirmButtonText:"confirm",cancelButtonText:"cancel"},t)};e.a=o},63:function(t,e,n){"use strict";var r=n(70),a=n.n(r),o=n(17),s=n.n(o),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];return new s.a(function(r){var o=new XMLHttpRequest,s=a()(e),i=void 0;try{o.responseType="text",o.withCredentials=!0}catch(t){console.error(t)}o.open("POST",t,!0),n?(i=new FormData,s.forEach(function(t){var n=e[t];n&&"blob"===n.type?i.append(t,n.data,n.filename):i.append(t,n)})):(o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i=s.map(function(t){var n=""+e[t];return encodeURIComponent(t)+"="+encodeURIComponent(n)}).join("&")),o.onreadystatechange=function(){4===o.readyState&&r(o.responseText)},o.send(i)})};e.a=i},64:function(t,e,n){"use strict";var r=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return["Open qBittorrent webui in another browser tab","Login with your username and password"].concat(e)};e.a=r},65:function(t,e,n){"use strict";var r="/tmp1",a=function(){var t=Math.floor(Math.random()*Math.pow(2,53));return r="/tmp"+t},o=function(){return r};e.a={gen:a,get:o}},66:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n(55),o=n(56),s=n.n(o);n.i(a.a)(r.default),r.default.config.productionTip=!1,new r.default({el:"#app",render:function(t){return t(s.a)}})},67:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(134),a=n.n(r);e.default={components:{csrf:a.a},data:function(){return{csrf:!1}},methods:{runCSRF:function(){this.csrf=!0}}}},68:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(72),a=n.n(r),o=n(71),s=n.n(o),i=n(30),c=n(61),u=n(62),l=n(57);e.default={name:"app",data:function(){return{cases:n.i(l.a)(),server:"http://localhost:8080"}},computed:{pendings:function(){return this.cases.filter(function(t){return"pending"===t.state}).length},positives:function(){return this.cases.filter(function(t){return"positive"===t.state}).length},negatives:function(){return this.cases.filter(function(t){return"negative"===t.state}).length}},mounted:function(){var t=this;return s()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.askServerAddress();case 2:n=e.sent,t.server=n,i.a.set(n);case 5:case"end":return e.stop()}},e,t)}))()},methods:{msgboxMsg:c.a,tableRowClassName:function(t){return"case-"+t.state},askServerAddress:function(){var t=this;return s()(a.a.mark(function e(){var r,o,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=function(t){return/^https?:\/\/\S+$/.test(t)},e.next=4,t.$prompt(t.msgboxMsg("Your server address please?"),n.i(u.a)({showInput:!0,title:"server address",inputValidator:function(t){return!t||r(t)},inputPlaceholder:"http://localhost:8080",inputErrorMessage:"Invalid url"}));case 4:return o=e.sent,s=o.value,e.abrupt("return",s||"http://localhost:8080");case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",t.askServerAddress());case 13:case"end":return e.stop()}},e,t,[[0,9]])}))()},execute:function(t){var e=this;return s()(a.a.mark(function r(){var o;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$confirm(e.msgboxMsg(t.prepare),n.i(u.a)({title:t.desc,confirmButtonText:"I'm prepared",showClose:!0}));case 3:return e.$set(t,"state","executing"),r.next=6,t.test();case 6:return o=!1,r.prev=7,r.next=10,e.$confirm(e.msgboxMsg(t.confirm,'If yes, click "It\'s breached!", if not, click "It\'s fine."'),n.i(u.a)({title:t.desc,confirmButtonText:"It's breached!",showCancelButton:!0,cancelButtonText:"It's fine."}));case 10:o=!0,r.next=20;break;case 13:if(r.prev=13,r.t0=r.catch(7),"cancel"!==r.t0){r.next=19;break}o=!1,r.next=20;break;case 19:throw r.t0;case 20:e.$set(t,"state",o?"positive":"negative"),r.next=27;break;case 23:r.prev=23,r.t1=r.catch(0),e.$set(t,"state","init"),console.error(r.t1);case 27:case"end":return r.stop()}},r,e,[[0,23],[7,13]])}))()}}}}},[66]);
//# sourceMappingURL=app.54b681ebd3e6f38f33cd.js.map