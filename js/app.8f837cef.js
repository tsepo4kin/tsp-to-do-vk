(function(t){function e(e){for(var i,s,r=e[0],a=e[1],c=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&f.push(l[s][0]),l[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,r=1;r<o.length;r++){var a=o[r];0!==l[a]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},l={app:0},n=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/tsp-to-do-vk/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=a;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"4a83":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("AppHeader",{on:{addTodoList:t.addNewTodoList}}),o("v-main",[o("v-container",{staticClass:"d-flex flex-wrap"},t._l(t.todosLists,(function(e,i){return o("todos-list",{key:i,attrs:{listName:e.listName,color:e.color},on:{deleteTodoList:t.deleteTodoList}})})),1)],1)],1)},n=[],s=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",color:"primary"}},[t._v(" logo "),o("v-spacer"),o("v-text-field",{attrs:{autocomplete:"off",label:"list name",clearable:"",dense:"",solo:"",flat:"","hide-details":"true",color:"white","append-outer-icon":"mdi-check"},on:{"click:append-outer":t.addTodoList},model:{value:t.listName,callback:function(e){t.listName=e},expression:"listName"}}),o("span",{staticClass:"ring",style:{"background-color":t.color},on:{click:t.toggleColorPicker}}),t.colorPicker?o("v-color-picker",{staticClass:"colorPicker",model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}):t._e()],1)}),r=[],a={data:function(){return{listName:null,color:"#ffffff",colorPicker:!1}},methods:{addTodoList:function(){this.$emit("addTodoList",{listName:this.listName,color:this.color})},toggleColorPicker:function(){this.colorPicker=!this.colorPicker}}},c=a,d=(o("de1f"),o("2877")),u=o("6544"),f=o.n(u),p=o("40dc"),m=o("03a4"),h=o("2fa4"),g=o("8654"),v=Object(d["a"])(c,s,r,!1,null,null,null),T=v.exports;f()(v,{VAppBar:p["a"],VColorPicker:m["a"],VSpacer:h["a"],VTextField:g["a"]});var b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mt-5 mx-auto align-self-center",attrs:{width:"500"}},[o("v-card-title",{staticClass:"d-block",style:{"background-color":t.color}},[o("div",{staticClass:"d-flex justify-space-between"},[o("p",[t._v(t._s(t.listName))]),o("v-btn",{staticClass:"icon",style:{"background-color":t.color},attrs:{elevation:"0"},on:{click:t.deleteTodoList}},[o("v-icon",{attrs:{"font-size":"25"}},[t._v("mdi-close")])],1)],1),o("v-text-field",{attrs:{autocomplete:"off",label:"todo title",solo:"",clearable:"",dense:"","background-color":"#fff",color:"#000","hide-details":"true","append-outer-icon":"mdi-plus"},on:{"click:append-outer":t.addTodo},model:{value:t.todoTitle,callback:function(e){t.todoTitle=e},expression:"todoTitle"}})],1),o("v-card-text",t._l(t.todos,(function(e,i){return o("todo-item",{key:i,attrs:{todo:e},on:{deleteTask:t.deleteFromTodos,toggleComplete:t.toggleComplete,saveNewTodoTitle:t.editTodo}})})),1)],1)},N=[],k=(o("d81d"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex flex-wrap mt-2",class:{green:t.todo.complete,"lighten-3":t.todo.complete},on:{dblclick:t.editTodo}},[o("v-text-field",{ref:t.todo.id,class:{"text-decoration-line-through":t.todo.complete},staticStyle:{width:"420px","font-size":"18px","font-weight":"bold",padding:"0"},attrs:{solo:"",flat:"",color:"#000e24","hide-details":"true",value:t.todo.title,readonly:t.disabledField},on:{blur:t.saveNewTodoTitle,input:t.onInput}}),o("v-btn",{staticClass:"green accent-3 align-self-center",attrs:{icon:"","x-small":""},on:{click:t.toggleComplete}},[o("v-icon",[t._v("mdi-check")])],1),o("v-btn",{staticClass:"red accent-2 ml-1 align-self-center",attrs:{icon:"","x-small":""},on:{click:t.deleteTask}},[o("v-icon",[t._v("mdi-close")])],1),o("hr",{staticStyle:{width:"100%"}})],1)}),y=[],w={props:{todo:{require:!0}},mounted:function(){this.newTodoTitle=this.todo.title},data:function(){return{disabledField:!0,newTodoTitle:null}},methods:{deleteTask:function(){this.$emit("deleteTask",this.todo.title)},toggleComplete:function(){this.$emit("toggleComplete",this.todo.title)},saveNewTodoTitle:function(){this.$emit("saveNewTodoTitle",{newTitle:this.newTodoTitle,oldTitle:this.todo.title}),this.disabledField=!0},editTodo:function(){var t=this;this.disabledField=!1;var e=this.todo.id;setTimeout((function(){t.$refs[e].focus()}),0),setTimeout((function(){window.getSelection().removeAllRanges()}),0)},onInput:function(t){this.newTodoTitle=t}}},x=w,S=(o("6959"),o("8336")),L=o("132d"),O=Object(d["a"])(x,k,y,!1,null,null,null),C=O.exports;f()(O,{VBtn:S["a"],VIcon:L["a"],VTextField:g["a"]});var _={components:{TodoItem:C},props:{listName:{require:!0},color:{require:!0}},data:function(){return{todoTitle:null,todos:[]}},created:function(){JSON.parse(localStorage.getItem(this.listName))?this.todos=JSON.parse(localStorage.getItem(this.listName)):this.todos=[]},methods:{addTodo:function(){this.todos.push({title:this.todoTitle,complete:!1,id:this.listName+this.todos.length}),this.todoTitle=null,localStorage.setItem(this.listName,JSON.stringify(this.todos))},deleteFromTodos:function(t){this.todos=this.todos.filter((function(e){return e.title!=t})),localStorage.setItem(this.listName,JSON.stringify(this.todos))},toggleComplete:function(t){this.todos=this.todos.map((function(e){return e.title==t&&(e.complete=!e.complete),e})),localStorage.setItem(this.listName,JSON.stringify(this.todos))},editTodo:function(t){this.todos=this.todos.map((function(e){return t.oldTitle==e.title&&(e.title=t.newTitle),e})),localStorage.setItem(this.listName,JSON.stringify(this.todos))},deleteTodoList:function(){this.$emit("deleteTodoList",this.listName)}}},I=_,V=o("b0af"),P=o("99d9"),j=Object(d["a"])(I,b,N,!1,null,null,null),J=j.exports;f()(j,{VBtn:S["a"],VCard:V["a"],VCardText:P["a"],VCardTitle:P["b"],VIcon:L["a"],VTextField:g["a"]});var $={name:"App",components:{AppHeader:T,TodosList:J},created:function(){JSON.parse(localStorage.getItem("todoLists"))&&(this.todosLists=JSON.parse(localStorage.getItem("todoLists")))},data:function(){return{todosLists:[{listName:"Important and urgent",color:"red"},{listName:"Urgent",color:"orange"},{listName:"Important",color:"green"},{listName:"Postponed indefinitely",color:"grey"}]}},methods:{addNewTodoList:function(t){this.todosLists.push(t),localStorage.setItem("todoLists",JSON.stringify(this.todosLists))},deleteTodoList:function(t){this.todosLists=this.todosLists.filter((function(e){return e.listName!=t})),localStorage.setItem("todoLists",JSON.stringify(this.todosLists))}}},F=$,A=o("7496"),E=o("a523"),M=o("f6c4"),q=Object(d["a"])(F,l,n,!1,null,null,null),B=q.exports;f()(q,{VApp:A["a"],VContainer:E["a"],VMain:M["a"]});var z=o("f309");i["a"].use(z["a"]);var H=new z["a"]({}),K=o("d501"),W=o.n(K);W.a.send("VKWebAppInit",{}),W.a.subscribe((function(t){return console.log(t)})),W.a.send("VKWebAppGetEmail").then((function(t){console.log(t.email)})).catch((function(t){})),i["a"].config.productionTip=!1,new i["a"]({vuetify:H,render:function(t){return t(B)}}).$mount("#app")},6959:function(t,e,o){"use strict";o("4a83")},"915e":function(t,e,o){},de1f:function(t,e,o){"use strict";o("915e")}});
//# sourceMappingURL=app.8f837cef.js.map