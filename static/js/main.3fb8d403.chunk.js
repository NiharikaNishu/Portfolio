(this.webpackJsonpportnn=this.webpackJsonpportnn||[]).push([[0],{14:function(e,s,n){},15:function(e,s,n){"use strict";n.r(s);var a,i=n(0),t=n(1),c=n.n(t),r=n(8),l=n.n(r),o=(n(14),n(2)),j=n(3),h=n(5),d=n(4),m=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)("header",{id:"home",children:[Object(i.jsxs)("nav",{id:"nav-wrap",children:[Object(i.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(i.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(i.jsxs)("ul",{id:"nav",className:"nav",children:[Object(i.jsx)("li",{className:"current",children:Object(i.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(i.jsx)("div",{className:"row banner",children:Object(i.jsxs)("div",{className:"banner-text",children:[Object(i.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(i.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(i.jsx)("hr",{}),Object(i.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.url,target:"_blank",children:Object(i.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(i.jsx)("p",{className:"scrolldown",children:Object(i.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(i.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),n}(t.Component),b=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("section",{id:"about",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"three columns",children:Object(i.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpeg",alt:""})}),Object(i.jsxs)("div",{className:"nine columns main-col",children:[Object(i.jsx)("h2",{children:"About Me"}),Object(i.jsx)("p",{children:e.aboutme}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"columns contact-details",children:[Object(i.jsx)("h2",{children:"Contact Details"}),Object(i.jsxs)("p",{className:"address",children:[Object(i.jsx)("span",{children:e.name}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:e.address}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:e.website})]})]})})]})]})})}}]),n}(t.Component),O=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsxs)("section",{id:"resume",children:[Object(i.jsxs)("div",{className:"row education",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Education"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.UniversityName}),Object(i.jsxs)("p",{className:"info",children:[e.specialization,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(i.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(i.jsxs)("div",{className:"row work",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Internship"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.CompanyName}),Object(i.jsxs)("p",{className:"info",children:[e.specialization,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(i.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(i.jsxs)("div",{className:"row skill",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Skills"})})}),Object(i.jsxs)("div",{className:"nine columns main-col",children:[Object(i.jsx)("p",{children:e.skillsDescription}),Object(i.jsx)("div",{className:"bars",children:Object(i.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(i.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),n}(t.Component),u=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("section",{id:"portfolio",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"twelve columns collapsed",children:[Object(i.jsx)("h1",{children:"Check Out Some of My Works."}),Object(i.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(i.jsx)("div",{className:"columns portfolio-item",children:Object(i.jsx)("div",{className:"item-wrap",children:Object(i.jsxs)("a",{href:"#modal-01",children:[Object(i.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(i.jsx)("div",{className:"overlay",children:Object(i.jsxs)("div",{className:"portfolio-item-meta",children:[Object(i.jsx)("h5",{children:e.name}),Object(i.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),n}(t.Component),p=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){this.props.resumeData;return Object(i.jsxs)("section",{id:"contact",children:[Object(i.jsx)("div",{className:"row section-head",children:Object(i.jsx)("div",{className:"ten columns",children:Object(i.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(i.jsxs)("div",{className:"widget",children:[Object(i.jsx)("h4",{children:"Phone : +91-7081514103"}),Object(i.jsx)("h4",{children:"Mail: niharikanishu2941@gmail.com"})]})})})]})}}]),n}(t.Component),x=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"twelve columns",children:Object(i.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.url,children:Object(i.jsx)("i",{className:e.className})})})}))})}),Object(i.jsx)("div",{id:"go-top",children:Object(i.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(i.jsx)("i",{className:"icon-up-open"})})})]})})}}]),n}(t.Component),v=n(6),f=(a={imagebaseurl:"???",name:"Niharika Nishu",role:"fresher",linkedinId:"https://www.linkedin.com/in/niharika-nishu-422929136/",roleDescription:"Performance-driven and results-oriented Computer Science graduate at the Dr. A.P.J. Abdul Kalam Tehchnical University offering a pro-active approach and determination to meet all assigned goals and objectives. Effective team player with excellent analytical skills and the important ability to solve complex problems.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/niharika-nishu-422929136/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/NiharikaNishu",className:"fa fa-github"},{name:"phone",url:"+91-7081514103",className:"fa fa-phone"}],aboutme:"I am undergraduate with an interest in Data Structures, Algorithms and problem-solving. I also have well versed knowledge of JavaScript, React JS and Node JS. Looking forward to an opportunity where I can utilize my professional skills that offers challenge and professional growth while being ingenious and pliable.",address:"India",website:"https://niharikanishu.github.io/portfolio/",education:[{UniversityName:"Institute of Engineering & Rural Technology, Allahabad",specialization:"B.Tech (Computer Science)",MonthOfPassing:"October",YearOfPassing:"2020",Achievements:"85%"},{UniversityName:"St-Xavier's School",specialization:"XII",MonthOfPassing:"April",YearOfPassing:"2016",Achievements:"80%"},{UniversityName:"St-Xavier's School",specialization:"X",MonthOfPassing:"April",YearOfPassing:"2014",Achievements:"80%"}],work:[{CompanyName:"TheOS Systems",specialization:"Web Development Intern",MonthOfLeaving:"July 2019",YearOfLeaving:"-August 2019",Achievements:"An overview understanding of PHP programming techniques and advanced designing methodologies using HTML5, CSS and Javascript. I have also learned how important it is to work within a group rather than by oneself."},{CompanyName:"MICRO DATA SERVICE PROVIDER PRIVATE LIMITED",specialization:"Frontend Web Developer",MonthOfLeaving:"July 2018 -",YearOfLeaving:"August 2018",Achievements:"I gained hands-on experience working on a pre-existing code-base, experience working with new team members, experience adjusting my coding style to match the team standard and insights into web application designing."}]},Object(v.a)(a,"work",[{CompanyName:"TheOS Systems",specialization:"Web Development Intern",MonthOfLeaving:"July 2019",YearOfLeaving:"-August 2019",Achievements:"An overview understanding of PHP programming techniques and advanced designing methodologies using HTML5, CSS and Javascript. I have also learned how important it is to work within a group rather than by oneself."},{CompanyName:"MICRO DATA SERVICE PROVIDER PRIVATE LIMITED",specialization:"Frontend Web Developer",MonthOfLeaving:"July 2018 -",YearOfLeaving:"August 2018",Achievements:"I gained hands-on experience working on a pre-existing code-base, experience working with new team members, experience adjusting my coding style to match the team standard and insights into web application designing."}]),Object(v.a)(a,"skillsDescription","Your skills here"),Object(v.a)(a,"skills",[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"CPP"},{skillname:"Java"},{skillname:"NodeJS"}]),a),g=function(e){Object(h.a)(n,e);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(m,{resumeData:f}),Object(i.jsx)(b,{resumeData:f}),Object(i.jsx)(O,{resumeData:f}),Object(i.jsx)(u,{resumeData:f}),Object(i.jsx)(p,{resumeData:f}),Object(i.jsx)(x,{resumeData:f})]})}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(i.jsx)(g,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3fb8d403.chunk.js.map