// function getfile(file,callback){
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function()
//   {
//     if(xhr.readyState === 4 && xhr.status == "200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text) {
//   var data=JSON.parse(text);
//   console.log(data);
  // details(data.basics);
  // career(data.careerobjective);
  // education(data.education);
  // skillset(data.skills);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile= loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.careerobjective);
  education(data.education);
  skillset(data.skills);
  achievements(data.achievements);
})
var child = document.querySelector(".childone")
function details(det)
{
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);
  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);
  var mail = document.createElement("a");
  mail.href = "mailto:raasisuragam@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);
  var add = document.createElement("h3")
  add.textContent = "Address:";
  child.appendChild(add);
  var u = document.createElement("hr");
  child.appendChild(u);
  var address = document.createElement("h3");
  address.textContent = det.address;
  child.appendChild(address);
}
var child2 = document.querySelector(".childtwo")
function career(careerinfo)
{
  var head = document.createElement("h2");
  head.textContent = "CareerObjective:";
  child2.appendChild(head);
  var u1 = document.createElement("hr");
  child2.appendChild(u1);
  var info = document.createElement("h3");
  info.textContent = careerinfo.info;
  child2.appendChild(info);
}
function education(edu)
{
  var ed = document.createElement("h2");
  ed.textContent = "Educational Qualifications:";
  child2.appendChild(ed);
  var u2 = document.createElement("hr");
  child2.appendChild(u2);
  for(i=0;i<edu.length;i++)
  {
    var deg=document.createElement("h3");
    deg.textContent=edu[i].degree;
    child2.appendChild(deg);
    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].institute;
    eduul.appendChild(eduli);
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].data;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function skillset(skillinfo)
{
  var sk = document.createElement("h2");
  sk.textContent = "Technical skills";
  child2.appendChild(sk);
  var u3 = document.createElement("hr");
  child2.appendChild(u3);
  var skilldata = document.createElement("table");
  skilldata.border = "1";
  child2.appendChild(skilldata);
  tabledata="";
  for(i=0;i<skillinfo.length;i++)
  {
    tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
    }
    skilldata.innerHTML=tabledata;
}
function achievements(achieveinfo)
{
  var ac = document.createElement("h2");
  ac.textContent = "Achievements from 2016-2018";
  child2.appendChild(ac);
  var u3 = document.createElement("hr");
  child2.appendChild(u3);
  var acul=document.createElement("ul");
  var acli=document.createElement("li");
  acli.textContent=achieveinfo.ppt;
  acul.appendChild(acli);
  var acli=document.createElement("li");
  acli.textContent=achieveinfo.debate;
  acul.appendChild(acli);
  var acli=document.createElement("li");
  acli.textContent=achieveinfo.code;
  acul.appendChild(acli);
  child2.appendChild(acul);
}
