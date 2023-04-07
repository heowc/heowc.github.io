"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[2742],{62742:(e,t,r)=>{r.r(t),r.d(t,{diagram:()=>a});var n=r(45886),o=r(49540),l=r(9419);r(59373),r(17967),r(27856),r(45625),r(70277),r(39354),r(27484);const a={parser:n.p,db:n.f,renderer:o.f,styles:o.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,l.f)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),o.f.setConf(e.flowchart),n.f.clear(),n.f.setGen("gen-2")}}},49540:(e,t,r)=>{r.d(t,{a:()=>u,f:()=>f});var n=r(45625),o=r(59373),l=r(45886),a=r(9419),s=r(85408),i=r(73841),c=r(43349),d=r(48003);const p={},b=function(e,t,r,n,o,l){const i=n.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const n=e[r];let d="default";n.classes.length>0&&(d=n.classes.join(" "));const p=(0,s.m)(n.styles);let b,w=void 0!==n.text?n.text:n.id;if((0,a.j)((0,a.g)().flowchart.htmlLabels)){const e={label:w.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};b=(0,c.a)(i,e).node(),b.parentNode.removeChild(b)}else{const e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));const t=w.split(a.d.lineBreakRegex);for(const r of t){const t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}b=e}let f=0,u="";switch(n.type){case"round":f=5,u="rect";break;case"square":case"group":default:u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"odd":case"odd_right":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"doublecircle":u="doublecircle"}t.setNode(n.id,{labelStyle:p.labelStyle,shape:u,labelText:w,rx:f,ry:f,class:d,style:p.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:l.db.getTooltip(n.id)||"",domId:l.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,a.g)().flowchart.padding}),a.l.info("setNode",{labelStyle:p.labelStyle,shape:u,labelText:w,rx:f,ry:f,class:d,style:p.style,id:n.id,domId:l.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,a.g)().flowchart.padding})}))},w=function(e,t,r){a.l.info("abc78 edges = ",e);let n,l,i=0,c={};if(void 0!==e.defaultStyle){const t=(0,s.m)(e.defaultStyle);n=t.style,l=t.labelStyle}e.forEach((function(r){i++;var d="L-"+r.start+"-"+r.end;void 0===c[d]?(c[d]=0,a.l.info("abc78 new entry",d,c[d])):(c[d]++,a.l.info("abc78 new entry",d,c[d]));let b=d+"-"+c[d];a.l.info("abc78 new link id to be used is",d,b,c[d]);var w="LS-"+r.start,f="LE-"+r.end;const u={style:"",labelStyle:""};switch(u.minlen=r.length||1,"arrow_open"===r.type?u.arrowhead="none":u.arrowhead="normal",u.arrowTypeStart="arrow_open",u.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":u.arrowTypeStart="arrow_cross";case"arrow_cross":u.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":u.arrowTypeStart="arrow_point";case"arrow_point":u.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":u.arrowTypeStart="arrow_circle";case"arrow_circle":u.arrowTypeEnd="arrow_circle"}let g="",h="";switch(r.stroke){case"normal":g="fill:none;",void 0!==n&&(g=n),void 0!==l&&(h=l),u.thickness="normal",u.pattern="solid";break;case"dotted":u.thickness="normal",u.pattern="dotted",u.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u.thickness="thick",u.pattern="solid",u.style="stroke-width: 3.5px;fill:none;";break;case"invisible":u.thickness="invisible",u.pattern="solid",u.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=(0,s.m)(r.style);g=e.style,h=e.labelStyle}u.style=u.style+=g,u.labelStyle=u.labelStyle+=h,void 0!==r.interpolate?u.curve=(0,s.n)(r.interpolate,o.c_6):void 0!==e.defaultInterpolate?u.curve=(0,s.n)(e.defaultInterpolate,o.c_6):u.curve=(0,s.n)(p.curve,o.c_6),void 0===r.text?void 0!==r.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c"),u.labelType="text",u.label=r.text.replace(a.d.lineBreakRegex,"\n"),void 0===r.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),u.labelStyle=u.labelStyle.replace("color:","fill:"),u.id=b,u.classes="flowchart-link "+w+" "+f,t.setEdge(r.start,r.end,u,i)}))},f={setConf:function(e){const t=Object.keys(e);for(const r of t)p[r]=e[r]},addVertices:b,addEdges:w,getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(r){return}},draw:function(e,t,r,c){a.l.info("Drawing flowchart"),c.db.clear(),l.f.setGen("gen-2"),c.parser.parse(e);let p=c.db.getDirection();void 0===p&&(p="TD");const{securityLevel:f,flowchart:u}=(0,a.g)(),g=u.nodeSpacing||50,h=u.rankSpacing||50;let k;"sandbox"===f&&(k=(0,o.Ys)("#i"+t));const y="sandbox"===f?(0,o.Ys)(k.nodes()[0].contentDocument.body):(0,o.Ys)("body"),x="sandbox"===f?k.nodes()[0].contentDocument:document,v=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:p,nodesep:g,ranksep:h,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let m;const S=c.db.getSubGraphs();a.l.info("Subgraphs - ",S);for(let n=S.length-1;n>=0;n--)m=S[n],a.l.info("Subgraph - ",m),c.db.addVertex(m.id,m.title,"group",void 0,m.classes,m.dir);const _=c.db.getVertices(),C=c.db.getEdges();a.l.info("Edges",C);let T=0;for(T=S.length-1;T>=0;T--){m=S[T],(0,o.td_)("cluster").append("text");for(let e=0;e<m.nodes.length;e++)a.l.info("Setting up subgraphs",m.nodes[e],m.id),v.setParent(m.nodes[e],m.id)}b(_,v,t,y,x,c),w(C,v);const $=y.select(`[id="${t}"]`),A=y.select("#"+t+" g");if((0,i.r)(A,v,["point","circle","cross"],"flowchart",t),s.u.insertTitle($,"flowchartTitleText",u.titleTopMargin,c.db.getDiagramTitle()),(0,d.s)(v,$,u.diagramPadding,u.useMaxWidth),c.db.indexNodes("subGraph"+T),!u.htmlLabels){const e=x.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=x.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(_).forEach((function(e){const r=_[e];if(r.link){const n=(0,o.Ys)("#"+t+' [id="'+e+'"]');if(n){const e=x.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===f?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const t=n.insert((function(){return e}),":first-child"),o=n.select(".label-container");o&&t.append((function(){return o.node()}));const l=n.select(".label");l&&t.append((function(){return l.node()}))}}}))}},u=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span {\n    color: ${e.titleColor};\n  }\n\n  .label text,span {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);