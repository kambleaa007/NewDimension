(this["webpackJsonpnew-dimension"]=this["webpackJsonpnew-dimension"]||[]).push([[0],{101:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(32),i=a.n(s),o=(a(101),a(93)),c=a(19),l=a(124),j=(a(65),a(102),a(103),a(104),a(6)),b=a(1),u=a(14),h=a(123),m=a(119),d=a(125),O=a(120),f=a(3);function x(){return Object(u.c)((function(e){e.camera.position.x=b.MathUtils.lerp(e.camera.position.x,1.5+e.mouse.x/4,.075),e.camera.position.y=b.MathUtils.lerp(e.camera.position.y,1.5+e.mouse.y/4,.075)}))}function p(){var e=Object(O.c)((function(){return{mass:1,position:[0,2,0]}})),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(f.jsxs)("mesh",{onClick:function(){r.velocity.set(0,4,2)},ref:a,position:[0,2,0],castShadow:!0,receiveShadow:!0,children:[Object(f.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(f.jsx)("meshStandardMaterial",{attach:"material",color:"hotpink",roughness:0,metalness:.1})]})}function g(){var e=Object(O.e)((function(){return{rotation:[-Math.PI/2,0,0]}})),t=Object(j.a)(e,1)[0];return Object(f.jsxs)("mesh",{ref:t,rotation:[-Math.PI/2,0,0],castShadow:!0,receiveShadow:!0,children:[Object(f.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(f.jsx)("meshLambertMaterial",{attach:"material",color:"lightblue"})]})}Object(h.a)();var y=function(e){return Object(f.jsx)("div",{className:"home",children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(u.a,{shadows:!0,children:[Object(f.jsx)(m.a,{}),Object(f.jsx)(d.a,{}),Object(f.jsx)("fog",{attach:"fog",args:["grey",0,40]}),Object(f.jsx)("ambientLight",{intensity:.4}),Object(f.jsx)("spotLight",{position:[10,15,10],angle:.3}),Object(f.jsx)("directionalLight",{position:[0,2,0],intensity:1}),Object(f.jsx)("directionalLight",{position:[2,0,0],intensity:.5}),Object(f.jsx)("directionalLight",{position:[0,0,2],intensity:.2}),Object(f.jsxs)(O.a,{children:[Object(f.jsx)(p,{}),Object(f.jsx)(g,{})]}),Object(f.jsxs)("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,-1,0],receiveShadow:!0,children:[Object(f.jsx)("planeBufferGeometry",{args:[10,10,1,1]}),Object(f.jsx)("shadowMaterial",{transparent:!0,opacity:.2})]}),Object(f.jsx)(x,{})]})})})},v=a(128),w=a(129);var S=function(){return Object(f.jsx)("div",{className:"nav-bar",children:Object(f.jsx)(v.a,{className:"nav",variant:"light",children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(v.a.Brand,{href:"#/",children:"Home"}),Object(f.jsxs)(w.a,{className:"me-auto",children:[Object(f.jsx)(w.a.Link,{href:"#one",children:"3D Model"}),Object(f.jsx)(w.a.Link,{href:"#drivecar",children:"Drive Car"}),Object(f.jsx)(w.a.Link,{href:"#aboutus",children:"Universe"}),Object(f.jsx)(w.a.Link,{href:"#contactus",children:"Play PingPong"})]})]})})})},k=a(126),M=a(5),_=a(15),P=a(70),L=a(86),R=a(85),D=a(61),C=a(84),B=["pose"];function F(e){var t=e.pose,a=Object(_.a)(e,B),n=(Object(r.useRef)(),Object(P.a)("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/stacy.glb")),s=(n.materials,n.animations),i=n.scene,o=Object(r.useMemo)((function(){return C.a.clone(i)}),[i]),c=Object(u.d)(o).nodes,l=Object(R.a)("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/stacy.jpg"),b=Object(L.a)(s),h=b.ref,m=b.actions,d=b.names,O=Object(r.useState)(!1),x=Object(j.a)(O,2),p=x[0],g=x[1],y=Object(r.useState)(t),v=Object(j.a)(y,2),w=v[0],S=v[1],k=Object(D.useSpring)({scale:p?[1.15,1.15,1]:[1,1,1],color:p?"hotpink":"aquamarine"}),F=k.color,I=k.scale;return Object(r.useEffect)((function(){document.body.style.cursor=p?"pointer":"auto"}),[p]),Object(r.useEffect)((function(){return m[d[w]].reset().fadeIn(.5).play(),function(){return m[d[w]].fadeOut(.5)}}),[w,m,d]),Object(f.jsxs)("group",Object(M.a)(Object(M.a)({ref:h},a),{},{dispose:null,children:[Object(f.jsxs)("group",{onPointerOver:function(){return g(!0)},onPointerOut:function(){return g(!1)},onClick:function(){return S((w+1)%d.length)},rotation:[Math.PI/2,0,0],scale:[.01,.01,.01],children:[Object(f.jsx)("primitive",{object:c.mixamorigHips}),Object(f.jsx)("skinnedMesh",{castShadow:!0,receiveShadow:!0,geometry:c.stacy.geometry,skeleton:c.stacy.skeleton,rotation:[-Math.PI/2,0,0],scale:[100,100,100],children:Object(f.jsx)("meshStandardMaterial",{map:l,"map-flipY":!1,skinning:!0})})]}),Object(f.jsxs)(D.a.mesh,{receiveShadow:!0,position:[0,1,-1],scale:I,children:[Object(f.jsx)("circleBufferGeometry",{args:[.6,64]}),Object(f.jsx)(D.a.meshStandardMaterial,{color:F})]})]}))}function I(){return Object(u.c)((function(e){e.camera.position.x=b.MathUtils.lerp(e.camera.position.x,1.5+e.mouse.x/4,.075),e.camera.position.y=b.MathUtils.lerp(e.camera.position.y,1.5+e.mouse.y/4,.075)}))}function A(){return Object(f.jsxs)(l.a,{children:[Object(f.jsx)(k.a,{children:"Click on model"}),Object(f.jsxs)(u.a,{shadows:!0,camera:{position:[1,1.5,2.5],fov:50},children:[Object(f.jsx)("ambientLight",{}),Object(f.jsx)("directionalLight",{position:[-5,5,5],castShadow:!0,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),Object(f.jsx)("group",{position:[0,-1,0],children:Object(f.jsxs)(r.Suspense,{fallback:null,children:[Object(f.jsx)(F,{pose:4,position:[0,0,0]}),Object(f.jsx)(F,{pose:1,position:[2,0,-1]}),Object(f.jsx)(F,{pose:2,position:[-2,0,-1]})]})}),Object(f.jsxs)("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,-1,0],receiveShadow:!0,children:[Object(f.jsx)("planeBufferGeometry",{args:[10,10,1,1]}),Object(f.jsx)("shadowMaterial",{transparent:!0,opacity:.2})]}),Object(f.jsx)(I,{})]})]})}P.a.preload("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/stacy.glb");var U=a(11),E=a(127),G=a(96),N=a(46),T=a(87),z=a(36),V=a(88),W=a(89);Object(u.b)({EffectComposer:G.a,ShaderPass:N.a,SavePass:T.a,RenderPass:W.a});var q={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},tDiffuse3:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\n    }\n  ",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse1;\n    uniform sampler2D tDiffuse2;\n    uniform sampler2D tDiffuse3;\n    \n    void main() {\n      vec4 del0 = texture2D(tDiffuse1, vUv);\n      vec4 del1 = texture2D(tDiffuse2, vUv);\n      vec4 del2 = texture2D(tDiffuse3, vUv);\n      float alpha = min(min(del0.a, del1.a), del2.a);\n      gl_FragColor = vec4(del0.r, del1.g, del2.b, alpha);\n    }\n  "};function H(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useRef)(!1),s=Object(u.f)(),i=s.scene,o=s.gl,c=s.size,l=s.camera,j=Object(r.useMemo)((function(){return{rtA:new b.WebGLRenderTarget(c.width,c.height),rtB:new b.WebGLRenderTarget(c.width,c.height)}}),[c]),h=j.rtA,m=j.rtB;Object(r.useEffect)((function(){e.current.setSize(c.width,c.height)}),[c]),Object(u.c)((function(){var r=n.current?m:h,s=n.current?h:m;t.current.renderTarget=s,a.current.uniforms.tDiffuse2.value=r.texture,a.current.uniforms.tDiffuse3.value=s.texture,n.current=!n.current,e.current.render()}),1);var d=o.getPixelRatio();return Object(f.jsxs)("effectComposer",{ref:e,args:[o],children:[Object(f.jsx)("renderPass",{attachArray:"passes",scene:i,camera:l}),Object(f.jsx)("shaderPass",{attachArray:"passes",ref:a,args:[q,"tDiffuse1"],needsSwap:!1}),Object(f.jsx)("savePass",{attachArray:"passes",ref:t,needsSwap:!0}),Object(f.jsx)("shaderPass",{attachArray:"passes",args:[V.a],"uniforms-resolution-value-x":1/(c.width*d),"uniforms-resolution-value-y":1/(c.height*d)}),Object(f.jsx)("shaderPass",{attachArray:"passes",args:[z.a]})]})}var J=function(e,t,a,r){return 2*a/Math.PI*Math.atan(Math.sin(2*Math.PI*e*r)/t)};function K(){var e=Object(r.useRef)(),t=Object(r.useMemo)((function(){var e=new b.Vector3,t=new b.Matrix4,a=Object(U.a)(Array(1e4)).map((function(e,t){var a=new b.Vector3;return a.x=t%100-50,a.y=Math.floor(t/100)-50,a.y+=t%2*.5,a.x+=.3*Math.random(),a.y+=.3*Math.random(),a})),r=new b.Vector3(1,0,0),n=a.map((function(e){return e.length()+.5*Math.cos(8*e.angleTo(r))}));return{vec:e,transform:t,positions:a,distances:n}}),[]),a=t.vec,n=t.transform,s=t.positions,i=t.distances;return Object(u.c)((function(t){for(var r=t.clock,o=0;o<1e4;++o){var c=i[o],l=r.elapsedTime-c/25,j=J(l,.15+.2*c/72,.4,1/3.8);a.copy(s[o]).multiplyScalar(j+1.3),n.setPosition(a),e.current.setMatrixAt(o,n)}e.current.instanceMatrix.needsUpdate=!0})),Object(f.jsxs)("instancedMesh",{ref:e,args:[null,null,1e4],children:[Object(f.jsx)("circleBufferGeometry",{args:[.15]}),Object(f.jsx)("meshBasicMaterial",{})]})}var Y=function(){return Object(f.jsxs)(u.a,{orthographic:!0,camera:{zoom:20},colorManagement:!1,children:[Object(f.jsx)("color",{attach:"background",args:["black"]}),Object(f.jsxs)("group",{position:[25,-12,0],children:[Object(f.jsx)(H,{}),Object(f.jsx)(E.a,{fullscreen:!0,children:Object(f.jsx)("h1",{style:{color:"white"},children:"Universe"})})]}),Object(f.jsx)(K,{})]})},Q=a(22),X=a(25),Z=a(91),$=a(45),ee=a(62),te=a.n(ee),ae=a(95),re=a(90),ne=["color","children"],se=(new b.FontLoader).parse(re),ie=["0","1","2","3","4","5","6","7","8","9"].map((function(e){return new b.TextGeometry(e,{font:se,size:5,height:.1})}));function oe(e){var t=e.color,a=e.children,n=Object(_.a)(e,ne),s=Object(r.useMemo)((function(){return Object(U.a)(a)}),[a]);return Object(f.jsx)("group",Object(M.a)(Object(M.a)({},n),{},{dispose:null,children:s.map((function(e,a){return Object(f.jsx)("mesh",{position:[-s.length/2*3.5+3.5*a,0,0],geometry:ie[parseInt(e)],children:Object(f.jsx)("meshBasicMaterial",{attach:"material",color:t,transparent:!0,opacity:.5})},a)}))}))}var ce=a.p+"static/media/ping.a0246f13.mp3",le=a.p+"static/media/cross.ff426a15.jpg",je=new Audio(ce),be=Object(Z.a)((function(e){return{count:0,welcome:!0,api:{pong:function(t){je.currentTime=0,je.volume=Object(ae.a)(t/20,0,1),je.play(),t>4&&e((function(e){return{count:e.count+1}}))},reset:function(t){return e((function(e){return{welcome:t,count:t?e.count:0}}))}}}})),ue=Object(j.a)(be,1)[0];function he(){var e=Object(Q.f)($.a,"https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/pingpong.glb"),t=e.nodes,a=e.materials,n=ue((function(e){return e.api})).pong,s=ue((function(e){return e.welcome})),i=ue((function(e){return e.count})),o=Object(r.useRef)(),c=Object(X.b)((function(){return{type:"Kinematic",args:[3.4,1,3.5],onCollide:function(e){return n(e.contact.impactVelocity)}}})),l=Object(j.a)(c,2),b=l[0],u=l[1],h=Object(r.useRef)([0,0]);return Object(Q.e)((function(e){h.current[0]=te()(h.current[0],e.mouse.x*Math.PI/5,.2),h.current[1]=te()(h.current[1],e.mouse.x*Math.PI/5,.2),u.position.set(10*e.mouse.x,5*e.mouse.y,0),u.rotation.set(0,0,h.current[1]),o.current.rotation.x=te()(o.current.rotation.x,s?Math.PI/2:0,.2),o.current.rotation.y=h.current[0]})),Object(f.jsx)("mesh",{ref:b,dispose:null,children:Object(f.jsxs)("group",{ref:o,position:[-.05,.37,.3],scale:[.15,.15,.15],children:[Object(f.jsx)(oe,{rotation:[-Math.PI/2,0,0],position:[0,1,2],size:1,children:i.toString()}),Object(f.jsxs)("group",{rotation:[1.88,-.35,2.32],scale:[2.97,2.97,2.97],children:[Object(f.jsx)("primitive",{object:t.Bone}),Object(f.jsx)("primitive",{object:t.Bone003}),Object(f.jsx)("primitive",{object:t.Bone006}),Object(f.jsx)("primitive",{object:t.Bone010}),Object(f.jsx)("skinnedMesh",{castShadow:!0,receiveShadow:!0,material:a.glove,"material-roughness":1,geometry:t.arm.geometry,skeleton:t.arm.skeleton})]}),Object(f.jsxs)("group",{rotation:[0,-.04,0],scale:[141.94,141.94,141.94],children:[Object(f.jsx)("mesh",{castShadow:!0,receiveShadow:!0,material:a.wood,geometry:t.mesh.geometry}),Object(f.jsx)("mesh",{castShadow:!0,receiveShadow:!0,material:a.side,geometry:t.mesh_1.geometry}),Object(f.jsx)("mesh",{castShadow:!0,receiveShadow:!0,material:a.foam,geometry:t.mesh_2.geometry}),Object(f.jsx)("mesh",{castShadow:!0,receiveShadow:!0,material:a.lower,geometry:t.mesh_3.geometry}),Object(f.jsx)("mesh",{castShadow:!0,receiveShadow:!0,material:a.upper,geometry:t.mesh_4.geometry})]})]})})}function me(){var e=Object(Q.f)(b.TextureLoader,le),t=Object(X.f)((function(){return{mass:1,args:.5,position:[0,5,0]}})),a=Object(j.a)(t,1)[0];return Object(f.jsxs)("mesh",{castShadow:!0,ref:a,children:[Object(f.jsx)("sphereBufferGeometry",{attach:"geometry",args:[.5,64,64]}),Object(f.jsx)("meshStandardMaterial",{attach:"material",map:e})]})}function de(){var e=ue((function(e){return e.api})).reset,t=Object(X.d)((function(){return{type:"Static",rotation:[-Math.PI/2,0,0],position:[0,-10,0],onCollide:function(){return e(!0)}}})),a=Object(j.a)(t,1)[0];return Object(f.jsx)("mesh",{ref:a})}var Oe=function(){var e=ue((function(e){return e.welcome})),t=ue((function(e){return e.api})).reset,a=Object(r.useCallback)((function(){return e&&t(!1)}),[e,t]);return Object(f.jsxs)("div",{onClick:a,children:[Object(f.jsxs)(Q.a,{shadows:!0,camera:{position:[0,5,12],fov:50},children:[Object(f.jsx)("color",{attach:"background",args:["#171720"]}),Object(f.jsx)("ambientLight",{intensity:.5}),Object(f.jsx)("pointLight",{position:[-10,-10,-10]}),Object(f.jsx)("spotLight",{position:[10,10,10],angle:.4,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048,"shadow-bias":-1e-4}),Object(f.jsxs)(X.a,{iterations:20,tolerance:1e-4,defaultContactMaterial:{friction:.9,restitution:.7,contactEquationStiffness:1e7,contactEquationRelaxation:1,frictionEquationStiffness:1e7,frictionEquationRelaxation:2},gravity:[0,-40,0],allowSleep:!1,children:[Object(f.jsxs)("mesh",{position:[0,0,-10],receiveShadow:!0,children:[Object(f.jsx)("planeBufferGeometry",{attach:"geometry",args:[1e3,1e3]}),Object(f.jsx)("meshPhongMaterial",{attach:"material",color:"#374037"})]}),Object(f.jsx)(de,{}),!e&&Object(f.jsx)(me,{}),Object(f.jsx)(r.Suspense,{fallback:null,children:Object(f.jsx)(he,{})})]})]}),Object(f.jsx)("div",{className:"startup",style:{display:e?"block":"none"},children:"* click to start ..."})]})},fe=a(130);function xe(e,t){Object(r.useEffect)((function(){var a=function(a){var r=a.key;return-1!==e.indexOf(r)&&t(!0)},r=function(a){var r=a.key;return-1!==e.indexOf(r)&&t(!1)};return window.addEventListener("keydown",a),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",r)}}),[])}var pe=["args","mass"];P.a.preload("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/Beetle.glb");var ge=Object(r.forwardRef)((function(e,t){var a=e.args,r=void 0===a?[1.7,1,4]:a,n=e.mass,s=void 0===n?500:n,i=Object(_.a)(e,pe),o=Object(P.a)("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/Beetle.glb"),c=o.nodes,l=o.materials,b=Object(X.b)((function(){return Object(M.a)({mass:s,args:r,allowSleep:!1,onCollide:function(e){return console.log("bonk",e.body.userData)}},i)}),t),u=Object(j.a)(b,2)[1];return Object(f.jsx)("mesh",{ref:t,api:u,children:Object(f.jsxs)("group",{position:[0,-.6,0],children:[Object(f.jsx)("mesh",{castShadow:!0,material:l["Black paint"],geometry:c.chassis_1.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l.Rubber,geometry:c.chassis_2.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l.Paint,geometry:c.chassis_3.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l.Underbody,geometry:c.chassis_4.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l.Chrom,geometry:c.chassis_5.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["Interior (dark)"],geometry:c.chassis_6.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["Interior (light)"],geometry:c.chassis_7.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l.Reflector,geometry:c.chassis_8.geometry}),Object(f.jsx)("mesh",{material:l.Glass,geometry:c.chassis_9.geometry,"material-transparent":!1,"material-color":"black"}),Object(f.jsx)("mesh",{castShadow:!0,material:l.Steel,geometry:c.chassis_10.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["Black plastic"],geometry:c.chassis_11.geometry}),Object(f.jsx)("mesh",{material:l.Headlight,geometry:c.chassis_12.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["Reverse lights"],geometry:c.chassis_13.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["Orange plastic"],geometry:c.chassis_14.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["Tail lights"],geometry:c.chassis_15.geometry}),Object(f.jsx)("mesh",{castShadow:!0,material:l["License Plate"],geometry:c.chassis_16.geometry})]})})})),ye=["radius","leftSide"];P.a.preload("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/Wheel.glb");var ve=Object(r.forwardRef)((function(e,t){var a=e.radius,r=void 0===a?.7:a,n=e.leftSide,s=Object(_.a)(e,ye),i=Object(P.a)("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/wheel.glb"),o=i.nodes,c=i.materials;return Object(X.c)((function(){return Object(M.a)({mass:1,type:"Kinematic",material:"wheel",collisionFilterGroup:0,args:[r,r,.5,16]},s)}),t),Object(f.jsx)("mesh",{ref:t,children:Object(f.jsxs)("mesh",{rotation:[0,0,(n?1:-1)*Math.PI/2],children:[Object(f.jsx)("mesh",{material:c.Rubber,geometry:o.wheel_1.geometry}),Object(f.jsx)("mesh",{material:c.Steel,geometry:o.wheel_2.geometry}),Object(f.jsx)("mesh",{material:c.Chrom,geometry:o.wheel_3.geometry})]})})})),we=["radius","width","height","front","back","steer","force","maxBrake"];var Se=function(e){var t=e.radius,a=void 0===t?.7:t,n=e.width,s=void 0===n?1.2:n,i=e.height,o=void 0===i?-.04:i,c=e.front,l=void 0===c?1.3:c,b=e.back,u=void 0===b?-1.15:b,h=e.steer,m=void 0===h?.75:h,d=e.force,O=void 0===d?2e3:d,x=e.maxBrake,p=void 0===x?1e5:x,g=Object(_.a)(e,we),y=Object(r.useRef)(),v=Object(r.useRef)(),w=Object(r.useRef)(),S=Object(r.useRef)(),k=Object(r.useRef)(),P=function(){var e=Object(r.useRef)({forward:!1,backward:!1,left:!1,right:!1,brake:!1,reset:!1});return xe(["ArrowUp","w"],(function(t){return e.current.forward=t})),xe(["ArrowDown","s"],(function(t){return e.current.backward=t})),xe(["ArrowLeft","a"],(function(t){return e.current.left=t})),xe(["ArrowRight","d"],(function(t){return e.current.right=t})),xe([" "],(function(t){return e.current.brake=t})),xe(["r"],(function(t){return e.current.reset=t})),e}(),L={radius:a,directionLocal:[0,-1,0],suspensionStiffness:30,suspensionRestLength:.3,maxSuspensionForce:1e4,maxSuspensionTravel:.3,dampingRelaxation:10,dampingCompression:4.4,axleLocal:[-1,0,0],chassisConnectionPointLocal:[1,0,1],useCustomSlidingRotationalSpeed:!0,customSlidingRotationalSpeed:-30,frictionSlip:2},R=Object(M.a)(Object(M.a)({},L),{},{isFrontWheel:!0,chassisConnectionPointLocal:[-s/2,o,l]}),D=Object(M.a)(Object(M.a)({},L),{},{isFrontWheel:!0,chassisConnectionPointLocal:[s/2,o,l]}),C=Object(M.a)(Object(M.a)({},L),{},{isFrontWheel:!1,chassisConnectionPointLocal:[-s/2,o,u]}),B=Object(M.a)(Object(M.a)({},L),{},{isFrontWheel:!1,chassisConnectionPointLocal:[s/2,o,u]}),F=Object(X.e)((function(){return{chassisBody:y,wheels:[v,w,S,k],wheelInfos:[R,D,C,B],indexForwardAxis:2,indexRightAxis:0,indexUpAxis:1}})),I=Object(j.a)(F,2),A=I[0],U=I[1];return Object(Q.e)((function(){for(var e=P.current,t=e.forward,a=e.backward,r=e.left,n=e.right,s=e.brake,i=e.reset,o=2;o<4;o++)U.applyEngineForce(t||a?O*(t&&!a?-1:1):0,2);for(var c=0;c<2;c++)U.setSteeringValue(r||n?m*(r&&!n?1:-1):0,c);for(var l=2;l<4;l++)U.setBrake(s?p:0,l);i&&(y.current.api.position.set(0,.5,0),y.current.api.velocity.set(0,0,0),y.current.api.angularVelocity.set(0,.5,0),y.current.api.rotation.set(0,-Math.PI/4,0))})),Object(f.jsxs)("group",{ref:A,position:[0,-.4,0],children:[Object(f.jsx)(ge,{ref:y,rotation:g.rotation,position:g.position,angularVelocity:g.angularVelocity}),Object(f.jsx)(ve,{ref:v,radius:a,leftSide:!0}),Object(f.jsx)(ve,{ref:w,radius:a}),Object(f.jsx)(ve,{ref:S,radius:a,leftSide:!0}),Object(f.jsx)(ve,{ref:k,radius:a})]})},ke=["args"];function Me(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Q.a,{dpr:[1,1.5],shadows:!0,camera:{position:[0,5,15],fov:50},children:[Object(f.jsx)("fog",{attach:"fog",args:["#171720",10,50]}),Object(f.jsx)("color",{attach:"background",args:["#171720"]}),Object(f.jsx)("ambientLight",{intensity:.1}),Object(f.jsx)("spotLight",{position:[10,10,10],angle:.5,intensity:1,castShadow:!0,penumbra:1}),Object(f.jsxs)(X.a,{broadphase:"SAP",contactEquationRelaxation:4,friction:.001,allowSleep:!0,children:[Object(f.jsx)(_e,{rotation:[-Math.PI/2,0,0],userData:{id:"floor"}}),Object(f.jsx)(Se,{position:[0,2,0],rotation:[0,-Math.PI/4,0],angularVelocity:[0,.5,0],wheelRadius:.3}),Object(f.jsx)(Pe,{position:[-5,2.5,-5],userData:{id:"pillar-1"}}),Object(f.jsx)(Pe,{position:[0,2.5,-5],userData:{id:"pillar-2"}}),Object(f.jsx)(Pe,{position:[5,2.5,-5],userData:{id:"pillar-3"}})]}),Object(f.jsx)(r.Suspense,{fallback:null,children:Object(f.jsx)(fe.a,{preset:"night"})})]}),Object(f.jsx)("div",{style:{position:"absolute",top:70,left:90},children:Object(f.jsxs)("pre",{style:{color:"white"},children:["Must run fullscreen!",Object(f.jsx)("br",{}),"WASD to drive, space to brake",Object(f.jsx)("br",{}),"R to reset"]})})]})}function _e(e){var t=Object(X.d)((function(){return Object(M.a)({type:"Static",material:"ground"},e)})),a=Object(j.a)(t,1)[0];return Object(f.jsx)("group",{ref:a,children:Object(f.jsxs)("mesh",{receiveShadow:!0,children:[Object(f.jsx)("planeGeometry",{args:[100,100]}),Object(f.jsx)("meshStandardMaterial",{color:"#303030"})]})})}function Pe(e){var t=e.args,a=void 0===t?[.7,.7,5,16]:t,r=Object(_.a)(e,ke),n=Object(X.c)((function(){return Object(M.a)({mass:10,args:a},r)})),s=Object(j.a)(n,1)[0];return Object(f.jsxs)("mesh",{ref:s,castShadow:!0,children:[Object(f.jsx)("cylinderGeometry",{args:a}),Object(f.jsx)("meshNormalMaterial",{})]})}var Le=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(S,{}),Object(f.jsxs)(c.c,{children:[Object(f.jsx)(c.a,{path:"/",exact:!0,component:function(e){return Object(f.jsx)(y,{})}}),Object(f.jsx)(c.a,{path:"/one",component:function(e){return Object(f.jsx)(A,{})}}),Object(f.jsx)(c.a,{path:"/drivecar",component:function(e){return Object(f.jsx)(Me,{})}}),Object(f.jsx)(c.a,{path:"/aboutus",component:function(e){return Object(f.jsx)(Y,{})}}),Object(f.jsx)(c.a,{path:"/contactus",component:function(e){return Object(f.jsx)(Oe,{})}})]})]})})},Re=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,131)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(Le,{})}),document.getElementById("root")),Re()},65:function(e,t,a){},90:function(e){e.exports=JSON.parse('{"glyphs":{"0":{"ha":775,"x_min":0,"x_max":0,"o":"m 388 943 b 699 464 596 943 699 771 b 388 -17 699 156 596 -17 b 76 464 179 -17 76 156 b 388 943 76 772 179 943 m 388 842 b 210 464 271 842 210 736 b 388 85 210 190 271 85 b 565 464 503 85 565 190 b 388 842 565 736 503 842 "},"1":{"ha":601,"x_min":0,"x_max":0,"o":"m 449 0 l 321 0 l 321 793 l 104 661 l 49 751 l 336 929 l 449 929 "},"2":{"ha":688,"x_min":0,"x_max":0,"o":"m 317 943 b 596 689 488 943 596 833 b 200 107 596 515 485 392 l 618 107 l 603 0 l 54 0 l 54 101 b 463 683 382 443 463 532 b 310 838 463 781 400 838 b 118 736 232 838 181 807 l 35 803 b 317 943 110 896 200 943 "},"3":{"ha":693,"x_min":0,"x_max":0,"o":"m 313 943 b 588 707 490 943 588 832 b 407 493 588 589 511 518 b 617 268 524 482 617 408 b 300 -17 617 106 493 -17 b 21 108 189 -17 92 24 l 97 179 b 296 88 158 115 221 88 b 483 269 413 88 483 160 b 299 436 483 397 411 436 l 229 436 l 244 535 l 292 535 b 460 699 383 535 460 590 b 306 840 460 786 399 840 b 114 757 232 840 176 815 l 47 833 b 313 943 126 907 213 943 "},"4":{"ha":739,"x_min":0,"x_max":0,"o":"m 697 229 l 576 229 l 576 0 l 453 0 l 453 229 l 56 229 l 56 321 l 335 943 l 442 899 l 190 331 l 454 331 l 465 581 l 576 581 l 576 331 l 697 331 "},"5":{"ha":696,"x_min":0,"x_max":0,"o":"m 583 829 l 221 829 l 221 556 b 369 592 269 581 319 592 b 633 297 526 592 633 482 b 311 -17 633 113 504 -17 b 36 101 193 -17 108 28 l 111 175 b 310 88 169 117 229 88 b 500 300 426 88 500 164 b 331 493 500 443 426 493 b 199 461 281 493 243 482 l 99 461 l 99 929 l 601 929 "},"6":{"ha":740,"x_min":0,"x_max":0,"o":"m 428 611 b 685 315 564 611 685 514 b 389 -17 685 113 553 -17 b 76 436 163 -17 76 169 b 428 943 76 740 208 943 b 619 886 503 943 565 922 l 569 801 b 426 842 526 828 478 842 b 204 489 292 842 211 701 b 428 611 265 575 340 611 m 389 85 b 556 311 499 85 556 175 b 406 510 556 458 493 510 b 206 382 322 510 253 458 b 389 85 211 179 265 85 "},"7":{"ha":617,"x_min":0,"x_max":0,"o":"m 575 833 l 228 -14 l 111 25 l 446 825 l 35 825 l 35 929 l 575 929 "},"8":{"ha":765,"x_min":0,"x_max":0,"o":"m 507 499 b 703 249 635 447 703 365 b 381 -17 703 93 569 -17 b 63 246 189 -17 63 93 b 246 488 63 365 132 438 b 101 704 146 538 101 608 b 383 943 101 861 242 943 b 665 708 522 943 665 867 b 507 499 665 614 613 551 m 383 847 b 226 703 288 847 226 796 b 399 538 226 607 292 572 l 422 529 b 540 704 506 576 540 625 b 383 847 540 790 485 847 m 382 85 b 569 247 499 85 569 150 b 367 443 569 347 517 392 l 332 456 b 196 246 240 411 196 347 b 382 85 196 144 267 85 "},"9":{"ha":729,"x_min":0,"x_max":0,"o":"m 360 943 b 660 582 560 943 660 800 b 165 -31 660 197 507 68 l 136 65 b 528 449 369 132 518 239 b 319 338 488 386 414 338 b 63 636 175 338 63 451 b 360 943 63 831 199 943 m 346 438 b 531 553 425 438 485 482 b 363 842 535 763 478 842 b 192 633 254 842 192 767 b 346 438 192 500 256 438 "}},"familyName":"Fira Sans","ascender":1299,"descender":-368,"underlinePosition":-104,"underlineThickness":69,"boundingBox":{"yMin":-490,"xMin":-1050,"yMax":1533,"xMax":1889},"resolution":1000,"original_font_information":{"format":0,"copyright":"Digitized data copyright 2012-2016, The Mozilla Foundation and Telefonica S.A.","fontFamily":"Fira Sans","fontSubfamily":"Regular","uniqueID":"4.203;CTDB;FiraSans-Regular","fullName":"Fira Sans Regular","version":"Version 4.203;PS 004.203;hotconv 1.0.88;makeotf.lib2.5.64775","postScriptName":"FiraSans-Regular","trademark":"Fira Sans is a trademark of The Mozilla Corporation.","manufacturer":"Carrois Corporate GbR & Edenspiekermann AG","designer":"Carrois Corporate & Edenspiekermann AG","manufacturerURL":"http://www.carrois.com","designerURL":"http://www.carrois.com","licence":"Licensed under the Open Font License, version 1.1 or later","licenceURL":"http://scripts.sil.org/OFL"},"cssFontWeight":"normal","cssFontStyle":"normal"}')}},[[118,1,2]]]);
//# sourceMappingURL=main.cba6c78f.chunk.js.map