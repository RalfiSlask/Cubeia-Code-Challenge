import{r as c,C as r,j as e}from"./index-CalK1K3o.js";const a=({studio:t})=>{const s=c.useContext(r);if(!s)return;const{stagedSelectedStudios:l,handleClickOnSelectStudio:o}=s;return e.jsx("div",{className:`${l.includes(t.id)?"bg-selectorActive hover:bg-selectorActiveHover":"hover:bg-selectorBGHover"} cursor-pointer p-2 rounded-lg w-full max-h-[150px]`,onClick:()=>{o(t.id)},children:e.jsx("div",{className:"w-full ",children:e.jsx("img",{src:t.imageUrl,alt:t.name,width:"300",height:"300",className:"object-cover w-full rounded-lg",loading:"lazy"})})})},x="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;stroke:%23FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20id='cross'%3e%3cline%20class='cls-1'%20x1='7'%20x2='25'%20y1='7'%20y2='25'/%3e%3cline%20class='cls-1'%20x1='7'%20x2='25'%20y1='25'%20y2='7'/%3e%3c/g%3e%3c/svg%3e",h="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20height='21'%20viewBox='0%200%2021%2021'%20width='21'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23FFF'%20stroke-linecap='round'%20stroke-linejoin='round'%20transform='translate(2%202)'%3e%3cpath%20d='m4.5%201.5c-2.4138473%201.37729434-4%204.02194088-4%207%200%204.418278%203.581722%208%208%208s8-3.581722%208-8-3.581722-8-8-8'/%3e%3cpath%20fill='%23FFF'%20d='m4.5%205.5v-4h-4'/%3e%3c/g%3e%3c/svg%3e",u=()=>{const t=c.useContext(r);if(!t)return;const{studios:s,toggleModalOnClick:l,handleClickOnSelectButton:o,handleClickOnResetStudios:n}=t;return e.jsxs("div",{className:"flex flex-col fixed top-40 w-[300px] rounded-lg h-[600px] bg-selectorBG",children:[e.jsxs("div",{className:"flex-between border-b px-4 border-solid border-white h-[100px]",children:[e.jsx("button",{onClick:()=>{l("studios")},children:e.jsx("img",{src:x,alt:"close icon",width:"32",height:"32"})}),e.jsx("button",{onClick:n,children:e.jsx("img",{src:h,alt:"reset icon",width:"32",height:"32"})})]}),e.jsx("div",{className:"flex-col-center overflow-y-auto h-full py-4 px-6 gap-4",children:s.map((i,d)=>e.jsx(a,{studio:i},d))}),e.jsx("div",{className:"border-t border-solid border-white h-[100px] flex-center",children:e.jsx("button",{onClick:o,className:"px-6 py-2 text-xl primary-button",children:"Select"})})]})};export{u as default};
