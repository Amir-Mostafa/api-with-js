
var httpRequest=new XMLHttpRequest();
httpRequest.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
httpRequest.send();
var postsRow=document.getElementById("posts");
var posts=[];
httpRequest.addEventListener("readystatechange",function () {
    if(httpRequest.readyState==4)
    {
        posts= JSON.parse(httpRequest.response).recipes;
         displayData();
         console.log(posts);
    }
  });

  function displayData()
  {
      var txt=``;
      
      for(var i=0;i<posts.length;i++)
      {
          
          txt+=
            
        `
        <div id="item" class="col-md-4 item " >
        <div class="publisher d-flex align-items-center">
        <img src="images/download.png" >
        <a href="${posts[i].publisher_url}" class="ml-3" >${posts[i].publisher}</a>
    </div>
    <div class="title text-info">
        ${posts[i].title}
    </div>
    <div class="post-image">
        <img  class="img-fluid"  src="${posts[i].image_url}">

    </div>

    <div class="controls mt-2">
        <a href="${posts[i].source_url}"><button class="btn btn-info" >Source</button></a>
        <a href="details.html?rid=${posts[i].recipe_id}" ><button class="btn btn-info" >Details</button>
    </div>
    </div>
          `
      }
      postsRow.innerHTML=txt;
      
  }
