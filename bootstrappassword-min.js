window.bootstrappasswordfield=function(t,e,o){var a=function(t){this.element=t},r=e.querySelectorAll("[data-bootstrappasswordfield-change]");a.prototype={BootstrapIt:function(){var t="data-bootstrappasswordfield-id-"+[Math.floor(9999*Math.random())],o=e.createElement("input");o.id=t,o.className="data-bootstrappasswordfield-checkbox",o.type="checkbox",o.setAttribute("data-bootstrappasswordfield-checkbox",""),this.element.parentNode.appendChild(o)}};for(var d=0;d<r.length;d++){var s=new a(r[d]);s.BootstrapIt()}for(var n=function(){for(var t=this.parentNode.childNodes,e=0;e<t.length;e++){var o=t[e];"input"===o.nodeName.toLowerCase()&&o.hasAttribute("data-bootstrappasswordfield-change")&&(o.type=this.checked?"text":"password")}},p=e.querySelectorAll("[data-bootstrappasswordfield-checkbox]"),i=0;i<p.length;i++)p[i].onchange=n}(window,document);