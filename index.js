fetch("https://web0final-project.herokuapp.com/data")
    .then(response=>response.json())
    .then(data=>{
        var ServiceContainer=document.getElementById("ServiceContainer");

        var Originaldiv=`<div class="service-item rounded pt-3">
                            <div class="p-4">
                            <i class="[icon]"></i>
                            <h5>[Service]</h5>
                            <p>[Discription]</p>
                            </div>
                         </div>
    `

        data.Services.forEach(element => {
            var currentdiv=Originaldiv;
            currentdiv=currentdiv.replace("[Time]",element["D"]);
            currentdiv=currentdiv.replace("[icon]",element["C"]);
            currentdiv=currentdiv.replace("[Service]",element["A"]);
            currentdiv=currentdiv.replace("[Discription]",element["B"]);
          
            var div=document.createElement("div");


            div.className="col-lg-3 col-sm-6 wow fadeInUp ";
            div.innerHTML=currentdiv;
            ServiceContainer.appendChild(div);
        });
    })


fetch("https://web0final-project.herokuapp.com/ChefData")
    .then(response=>response.json())
    .then(data=>{
        
        var ChefData=document.getElementById("ChefData");

        var Originalchefdiv=`<div class="team-item text-center rounded overflow-hidden">
        <div class="rounded-circle overflow-hidden m-4">
            <img class="img-fluid" src="[image]">
        </div>
        <h5 class="mb-0">[FullName]</h5>
        <small>[Designation]</small>
        <div class="d-flex justify-content-center mt-3">
            <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
            <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
        </div>
    </div>`
        data.chefList.forEach(element => {
            var currentchefdiv=Originalchefdiv;
            currentchefdiv=currentchefdiv.replace("[image]",element["C"]);
            currentchefdiv=currentchefdiv.replace("[FullName]",element["A"]);
            currentchefdiv=currentchefdiv.replace("[Designation]",element["B"]);

            var chefDiv=document.createElement("div");
            chefDiv.className="col-lg-3 col-md-6 wow fadeInUp";
           chefDiv.innerHTML=currentchefdiv;
              ChefData.appendChild(chefDiv);
        })
    })

fetch("https://web0final-project.herokuapp.com/Menu")
    .then(response=>response.json())
    .then(data=>{
     
        var MenuContainer=document.getElementById("Menu");
        var OriginalMenuDiv=`<div class="d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid rounded" src="[Image]" alt="" style="width: 80px;">
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                    <span>[Type]</span>
                                    <span class="text-primary">[Price]</span>
                                    </h5>
                                    <small class="fst-italic">[Ingrediants]</small>
                                </div>
                             </div>`

        data.Menu.forEach(element => {
                        
        var currentMenuDiv=OriginalMenuDiv;
        currentMenuDiv=currentMenuDiv.replace("[Type]",element["A"]);
        currentMenuDiv=currentMenuDiv.replace("[Ingrediants]",element["B"]);
        currentMenuDiv=currentMenuDiv.replace("[Price]",element["C"]);
        currentMenuDiv=currentMenuDiv.replace("[Image",element["D"]);


        var MenuDiv=document.createElement("div");
        MenuDiv.className="col-lg-6";
        MenuDiv.innerHTML=currentMenuDiv;
        MenuContainer.appendChild(MenuDiv);
        
    })
})



function postEmail(){
    let cName=document.getElementById("name").value;
    let cEmail=document.getElementById("email").value;
    let date=document.getElementById("datetime").value;
    let message=document.getElementById("message").value;
    let NoOfPeople=document.getElementById("select1").value;


fetch("https://web0final-project.herokuapp.com/send",{
    method: "POST",   
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
            },

    body: JSON.stringify(
        {
            "name":cName,
            "email":cEmail,
            "dateAndTime":date,
            "message":message,
            "NoOfPeople":NoOfPeople
        })
});
}