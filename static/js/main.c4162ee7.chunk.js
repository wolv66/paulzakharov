(this["webpackJsonpportfolio-web-site"]=this["webpackJsonpportfolio-web-site"]||[]).push([[0],{21:function(e,a,t){e.exports=t(40)},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(14),r=t.n(i),o=(t(26),t(15)),s=t(16),c=t(19),m=t(20),p=(t(27),t(7)),d=t(5);t(28);function u(){return n.a.createElement("div",{className:"portfolio-grid-box"},n.a.createElement("div",{className:"portfolio-box1 boxes"},n.a.createElement("h3",null,"Here my portfolio projects:")),n.a.createElement("div",{className:"portfolio-box2 boxes"},n.a.createElement("h2",null,"Project 1")),n.a.createElement("div",{className:"portfolio-box3 boxes"},n.a.createElement("h2",null," Project 2 ")),n.a.createElement("div",{className:"portfolio-box4 boxes"},n.a.createElement("h2",null,"Project 3")),n.a.createElement("div",{className:"portfolio-box5 boxes"},n.a.createElement("h2",null," Project 4")))}t(29);function k(){return n.a.createElement("div",{className:"about-grid-box"},n.a.createElement("div",{className:"about-box1"},n.a.createElement("h3",null,"Here should be my Photo")),n.a.createElement("div",{className:"about-box2"},n.a.createElement("h1",null,"General Information about Me")))}function f(){return n.a.createElement("div",{className:"about-grid-box"},n.a.createElement("div",{className:"about-box1"},n.a.createElement("h3",null,"Here should be my Photo")),n.a.createElement("div",{className:"about-box2"},n.a.createElement("h1",null,"General Information about Me")))}t(30),t(31);var h=function(e){var a=["menu-toggler"],t=["bar half start"],l=["bar half end"];return e.isMenuOpen&&(t.push("open"),l.push("open"),a.push("open")),n.a.createElement("div",{className:a.join(" "),onClick:e.openToggleMenu},n.a.createElement("div",{className:t.join(" ")}),n.a.createElement("div",{className:"bar"}),n.a.createElement("div",{className:l.join(" ")}))},E=(t(32),function(e){return n.a.createElement("div",{className:"backdrop",onClick:e.backdropClickHandler})}),S=(t(33),function(e){return n.a.createElement("div",{className:"toolbar_navigation-items"},n.a.createElement("ul",null,e.links.map((function(a){return n.a.createElement("li",{key:a.linkId},n.a.createElement(p.b,{to:a.link,className:e.pageIdNowIsOpen===a.linkId?"menuLink openedLink":"menuLink",onClick:function(){return e.pageIdThatIsOpenNow(a.linkId)}},a.linkName))}))))}),N=function(e){var a=["drawer"];return e.isMenuOpen||a.push("opened"),n.a.createElement("div",null,n.a.createElement("div",{className:a.join(" ")},n.a.createElement("ul",null,n.a.createElement(S,{links:e.links,pageIdNowIsOpen:e.pageIdNowIsOpen,pageIdThatIsOpenNow:e.pageIdThatIsOpenNow}))),e.isMenuOpen?n.a.createElement(E,{backdropClickHandler:e.backdropClickHandler}):null)},I=function(e){return n.a.createElement("header",{className:"toolbar"},n.a.createElement("nav",{className:"toolbar_navigation"},n.a.createElement(h,{openToggleMenu:e.openToggleMenu,isMenuOpen:e.isMenuOpen}),n.a.createElement(N,{links:e.links,pageIdNowIsOpen:e.pageIdNowIsOpen,pageIdThatIsOpenNow:e.pageIdThatIsOpenNow,isMenuOpen:e.isMenuOpen}),n.a.createElement("div",{className:"toolbar_logo"}," ",n.a.createElement(p.b,{to:"/"}," LOGO ")),n.a.createElement("div",{className:"spacer"}),"  ",n.a.createElement("div",{className:"toolbar_navigation-items"},n.a.createElement("ul",{className:"top-menu"},n.a.createElement(S,{links:e.links,pageIdNowIsOpen:e.pageIdNowIsOpen,pageIdThatIsOpenNow:e.pageIdThatIsOpenNow})))))},b=(t(39),function(e){return n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skills"},n.a.createElement("h1",{className:"title"},e.hardSkills[0])),n.a.createElement("ul",{className:"listOfSkills"},e.hardSkills.slice(1).map((function(e){return n.a.createElement("li",{key:e.hardSkillId},n.a.createElement("span",{className:"typeOfSkill"},e.typeOfSkill,":")," \xa0",e.HardSkillDescription)}))))}),g=function(e){return n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skills"},n.a.createElement("h1",{className:"title"},e.softSkills[0])),n.a.createElement("ul",{className:"listOfSkills"},e.softSkills.slice(1).map((function(e){return n.a.createElement("li",{key:e.softSkillId},e.softSkillDescription)}))))},v=function(e){return n.a.createElement("div",{className:"exp-container"},e.experience.map((function(e){return n.a.createElement("div",{className:"exp-box"},n.a.createElement("h3",null,e.company),n.a.createElement("h4",null,e.when),n.a.createElement("ul",null,e.duties.map((function(e){return n.a.createElement("li",{key:e+1},e)}))))})))},O=function(e){return n.a.createElement("div",{className:"grid-box"},n.a.createElement("div",{className:"box1"},n.a.createElement("h1",null,"Paul "),n.a.createElement("h1",null,"Zakharov"),n.a.createElement("h3",null,"FrontEnd Developer")),n.a.createElement("div",{className:"box2"},n.a.createElement("i",{className:"fas fa-angle-left arrowBtn",onClick:e.changeSkillsList}),n.a.createElement("div",{className:"flex-cont"},e.showHardSkillList?n.a.createElement(b,{hardSkills:e.hardSkills}):n.a.createElement(g,{softSkills:e.softSkills})),n.a.createElement("i",{className:"fas fa-angle-right arrowBtn",onClick:e.changeSkillsList})),n.a.createElement("div",{className:"box3"},n.a.createElement("h2",null,"Experience"),n.a.createElement(v,{experience:e.experience})))},w=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={isMenuOpen:!1,showHardSkillList:!0,warningWindow:!0,pageIdNowIsOpen:0,links:[{linkName:"Home",linkId:0,link:"/"},{linkName:"Portfolio",linkId:1,link:"/portfolio"},{linkName:"About",linkId:2,link:"/about"},{linkName:"Contact",linkId:3,link:"/contact"}],hardSkills:["My Hard Skills: ",{hardSkillId:1,typeOfSkill:"Languages",HardSkillDescription:"JavaScript, TypeScript, ES6+"},{hardSkillId:2,typeOfSkill:"Frameworks",HardSkillDescription:"React (inc. React.Hooks, Redux)"},{hardSkillId:3,typeOfSkill:"Server-side",HardSkillDescription:"Node.js, npm, npm scripts, Yarn, Create React App"},{hardSkillId:4,typeOfSkill:"UI & UX",HardSkillDescription:"UI & UX: Cross-browser, Adaptive, Responsive, Accessible, Mobile-first, Offline-first, Graceful degradation, Progressive enhancement, Performance"},{hardSkillId:5,typeOfSkill:"Layout / template",HardSkillDescription:"HTML, HTML5, JSX"},{hardSkillId:6,typeOfSkill:"Styles",HardSkillDescription:"CSS, CSS3, JSS, CSS-in-JS, PostCSS"},{hardSkillId:7,typeOfSkill:"Utility libraries",HardSkillDescription:"jQuery, React router, Redux form"},{hardSkillId:8,typeOfSkill:"UI libraries",HardSkillDescription:"Bootstrap, Material UI"},{hardSkillId:9,typeOfSkill:"Version control",HardSkillDescription:"Git, GitHub, Bitbucket"}],softSkills:["My Soft Skills: ",{softSkillId:1,typeOfSkill:"Fast Learner",softSkillDescription:"\u0431\u044b\u0441\u0442\u0440\u043e \u0443\u0447\u0443\u0441\u044c"},{softSkillId:2,softSkillDescription:"\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}],experience:[{experienceId:0,company:"Ekit",when:"March 2019 - March 2020",duties:["helping","developing","drinking"]}]},e.openToggleMenu=function(){e.setState((function(e){return{isMenuOpen:!e.isMenuOpen}}))},e.backdropClickHandler=function(){e.setState({isMenuOpen:!1})},e.changeSkillsList=function(){e.setState((function(e){return{showHardSkillList:!e.showHardSkillList}}))},e.pageIdThatIsOpenNow=function(a){e.setState({pageIdNowIsOpen:a,isMenuOpen:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"home-page"},n.a.createElement("div",{className:"overlay"},n.a.createElement(I,{backdropClickHandler:this.backdropClickHandler,links:this.state.links,pageIdNowIsOpen:this.state.pageIdNowIsOpen,isMenuOpen:this.state.isMenuOpen,openToggleMenu:this.openToggleMenu,pageIdThatIsOpenNow:this.pageIdThatIsOpenNow}),n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,render:function(){return n.a.createElement(O,{showHardSkillList:e.state.showHardSkillList,changeSkillsList:e.changeSkillsList,hardSkills:e.state.hardSkills,softSkills:e.state.softSkills,experience:e.state.experience})}}),n.a.createElement(d.a,{path:"/about",component:k}),n.a.createElement(d.a,{path:"/portfolio",component:u}),n.a.createElement(d.a,{path:"/contact",component:f}))))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c4162ee7.chunk.js.map