!function(){"use strict";function t(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,e(t,n)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}!function(){Inferno.createVNode;var e=Inferno.Component,n=Inferno.createElement,r=0,o=function(e){function o(){return e.apply(this,arguments)||this}return t(o,e),o.prototype.render=function(){return r++,n("li",null,this.props.children)},o}(e),i=function(e){function r(){var t;return(t=e.call(this)||this).state={items:[]},t.items=[],t}t(r,e);var i=r.prototype;return i.componentDidMount=function(){for(var t=0;this.items.length<2e3;)this.items[this.items.length]=n(o,{key:++t},this.items.length+"bar"),this.setState({items:this.items})},i.render=function(){return n("ul",null,this.state.items)},r}(e);document.addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelector("#App"),e=0;e<2;e++)Inferno.render(n(i),t);setTimeout((function(){Inferno.render(n("div",null,"\n\t\t\t\tRounds: 2,\n\t\t\t\tAverage: 0,\n\t\t\t\tTotal: 0,\n\t\t\t\tcounter: "+r+"\n\t\t\t"),t)}),5e3)}))}()}();
