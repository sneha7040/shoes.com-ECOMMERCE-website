var gokwikSdk=function(t,o){var i={};function e(e){e["type"]="merchantInfo";t.postMessage(e,t.location.href)}function n(e,t){i[e]=i[e]||[];i[e].push(t)}function c(e,t){if(i[e]){i[e].forEach(function(e){e(t)})}}function d(e){if(!e&&!document.getElementById("gokwikScript")){let e="https://pdp.gokwik.co/build/gokwik.js";var t=document.createElement("script");t.setAttribute("src",e);t.id="gokwikScript";document.head.appendChild(t);if(o.querySelector(".gokwik-disabled")){o.querySelector(".gokwik-disabled").classList.remove("gokwik-disabled");o.querySelector("#line_r_gokwik").remove()}}else if(e&&e.length){for(var i=0;i<e.length;i++){if(!document.getElementById(e[i].id)){var n=document.createElement("script");n.type="text/javascript";n.src=e[i].src;document.head.appendChild(n);n.id=e[i].id}}}}return{init:d,initCheckout:e,emit:c,on:n}}(window,document);document.onreadystatechange=function(){if(document.readyState==="interactive"){gokwikSdk.init()}};
