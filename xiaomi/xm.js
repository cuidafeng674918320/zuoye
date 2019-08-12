function java() {
    let hotright = document.querySelectorAll(".hot")
    let houseBox6 = document.querySelectorAll(".householdright")
    houseBox6[0].style.zIndex = 10
    hotright.forEach((item,index)=>{

        item.onmouseenter = function(){
          hotright.forEach(function (item,index) {
              item.style.color='#333'
              item.style.borderColor='#f5f5f5'
          })
            hotright[index].style.color='#ff6700'
            item.style.borderColor='#ff6700'
            houseBox6.forEach(function(item,index){
                item.style.zIndex = 0
            })
            houseBox6[index].style.zIndex = 10

        }
    })
}

function lunb() {

    let img =document.querySelectorAll('.lunbo-img')
    console.log(img)
    let lunImg=document.querySelector('.lunImg')
    console.dir(lunImg)
    let left=document.querySelector('.imgleft')
    console.log(left)
     let right=document.querySelector('.imgright')
      let lunbodian=document.querySelectorAll('.lunbodiana')
console.log(lunbodian)
    let  now=0;
    function run(type=0) {
       if(type==0){
            now+=1;
        if(now>img.length-1){
            now=0
        }

       }else {
           now-=1
           if (now<0){
               now=4
           }
       }
 lunbodian.forEach(function (item,index) {
            item.classList.remove('teshu')
        });
        lunbodian[now].classList.add('teshu')


        img.forEach(function (item,index) {
            item.classList.remove('active')
        });
        img[now].classList.add('active')
    }
   let t= setInterval(run,3000)
  lunImg.onmouseenter = function () {
      clearInterval(t)
  }
  lunImg.onmouseleave =function () {
      t=setInterval(run,3000)
  }
right.onclick=function () {

    run(0)
}
left.onclick=function () {
    run(1)
}
 window.onblur = function(){
            clearInterval(t)
        }
          window.onfocus = function(){
            t = setInterval(run,2000)
        }

lunbodian.forEach(function (item,index) {
    item.onclick=function () {
        lunbodian.forEach(function (item,index) {
                item.classList.remove('teshu')
        })
  lunbodian[index].classList.add('teshu')
        img.forEach(function (item,i) {
            item.classList.remove('active')
        })
        img[index].classList.add('active')
        now=index
    }

})
}
