(function(e){function t(t){for(var n,o,a=t[0],c=t[1],u=t[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,a=1;a<i.length;a++){var c=i[a];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={main:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/zuweiser/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;s.push(["8dc6","chunk-vendors"]),i()})({0:function(e,t){},1:function(e,t){},2:function(e,t){},"649d":function(e,t,i){},"72d3":function(e,t,i){},"7af8":function(e,t,i){},"7d00":function(e,t,i){"use strict";var n=i("649d"),r=i.n(n);r.a},"8dc6":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Zuweiser")]),i("am-excel-reader",{on:{"excel-overview-loaded":e.onOverviewLoaded}}),e.excelOverview?i("div",{attrs:{id:"sheet-config"}},[i("h2",{attrs:{id:"config-header"}},[e._v("Blätter & Spalten auswählen")]),i("am-activities-sheet-config",{attrs:{id:"config-activities","excel-overview":e.excelOverview},on:{completed:e.activitiesConfigCompleted}}),i("am-participants-sheet-config",{attrs:{id:"config-participants","excel-overview":e.excelOverview},on:{completed:e.participantsConfigCompleted}})],1):e._e(),i("am-do-matching",{attrs:{config:e.matchConfig},on:{matched:e.onMatched}}),i("am-result-printer",{attrs:{result:e.result}})],1)},s=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("Aktivitäten")]),i("h4",[e._v("Arbeitsblatt")]),i("am-multiselect",{attrs:{values:Object.keys(e.excelOverview.sheets)},on:{input:e.onChange},model:{value:e.activitiesConfig.worksheet,callback:function(t){e.$set(e.activitiesConfig,"worksheet",t)},expression:"activitiesConfig.worksheet"}}),e.activitiesConfig.worksheet?[i("h4",[e._v("Spalten")]),e._l(e.activitiesConfig.fields,(function(t,n){return i("am-multiselect",{key:t.id,attrs:{values:e.excelOverview.sheets[e.activitiesConfig.worksheet],label:e.labels[n]},on:{input:e.onChange},model:{value:e.activitiesConfig.fields[n],callback:function(t){e.$set(e.activitiesConfig.fields,n,t)},expression:"activitiesConfig.fields[key]"}})}))]:e._e()],2)},a=[],c={props:["excelOverview"],data(){return{activitiesConfig:{worksheet:"",fields:{id:"",name:"",limit:""}},labels:{worksheet:"Arbeitsblatt",id:"ID",name:"Kursname",limit:"Teilnehmerlimite"}}},methods:{onChange(){this.activitiesConfig.worksheet&&this.$emit("completed",this.activitiesConfig)}}},u=c,l=i("2877"),f=Object(l["a"])(u,o,a,!1,null,"60263434",null),d=f.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",[e._v("Datei angeben")]),i("label",{attrs:{for:"file"}}),i("input",{attrs:{type:"file",id:"file"},on:{change:e.loadExcel}}),e._t("default")],2)},p=[],v=i("2ef0"),m=i("1146"),g=i.n(m);function _(e,t){var i=e.Sheets[t];b(i);return w(i)}function b(e){var t=g.a.utils.sheet_to_json(e);return Object.keys(t[0])}function w(e){return g.a.utils.sheet_to_json(e)}function y(e){var t=new FileReader,i=new Promise((function(e,i){t.onload=function(t){var n=t.target.result;try{var r=g.a.read(n,{type:"binary"});e(r)}catch(t){i(t)}}}));return t.readAsBinaryString(e),i}function C(e){for(var t={},i=0,n=e.SheetNames;i<n.length;i++){var r=n[i],s=g.a.utils.sheet_to_json(e.Sheets[r]);t[r]=Object.keys(s[0])}return{sheets:t}}var k=function(){function e(e){this.courseData=e,this.students=[],this.shadows=[]}return Object.defineProperty(e.prototype,"id",{get:function(){return this.courseData.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"limit",{get:function(){return this.courseData.limit},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.courseData.name},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return this.name},e}(),O=function(){function e(e){this.studentData=e,this.matched=!1}return Object.defineProperty(e.prototype,"id",{get:function(){return this.studentData.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"priorities",{get:function(){return this.studentData.priorities},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.studentData.name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"firstName",{get:function(){return this.studentData.firstName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"class",{get:function(){return this.studentData.class},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return this.firstName+" "+this.name},e}();function x(e,t){var i={};return v["forOwn"](t,(function(t,n){v["isString"](t)?i[n]=e[t]:v["isArray"](t)&&(i[n]=[],v["forOwn"](t,(function(t,r){i[n].push(e[t.column])})))})),i}function P(e,t){var i=x(e,t);return new O(i)}function S(e,t){var i=x(e,t);return new k(i)}var j=i("9ab4"),A=function(e){function t(i,n,r){void 0===r&&(r={});var s=e.call(this,n+" not unique for entity "+i)||this;return Object.setPrototypeOf(s,t.prototype),s.entityType=i,s.propertyName=n,s.entity=r,s}return Object(j["a"])(t,e),t}(Error),$=function(e){function t(i,n,r){void 0===r&&(r={});var s=e.call(this,i+" with id="+n+" does not exist. Referred to by "+r+".")||this;return Object.setPrototypeOf(s,t.prototype),s.entityType=i,s.id=n,s.referrer=r,s}return Object(j["a"])(t,e),t}(Error);function E(e){var t=e.students,i=e.courses;D(i),N(t),T(t,i),M(t);var n=0,r=t[0].priorities.length;while(n<r)t.forEach((function(e){var t=e.priorities[n],r=v["find"](i,(function(e){return e.id===t})),s=r.students.length<r.limit;!e.matched&&s?(r.students.push(e),e.matched=!0):r.shadows.push({student:e,wasCourseFull:!s,wasAlreadyMatched:e.matched,priority:n+1})})),n+=1;return{students:t,courses:i}}function N(e){var t=new Set;e.forEach((function(e){if(t.has(e.id))throw new A("Participant","id",new O({}));t.add(e.id)}))}function D(e){var t=new Set;e.forEach((function(e){if(t.has(e.id))throw new A("Activity","id",new k({}));t.add(e.id)}))}function M(e){e.forEach((function(e){var t=e.priorities.length,i=v["uniq"](e.priorities).length;if(t!==i)throw new A("Participant","priorities",e)}))}function T(e,t){var i=t.map((function(e){return e.id}));e.forEach((function(e){e.priorities.forEach((function(t){if(!v["find"](i,(function(e){return e===t})))throw new $("Activity",t,e)}))}))}function V(e){var t=e.workbook,i=e.config,n=_(t,i.courses.worksheet),r=n.map((function(e){return S(e,i.courses.fields)}));return{courses:r,workbook:t,config:i}}function z(e){var t=e.workbook,i=e.courses,n=e.config,r=_(t,n.student.worksheet),s=r.map((function(e){return P(e,n.student.fields)})),o=v["shuffle"](s);return{workbook:t,students:o,courses:i,config:n}}var B={data(){return{filename:"",error:{message:""}}},methods:{loadExcel(e){const t=e.target.files[0];y(t).then(C).then(e=>(e.filename=t,e)).then(e=>this.$emit("excel-overview-loaded",e)).catch(e=>this.error.message=e.toString())}}},R=B,F=Object(l["a"])(R,h,p,!1,null,null,null),L=F.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("Teilnehmer")]),i("h4",[e._v("Arbeitsblatt")]),i("am-multiselect",{attrs:{values:Object.keys(e.excelOverview.sheets)},on:{input:e.onChange},model:{value:e.participantsConfig.worksheet,callback:function(t){e.$set(e.participantsConfig,"worksheet",t)},expression:"participantsConfig.worksheet"}}),e.participantsConfig.worksheet?[i("h4",[e._v("Spalten")]),e._l(e.notPriorities(e.participantsConfig.fields),(function(t,n){return i("am-multiselect",{key:t.id,attrs:{values:e.excelOverview.sheets[e.participantsConfig.worksheet],label:e.labels[n]},on:{input:e.onChange},model:{value:e.participantsConfig.fields[n],callback:function(t){e.$set(e.participantsConfig.fields,n,t)},expression:"participantsConfig.fields[key]"}})})),e._l(e.participantsConfig.fields.priorities,(function(t,n){return i("div",[i("label",[e._v(e._s(n+1+". "+e.labels["priorities"]))]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.participantsConfig.fields.priorities[n].column,expression:"participantsConfig.fields.priorities[index].column"}],on:{input:e.onChange,change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.participantsConfig.fields.priorities[n],"column",t.target.multiple?i:i[0])}}},e._l(e.excelOverview.sheets[e.participantsConfig.worksheet],(function(t){return i("option",[e._v(" "+e._s(t)+" ")])})),0),i("button",{staticClass:"remove-priority",on:{click:function(t){return e.removePriority(n)}}},[e._v(" - ")])])})),i("button",{on:{click:function(t){return e.addPriority()}}},[e._v("Priorität hinzufügen")])]:e._e()],2)},K=[],W={props:["excelOverview"],data(){return{participantsConfig:{worksheet:"",fields:{id:"",name:"",firstName:"",class:"",priorities:[]}},labels:{worksheet:"Arbeitsblatt",id:"ID",name:"Name",firstName:"Vorname",class:"Klasse",priorities:"Priorität"}}},methods:{onChange(){this.participantsConfig.worksheet&&(this.participantsConfig.fields.priorities=this.populatePriorities(),this.$emit("completed",this.participantsConfig))},notPriorities(){return v["omit"](this.participantsConfig.fields,"priorities")},removePriority(e){this.participantsConfig.fields.priorities.splice(e,1)},addPriority(){this.participantsConfig.fields.priorities.push({column:null})},populatePriorities(){const e=this.excelOverview.sheets[this.participantsConfig.worksheet],t=/^[\w\s]+[0-9]+$/;return e.filter(e=>t.test(e)).map(e=>({column:e}))}}},q=W,J=(i("9e26"),Object(l["a"])(q,I,K,!1,null,"370702c6",null)),U=J.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorMessage))]),e.config.student&&e.config.courses?i("button",{on:{click:e.matchAndWrite}},[e._v(" Prioritäten auflösen ")]):e._e()])},Z=[];function H(e){if(e instanceof $)return"Teilnehmer '"+e.referrer+"' verweist auf nicht-existierende Aktivität mit id='"+e.id+"'";if(e instanceof A)switch(e.propertyName){case"priorities":return"Prioritäten von '"+e.entity.toString()+"' sind nicht eindeutig.";case"id":return"IDs der "+Q(e.entity)+" sind nicht eindeutig.";default:break}return"Keine Übersetzung für Fehler: "+e}function Q(e){return e instanceof O?"Teilnehmer":"Aktivitäten"}var X={props:["config"],data(){return{errorMessage:""}},methods:{matchAndWrite(){this.errorMessage="",y(this.config.filename).then(e=>({workbook:e,config:this.config})).then(V).then(z).then(E).then(e=>this.$emit("matched",e)).catch(e=>{this.errorMessage=H(e)})}}},Y=X,ee=Object(l["a"])(Y,G,Z,!1,null,null,null),te=ee.exports,ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.label?i("label",[e._v(e._s(e.label))]):e._e(),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],on:{input:e.onSelected,change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedValue=t.target.multiple?i:i[0]}}},[i("option",[e._v(e._s(e.initialValue))]),e._l(e.values,(function(t){return i("option",[e._v(e._s(t))])}))],2)])},ne=[],re={props:["values","label"],methods:{onSelected(e){this.$emit("input",e.target.value),this.isPristine=!1},preSelect(){if(!this.label||!this.isPristine)return!1;const e=this.label.trim().toLowerCase();for(const t of this.values){const i=t.trim().toLowerCase();i.startsWith(e)&&(this.$emit("input",t),this.isPristine=!1,this.selectedValue=t)}}},data(){return{isPristine:!0,selectedValue:"Bitte auswählen",initialValue:"Bitte auswählen"}},mounted(){this.preSelect()},updated(){this.preSelect()}},se=re,oe=Object(l["a"])(se,ie,ne,!1,null,null,null),ae=oe.exports,ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.result.courses?i("div",{attrs:{id:"results-root"}},[i("div",{attrs:{id:"results-config"}},[i("h2",[e._v("Resultat")]),i("label",{attrs:{for:"printShadows"}},[e._v("Schattenteilnehmer anzeigen")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.printShadows,expression:"printShadows"}],attrs:{id:"printShadows",type:"checkbox"},domProps:{checked:Array.isArray(e.printShadows)?e._i(e.printShadows,null)>-1:e.printShadows},on:{change:function(t){var i=e.printShadows,n=t.target,r=!!n.checked;if(Array.isArray(i)){var s=null,o=e._i(i,s);n.checked?o<0&&(e.printShadows=i.concat([s])):o>-1&&(e.printShadows=i.slice(0,o).concat(i.slice(o+1)))}else e.printShadows=r}}})]),i("div",{attrs:{id:"results-successful"}},[i("ul",e._l(e.result.courses,(function(t){return i("li",[i("h3",[e._v(e._s(t.name))]),i("table",[e._m(0,!0),i("tbody",e._l(t.students,(function(n){return i("tr",[i("td",[e._v(e._s(n.firstName))]),i("td",[e._v(e._s(n.name))]),i("td",[e._v(e._s(n.class))]),i("td",{staticClass:"priority-column"},[e._v(" "+e._s(n.priorities.indexOf(t.id)+1)+" ")])])})),0)]),e.printShadows?[i("h4",[e._v("Schattenteilnehmer")]),i("table",[e._m(1,!0),i("tbody",e._l(t.shadows,(function(t){return i("tr",[i("td",[e._v(e._s(t.student.firstName))]),i("td",[e._v(e._s(t.student.name))]),i("td",[e._v(e._s(t.student.class))]),i("td",[e._v(e._s(t.priority))]),i("td",[e._v(e._s(e.getReason(t)))])])})),0)])]:e._e()],2)})),0)]),i("div",{attrs:{id:"results-unassignable"}},[i("h3",[e._v("Nicht-zuweisbare Teilnehmer")]),i("table",[i("thead",[i("th"),i("th"),i("th"),e._l(e.numberOfPriorities(e.result.students),(function(t){return i("th",[e._v(" Priorität "+e._s(t)+" ")])}))],2),i("tbody",e._l(e.findUnmatched(e.result.students),(function(t){return i("tr",[i("td",[e._v(e._s(t.firstName))]),i("td",[e._v(e._s(t.name))]),i("td",[e._v(e._s(t.class))]),e._l(t.priorities,(function(t){return i("td",{staticClass:"priority-column"},[e._v(" "+e._s(t)+" ")])}))],2)})),0)])])]):e._e()},ue=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("th"),i("th"),i("th"),i("th",[e._v("Priorität")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("th"),i("th"),i("th"),i("th",[e._v("Priorität")]),i("th",[e._v("Grund")])])}],le={props:["result"],data(){return{printShadows:!1}},methods:{findUnmatched(e){return v["filter"](e,e=>!e.matched)},numberOfPriorities(e){return v["range"](1,e[0].priorities.length+1)},getReason(e){const t=[];return e.wasAlreadyMatched?t.push("Bereits zugewiesen"):e.wasCourseFull&&t.push("Aktivität voll"),t.join(", ")}}},fe=le,de=(i("b7cd"),Object(l["a"])(fe,ce,ue,!1,null,"26969b3a",null)),he=de.exports;n["a"].component("am-multiselect",ae);var pe={data(){return{excelOverview:null,matchConfig:{filename:null,courses:null,student:null},result:{courses:null}}},components:{"am-excel-reader":L,"am-activities-sheet-config":d,"am-participants-sheet-config":U,"am-do-matching":te,"am-result-printer":he},methods:{onOverviewLoaded(e){this.excelOverview=e,this.matchConfig.filename=e.filename},activitiesConfigCompleted(e){this.matchConfig.courses=e},participantsConfigCompleted(e){this.matchConfig.student=e},onMatched(e){this.result=e}}},ve=pe,me=(i("7d00"),Object(l["a"])(ve,r,s,!1,null,null,null)),ge=me.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ge)}}).$mount("#app")},"9e26":function(e,t,i){"use strict";var n=i("72d3"),r=i.n(n);r.a},b7cd:function(e,t,i){"use strict";var n=i("7af8"),r=i.n(n);r.a}});
//# sourceMappingURL=main.7ba42a45.js.map