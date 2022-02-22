"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[6103],{39360:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),l=a(41217),i=a(78665),o=a(60072),r=a(87462),s=a(95999),c=a(71750);var m=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},u=a(29548),g=a(51575);var d=function(e){var t,a=e.content,r=e.sidebar,s=a.assets,c=a.metadata,d=c.title,v=c.description,p=c.nextItem,b=c.prevItem,f=c.date,_=c.tags,h=c.authors,E=c.frontMatter,N=E.hide_table_of_contents,k=E.keywords,Z=E.toc_min_heading_level,C=E.toc_max_heading_level,L=null!=(t=s.image)?t:E.image;return n.createElement(i.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:r,toc:!N&&a.toc&&a.toc.length>0?n.createElement(g.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:C}):void 0},n.createElement(l.Z,{title:d,description:v,keywords:k,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),h.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:h.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:E,assets:s,metadata:c,isBlogPostPage:!0},n.createElement(a,null)),(p||b)&&n.createElement(m,{nextItem:p,prevItem:b}))}},71750:function(e,t,a){var n=a(67294),l=a(39960);t.Z=function(e){var t=e.permalink,a=e.title,i=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},51575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),l=a(63366),i=a(67294),o=a(86010),r=a(25002),s="tableOfContents_cNA8",c=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},i.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),i=a(67294),o=a(29548),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,g=e.linkActiveClassName,d=void 0===g?void 0:g,v=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,l.Z)(e,r),f=(0,o.LU)(),_=null!=v?v:f.tableOfContents.minHeadingLevel,h=null!=p?p:f.tableOfContents.maxHeadingLevel,E=(0,o.DA)({toc:t,minHeadingLevel:_,maxHeadingLevel:h}),N=(0,i.useMemo)((function(){if(u&&d)return{linkClassName:u,linkActiveClassName:d,minHeadingLevel:_,maxHeadingLevel:h}}),[u,d,_,h]);return(0,o.Si)(N),i.createElement(s,(0,n.Z)({toc:E,className:c,linkClassName:u},b))}},60072:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(38561),l=a(67294),i=a(10412),o=a(53944);function r(e){return i.default.canUseDOM?l.createElement(l.Fragment,null,l.createElement(n.Z,e),e.isBlogPostPage&&l.createElement(o.qw,{shortname:"heowc-ithub-io",config:{language:"ko_Kr"}})):l.createElement(l.Fragment,null)}}}]);