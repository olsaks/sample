(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(t,o,e){},48:function(t,o,e){t.exports=e(61)},53:function(t,o,e){},54:function(t,o,e){},55:function(t,o,e){},61:function(t,o,e){"use strict";e.r(o);var a=e(1),n=e.n(a),r=e(42),s=e.n(r),m=e(44),c=e(5),i=(e(53),e(54),e(47)),l=(e(55),e(65)),p=e(64),b=e(63),u=(e(40),e(46)),d={defaultIndices:[1,2,3,4,5,6,7,8,9,10,11,12,22,23,33,34,44,45,55,56,66,67,77,78,79,80,81,82,83,84,85,86,87,88],oliverIndices:[13,14,15,16,27,38,49,60,71,70,69,68,57,46,35,24,25,26,37,48,59,58,47,36],saksIndices:[18,19,20,21,32,31,30,41,42,43,54,65,76,75,74,73,62,63,64,53,52,51,40,29],defaultRotate:{top:[90,45],bottom:[0,45]},transforms:{13:{top:[90,90],bottom:[0,0]},14:{top:[90,90],bottom:[0,90]},15:{top:[90,90],bottom:[0,90]},16:{top:[90,180],bottom:[0,90]},18:{top:[90,90],bottom:[0,0]},19:{top:[90,90],bottom:[0,90]},20:{top:[90,90],bottom:[0,90]},21:{top:[90,180],bottom:[0,90]},24:{top:[90,0],bottom:[0,0]},25:{top:[90,90],bottom:[0,0]},26:{top:[90,-90],bottom:[0,0]},27:{top:[90,0],bottom:[0,0]},29:{top:[90,0],bottom:[0,0]},30:{top:[90,90],bottom:[0,0]},31:{top:[90,90],bottom:[0,90]},32:{top:[90,0],bottom:[0,90]},35:{top:[90,0],bottom:[0,0]},36:{top:[90,0],bottom:[0,0]},37:{top:[90,0],bottom:[0,0]},38:{top:[90,0],bottom:[0,0]},40:{top:[90,0],bottom:[0,0]},41:{top:[90,0],bottom:[0,-90]},42:{top:[90,90],bottom:[0,90]},43:{top:[90,180],bottom:[0,90]},46:{top:[90,0],bottom:[0,0]},47:{top:[90,0],bottom:[0,0]},48:{top:[90,0],bottom:[0,0]},49:{top:[90,0],bottom:[0,0]},51:{top:[90,0],bottom:[0,-90]},52:{top:[90,90],bottom:[0,90]},53:{top:[90,180],bottom:[0,90]},54:{top:[90,0],bottom:[0,0]},57:{top:[90,0],bottom:[0,0]},58:{top:[90,0],bottom:[0,-90]},59:{top:[90,0],bottom:[0,90]},60:{top:[90,0],bottom:[0,0]},62:{top:[90,90],bottom:[0,0]},63:{top:[90,90],bottom:[0,90]},64:{top:[90,0],bottom:[0,90]},65:{top:[90,0],bottom:[0,0]},68:{top:[90,0],bottom:[0,-90]},69:{top:[90,90],bottom:[0,90]},70:{top:[90,90],bottom:[0,90]},71:{top:[90,0],bottom:[0,90]},73:{top:[90,0],bottom:[0,-90]},74:{top:[90,90],bottom:[0,90]},75:{top:[90,90],bottom:[0,90]},76:{top:[90,0],bottom:[0,90]}}};function f(t){var o=t.scrollYProgress,e=t.index,r=Object(a.useState)(null),s=Object(u.a)(r,2),m=s[0],c=s[1],i=new Set(d.defaultIndices),l=new Set(d.oliverIndices),f=new Set(d.saksIndices);Object(a.useEffect)((function(){console.log(i),i.has(e+1)?c("default"):l.has(e+1)?c("oliver"):f.has(e+1)&&c("saks")}),[]);var v=function(t,o){return i.has(t)?d.defaultRotate[o]:d.transforms[t]?d.transforms[t][o]:d.defaultRotate[o]},y=Object(p.a)(o,[0,2/32],v(e+1,"top")),g=Object(p.a)(o,[0,2/32],v(e+1,"bottom")),h=Object(p.a)(o,[2/32,3/32],["0px","30px"]),E=Object(p.a)(o,[2/32,3/32],["0px","-30px"]),O=Object(p.a)(o,[2/32,3/32],[1,0]),j={oliver:{x:h},saks:{x:E},default:{x:"0px"}};return n.a.createElement(b.a.div,{className:"intro-item",whileHover:{scale:1.2,transition:{duration:.4,ease:"easeInOut"}},style:{opacity:d.transforms[e+1]?1:O,x:m?j[m].x:"0px"}},n.a.createElement(b.a.span,{className:"line",style:{rotate:y}}),n.a.createElement(b.a.span,{className:"line",style:{rotate:g}}))}function v(t){var o=t.scrollYProgress,e=Array.from({length:88},(function(t,e){return n.a.createElement(f,{key:e,index:e,scrollYProgress:o})})),a=Object(p.a)(o,[.03,.06],[1,0]),r=Object(p.a)(o,[0,.06],[0,-10]),s=Object(p.a)(o,[0,.03],[0,12]),m={opacity:a,y:r},c={duration:1,yoyo:1/0,type:"spring",bounce:.5},i={start:{y:0},end:{y:3}},l=Object(p.a)(o,[6/64,10/64],["-100%","0%"]);return n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"intro-grid"},e,n.a.createElement(b.a.div,{className:"intro-background",style:{y:l}})),n.a.createElement(b.a.div,{className:"scroll-indicator",variants:{start:{transition:{staggerChildren:.1}},end:{transition:{staggerChildren:.15}}},style:m,initial:"start",animate:"end"},n.a.createElement(b.a.div,{className:"scroll-border",style:{y:s},initial:"start",animate:"end"}),"scroll".split("").map((function(t,o){return n.a.createElement(b.a.span,{variants:i,transition:c,key:o},t)}))))}function y(){var t=Object(l.a)().scrollYProgress,o={translateY:Object(p.a)(t,[1/8,2/8],["0%","-103%"])};return n.a.createElement(b.a.div,{className:"page home",style:Object(i.a)({},o)},n.a.createElement(v,{scrollYProgress:t}))}function g(){return n.a.createElement("div",{className:"app"},n.a.createElement(y,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(m.a,null,n.a.createElement(c.a,{render:function(t){return n.a.createElement(g,t)}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.8e455812.chunk.js.map