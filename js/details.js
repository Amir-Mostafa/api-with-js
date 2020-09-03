
var query =new URLSearchParams(window.location.search);
var currentId=query.get("rid"); 



var httpRequest=new XMLHttpRequest();
httpRequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${currentId}`);
httpRequest.send();
//var postsRow=document.getElementById("posts");
var ings=[];
httpRequest.addEventListener("readystatechange",function () {
    if(httpRequest.readyState==4&&httpRequest.status==200)
    {
        recipes= JSON.parse(httpRequest.response).recipe;
        document.getElementById("re-img").src = recipes.image_url;
         ings=recipes.ingredients;
         console.log(recipes);
         displayData();
    }
  });

function displayData()
{
  var str=``;
  for(var i=0;i<ings.length;i++)
  {
    str+=`<li> ${ings[i]} </li>`;
  }
  document.getElementById("ing-ul").innerHTML=str;
}