(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{27:function(e,t,r){"use strict";r.r(t);var o=r(0);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={name:"Register",data:function(){return{form:new Form({name:"",email:"",password:"",password_confirmation:""}),busy:!1,submitted:!1,visible:!1}},computed:i({},Object(o.c)(["getIntended","authRoutes"]),{isEmpty:function(){return!(this.form.name&&this.form.email&&this.form.password&&this.form.password_confirmation)}}),methods:i({},Object(o.b)(["setAuth","setToken","clearIntended"]),{toggleVisible:function(){this.visible=!this.visible},regUser:function(){var e=this;this.busy=!0,this.$Progress.start(),this.form.post(this.authRoutes.register).then((function(t){e.setToken({token:t.data.token,remember:!0}),axios.get(e.authRoutes.profile).then((function(t){e.setAuth({user:t.data,remember:!0}),e.busy=!1,e.$router.push(e.getIntended),e.clearIntended(),e.$Progress.finish(),new toast({type:"success",title:"User registered successfully!"})})).catch((function(){e.busy=!1,e.$Progress.fail(),new toast({type:"error",title:"Error retrieving profile"})}))})).catch((function(){e.busy=!1,e.$Progress.fail(),new toast({type:"error",title:"Error creating user!"})}))}})},l=r(1),c=Object(l.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Register")]),e._v(" "),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{label:"Name",type:"text",autocomplete:"name","prepend-icon":"fas fa-user"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Email Address",type:"email",autocomplete:"email","prepend-icon":"mail"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{label:"Enter your password",hint:"At least 8 characters",min:"8","prepend-icon":"fas fa-lock","append-icon":e.visible?"visibility":"visibility_off",type:e.visible?"text":"password",autocomplete:"password"},on:{"click:append":e.toggleVisible},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{label:"Confirm your password",hint:"Passwords must match",min:"8","prepend-icon":"fas fa-lock","append-icon":e.visible?"visibility":"visibility_off",type:e.visible?"text":"password",autocomplete:"password"},on:{"click:append":e.toggleVisible},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{loading:e.busy},on:{click:function(t){return t.preventDefault(),e.regUser(t)}}},[e._v("Register")])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);