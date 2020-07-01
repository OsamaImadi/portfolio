(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(7),s=t.n(c),r=(t(13),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),p=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),n.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("i",{className:e.className})))})))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(l.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,e.aboutme),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e.name),n.a.createElement("br",null),n.a.createElement("span",null,e.address),n.a.createElement("br",null),n.a.createElement("span",null,"osamaimadi@yahoo.com")))))))}}]),a}(l.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.UniversityName),n.a.createElement("p",{className:"info"},e.specialization,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),n.a.createElement("p",null,e.Achievements)))}))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.CompanyName),n.a.createElement("p",{className:"info"},e.specialization,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),n.a.createElement("p",null,e.Achievements)))}))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row"},n.a.createElement("ul",{className:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"NodeJs"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"ReactJs"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Javascript/Typescript"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"ExpressJs"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"MongoDB"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"PostgreSQL"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"RESTful services"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"GraphQL services"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Unit testing (Jest)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Socket.io (subscriptions in graphql)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"PassportJs (Authentication)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"NestJs"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Redux"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"React Hooks"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"GatsbyJs"))))))}}]),a}(l.Component),d=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Works."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return n.a.createElement("div",{className:"columns portfolio-item",onClick:function(){return window.open("".concat(e.link),"_blank")}},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:e.link},n.a.createElement("img",{src:"".concat(e.imgurl),alt:"project-img",className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name),n.a.createElement("p",null,e.description))))))})))))}}]),a}(l.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),n.a.createElement("div",{className:"row"},n.a.createElement("aside",{className:"eigth columns footer-widgets"},n.a.createElement("div",{className:"widget"},n.a.createElement("h4",null,"LinkedIn :"," ",e.linkedinId),n.a.createElement("p",{className:"lead"}),n.a.createElement("h4",null," Or email me at :"," ",n.a.createElement("a",{href:"mailto:osamaimadi@yahoo.com"},"osamaimadi@yahoo.com"))))))}}]),a}(l.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",null,n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(l.Component),v={imagebaseurl:"https://rbhatia46.github.io/",name:"Muhammad Osama Imadi",role:"Full-stack Developer with experience in MERN-stack",linkedinId:"https://www.linkedin.com/in/osama-imadi-283830154/",skypeid:"Your skypeid",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/osama-imadi-283830154/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/OsamaImadi",className:"fa fa-github"},{name:"stackoverflow",url:"https://stackoverflow.com/users/11899841/osama",className:"fa fa-stack-overflow"}],aboutme:"Full-stack Web developer with professional experience in MERN stack. Supportive and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues.",address:"Islamabad, Pakistan",website:"https://rbhatia46.github.io",education:[{UniversityName:"NUCES, FAST Islamabad",specialization:"Bachelors in Computer Science",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:""}],work:[{CompanyName:"Morosoft",specialization:"Full-stack Developer",MonthOfLeaving:"July",YearOfLeaving:"2019 - Present",Achievements:""},{CompanyName:"MyGadgets.pk",specialization:"Web Master",MonthOfLeaving:"March",YearOfLeaving:"2018 - June-2019",Achievements:""}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"Taxionspot",description:"Taxi ordering services currently operating in Netherland [NestJs, MongoDB, GraphQL]",imgurl:"images/portfolio/taxi.png",link:"https://www.taxionspot.nl/"},{name:"Homi",description:"Food ordering app [NestJs, PostgreSQL, RESTful]",imgurl:"images/portfolio/food.png",link:"https://homi-frontend-staging.herokuapp.com/"},{name:"Crown Clothing",description:"Production ready e-commerce store [ReactJs, React-Hooks, Firebase]",imgurl:"images/portfolio/crwn.png",link:"https://ms-crwn-clothing.herokuapp.com/"},{name:"MyGadgets",description:"E-commerce store currently operating in Pakistan [Wordpress, Woocommerce]",imgurl:"images/portfolio/mygadgets.png",link:"https://mygadgets.pk/"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},k=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,{resumeData:v}),n.a.createElement(E,{resumeData:v}),n.a.createElement(h,{resumeData:v}),n.a.createElement(d,{resumeData:v}),n.a.createElement(f,{resumeData:v}),n.a.createElement(N,{resumeData:v}))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.e418b257.chunk.js.map