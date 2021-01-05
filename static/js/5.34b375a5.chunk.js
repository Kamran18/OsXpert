(this["webpackJsonpalgo-app"]=this["webpackJsonpalgo-app"]||[]).push([[5],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return q}));var a=r(39),i=r(2),n=r(0),s=r.n(n),c=r(139),o=r(181),l=r(116),u=r(51),h=r(182),b=r(196),j=r(194),d=r(185),m=r(199),p=r(151),g=r(161),O=Object(c.a)((function(e){return{paper:{boxShadow:"none",border:"1px solid #e0e0e0",padding:"10px 40px",marginTop:"30px",marginBottom:"30px",transition:"box-shadow 200ms cubic-bezier(0, 0, 0.1, 0.46)","&:hover":{boxShadow:"0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)"}},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},inputs:{minWidth:"100%"},gridItem:{textAlign:"center"},btn_container:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"100%"},btns:{minWidth:100,marginBottom:"8px"}}}));function x(e){var t=e.getDataFromAlgo,r=O(),n=s.a.useState(""),c=Object(a.a)(n,2),x=c[0],f=c[1],v=s.a.useState({entries:"",error:!1}),N=Object(a.a)(v,2),y=N[0],S=N[1],P=s.a.useState({entries:"",error:!1}),I=Object(a.a)(P,2),_=I[0],w=I[1],A=s.a.useState({entries:"",error:!1}),k=Object(a.a)(A,2),C=k[0],M=k[1],L=s.a.useState(""),E=Object(a.a)(L,2),D=E[0],z=E[1],B=function(e){switch(console.log(e.target.value),e.target.id){case"Arrival times":w({entries:e.target.value,error:!1});break;case"Burst times":S({entries:e.target.value,error:!1});break;case"Priorities":M({entries:e.target.value,error:!1});break;default:console.log("processScheduling/form/handleChengeFiels")}},F=function(){f(""),z(""),S({entries:"",error:!1}),w({entries:"",error:!1}),M({entries:"",error:!1})};return Object(i.jsx)(l.a,{className:r.paper,children:Object(i.jsxs)(o.a,{container:!0,justify:"center",children:[Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsx)(u.a,{variant:"h5",children:"Process Scheduling"})}),Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsxs)("form",{className:r.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t(x,_.entries,y.entries,C.entries,D),F(),console.log("Submited successfully")},children:[Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsxs)(h.a,{className:r.inputs,style:{margin:"8px"},children:[Object(i.jsx)(b.a,{id:"demo-simple-select-label",children:"Algorithm"}),Object(i.jsx)(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:x,onChange:function(e){f(e.target.value),console.log(e.target.value)},size:"small",children:["First come first served","Shortest Job First","Shortest remaining time first","Priority","Priority (preemptive)","Round robin"].map((function(e){return Object(i.jsx)(d.a,{value:e,children:e},e)}))})]})}),Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsx)(m.a,{className:r.inputs,id:"Arrival times",label:"Arrival times",multiline:!0,rowsMax:4,value:_.entries,error:_.error,onChange:B,size:"small"})}),Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsx)(m.a,{className:r.inputs,id:"Burst times",label:"Burst times",multiline:!0,rowsMax:4,value:y.entries,error:_.error,onChange:B,size:"small"})}),"Priority"===x||"Priority (preemptive)"===x?Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsx)(g.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:Object(i.jsx)(m.a,{className:r.inputs,id:"Priorities",label:"Priorities",multiline:!0,rowsMax:4,value:C.entries,error:_.error,onChange:B,size:"small"})})}):"","Ronud robin"===x?Object(i.jsx)(o.a,{item:!0,xs:12,className:r.gridItem,children:Object(i.jsx)(g.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:Object(i.jsx)(m.a,{className:r.inputs,id:"Time Quanta",label:"Time Quanta",type:"number",onChange:function(e){z(Number(e.target.value)),console.log(e.target.value)},value:D,size:"small",InputLabelProps:{shrink:!0}})})}):"",Object(i.jsx)("br",{}),Object(i.jsxs)(o.a,{item:!0,xs:12,className:r.btn_container,style:{paddingLeft:"9px"},children:[Object(i.jsx)(p.a,{onClick:F,className:r.btns,variant:"outlined",color:"secondary",size:"small",children:"Clear"}),Object(i.jsx)(p.a,{type:"submit",disabled:!x||!_.entries||!y.entries||_.error||y.error||C.error||("Ronud robin"===x?!D:("Priority"===x||"Priority (preemptive)"===x)&&!C.entries),className:r.btns,color:"primary",variant:"outlined",size:"small",children:"Submit"})]})]})})]})})}var f=r(87),v=r(188),N=r(189),y=r(190),S=r(191),P=r(192),I=r(147),_=r(186),w=r(187),A=Object(c.a)((function(e){return{paper:{padding:e.spacing(3),boxShadow:"none"},section:{margin:e.spacing(2)},gridItem:{marginBottom:e.spacing(2),textAlign:"center"}}})),k=Object(f.a)({overrides:{MuiTableCell:{root:{border:"1px dotted #e0e0e0"}}}});function C(e){var t=e.algoData,r=A(),n=["Process","Arrival","Burst","Priority","Started","Completed","Turnaround","Waiting"];return Object(i.jsxs)(l.a,{className:r.paper,children:[console.log(t),Object(i.jsx)("div",{className:r.gridItem,children:Object(i.jsx)(u.a,{variant:"h4",children:" Process Scheduling Output "})}),Object(i.jsxs)("div",{className:r.section,children:[Object(i.jsx)(g.a.div,{initial:{y:-5},animate:{y:0},transition:{duration:.6},children:Object(i.jsx)(u.a,{variant:"h5",children:" Input Summary "})}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a,{}),Object(i.jsxs)("div",{className:r.section,children:[1===t.error_message?Object(i.jsx)(u.a,{variant:"h5",style:{color:"tomato"},children:"Incorrect input check enter data and try again"}):"",""!==t.algorithm?Object(i.jsxs)(g.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[Object(i.jsxs)(u.a,{variant:"subtitle1",children:["Algorithm :: ",Object(i.jsx)("i",{children:t.algorithm})]}),Object(i.jsxs)(u.a,{variant:"subtitle1",children:["Arrival times :: ",Object(i.jsx)("i",{children:t.arrival_time})]}),Object(i.jsxs)(u.a,{variant:"subtitle1",children:["Burst times :: ",Object(i.jsx)("i",{children:t.burst_time})]}),t.priority?Object(i.jsxs)(u.a,{variant:"subtitle1",children:["Priority :: ",Object(i.jsx)("i",{children:t.priority})]}):"",t.quanta?Object(i.jsxs)(u.a,{variant:"subtitle1",children:["quanta :: ",Object(i.jsx)("i",{children:t.quanta})]}):""]}):""]})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:r.section,children:[Object(i.jsx)(g.a.div,{initial:{y:-10},animate:{y:0},transition:{duration:.6},children:Object(i.jsx)(u.a,{variant:"h5",children:" Solution visualization "})}),Object(i.jsx)("br",{})," ",Object(i.jsx)(I.a,{})," ",Object(i.jsx)("br",{}),""!==t.algorithm?Object(i.jsx)(g.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:Object(i.jsx)(_.a,{children:Object(i.jsx)(w.a,{theme:k,children:t.total_processes>=1?Object(i.jsxs)(v.a,{className:r.table,"aria-label":"a dense table",children:[Object(i.jsx)(N.a,{style:{backgroundColor:"#bbdefb"},children:Object(i.jsx)(y.a,{children:n.map((function(e,t){return Object(i.jsx)(S.a,{align:"center",style:{fontWeight:"bold",minWidth:"75px"},children:e},t)}))})}),Object(i.jsxs)(P.a,{children:[t.table_data.map((function(e,t){return Object(i.jsxs)(y.a,{hover:!0,children:[Object(i.jsx)(S.a,{component:"th",scope:"row",align:"center",children:String.fromCharCode(65+t)}),e.map((function(e,t){return Object(i.jsx)(S.a,{component:"th",scope:"row",align:"center",children:e},e+""+t)}))]},t)})),Object(i.jsxs)(y.a,{children:[Object(i.jsx)(S.a,{component:"th",scope:"row",align:"center",style:{fontWeight:"bold"},children:"Average"}),t.avg.map((function(e,t){return Object(i.jsx)(S.a,{component:"th",scope:"row",align:"center",children:-1===e?"-":Object(i.jsx)("b",{children:e})},t)}))]})]})]}):"Your solution will display here"})})}):"",Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:r.section,children:[Object(i.jsx)(g.a.div,{initial:{y:-15},animate:{y:0},transition:{duration:.6},children:Object(i.jsx)(u.a,{variant:"h5",children:" Details "})}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a,{}),""!==t.algorithm?Object(i.jsx)("div",{className:r.section,children:t.gruntData.map((function(e,t){var r=Object(a.a)(e,3),n=r[0],s=r[1],c=r[2];return-1!==n?Object(i.jsxs)(u.a,{variant:"subtitle1",children:["Process ",Object(i.jsx)("b",{children:String.fromCharCode(65+n)})," runs from ",Object(i.jsx)("b",{children:s})," to ",Object(i.jsx)("b",{children:c})]},t):Object(i.jsxs)(u.a,{variant:"subtitle1",children:[Object(i.jsx)("b",{children:"No Process"})," runs from ",Object(i.jsx)("b",{children:s})," to ",Object(i.jsx)("b",{children:c})]},t)}))}):""]})]})}var M=r(155);var L=function(e,t){for(var r=function(e,t){for(var r=[],i=[],n=[],s=[],c=0,o=e.length,l=0;l<o;l++)s.push([e[l],t[l]]);s.sort();for(var u=0;u<o;u++)s[u]=[].concat(Object(M.a)(s[u]),[u]);return s.forEach((function(e){var t=Object(a.a)(e,3),s=t[0],o=t[1],l=t[2];s>c&&(n.push([-1,c,s]),c=s),r.push(c),c+=o,i.push(c),n.push([l,c-o,c])})),[r,i,n,s]}(e,t),i=Object(a.a)(r,4),n=i[0],s=i[1],c=i[2],o=i[3],l=[-1,-1,-1,-1,-1,0,0],u=[],h=[],b=[],j=e.length,d=0;d<j;d++)h.push(s[d]-o[d][0]),l[5]+=h[h.length-1],b.push(h[h.length-1]-o[d][1]),l[6]+=b[b.length-1],u.push([o[d][0],o[d][1],"-",n[d],s[d],h[d],b[d]]);return l[5]/=j,l[5]=Math.round(100*(l[5]+Number.EPSILON))/100,l[6]/=j,l[6]=Math.round(100*(l[6]+Number.EPSILON))/100,[u,l,c]},E=function(e,t){for(var r=function(e,t){for(var r=e.length,a=[],i=Array(r).fill(-1),n=[],s=[],c=0,o=0,l=0;l<r;l++)s.push([e[l],t[l]]);s.sort((function(e,t){return e[0]<t[0]||e[0]===t[0]&&e[1]<=t[1]?-1:1}));for(var u=0;u<r;u++)s[u]=[].concat(Object(M.a)(s[u]),[u]);var h=s[0][0];for(0!==h&&n.push([-1,0,h]);o!==r;){for(;c<r-1&&s[c+1][0]<=h;)c++;for(var b=-1,j=0;j<=c;j++)if(-1===i[j]){b=j;break}if(-1!==b){for(var d=b;d<=c;d++)s[d][1]<s[b][1]&&-1===i[d]&&(b=d);a[b]=h,h+=s[b][1],i[b]=h,n.push([b,h-s[b][1],h]),o++}else n.push([b,h,s[c+1][0]]),h=s[c+1][0]}return[a,i,n,s]}(e,t),i=Object(a.a)(r,4),n=i[0],s=i[1],c=i[2],o=i[3],l=[-1,-1,-1,-1,-1,0,0],u=[],h=[],b=[],j=e.length,d=0;d<j;d++)h.push(s[d]-o[d][0]),l[5]+=h[h.length-1],b.push(h[h.length-1]-o[d][1]),l[6]+=b[b.length-1],u.push([o[d][0],o[d][1],"-",n[d],s[d],h[d],b[d]]);return l[5]/=j,l[5]=Math.round(100*(l[5]+Number.EPSILON))/100,l[6]/=j,l[6]=Math.round(100*(l[6]+Number.EPSILON))/100,[u,l,c]},D=function(e,t){for(var r=function(e,t){for(var r=e.length,a=Array(r).fill(-1),i=Array(r).fill(-1),n=[],s=[],c=0,o=0,l=-1,u=0;u<r;u++)s.push([e[u],t[u]]);s.sort((function(e,t){return e[0]<t[0]||e[0]===t[0]&&e[1]<=t[1]?-1:1}));for(var h=0;h<r;h++)s[h]=[].concat(Object(M.a)(s[h]),[h]);var b=s[0][0];for(0!==b&&n.push([-1,0,b]);o!==r;){for(;c<r-1&&s[c+1][0]<=b;)c++;for(var j=-1,d=0;d<=c;d++)if(-1===i[d]){j=d;break}if(-1!==j){for(var m=j;m<=c;m++)(s[m][1]<s[j][1]&&-1===i[m]||s[m][1]===s[j][1]&&m===l)&&(j=m);-1===a[j]&&(a[j]=b),s[j][1]--,b++,0===s[j][1]&&(i[j]=b,o++),l!==j?n.push([j,b-1,b]):n[n.length-1][2]=b,l=j}else n.push([j,b,s[c+1][0]]),b=s[c+1][0]}return[a,i,n,s]}(e,t),i=Object(a.a)(r,4),n=i[0],s=i[1],c=i[2],o=i[3],l=[-1,-1,-1,-1,-1,0,0],u=[],h=[],b=[],j=e.length,d=0;d<j;d++)h.push(s[d]-o[d][0]),l[5]+=h[h.length-1],b.push(h[h.length-1]-o[d][1]),l[6]+=b[b.length-1],u.push([o[d][0],o[d][1],"-",n[d],s[d],h[d],b[d]]);return l[5]/=j,l[5]=Math.round(100*(l[5]+Number.EPSILON))/100,l[6]/=j,l[6]=Math.round(100*(l[6]+Number.EPSILON))/100,[u,l,c]},z=function(e,t,r){for(var i=function(e,t,r){for(var a=e.length,i=[],n=Array(a).fill(-1),s=[],c=[],o=0,l=0,u=0;u<a;u++)c.push([e[u],r[u],t[u]]);c.sort((function(e,t){return e[0]<t[0]||e[0]===t[0]&&e[1]>=t[1]||e[0]===t[0]&&e[1]===t[1]&&e[2]<=t[2]?-1:1}));for(var h=0;h<a;h++)c[h]=[].concat(Object(M.a)(c[h]),[h]);console.log(c);var b=c[0][0];for(0!==b&&s.push([-1,0,b]);l!==a;){for(;o<a-1&&c[o+1][0]<=b;)o++;console.log(o);for(var j=-1,d=0;d<=o;d++)if(-1===n[d]){j=d;break}if(-1!==j){for(var m=j;m<=o;m++)c[m][1]>c[j][1]&&-1===n[m]&&(j=m);i[j]=b,b+=c[j][2],n[j]=b,s.push([j,b-c[j][2],b]),l++}else s.push([j,b,c[o+1][0]]),b=c[o+1][0]}return[i,n,s,c]}(e,t,r),n=Object(a.a)(i,4),s=n[0],c=n[1],o=n[2],l=n[3],u=[-1,-1,-1,-1,-1,0,0],h=[],b=[],j=[],d=e.length,m=0;m<d;m++)b.push(c[m]-l[m][0]),u[5]+=b[b.length-1],j.push(b[b.length-1]-l[m][2]),u[6]+=j[j.length-1],h.push([l[m][0],l[m][2],l[m][1],s[m],c[m],b[m],j[m]]);return u[5]/=d,u[5]=Math.round(100*(u[5]+Number.EPSILON))/100,u[6]/=d,u[6]=Math.round(100*(u[6]+Number.EPSILON))/100,[h,u,o]},B=function(e,t,r){for(var i=function(e,t,r){for(var a=e.length,i=Array(a).fill(-1),n=Array(a).fill(-1),s=[],c=[],o=0,l=0,u=-1,h=0;h<a;h++)c.push([e[h],r[h],t[h]]);c.sort((function(e,t){return e[0]<t[0]||e[0]===t[0]&&e[1]>=t[1]||e[0]===t[0]&&e[1]===t[1]&&e[2]<=t[2]?-1:1}));for(var b=0;b<a;b++)c[b]=[].concat(Object(M.a)(c[b]),[b]);console.log(c);var j=c[0][0];for(0!==j&&s.push([-1,0,j]);l!==a;){for(;o<a-1&&c[o+1][0]<=j;)o++;for(var d=-1,m=0;m<=o;m++)if(-1===n[m]){d=m;break}if(-1!==d){for(var p=d;p<=o;p++)(c[p][1]>c[d][1]&&-1===n[p]||c[p][1]===c[d][1]&&p===u)&&(d=p);-1===i[d]&&(i[d]=j),c[d][2]--,j++,0===c[d][2]&&(n[d]=j,l++),u!==d?s.push([d,j-1,j]):s[s.length-1][2]=j,u=d}else s.push([d,j,c[o+1][0]]),j=c[o+1][0]}return[i,n,s,c]}(e,t,r),n=Object(a.a)(i,4),s=n[0],c=n[1],o=n[2],l=n[3],u=[-1,-1,-1,-1,-1,0,0],h=[],b=[],j=[],d=e.length,m=0;m<d;m++)b.push(c[m]-l[m][0]),u[5]+=b[b.length-1],j.push(b[b.length-1]-l[m][2]),u[6]+=j[j.length-1],h.push([l[m][0],l[m][2],l[m][1],s[m],c[m],b[m],j[m]]);return u[5]/=d,u[5]=Math.round(100*(u[5]+Number.EPSILON))/100,u[6]/=d,u[6]=Math.round(100*(u[6]+Number.EPSILON))/100,[h,u,o]},F=function(e,t,r){for(var i=function(e,t,r){for(var i=e.length,n=Array(i),s=Array(i),c=[],o=[],l=0;l<i;l++)o.push([e[l],t[l]]);o.sort();for(var u=0;u<i;u++)o[u]=[].concat(Object(M.a)(o[u]),[u]);var h=[o[0]],b=o[0][0],j=-1,d=0,m=1;for(0!==b&&c.push([-1,0,b]);d!==i;){var p=h.shift(),g=Object(a.a)(p,3),O=g[0],x=g[1],f=g[2];if(n[f]||(n[f]=b),x<=r){for(b+=x,j===f?c[c.length-1][2]=b:c.push([f,b-x,b]),j=f,s[f]=b,d++;m<i&&o[m][0]<=b;)h.push(o[m++]);m<i&&0===h.length&&(c.push([-1,b,o[m][0]]),h.push(o[m]),b=o[m++][0])}else{for(b+=r,j===f?c[c.length-1][2]=b:c.push([f,b-r,b]),j=f;m<i&&o[m][0]<=b;)h.push(o[m++]);h.push([O,x-r,f])}}return[n,s,c,o]}(e,t,r),n=Object(a.a)(i,4),s=n[0],c=n[1],o=n[2],l=n[3],u=[-1,-1,-1,-1,-1,0,0],h=[],b=[],j=[],d=e.length,m=0;m<d;m++)b.push(c[m]-l[m][0]),u[5]+=b[b.length-1],j.push(b[b.length-1]-l[m][1]),u[6]+=j[j.length-1],h.push([l[m][0],l[m][1],"-",s[m],c[m],b[m],j[m]]);return u[5]/=d,u[5]=Math.round(100*(u[5]+Number.EPSILON))/100,u[6]/=d,u[6]=Math.round(100*(u[6]+Number.EPSILON))/100,[h,u,o]},W=Object(c.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(2),minHeight:"80vh"}}}));function q(){var e=W(),t=Object(n.useState)({algorithm:"",arrival_time:[],burst_time:[],priority:[],quanta:"",total_processes:"",table_data:[],avg:[],gruntData:[],error_message:0}),r=Object(a.a)(t,2),s=r[0],c=r[1];return Object(i.jsx)("div",{className:e.root,children:Object(i.jsxs)(o.a,{container:!0,spacing:1,children:[Object(i.jsx)(o.a,{item:!0,xs:12,md:3,children:Object(i.jsx)(x,{getDataFromAlgo:function(e,t,r,i,n){var s,o,l,u=function(e,t,r){return[e=e.split(",").map((function(e){return+e})),t=t.split(",").map((function(e){return+e})),r=r.split(",").map((function(e){return+e}))]}(t,r,i),h=Object(a.a)(u,3),b=h[0],j=h[1],d=h[2];if(function(e,t,r){var a=e.length,i=t.length,n=r.length?a:r.length;if(a!==i||a!==n||i!==n)return!1;for(var s=0;s<a;s++)return!!(Number.isInteger(e[s])&&Number.isInteger(t[s])&&Number.isInteger(r[s]))}(b,j,d)){switch(e){case"First come first served":var m=L(b,j),p=Object(a.a)(m,3);s=p[0],o=p[1],l=p[2];break;case"Shortest Job First":var g=E(b,j),O=Object(a.a)(g,3);s=O[0],o=O[1],l=O[2];break;case"Shortest remaining time first":var x=D(b,j),f=Object(a.a)(x,3);s=f[0],o=f[1],l=f[2];break;case"Priority":var v=z(b,j,d),N=Object(a.a)(v,3);s=N[0],o=N[1],l=N[2];break;case"Priority (preemptive)":var y=B(b,j,d),S=Object(a.a)(y,3);s=S[0],o=S[1],l=S[2];break;case"Ronud robin":var P=F(b,j,n),I=Object(a.a)(P,3);s=I[0],o=I[1],l=I[2];break;default:console.log("processScheduling/Page.js/algoInput-Incorrect")}c({algorithm:e,arrival_time:t,burst_time:r,priority:i,quanta:n,total_processes:t.length,table_data:s,avg:o,gruntData:l,error_message:0})}else c({algorithm:"",arrival_time:[],burst_time:[],priority:[],quanta:"",total_processes:"",table_data:[],avg:[],gruntData:[],error_message:1})}})}),Object(i.jsx)(o.a,{item:!0,xs:12,md:9,children:Object(i.jsx)(C,{algoData:s})})]})})}}}]);
//# sourceMappingURL=5.34b375a5.chunk.js.map