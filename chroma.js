/**
 chroma.js - a neat JS lib for color conversions
 Copyright (C) 2011  Gregor Aisch

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 3 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 As additional permission under GNU GPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 @source: https://github.com/gka/chroma.js

 **/
/**
 ColorBrewer colors for chroma.js:

 Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 and The Pennsylvania State University.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 either express or implied. See the License for the specific
 language governing permissions and limitations under the License.


 Named colors are taken from X11 Color Names.
 http://www.w3.org/TR/css3-color/#svg-color
 **/// Generated by CoffeeScript 1.3.2
/**
 chroma.js - a neat JS lib for color conversions
 Copyright (C) 2011  Gregor Aisch

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 3 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 As additional permission under GNU GPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 @source: https://github.com/gka/chroma.js
 */(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q={}.hasOwnProperty,r=function(a,b){function d(){this.constructor=a}for(var c in b)q.call(b,c)&&(a[c]=b[c]);d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype;return a};j=typeof exports!="undefined"&&exports!==null?exports:this,h=(l=j.chroma)!=null?l:j.chroma={},typeof module!="undefined"&&module!==null&&(module.exports=h),h.version="0.3.1",c=function(){function a(b,c,d,e){var f,g;f=this,b==null&&c==null&&d==null&&e==null&&(b=[255,0,255]),k(b)==="array"&&b.length===3&&(e==null&&(e=c),g=b,b=g[0],c=g[1],d=g[2]),k(b)==="string"?e="hex":e==null&&(e="rgb"),e==="rgb"?f.rgb=[b,c,d]:e==="hsl"?f.rgb=a.hsl2rgb(b,c,d):e==="hsv"?f.rgb=a.hsv2rgb(b,c,d):e==="hex"?f.rgb=a.hex2rgb(b):e==="lab"?f.rgb=a.lab2rgb(b,c,d):e==="hcl"?f.rgb=a.hcl2rgb(b,c,d):e==="hsi"&&(f.rgb=a.hsi2rgb(b,c,d))}a.prototype.hex=function(){return a.rgb2hex(this.rgb)},a.prototype.toString=function(){return this.hex()},a.prototype.hsl=function(){return a.rgb2hsl(this.rgb)},a.prototype.hsv=function(){return a.rgb2hsv(this.rgb)},a.prototype.lab=function(){return a.rgb2lab(this.rgb)},a.prototype.hcl=function(){return a.rgb2hcl(this.rgb)},a.prototype.hsi=function(){return a.rgb2hsi(this.rgb)},a.prototype.interpolate=function(b,c,d){var e,f,g,h,i,j,l,m,n,o,p,q,r;m=this,d==null&&(d="rgb"),k(c)==="string"&&(c=new a(c));if(d==="hsl"||d==="hsv"||d==="hcl"||d==="hsi"){d==="hsl"?(q=m.hsl(),r=c.hsl()):d==="hsv"?(q=m.hsv(),r=c.hsv()):d==="hcl"?(q=m.hcl(),r=c.hcl()):d==="hsi"&&(q=m.hsi(),r=c.hsi()),g=q[0],o=q[1],j=q[2],h=r[0],p=r[1],l=r[2];if(!isNaN(g)&&!isNaN(h))h>g&&h-g>180?e=h-(g+360):h<g&&g-h>180?e=h+360-g:e=h-g,f=g+b*e;else if(!isNaN(g)){f=g;if(l===1||l===0)n=o}else if(!isNaN(h)){f=h;if(j===1||j===0)n=p}else f=void 0;n==null&&(n=o+b*(p-o)),i=j+b*(l-j);return new a(f,n,i,d)}if(d==="rgb"){q=m.rgb,r=c.rgb;return new a(q[0]+b*(r[0]-q[0]),q[1]+b*(r[1]-q[1]),q[2]+b*(r[2]-q[2]),d)}if(d==="lab"){q=m.lab(),r=c.lab();return new a(q[0]+b*(r[0]-q[0]),q[1]+b*(r[1]-q[1]),q[2]+b*(r[2]-q[2]),d)}throw"color mode "+d+" is not supported"};return a}(),c.hex2rgb=function(a){var b,c,d,e;if(!a.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))if(h.colors!=null&&h.colors[a])a=h.colors[a];else throw"unknown color format: "+a;if(a.length===4||a.length===7)a=a.substr(1);a.length===3&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),e=parseInt(a,16),d=e>>16,c=e>>8&255,b=e&255;return[d,c,b]},c.rgb2hex=function(a,b,c){var d,e,f;a!==void 0&&a.length===3&&(f=a,a=f[0],b=f[1],c=f[2]),e=a<<16|b<<8|c,d="000000"+e.toString(16).toUpperCase();return"#"+d.substr(d.length-6)},c.hsv2rgb=function(a,b,c){var d,e,f,g,h,i,j,l,m,n,o,p,q,r,s,t;k(a)==="array"&&a.length===3&&(n=a,a=n[0],b=n[1],h=n[2]),c*=255;if(b===0&&isNaN(a))l=f=d=c;else{a===360&&(a=0),a>360&&(a-=360),a<0&&(a+=360),a/=60,g=Math.floor(a),e=a-g,i=c*(1-b),j=c*(1-b*e),m=c*(1-b*(1-e));switch(g){case 0:o=[c,m,i],l=o[0],f=o[1],d=o[2];break;case 1:p=[j,c,i],l=p[0],f=p[1],d=p[2];break;case 2:q=[i,c,m],l=q[0],f=q[1],d=q[2];break;case 3:r=[i,j,c],l=r[0],f=r[1],d=r[2];break;case 4:s=[m,i,c],l=s[0],f=s[1],d=s[2];break;case 5:t=[c,i,j],l=t[0],f=t[1],d=t[2]}}l=Math.round(l),f=Math.round(f),d=Math.round(d);return[l,f,d]},c.rgb2hsv=function(a,b,c){var d,e,f,g,h,i,j;a!==void 0&&a.length===3&&(j=a,a=j[0],b=j[1],c=j[2]),g=Math.min(a,b,c),f=Math.max(a,b,c),d=f-g,i=f/255,h=d/f,h===0?(e=void 0,h=0):(a===f&&(e=(b-c)/d),b===f&&(e=2+(c-a)/d),c===f&&(e=4+(a-b)/d),e*=60,e<0&&(e+=360));return[e,h,i]},c.hsl2rgb=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;a!==void 0&&a.length===3&&(m=a,a=m[0],b=m[1],c=m[2]);if(b===0)h=f=d=c*255;else{k=[0,0,0],e=[0,0,0],j=c<.5?c*(1+b):c+b-c*b,i=2*c-j,a/=360,k[0]=a+1/3,k[1]=a,k[2]=a-1/3;for(g=l=0;l<=2;g=++l)k[g]<0&&(k[g]+=1),k[g]>1&&(k[g]-=1),6*k[g]<1?e[g]=i+(j-i)*6*k[g]:2*k[g]<1?e[g]=j:3*k[g]<2?e[g]=i+(j-i)*(2/3-k[g])*6:e[g]=i;n=[Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)],h=n[0],f=n[1],d=n[2]}return[h,f,d]},c.rgb2hsl=function(a,b,c){var d,e,f,g,h,i;a!==void 0&&a.length===3&&(i=a,a=i[0],b=i[1],c=i[2]),a/=255,b/=255,c/=255,g=Math.min(a,b,c),f=Math.max(a,b,c),e=(f+g)/2,f===g?(h=0,d=void 0):h=e<.5?(f-g)/(f+g):(f-g)/(2-f-g),a===f?d=(b-c)/(f-g):b===f?d=2+(c-a)/(f-g):c===f&&(d=4+(a-b)/(f-g)),d*=60,d<0&&(d+=360);return[d,h,e]},c.lab2xyz=function(a,b,c){var d,e,f,g,h,i,j;k(a)==="array"&&a.length===3&&(j=a,a=j[0],b=j[1],c=j[2]),d=function(a){return a>6/29?a*a*a:3*(6/29)*(6/29)*(a-4/29)},f=(a+.16)/1.16,e=[.96421,1,.82519],h=e[1]*d(f),g=e[0]*d(f+b/5),i=e[2]*d(f-c/2);return[g,h,i]},c.xyz2rgb=function(a,b,c){var d,e,f,g,h,i,j,l,m,n;k(a)==="array"&&a.length===3&&(m=a,a=m[0],b=m[1],c=m[2]),l=3.2406*a-1.5372*b-.4986*c,i=-0.9689*a+1.8758*b+.0415*c,e=.0557*a-.204*b+1.057*c,f=Math.min(l,i,e)<-0.001||Math.max(l,i,e)>1.001,f&&(l=l<0?0:l>1?1:l,i=i<0?0:i>1?1:i,e=e<0?0:e>1?1:e),f&&(n=[void 0,void 0,void 0],l=n[0],i=n[1],e=n[2]),g=function(a){var b;b=.055;return a<=.0031308?12.92*a:(1+b)*Math.pow(a,1/2.4)-b},j=Math.round(255*g(l)),h=Math.round(255*g(i)),d=Math.round(255*g(e));return[j,h,d]},c.lab2rgb=function(a,b,d){var e,f,g,h,i,j;a!==void 0&&a.length===3&&(h=a,a=h[0],b=h[1],d=h[2]),a!==void 0&&a.length===3&&(i=a,a=i[0],b=i[1],d=i[2]),j=c.lab2xyz(a,b,d),e=j[0],f=j[1],g=j[2];return c.xyz2rgb(e,f,g)},c.hcl2lab=function(a,b,c){var d,e,f,g,h,i,j;k(a)==="array"&&a.length===3&&(j=a,a=j[0],b=j[1],c=j[2]),a/=360,e=6.283185307179586,d=c*.61+.09,g=e/6-a*e,i=(c*.311+.125)*b,f=Math.sin(g)*i,h=Math.cos(g)*i;return[d,f,h]},c.hcl2rgb=function(a,b,d){var e,f,g,h;h=c.hcl2lab(a,b,d),e=h[0],f=h[1],g=h[2];return c.lab2rgb(e,f,g)},c.rgb2xyz=function(a,b,c){var d,e,f,g,h,i,j,k;a!==void 0&&a.length===3&&(k=a,a=k[0],b=k[1],c=k[2]),e=function(a){var b;b=.055;return a<=.04045?a/12.92:Math.pow((a+b)/(1+b),2.4)},g=e(a/255),f=e(b/255),d=e(c/255),h=.4124*g+.3576*f+.1805*d,i=.2126*g+.7152*f+.0722*d,j=.0193*g+.1192*f+.9505*d;return[h,i,j]},c.xyz2lab=function(a,b,c){var d,e,f,g,h,i;a!==void 0&&a.length===3&&(i=a,a=i[0],b=i[1],c=i[2]),g=[.96421,1,.82519],f=function(a){return a>Math.pow(6/29,3)?Math.pow(a,1/3):7.787037037037035*a+4/29},h=1.16*f(b/g[1])-.16,d=5*(f(a/g[0])-f(b/g[1])),e=2*(f(b/g[1])-f(c/g[2]));return[h,d,e]},c.rgb2lab=function(a,b,d){var e,f,g,h,i;a!==void 0&&a.length===3&&(h=a,a=h[0],b=h[1],d=h[2]),i=c.rgb2xyz(a,b,d),e=i[0],f=i[1],g=i[2];return c.xyz2lab(e,f,g)},c.lab2hcl=function(a,b,c){var d,e,f,g,h,i,j;k(a)==="array"&&a.length===3&&(j=a,a=j[0],b=j[1],c=j[2]),d=a,a=(a-.09)/.61,h=Math.sqrt(b*b+c*c),i=h/(a*.311+.125),e=6.283185307179586,f=Math.atan2(b,c),g=(e/6-f)/e,g*=360,g<0&&(g+=360);return[g,i,a]},c.rgb2hcl=function(a,b,d){var e,f,g,h;k(a)==="array"&&a.length===3&&(g=a,a=g[0],b=g[1],d=g[2]),h=c.rgb2lab(a,b,d),f=h[0],e=h[1],d=h[2];return c.lab2hcl(f,e,d)},c.rgb2hsi=function(a,b,c){var d,e,f,g,h,i;k(a)==="array"&&a.length===3&&(i=a,a=i[0],b=i[1],c=i[2]),d=Math.PI*2,a/=255,b/=255,c/=255,g=Math.min(a,b,c),f=(a+b+c)/3,h=1-g/f,h===0?e=0:(e=(a-b+(a-c))/2,e/=Math.sqrt((a-b)*(a-b)+(a-c)*(b-c)),e=Math.acos(e),c>b&&(e=d-e),e/=d);return[e*360,h,f]},c.hsi2rgb=function(a,b,c){var d,e,f,g,h,i,j;k(a)==="array"&&a.length===3&&(j=a,a=j[0],b=j[1],c=j[2]),e=Math.PI*2,d=Math.PI/3,g=Math.cos,a<0&&(a+=360),a>360&&(a-=360),a/=360,a<1/3?(f=(1-b)/3,i=(1+b*g(e*a)/g(d-e*a))/3,h=1-(f+i)):a<2/3?(a-=1/3,i=(1-b)/3,h=(1+b*g(e*a)/g(d-e*a))/3,f=1-(i+h)):(a-=2/3,h=(1-b)/3,f=(1+b*g(e*a)/g(d-e*a))/3,i=1-(h+f)),i=c*i*3,h=c*h*3,f=c*f*3;return[i*255,h*255,f*255]},h.Color=c,h.hsl=function(a,b,d){return new c(a,b,d,"hsl")},h.hsv=function(a,b,d){return new c(a,b,d,"hsv")},h.rgb=function(a,b,d){return new c(a,b,d,"rgb")},h.hex=function(a){return new c(a)},h.lab=function(a,b,d){return new c(a,b,d,"lab")},h.hcl=function(a,b,d){return new c(a,b,d,"hcl")},h.hsi=function(a,b,d){return new c(a,b,d,"hsi")},h.interpolate=function(a,b,d,e){if(a==null||b==null)return"#000";k(a)==="string"&&(a=new c(a)),k(b)==="string"&&(b=new c(b));return a.interpolate(d,b,e)},d=function(){function a(a){var b,d,e,f,g,h,i,j,l,m,n,o;f=this,f.colors=e=(i=a.colors)!=null?i:["#ddd","#222"];for(b=g=0,j=e.length-1;0<=j?g<=j:g>=j;b=0<=j?++g:--g)d=e[b],k(d)==="string"&&(e[b]=new c(d));if(a.positions!=null)f.pos=a.positions;else{f.pos=[];for(b=h=0,l=e.length-1;0<=l?h<=l:h>=l;b=0<=l?++h:--h)f.pos.push(b/(e.length-1))}f.mode=(m=a.mode)!=null?m:"hsv",f.nacol=(n=a.nacol)!=null?n:"#ccc",f.setClasses((o=a.limits)!=null?o:[0,1]),f}a.prototype.getColor=function(a){var b,c,d,e;e=this;if(isNaN(a))return e.nacol;e.classLimits.length>2?(b=e.getClass(a),c=b/(e.numClasses-1)):(c=d=(a-e.min)/(e.max-e.min),c=Math.min(1,Math.max(0,c)));return e.fColor(c)},a.prototype.fColor=function(a){var b,c,d,e,f,g,i;e=this,c=e.colors;for(d=g=0,i=e.pos.length-1;0<=i?g<=i:g>=i;d=0<=i?++g:--g){f=e.pos[d];if(a<=f){b=c[d];break}if(a>=f&&d===e.pos.length-1){b=c[d];break}if(a>f&&a<e.pos[d+1]){a=(a-f)/(e.pos[d+1]-f),b=h.interpolate(c[d],c[d+1],a,e.mode);break}}return b},a.prototype.classifyValue=function(a){var b,c,d,e,f,g;g=this,c=g.classLimits,c.length>2&&(f=c.length-1,b=g.getClass(a),a=c[b]+(c[b+1]-c[b])*.5,e=c[0],d=c[f-1],a=g.min+(a-e)/(d-e)*(g.max-g.min));return a},a.prototype.setClasses=function(a){var b;a==null&&(a=[]),b=this,b.classLimits=b.limits=a,b.min=a[0],b.max=a[a.length-1];return a.length===2?b.numClasses=0:b.numClasses=a.length-1},a.prototype.getClass=function(a){var b,c,d,e;e=this,c=e.classLimits;if(c!=null){d=c.length-1,b=0;while(b<d&&a>=c[b])b++;return b-1}return void 0},a.prototype.validValue=function(a){return!isNaN(a)};return a}(),h.ColorScale=d,f=function(a){function b(a,c,d){a==null&&(a="#fe0000"),c==null&&(c="#feeeee"),d==null&&(d="hsl"),b.__super__.constructor.call(this,[a,c],[0,1],d)}r(b,a);return b}(d),h.Ramp=f,e=function(a){function b(a,c,d,e,f){var g;a==null&&(a="#d73027"),c==null&&(c="#ffffbf"),d==null&&(d="#1E6189"),e==null&&(e="mean"),f==null&&(f="hsl"),g=this,g.mode=f,g.center=e,b.__super__.constructor.call(this,[a,c,d],[0,.5,1],f)}r(b,a),b.prototype.parseData=function(a,c){var d,e;b.__super__.parseData.call(this,a,c),e=this,d=e.center,d==="median"?d=e.median:d==="mean"&&(d=e.mean);return e.pos[1]=(d-e.min)/(e.max-e.min)};return b}(d),h.Diverging=e,b=function(a){function b(a){var b;b=this,b.colors=a}r(b,a),b.prototype.parseData=function(a,b){},b.prototype.getColor=function(a){var b;b=this;return b.colors.hasOwnProperty(a)?b.colors[a]:"#cccccc"},b.prototype.validValue=function(a){return this.colors.hasOwnProperty(a)};return b}(d),h.Categories=b,a=function(a){function b(a){var b;b=this,b.name=a,b.setClasses(7),b}r(b,a),b.prototype.getColor=function(a){var b,c;c=this,b=c.getClass(a);return c.name+" l"+c.numClasses+" c"+b};return b}(d),h.CSSColors=a,(m=h.scales)==null&&(h.scales={}),h.scales.cool=function(){return new f(h.hsl(180,1,.9),h.hsl(250,.7,.4))},h.scales.hot=function(){return new d({colors:["#000000","#ff0000","#ffff00","#ffffff"],positions:[0,.25,.75,1],mode:"rgb"})},h.scales.BlWhOr=function(){return new e(h.hsl(30,1,.55),"#ffffff",new c(220,1,.55))},h.scales.GrWhPu=function(){return new e(h.hsl(120,.8,.4),"#ffffff",new c(280,.8,.4))},h.limits=function(a,b,c,d,e){var f,g,h,i,j,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm;b==null&&(b="equal"),c==null&&(c=7),d==null&&(d=null),e==null&&(e=null),s=Number.MAX_VALUE,r=Number.MAX_VALUE*-1,C=0,G=[],e==null&&(e=function(){return!0});if(k(a)==="array")if(k(a[0])!=="object"&&k(a[0])!=="array")for(H=0,L=a.length;H<L;H++)E=a[H],isNaN(E&&e(E))||G.push(Number(E));else for(I=0,M=a.length;I<M;I++)B=a[I],e(B)&&G.push(Number(B[d]));else if(k(a)==="object")for(o in a)E=a[o],k(E)==="object"&&k(d)==="string"?isNaN(E[d]&&e(E))||G.push(Number(E[d])):k(E)==="array"&&k(d)==="number"?isNaN(E[d]&&e(E))||G.push(Number(E[d])):k(E)==="number"&&(isNaN(E&&e(E))||G.push(Number(E)));for(J=0,N=G.length;J<N;J++){E=G[J];if(!isNaN(E))E<s&&(s=E),E>r&&(r=E),C+=E;else continue}G=G.sort(function(a,b){return a-b}),q=[],b.substr(0,1)==="c"&&(q.push(s),q.push(r));if(b.substr(0,1)==="e"){q.push(s);for(m=K=1,$=c-1;1<=$?K<=$:K>=$;m=1<=$?++K:--K)q.push(s+m/c*(r-s));q.push(r)}else if(b.substr(0,1)==="q"){q.push(s);for(m=O=1,_=c-1;1<=_?O<=_:O>=_;m=1<=_?++O:--O)x=G.length*m/c,y=Math.floor(x),y===x?q.push(G[y]):(z=x-y,q.push(G[y]*z+G[y+1]*(1-z)));q.push(r)}else if(b.substr(0,1)==="k"){u=G.length,f=Array(u),j=Array(c),A=!0,v=0,h=null,h=[],h.push(s);for(m=P=1,ba=c-1;1<=ba?P<=ba:P>=ba;m=1<=ba?++P:--P)h.push(s+m/c*(r-s));h.push(r);while(A){for(n=Q=0,bb=c-1;0<=bb?Q<=bb:Q>=bb;n=0<=bb?++Q:--Q)j[n]=0;for(m=R=0,bc=u-1;0<=bc?R<=bc:R>=bc;m=0<=bc?++R:--R){F=G[m],t=Number.MAX_VALUE;for(n=S=0,bd=c-1;0<=bd?S<=bd:S>=bd;n=0<=bd?++S:--S)l=Math.abs(h[n]-F),l<t&&(t=l,g=n);j[g]++,f[m]=g}w=Array(c);for(n=T=0,be=c-1;0<=be?T<=be:T>=be;n=0<=be?++T:--T)w[n]=null;for(m=bg=0,bf=u-1;0<=bf?bg<=bf:bg>=bf;m=0<=bf?++bg:--bg)i=f[m],w[i]===null?w[i]=G[m]:w[i]+=G[m];for(n=bh=0,U=c-1;0<=U?bh<=U:bh>=U;n=0<=U?++bh:--bh)w[n]*=1/j[n];A=!1;for(n=bi=0,V=c-1;0<=V?bi<=V:bi>=V;n=0<=V?++bi:--bi)if(w[n]!==h[m]){A=!0;break}h=w,v++,v>200&&(A=!1)}p={};for(n=bj=0,W=c-1;0<=W?bj<=W:bj>=W;n=0<=W?++bj:--bj)p[n]=[];for(m=bk=0,X=u-1;0<=X?bk<=X:bk>=X;m=0<=X?++bk:--bk)i=f[m],p[i].push(G[m]);D=[];for(n=bl=0,Y=c-1;0<=Y?bl<=Y:bl>=Y;n=0<=Y?++bl:--bl)D.push(p[n][0]),D.push(p[n][p[n].length-1]);D=D.sort(function(a,b){return a-b}),q.push(D[0]);for(m=bm=1,Z=D.length-1;bm<=Z;m=bm+=2)isNaN(D[m])||q.push(D[m])}return q},j=typeof exports!="undefined"&&exports!==null?exports:this,k=function(){var a,b,c,d,e;a={},e="Boolean Number String Function Array Date RegExp Undefined Null".split(" ");for(c=0,d=e.length;c<d;c++)b=e[c],a["[object "+b+"]"]=b.toLowerCase();return function(b){var c;c=Object.prototype.toString.call(b);return a[c]||"object"}}(),(n=j.type)==null&&(j.type=k),Array.max=function(a){return Math.max.apply(Math,a)},Array.min=function(a){return Math.min.apply(Math,a)},j=typeof exports!="undefined"&&exports!==null?exports:this,h=(o=j.chroma)!=null?o:j.chroma={},h.brewer=g={},g.OrRd=["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],g.PuBu=["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],g.BuPu=["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],g.Oranges=["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],g.BuGn=["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],g.YlOrBr=["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],g.YlGn=["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],g.Reds=["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],g.RdPu=["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],g.Greens=["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],g.YlGnBu=["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],g.Purples=["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],g.GnBu=["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],g.Greys=["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],g.YlOrRd=["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],g.PuRd=["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],g.Blues=["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],g.PuBuGn=["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],g.Spectral=["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],g.RdYlGn=["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],g.RdBu=["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],g.PiYG=["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],g.PRGn=["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],g.RdYlBu=["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],g.BrBG=["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],g.RdGy=["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],g.PuOr=["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],g.Set2=["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],g.Accent=["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],g.Set1=["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],g.Set3=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],g.Dark2=["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],g.Paired=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],g.Pastel2=["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],g.Pastel1=["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"],j=typeof exports!="undefined"&&exports!==null?exports:this,h=(p=j.chroma)!=null?p:j.chroma={},h.colors=i={},i.indigo="#4b0082",i.gold="#ffd700",i.hotpink="#ff69b4",i.firebrick="#b22222",i.indianred="#cd5c5c",i.yellow="#ffff00",i.mistyrose="#ffe4e1",i.darkolivegreen="#556b2f",i.olive="#808000",i.darkseagreen="#8fbc8f",i.pink="#ffc0cb",i.tomato="#ff6347",i.lightcoral="#f08080",i.orangered="#ff4500",i.navajowhite="#ffdead",i.lime="#00ff00",i.palegreen="#98fb98",i.darkslategrey="#2f4f4f",i.greenyellow="#adff2f",i.burlywood="#deb887",i.seashell="#fff5ee",i.mediumspringgreen="#00fa9a",i.fuchsia="#ff00ff",i.papayawhip="#ffefd5",i.blanchedalmond="#ffebcd",i.chartreuse="#7fff00",i.dimgray="#696969",i.black="#000000",i.peachpuff="#ffdab9",i.springgreen="#00ff7f",i.aquamarine="#7fffd4",i.white="#ffffff",i.orange="#ffa500",i.lightsalmon="#ffa07a",i.darkslategray="#2f4f4f",i.brown="#a52a2a",i.ivory="#fffff0",i.dodgerblue="#1e90ff",i.peru="#cd853f",i.lawngreen="#7cfc00",i.chocolate="#d2691e",i.crimson="#dc143c",i.forestgreen="#228b22",i.darkgrey="#a9a9a9",i.lightseagreen="#20b2aa",i.cyan="#00ffff",i.mintcream="#f5fffa",i.silver="#c0c0c0",i.antiquewhite="#faebd7",i.mediumorchid="#ba55d3",i.skyblue="#87ceeb",i.gray="#808080",i.darkturquoise="#00ced1",i.goldenrod="#daa520",i.darkgreen="#006400",i.floralwhite="#fffaf0",i.darkviolet="#9400d3",i.darkgray="#a9a9a9",i.moccasin="#ffe4b5",i.saddlebrown="#8b4513",i.grey="#808080",i.darkslateblue="#483d8b",i.lightskyblue="#87cefa",i.lightpink="#ffb6c1",i.mediumvioletred="#c71585",i.slategrey="#708090",i.red="#ff0000",i.deeppink="#ff1493",i.limegreen="#32cd32",i.darkmagenta="#8b008b",i.palegoldenrod="#eee8aa",i.plum="#dda0dd",i.turquoise="#40e0d0",i.lightgrey="#d3d3d3",i.lightgoldenrodyellow="#fafad2",i.darkgoldenrod="#b8860b",i.lavender="#e6e6fa",i.maroon="#800000",i.yellowgreen="#9acd32",i.sandybrown="#f4a460",i.thistle="#d8bfd8",i.violet="#ee82ee",i.navy="#000080",i.magenta="#ff00ff",i.dimgrey="#696969",i.tan="#d2b48c",i.rosybrown="#bc8f8f",i.olivedrab="#6b8e23",i.blue="#0000ff",i.lightblue="#add8e6",i.ghostwhite="#f8f8ff",i.honeydew="#f0fff0",i.cornflowerblue="#6495ed",i.slateblue="#6a5acd",i.linen="#faf0e6",i.darkblue="#00008b",i.powderblue="#b0e0e6",i.seagreen="#2e8b57",i.darkkhaki="#bdb76b",i.snow="#fffafa",i.sienna="#a0522d",i.mediumblue="#0000cd",i.royalblue="#4169e1",i.lightcyan="#e0ffff",i.green="#008000",i.mediumpurple="#9370db",i.midnightblue="#191970",i.cornsilk="#fff8dc",i.paleturquoise="#afeeee",i.bisque="#ffe4c4",i.slategray="#708090",i.darkcyan="#008b8b",i.khaki="#f0e68c",i.wheat="#f5deb3",i.teal="#008080",i.darkorchid="#9932cc",i.deepskyblue="#00bfff",i.salmon="#fa8072",i.darkred="#8b0000",i.steelblue="#4682b4",i.palevioletred="#db7093",i.lightslategray="#778899",i.aliceblue="#f0f8ff",i.lightslategrey="#778899",i.lightgreen="#90ee90",i.orchid="#da70d6",i.gainsboro="#dcdcdc",i.mediumseagreen="#3cb371",i.lightgray="#d3d3d3",i.mediumturquoise="#48d1cc",i.lemonchiffon="#fffacd",i.cadetblue="#5f9ea0",i.lightyellow="#ffffe0",i.lavenderblush="#fff0f5",i.coral="#ff7f50",i.purple="#800080",i.aqua="#00ffff",i.whitesmoke="#f5f5f5",i.mediumslateblue="#7b68ee",i.darkorange="#ff8c00",i.mediumaquamarine="#66cdaa",i.darksalmon="#e9967a",i.beige="#f5f5dc",i.blueviolet="#8a2be2",i.azure="#f0ffff",i.lightsteelblue="#b0c4de",i.oldlace="#fdf5e6"}).call(this)