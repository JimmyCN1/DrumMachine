(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),l=a.n(s),c=(a(16),a(17),a(1)),i=r.a.createContext(),o=r.a.createContext();var m=function(){return r.a.createElement("div",{className:"container",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"row",style:{margin:"0px 10px 10px 0px",verticleAlign:"middle"}},r.a.createElement("i",{className:"fas fa-drum fa-3x"})),r.a.createElement("h1",null,"Drum Machine"))},p=a(9),d={src:"https://sampleswap.org/index.php",crash1:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/92[kb]909-bright-crash.aif.mp3",ride:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/543[kb]beauty_ride2_(long).aif.mp3",crash2:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/666[kb]18_inch_crash.aif.mp3",hiHat:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/11[kb]chh.aif.mp3",tom1:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/35[kb]hitom.aif.mp3",floorTom:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/40[kb]lotom.aif.mp3",snare:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3",kick:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3",clap:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/34[kb]brightclap.aif.mp3"};var u=function(e){var t=e.name,a=e.padName,s=Object(n.useContext)(o).volume,l=Object(n.useContext)(i).setActive,m=Object(n.useState)(!1),u=Object(c.a)(m,1)[0],g=new Audio;g.src=d[t],g.autoplay=!1;var h=function(e,t){return l(e),console.log(e),t};u=function(){g.volume=s/100,g.play()};var v={border:"none",textAlign:"center",height:"150px",width:"150px",margin:"5px",boxShadow:"3px 3px black"};return window.innerWidth>300?r.a.createElement("button",{className:"btn btn-primary",style:v,onClick:function(){return h(t,u())}},"".concat(a)):r.a.createElement("button",{className:"btn btn-primary",style:Object(p.a)({},v,{height:"75px",width:"75px",margin:"3px"}),onClick:function(e,t){return h(e,t())}},a)};var g=function(){var e={padding:"0px",display:"flex",justifyContent:"space-around"};return r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"container",style:{height:"inherit",width:"inherit"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"crash1",padName:"Crash 1"})),r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"ride",padName:"Ride"})),r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"crash2",padName:"Crash 2"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"hiHat",padName:"Hi-Hat"})),r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"tom1",padName:"Tom 1"})),r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"floorTom",padName:"Floor Tom"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"snare",padName:"Snare"})),r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"kick",padName:"Kick"})),r.a.createElement("div",{className:"col-4",style:e},r.a.createElement(u,{name:"clap",padName:"Clap"})))))};var h=function(){var e=Object(n.useContext)(o).volume,t=Object(n.useContext)(i).active,a={volume:"Volume: ".concat(e),crash1:"Crash 1",ride:"Ride",crash2:"Crash 2",hiHat:"Hi-Hat",tom1:"Tom 1",floorTom:"Floor Tom",snare:"Snare",kick:"Kick",clap:"Clap"};return r.a.createElement("div",{className:"Display"},r.a.createElement("div",{style:{width:"200px",height:"50px",border:"none",textAlign:"center",backgroundColor:"black",color:"red",fontSize:"190%",fontWeight:"bold"}},a[t]))},v=a(4),E=a(5),f=a(7),x=a(6),N=a(8),b=(a(18),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(f.a)(this,Object(x.a)(t).call(this,e))).startDrag=function(e){e.preventDefault();var t=e.target.getBoundingClientRect(),n={x:t.left+t.width/2,y:t.top+t.height/2},r=function(e){a.currentDeg=a.getDeg(e.clientX,e.clientY,n),a.currentDeg===a.startAngle&&a.currentDeg--;var t=Math.floor(a.convertRange(a.startAngle,a.endAngle,a.props.min,a.props.max,a.currentDeg));a.setState({deg:a.currentDeg}),a.props.onChange(t)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",function(e){document.removeEventListener("mousemove",r)})},a.getDeg=function(e,t,n){var r=e-n.x,s=t-n.y,l=180*Math.atan(s/r)/Math.PI;return l+=r<0&&s>=0||r<0&&s<0?90:270,Math.min(Math.max(a.startAngle,l),a.endAngle)},a.convertRange=function(e,t,a,n,r){return(r-e)*(n-a)/(t-e)+a},a.renderTicks=function(){for(var e=[],t=a.fullAngle/a.props.numTicks,n=a.margin+a.props.size/2,r=a.startAngle;r<=a.endAngle;r+=t){var s={deg:r,tickStyle:{height:n+10,left:n-1,top:n+2,transform:"rotate("+r+"deg)",transformOrigin:"top"}};e.push(s)}return e},a.dcpy=function(e){return JSON.parse(JSON.stringify(e))},a.fullAngle=e.degrees,a.startAngle=(360-e.degrees)/2,a.endAngle=a.startAngle+e.degrees,a.margin=.15*e.size,a.currentDeg=Math.floor(a.convertRange(e.min,e.max,a.startAngle,a.endAngle,e.value)),a.state={deg:a.currentDeg},a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.context,a=(t.active,t.setActive),n={width:this.props.size,height:this.props.size},s=this.dcpy(n),l=this.dcpy(n);return l.margin=this.margin,this.props.color&&(l.backgroundImage="radial-gradient(100% 70%,hsl(210, "+this.currentDeg+"%, "+this.currentDeg/5+"%),hsl("+100*Math.random()+",20%,"+this.currentDeg/36+"%))"),s.transform="rotate("+this.state.deg+"deg)",r.a.createElement("div",{className:"knob",style:n},r.a.createElement("div",{className:"ticks"},this.props.numTicks?this.renderTicks().map(function(t,a){return r.a.createElement("div",{key:a,className:"tick"+(t.deg<=e.currentDeg?" active":""),style:t.tickStyle})}):null),r.a.createElement("div",{className:"knob outer",style:l,onMouseDown:function(t){a("volume"),e.startDrag(t)}},r.a.createElement("div",{className:"knob inner",style:s},r.a.createElement("div",{className:"grip"}))))}}]),t}(r.a.Component));b.defaultProps={size:150,min:10,max:30,numTicks:0,degrees:270,value:0},b.contextType=i;var y=b;var k=function(){var e=Object(n.useContext)(o),t=e.volume,a=e.setVolume,s=window.innerWidth>768?{padding:"30px 20px 0px 0px"}:{padding:"30px 0px"};return r.a.createElement("div",{className:"col-md-4",style:s},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(h,null)),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{style:{position:"relative",height:"150px",padding:"0px, 0px, 20px, 0px",top:"20px",right:"16px"}},r.a.createElement(y,{size:100,numTicks:25,degrees:260,min:1,max:100,value:t,color:!0,onChange:function(e){return a(e)}}))),r.a.createElement("div",{className:"row justify-content-center"})))};var S=function(){var e=Object(n.useState)(100),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)("volume"),p=Object(c.a)(l,2),d=p[0],u=p[1];return r.a.createElement("div",{className:"container",style:{height:"auto",width:"800px",padding:"10px",border:"solid",borderWidth:"5px",backgroundColor:"silver"}},r.a.createElement(o.Provider,{value:{volume:a,setVolume:s}},r.a.createElement(i.Provider,{value:{active:d,setActive:u}},r.a.createElement(m,null),r.a.createElement("div",{className:"row"},r.a.createElement(g,null),r.a.createElement(k,null)))))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ddba7c01.chunk.js.map