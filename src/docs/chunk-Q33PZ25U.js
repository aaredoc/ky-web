import{A as B,a as C,b as m,c as g,d as c,e as E,f as D,g as n,h as o,i as s,j as d,k as T,l as _,m as r,n as x,o as w,p as A,q as I,r as F,s as P,t as L,x as y,y as f}from"./chunk-KS3V7PWC.js";function q(t,e){t&1&&(n(0,"div",2),r(1,` No hay aportantes para mostrar
`),o())}function H(t,e){if(t&1&&(n(0,"tr")(1,"td"),r(2),o(),n(3,"td"),r(4),o(),n(5,"td"),r(6),o(),n(7,"td"),r(8),o(),n(9,"td"),r(10),o(),n(11,"td"),r(12),o(),n(13,"td")(14,"div",5)(15,"div",6)(16,"button",7),s(17,"span",8),o(),n(18,"button",7),s(19,"span",9),o()()()(),n(20,"td")(21,"a",10),r(22,"Ver"),o()()()),t&2){let p=e.$implicit,a=e.index;c(2),x(a+1),c(2),x(p.nombre),c(2),w("",p.apellidoPaterno," ",p.apellidoMaterno,""),c(2),x(p.identificacion),c(2),x(p.email),c(2),x(p.celular)}}function $(t,e){if(t&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),o(),n(5,"th"),r(6,"Nombres"),o(),n(7,"th"),r(8,"Apellidos"),o(),n(9,"th"),r(10,"DNI"),o(),n(11,"th"),r(12,"Email"),o(),n(13,"th"),r(14,"Celular"),o(),n(15,"th"),r(16,"Acciones"),o(),n(17,"th"),r(18,"Informaci\xF3n"),o()()(),n(19,"tbody"),E(20,H,23,7,"tr",4),o()()),t&2){let p=T();c(20),D("ngForOf",p.personas)}}var h=(()=>{let e=class e{constructor(){this.personas=[{nombre:"Pepe",apellidoPaterno:"Ramirez",apellidoMaterno:"Ruiz",identificacion:"92939294",email:"pepe@gmail.com",celular:"923949321"},{nombre:"Maria",apellidoPaterno:"Sanchez",apellidoMaterno:"Rodriguez",identificacion:"33331629",email:"maria@gmail.com",celular:"923949323"},{nombre:"Mateo",apellidoPaterno:"Vasquez",apellidoMaterno:"Lozano",identificacion:"232323232",email:"mateo@gmail.com",celular:"943939392"},{nombre:"Roberto",apellidoPaterno:"Torres",apellidoMaterno:"Leon",identificacion:"82938267",email:"roberto@gmail.com",celular:"949504321"}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-data-table"]],inputs:{personas:"personas"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover","text-center"],[4,"ngFor","ngForOf"],[1,"container","text-center"],[1,"row","align-items-start"],["type","button",1,"btn","btn-secundary","col"],["id","button-trash",1,"bi","bi-trash"],["id","button-edit",1,"bi","bi-pencil-square"],["href","#"]],template:function(i,l){if(i&1&&E(0,q,2,0,"div",0)(1,$,21,1,"ng-template",null,1,A),i&2){let v=_(2);D("ngIf",l.personas.length==0)("ngIfElse",v)}},dependencies:[I,F],styles:[".bi-trash[_ngcontent-%COMP%]{font-size:1rem;color:red}"]});let t=e;return t})();var N=(()=>{let e=class e{constructor(){this.countries=[],this.isLoading=!1}searchAportantes(a){this.isLoading=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-personal"]],decls:10,vars:0,consts:[[1,"row"],[1,"col"],["placeholder","Buscar personal",3,"onDebounce"]],template:function(i,l){i&1&&(n(0,"h2"),r(1,"Personal"),o(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),d("onDebounce",function(b){return l.searchAportantes(b)}),o()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"business-data-table"),o()())},dependencies:[f,h]});let t=e;return t})();var z=(()=>{let e=class e{constructor(){this.countries=[],this.isLoading=!1}searchAportantes(a){this.isLoading=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-aportantes"]],decls:10,vars:0,consts:[[1,"row"],[1,"col"],["placeholder","Buscar aportante",3,"onDebounce"]],template:function(i,l){i&1&&(n(0,"h2"),r(1,"Aportantes"),o(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),d("onDebounce",function(b){return l.searchAportantes(b)}),o()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"business-data-table"),o()())},dependencies:[f,h]});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.countries=[],this.isLoading=!1}searchAportantes(a){this.isLoading=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-beneficiados"]],decls:10,vars:0,consts:[[1,"row"],[1,"col"],["placeholder","Buscar beneficiado",3,"onDebounce"]],template:function(i,l){i&1&&(n(0,"h2"),r(1,"Beneficiados"),o(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),d("onDebounce",function(b){return l.searchAportantes(b)}),o()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"business-data-table"),o()())},dependencies:[f,h]});let t=e;return t})();var R=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-perfil"]],decls:2,vars:0,template:function(i,l){i&1&&(n(0,"p"),r(1,"perfil works!"),o())}});let t=e;return t})();var j=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-anuncios"]],decls:2,vars:0,template:function(i,l){i&1&&(n(0,"p"),r(1,"anuncios works!"),o())}});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.countries=[],this.isLoading=!1}searchAportantes(a){this.isLoading=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["business-voluntarios"]],decls:10,vars:0,consts:[[1,"row"],[1,"col"],["placeholder","Buscar voluntario",3,"onDebounce"]],template:function(i,l){i&1&&(n(0,"h2"),r(1,"Voluntarios"),o(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),d("onDebounce",function(b){return l.searchAportantes(b)}),o()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"business-data-table"),o()())},dependencies:[f,h]});let t=e;return t})();var G=[{path:"perfil",component:R},{path:"beneficiados",component:V},{path:"aportantes",component:z},{path:"voluntarios",component:O},{path:"personal",component:N},{path:"anuncios",component:j},{path:"**",redirectTo:"perfil"}],k=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=C({imports:[y.forChild(G),y]});let t=e;return t})();var Me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=C({imports:[P,B,k,L]});let t=e;return t})();export{Me as BusinessModule};