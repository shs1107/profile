document.addEventListener("DOMContentLoaded",function(){

    let btnMenu = document.querySelector(".btnMenu")
    let hiddenGnb = document.querySelector(".hiddenGnb")

    let btnMenuState = false
    btnMenu.addEventListener("click",function(){
        if(btnMenuState == false){
            // 일반 버튼 모양일 때
            hiddenGnb.classList.add("on")
            btnMenuState = true
            this.innerHTML = `<img src="./img/star.png" alt="닫기 버튼">`
        }else{
            // 닫기 버튼 모양일 때
            hiddenGnb.classList.remove("on")
            btnMenuState = false
            this.innerHTML = `<img src="./img/heart.png" alt="메뉴 버튼">`
        }
        
    })

    const gnbAtags = document.querySelectorAll(".gnb a")
    gnbAtags.forEach(function(atag){
        atag.addEventListener("click",function(){
            hiddenGnb.classList.remove("on")
            btnMenuState = false
            btnMenu.innerHTML = `<img src="./img/heart.png" alt="메뉴 버튼">`
        })
    })


    let gnb = document.querySelector(".gnb")
    let gnb_li = gnb.children
    
    for(let i=0 ; i<gnb_li.length ; i++){
        gnb_li[i].addEventListener("click",function(){
            hiddenGnb.classList.remove("on")
        })
    }
    
    // color 채워지는 소스코드
    let ddArray = document.querySelectorAll("dd[data-color]")
    ddArray.forEach(function(ddtag){
    let orcon = ddtag.textContent
    ddtag.innerHTML = `<span style="background-color:${orcon}"></span>${orcon}`
    });

    // btnMenu.addEventListener("mouseenter",function(){
    //     this.innerHTML = `<img src="./img/star.png" alt="닫기 버튼">`
    // })

    // btnMenu.addEventListener("mouseleave",function(){
    //     alert("TT")
    //     this.innerHTML = `<img src="./img/heart.png" alt="메뉴 버튼">`
    // })


    const boxes = document.querySelectorAll('.ltr');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        } else {
          entry.target.classList.remove('on');
        }
      });
    }, {
      threshold: 0.1 // 요소의 10%가 보여도 on 클래스 부여
    });

    boxes.forEach(box => observer.observe(box));

});

