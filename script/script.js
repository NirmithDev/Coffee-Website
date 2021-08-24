//import { datas } from "../data/data";

let d = datas

//dessert items
let b= document.getElementById("dessert")
b.addEventListener("click",()=>{
    console.log("I WAS CLICKED")
    //fetch of all data    
    //console.log(d)
    let o1 = document.getElementById("out")
    let outTot=""
    for(let a2=0;a2<d.length;a2++){
       //console.log(d[a2])
       if(d[a2].iType=="Deserts"){
        outTot+=`
       <div id="outContainer">
            <h1 style="padding: 10px;">${d[a2].iName}</h1>
            <img src=${d[a2].iphoto} width="130" height="130" style="border-radius: 10px;">
            <p style="padding: 10px;font-size: 20px;">Cost: ${d[a2].iCost}</p>
        </div>
       `
       }
    }
    o1.innerHTML = outTot
})

//coffee items
let c4= document.getElementById("coffee")
c4.addEventListener("click",()=>{
    console.log("I WAS CLICKED")
    //fetch of all data    
    //console.log(d)
    let o1 = document.getElementById("out")
    let outTot=""
    for(let a2=0;a2<d.length;a2++){
       //console.log(d[a2])
       if(d[a2].iType=="Coffee"){
        outTot+=`
        <div id="outContainer">
             <h1 style="padding: 10px;">${d[a2].iName}</h1>
             <img src=${d[a2].iphoto} width="130" height="130" style="border-radius: 10px;">
             <p style="padding: 10px;font-size: 20px;">Cost: ${d[a2].iCost}</p>
         </div>
        `
       }
    }
    o1.innerHTML = outTot
})

//on loading the entire document it loads up all the menu items
document.addEventListener("DOMContentLoaded",function(){
    //console.log(d)
    //for loop to display all the items
    /*
        <div id="outContainer">
            <h1 style="padding: 10px;">Rangeena</h1>
            <img src="https://i1.wp.com/cookiecompanion.com/blog/wp-content/uploads/2017/04/qatar-rangeena-koekje-dadels-en-walnoten-verdelen-DSC_1147-copy.jpg" width="130" height="130" style="border-radius: 10px;">
            <p style="padding: 10px;font-size: 20px;">Cost: 5$</p>
        </div>
    */
   let o = document.getElementById("out")
   let outTot=""
   for(let a2=0;a2<d.length;a2++){
       //console.log(d[a2])
       outTot+=`
       <div id="outContainer">
            <h1 style="padding: 10px;">${d[a2].iName}</h1>
            <img src=${d[a2].iphoto} width="130" height="130" style="border-radius: 10px;">
            <p style="padding: 10px;font-size: 20px;">Cost: ${d[a2].iCost}</p>
        </div>
       `
   }
   o.innerHTML = outTot
})















