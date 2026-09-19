const DBKEY="LIKESFF_STATIC_V1",SESSION="LIKESFF_SESSION";
const DEFAULT={settings:{siteName:"LikesFF",currency:"৳",paymentNumber:"01928288699"},admin:{password:"zx"},plans:[
{id:1,likes:1500,days:7,price:70,icon:"♥"},{id:2,likes:2200,days:10,price:120,icon:"⚡"},{id:3,likes:4400,days:20,price:220,icon:"★"},{id:4,likes:6000,days:27,price:300,icon:"☻"},{id:5,likes:6600,days:30,price:320,icon:"★"},{id:6,likes:8000,days:36,price:400,icon:"◇"},{id:7,likes:10000,days:45,price:600,icon:"♛"}],users:[],orders:[],deposits:[]};
function getDB(){let x=localStorage.getItem(DBKEY);if(!x){localStorage.setItem(DBKEY,JSON.stringify(DEFAULT));return structuredClone(DEFAULT)}return JSON.parse(x)}
function saveDB(x){localStorage.setItem(DBKEY,JSON.stringify(x))}
function toast(s){let x=document.getElementById("toast");if(!x)return;x.textContent=s;x.style.display="block";setTimeout(()=>x.style.display="none",2500)}
function session(){return JSON.parse(localStorage.getItem(SESSION)||"null")}
function setSession(x){localStorage.setItem(SESSION,JSON.stringify(x))}
function logout(){localStorage.removeItem(SESSION);location.href="index.html"}
function money(x){return "৳"+Number(x).toLocaleString()}
function protect(){if(!session()){location.href="index.html";return false}return true}
function balance(){let s=session(),d=getDB(),u=s&&d.users.find(x=>x.id===s.id);return u?money(u.balance):"৳0"}
function header(){let x=document.getElementById("balance");if(x)x.textContent=balance();let s=session();document.querySelectorAll(".authonly").forEach(e=>e.style.display=s?"block":"none")}
