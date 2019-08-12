window.onload=function () {
let onetwo = document.querySelectorAll(".box-one")
    console.log(onetwo)
    let Huanz = document.querySelectorAll(".Huan-img")
    Huanz[0].style.zIndex = 10
 let colors = [`#00b262`,`#F1F1F1`]


    onetwo.forEach((item,index)=>{
        item.onmouseenter = function(){
          onetwo.forEach(function (it,i) {

              it.style.backgroundColor=colors[1]
          })

            Huanz.forEach(function(item,index){
                item.style.zIndex = 0
            })
           Huanz[index].style.zIndex = 10

           item.style.backgroundColor=`#00b262`

        }
    })

}
