function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function E(e){return l=e,f=setTimeout(h,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=g();if(S(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function O(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function j(){var e=g(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return E(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},j.flush=function(){return void 0===f?a:O(g())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={formEl:document.querySelector(".feedback-form"),emailInput:document.querySelector('.feedback-form input[name="email"]'),messageInput:document.querySelector(".feedback-form textarea")};y.formEl.addEventListener("submit",(function(e){e.preventDefault();new FormData(y.formEl).forEach(((e,t)=>console.log(e,t))),localStorage.removeItem("feedback-form-state"),y.formEl.reset()})),y.formEl.addEventListener("input",e(t)((function(e){const t=y.emailInput.value,n=y.messageInput.value,o={email:t,message:n};localStorage.setItem("feedback-form-state",JSON.stringify(o));localStorage.getItem("feedback-form-state")}),500)),y.formEl.addEventListener("change",(e=>{let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{console.log(e,t),y.formEl.elements[e].value=t})))}();
//# sourceMappingURL=03-feedback.5dc28aaa.js.map
