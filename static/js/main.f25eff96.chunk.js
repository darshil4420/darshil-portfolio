(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),i=(t(16),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.email),l.a.createElement("br",null),l.a.createElement("span",null,e.phone),l.a.createElement("br",null),l.a.createElement("span",null,e.address)))))))}}]),a}(n.Component),p=t(10),E=t.n(p),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievement1),l.a.createElement("p",null,e.Achievement2)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement(E.a,{skills:e.skills,colors:{bar:"#3498db",title:{text:"#fff",background:"#2980b9"}}}))))}}]),a}(n.Component),v=t(6),g=t(7),b=t.n(g),N=new Array([61,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),y=0,w=[0,1,2,3],O=.003;setInterval(function(){if(void 0!==b.a){var e=N[w[0]],a=N[w[1]],t=N[w[2]],n=N[w[3]],l=1-y,r="rgb("+Math.round(l*e[0]+y*a[0])+","+Math.round(l*e[1]+y*a[1])+","+Math.round(l*e[2]+y*a[2])+")",s="rgb("+Math.round(l*t[0]+y*n[0])+","+Math.round(l*t[1]+y*n[1])+","+Math.round(l*t[2]+y*n[2])+")";b()("#portfolio").css({background:"-webkit-gradient(linear, left top, right top, from("+r+"), to("+s+"))"}).css({background:"-moz-linear-gradient(left, "+r+" 0%, "+s+" 100%)"}),(y+=O)>=1&&(y%=1,w[0]=w[1],w[2]=w[3],w[1]=(w[1]+Math.floor(1+Math.random()*(N.length-1)))%N.length,w[3]=(w[3]+Math.floor(1+Math.random()*(N.length-1)))%N.length)}},10);var k=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e={width:"50%",margin:"1%"},a=this.props.resumeData.portfolio;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement("h1",{style:{color:"White"}},"Check Out Some Of My Works."),a&&a.map(function(a){return l.a.createElement("div",{style:e},l.a.createElement(v.a,{className:"myAnimation"},l.a.createElement(v.d,{style:{height:""},className:"myName",imageSrc:a.imgurl}),l.a.createElement(v.b,null,a.description),l.a.createElement(v.c,{style:{justifyContent:"center",fontWeight:"900"}},a.name)))}))))}}]),a}(n.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),D=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email Id :",e.email)))))}}]),a}(n.Component),C=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),A={imagebaseurl:"https://github.com/darshil4420?tab=repositories",name:"Darshil Shah",role:"React JS And Python Devloper And Data Science Beginer and Enthusiastic",emailId:"darshilgshah83@gmail.com",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, Reading news, listening songs and hangout with friends or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/darshil-shah-839a0b144",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/darshil4420?tab=repositories",className:"fa fa-github"},{name:"Twitter",url:"https://twitter.com/darshil4420",className:"fa fa-twitter"},{name:"Instagram",url:"https://www.instagram.com/darshil_4400/?hl=en",className:"fa fa-instagram"}],aboutme:"I am currently a pre-final year student at The Devang Patel Institute Of Advance Technology And Research (CHARUSAT) and pursuing my B.Tech from here. I am a self taught  Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"India",email:"darshilgshah83@gmail.com",phone:"+91 9664907396",education:[{UniversityName:"Devange Patel Institute Of Advance Technology And Research",specialization:"B.Tech(IT)",MonthOfPassing:"May",YearOfPassing:"2021",Achievement1:"Student Co-ordinato CSI student chapter",Achievement2:"Student Core Commitee member of Entreprenurship And Communication Club"},{UniversityName:"D P Desai High School(GSHEB)",specialization:"HSC(Science Field)",MonthOfPassing:"May",YearOfPassing:"2017",Achievement1:"",Achievement2:""},{UniversityName:"D P Desai High School(GSEB)",specialization:"SSC",MonthOfPassing:"May",YearOfPassing:"2015",Achievement1:"",Achievement2:""}],work:[{CompanyName:"R K Websoft Technologies Pvt Ltd",specialization:"React JS Intern",MonthOfLeaving:"June",YearOfLeaving:"2019",Achievements:"Main Responsibility of developing various Web Apps and Worked on Live Project named 'Leadsviaduct'."}],skillsDescription:"My Skills Are Described below!!",skills:[{type:"Java",level:80},{type:"React",level:70},{type:"Javascript",level:75},{type:"HTML/CSS",level:85},{type:"C/C++",level:70},{type:"Python",level:80},{type:"IOT",level:40},{type:"ML",level:30},{type:"GCP",level:20}],portfolio:[{name:"Sharebytes",description:"A C# and Google cloud based file sharing based software which solves issue of file backup and sharing problem of college students. Which is also useful for virus prevention in University campus.",imgurl:"images/portfolio/sharebytes.png"},{name:"Online Disease Predictor",description:"A Web App Devloped For Learning Flask. It Predicts Disease Based On Entered Disease",imgurl:"images/portfolio/disease.png"},{name:"Smart Garbage Segregation System",description:"A smart dustbin built using Arduino, Motors and humidity sensor for segregating dry and wet waste. Basically this project was built for providing solution for waste segregation",imgurl:"images/portfolio/dustbin.jpg"}],testimonials:[{description:"Code is like humor. When you have to explain it, it\u2019s bad.",name:"Cory House"},{description:"Optimism is an occupational hazard of programming: feedback is the treatment",name:"Kent Beck"}]},S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:A}),l.a.createElement(d,{resumeData:A}),l.a.createElement(f,{resumeData:A}),l.a.createElement(k,{resumeData:A}),l.a.createElement(j,{resumeData:A}),l.a.createElement(D,{resumeData:A}),l.a.createElement(C,{resumeData:A}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.f25eff96.chunk.js.map