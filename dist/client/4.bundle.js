(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{49:function(n,e,t){"use strict";var r,a=t(0),o=t(7),i=t(3),l=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},s=o.c.div(r||(r=l(["\n  @import url('https://fonts.googleapis.com/css?family=Notable|Arvo&display=swap');\n\n  font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  text-align: center;\n  font-size: 16px;\n  border-radius: 20px;\n  padding: 24px;\n  background-color: ",";\n  color: ",";\n  letter-spacing:2px;\n  box-shadow: 5px 5px 0px ",";\n  margin: auto;\n\n  input[type=submit] {\n    width: 50%;\n    font-size: 12px;\n    font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    letter-spacing: 1px;\n  }\n\n  a {\n    color: ",";\n  }\n"],["\n  @import url('https://fonts.googleapis.com/css?family=Notable|Arvo&display=swap');\n\n  font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  text-align: center;\n  font-size: 16px;\n  border-radius: 20px;\n  padding: 24px;\n  background-color: ",";\n  color: ",";\n  letter-spacing:2px;\n  box-shadow: 5px 5px 0px ",";\n  margin: auto;\n\n  input[type=submit] {\n    width: 50%;\n    font-size: 12px;\n    font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    letter-spacing: 1px;\n  }\n\n  a {\n    color: ",";\n  }\n"])),i.a.highlight,i.a.offwhite,i.a.shadow,i.a.offwhite);e.a=function(n){var e=n.children;return Object(a.h)(s,null,e)}},67:function(n,e,t){"use strict";t.r(e);var r,a=t(10),o=t(5),i=t.n(o),l=t(53),s=t.n(l),u=t(0),c=t(4),p=t(49),f=(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),h=function(n,e,t,r){return new(t||(t=Promise))((function(a,o){function i(n){try{s(r.next(n))}catch(n){o(n)}}function l(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,l)}s((r=r.apply(n,e||[])).next())}))},b=function(n,e){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(n,i)}catch(n){o=[6,n],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},d=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.state={formFields:{}},e.handleSubmit=function(n){return h(e,void 0,void 0,(function(){var e,t,r;return b(this,(function(o){switch(o.label){case 0:return n.preventDefault(),[4,Object(a.a)(i.a.post("/api/user/register",this.state.formFields))];case 1:return e=o.sent(),t=e[0],r=e[1],t&&console.log(t),r&&Object(c.c)("/",!0),[2]}}))}))},e.handleChange=function(n){return function(t){var r=s()(e.state.formFields);r[n]=t.target.value,e.setState({formFields:r})}},e}return f(e,n),e.prototype.render=function(n,e){return Object(u.h)(u.b,null,Object(u.h)(p.a,null,Object(u.h)("form",{action:"/user/register",method:"post",onSubmit:this.handleSubmit},"Username:",Object(u.h)("br",null),Object(u.h)("input",{type:"text",name:"username",value:e.formFields.username,onChange:this.handleChange("username")}),Object(u.h)("br",null),"Name:",Object(u.h)("br",null),Object(u.h)("input",{type:"text",name:"name",value:e.formFields.name,onChange:this.handleChange("name")}),Object(u.h)("br",null),"Email:",Object(u.h)("br",null),Object(u.h)("input",{type:"text",name:"email",value:e.formFields.email,onChange:this.handleChange("email")}),Object(u.h)("br",null),"Password:",Object(u.h)("br",null),Object(u.h)("input",{type:"password",name:"password",value:e.formFields.password,onChange:this.handleChange("password")}),Object(u.h)("br",null),Object(u.h)("input",{type:"submit",value:"Submit"}))))},e}(u.a);e.default=d}}]);
//# sourceMappingURL=4.bundle.js.map