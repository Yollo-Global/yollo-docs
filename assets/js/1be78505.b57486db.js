"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[714,774],{59735:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(96540),l=n(20053),o=n(69024),r=n(17559),c=n(2967),i=n(84142),d=n(32252),s=n(26588),m=n(81156),u=n(21312),b=n(7663);const p={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){const{shown:e,scrollToTop:t}=(0,b.H)({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",r.G.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var E=n(53109),f=n(56347),g=n(24581),v=n(6342),_=n(23465),C=n(58168);function k(e){return a.createElement("svg",(0,C.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(k,{className:S.collapseSidebarButtonIcon}))}var T=n(65041),A=n(23104),I=n(72713),x=n(89532),B=n(41422),y=n(99169),w=n(75489),L=n(92303);function M(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){let{item:t,onItemClick:n,activePath:o,level:c,index:d,...s}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.p)(),f=function(e){const t=(0,L.default)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),g=(0,i.w8)(t,o),_=(0,y.ys)(h,o),{collapsed:k,setCollapsed:S}=(0,B.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:N,setExpandedItem:T}=(0,I.G)(),A=function(e){void 0===e&&(e=!k),T(e?null:d),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,x.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:k,updateCollapsed:A}),(0,a.useEffect)((()=>{b&&null!=N&&N!==d&&E&&S(!0)}),[b,N,d,S,E]),a.createElement("li",{className:(0,l.default)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(w.default,(0,C.A)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?A(!1):(e.preventDefault(),A())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},s),u),h&&b&&a.createElement(M,{categoryLabel:u,onClick:e=>{e.preventDefault(),A()}})),a.createElement(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(V,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:c+1})))}var G=n(16654),P=n(43186);const F={menuExternalLink:"menuExternalLink_NmtK"};function W(e){let{item:t,onItemClick:n,activePath:o,level:c,index:d,...s}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,o),E=(0,G.A)(m);return a.createElement("li",{className:(0,l.default)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(w.default,(0,C.A)({className:(0,l.default)("menu__link",!E&&F.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},s),u,!E&&a.createElement(P.A,null)))}const D={menuHtmlItem:"menuHtmlItem_M9Kj"};function U(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:d}=t;return a.createElement("li",{className:(0,l.default)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[D.menuHtmlItem,"menu__list-item"],d),key:o,dangerouslySetInnerHTML:{__html:c}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(H,(0,C.A)({item:t},n));case"html":return a.createElement(U,(0,C.A)({item:t},n));default:return a.createElement(W,(0,C.A)({item:t},n))}}function R(e){let{items:t,...n}=e;return a.createElement(I.A,null,t.map(((e,t)=>a.createElement(z,(0,C.A)({key:t,item:e,index:t},n)))))}const V=(0,a.memo)(R),j={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,T.Mj)(),[t,n]=(0,a.useState)(e);return(0,A.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",j.menu,c&&j.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,l.default)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(V,{items:n,activePath:t,level:1})))}const q="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",Y="sidebarLogo_isFc";function Z(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.p)();return a.createElement("div",{className:(0,l.default)(q,c&&O,r&&X)},c&&a.createElement(_.A,{tabIndex:-1,className:Y}),a.createElement(K,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:o}))}const $=a.memo(Z);var J=n(75600),Q=n(22069);const ee=e=>{let{sidebar:t,path:n}=e;const o=(0,Q.M)();return a.createElement("ul",{className:(0,l.default)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function te(e){return a.createElement(J.GX,{component:ee,props:e})}const ne=a.memo(te);function ae(e){const t=(0,g.l)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),l&&a.createElement(ne,e))}const le={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function oe(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:le.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(k,{className:le.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ce(e){let{children:t}=e;const n=(0,s.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,f.zy)(),[i,d]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{i&&d(!1),!i&&(0,E.O)()&&d(!0),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.default)(r.G.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&d(!0)}},a.createElement(ce,null,a.createElement("div",{className:(0,l.default)(re.sidebarViewport,i&&re.sidebarViewportHidden)},a.createElement(ae,{sidebar:t,path:c,onCollapse:s,isHidden:i}),i&&a.createElement(oe,{toggleSidebar:s}))))}const de={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,s.t)();return a.createElement("main",{className:(0,l.default)(de.docMainContainer,(t||!o)&&de.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced)},n))}const me={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function ue(e){let{children:t}=e;const n=(0,s.t)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:me.docsWrapper},a.createElement(h,null),a.createElement("div",{className:me.docPage},n&&a.createElement(ie,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(se,{hiddenSidebarContainer:l},t)))}var be=n(81774),pe=n(41463);function he(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(pe.A,{version:t.version,tag:(0,c.tU)(t.pluginId,t.version)}),a.createElement(o.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ee(e){const{versionMetadata:t}=e,n=(0,i.mz)(e);if(!n)return a.createElement(be.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(he,e),a.createElement(o.e3,{className:(0,l.default)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.n,{version:t},a.createElement(s.V,{name:m,items:u},a.createElement(ue,null,c)))))}},81774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(96540),l=n(21312),o=n(69024),r=n(81156);function c(){return a.createElement(a.Fragment,null,a.createElement(o.be,{title:(0,l.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},72713:(e,t,n)=>{n.d(t,{A:()=>c,G:()=>i});var a=n(96540),l=n(89532);const o=Symbol("EmptyContext"),r=a.createContext(o);function c(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(r.Provider,{value:o},t)}function i(){const e=(0,a.useContext)(r);if(e===o)throw new l.dV("DocSidebarItemsExpandedStateProvider");return e}},7663:(e,t,n)=>{n.d(t,{H:()=>r});var a=n(96540),l=n(23104),o=n(75062);function r(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:i,cancelScroll:d}=(0,l.gk)();return(0,l.Mq)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(c.current?c.current=!1:a>=l?(d(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,o.$)((e=>{e.location.hash&&(c.current=!0,r(!1))})),{shown:n,scrollToTop:()=>i(0)}}}}]);