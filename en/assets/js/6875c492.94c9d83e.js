"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[8610],{36299:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(95999),l=a(71750);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},s&&n.createElement(l.Z,{permalink:s,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(39960),l=a(78665),s=a(60072),i=a(95999),o=a(5979),g=a(36299),c=a(14739),m=a(86010);function u(e){var t,a=e.metadata,u=e.items,p=e.sidebar,d=e.listMetadata,h=a.allTagsPath,b=a.name,E=a.count,f=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(E),tagName:b});return n.createElement(o.FG,{className:(0,m.Z)(o.kM.wrapper.blogPages,o.kM.page.blogTagPostListPage)},n.createElement(o.d,{title:v}),n.createElement(c.Z,{tag:"blog_tags_posts"}),n.createElement(l.Z,{sidebar:p},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,v),n.createElement(r.Z,{href:h},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),u.map((function(e){var t=e.content;return n.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})),n.createElement(g.Z,{metadata:d})))}},60072:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(38561),r=a(67294),l=a(10412),s=a(53944);function i(e){return l.default.canUseDOM?r.createElement(r.Fragment,null,r.createElement(n.Z,e),e.isBlogPostPage&&r.createElement(s.qw,{shortname:"heowc-ithub-io",config:{language:"ko_Kr"}})):r.createElement(r.Fragment,null)}}}]);