(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7862],{53609:function(e,r,t){Promise.resolve().then(t.bind(t,87063)),Promise.resolve().then(t.bind(t,77125)),Promise.resolve().then(t.bind(t,88999)),Promise.resolve().then(t.bind(t,41299))},77125:function(e,r,t){"use strict";t.d(r,{default:function(){return d}});var s=t(83009),a=t(45291),o=t(42392),n=t(60846),l=t(73969),c=t(7011),i=t(41677),m=t(80229);function d(e){let{prompt:r,tagSlug:t}=e,[d,p]=(0,a.useState)("idle"),x=(0,m.useTranslations)(),{trackEvent:u}=(0,c.z)(),{trackUmamiEvent:f}=(0,i.M)(),h=async()=>{u("copy_tag_prompt",{prompt:r,tag_slug:t}),f("copy_tag_prompt",{prompt:r,tag_slug:t});try{await navigator.clipboard.writeText(r),p("success"),setTimeout(()=>p("idle"),2e3)}catch(e){console.error("Copy failed:",e),p("error"),setTimeout(()=>p("idle"),2e3)}};return(0,s.jsxs)("div",{className:"flex flex-col text-lg text-[#666666] max-w-6xl",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("span",{className:"mr-2 flex-shrink-0 text-base",children:[x("common.keywords.imagePromptCapital"),":"]}),(0,s.jsx)("span",{className:"text-primary font-bold text-base max-w-5xl",children:r})]}),(0,s.jsxs)("div",{className:"flex items-center mt-4 space-x-4 md:ml-[115px] justify-center md:justify-start",children:[(0,s.jsxs)("a",{href:l.Z.URLfromTagSlug(t),className:"border border-primary text-primary px-3 py-1 rounded flex items-center hover:text-primary-dark hover:border-primary-dark transition-colors",target:"_blank",rel:"noreferrer",onClick:()=>{u("create_by_tag_prompt",{prompt:r,tag_slug:t}),f("create_by_tag_prompt",{prompt:r,tag_slug:t})},children:[(0,s.jsx)(o.Z,{className:"size-5 mr-2"}),(0,s.jsx)("span",{className:"font-bold",children:x("common.create")})]}),(0,s.jsxs)("button",{className:"border border-gray-500 text-gray-500 px-3 py-1 rounded flex items-center hover:text-gray-700 hover:border-gray-700 transition-colors",onClick:h,children:[(0,s.jsx)(n.Z,{className:"size-5 mr-2"}),(0,s.jsx)("span",{className:"font-bold",children:x("success"===d?"common.copied":"common.copy")})]})]}),"error"===d&&(0,s.jsx)("span",{className:"mt-2 text-red-500 text-center md:text-left md:ml-[115px]",children:x("common.copyFailed")})]})}}},function(e){e.O(0,[342,6083,229,1960,6770,9570,7864,6479,4335,1744],function(){return e(e.s=53609)}),_N_E=e.O()}]);