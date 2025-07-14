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


    
const textEl = document.querySelector("#scramble");
const originalText = textEl.textContent;
const characters = "!@#$%^&*()_+=-?><~{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charsArray = [...originalText];

// 글자들을 <span class="char">로 감싸고, 원래 문자도 data-original로 저장
textEl.innerHTML = charsArray.map(char => `<span class="char" data-original="${char}">${char}</span>`).join("");
const charEls = textEl.querySelectorAll(".char");

// 마우스 근처에서 스크램블 효과 실행
textEl.addEventListener("pointermove", (e) => {
  charEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 100) {
      scramble(el);
    }
  });
});

// 스크램블 후 복원
function scramble(el) {
  // 이미 실행 중이면 다시 하지 않음
  if (el.dataset.scrambling === "true") return;

  const original = el.dataset.original;
  const scrambleDuration = 0.6;
  const scrambleInterval = 0.04;
  let count = 0;

  el.dataset.scrambling = "true"; // 상태 표시

  const interval = setInterval(() => {
    el.textContent = characters[Math.floor(Math.random() * characters.length)];
    count += scrambleInterval;

    if (count >= scrambleDuration) {
      clearInterval(interval);
      el.textContent = original;
      el.dataset.scrambling = "false"; // 복원 완료
    }
  }, scrambleInterval * 1000);
}

//  별 여러 개 생성 
  const count = 1000;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // 랜덤 크기
    const size = Math.random() * 2 + 5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // 문서 전체 높이 기준 랜덤 위치
    const bodyHeight = document.body.scrollHeight;
    star.style.top = `${Math.random() * bodyHeight}px`;
    star.style.left = `${Math.random() * 90}vw`;

    // 애니메이션 딜레이
    star.style.animationDelay = `${Math.random() * 2}s`;

    // 추가
    document.body.appendChild(star);
  }

  //resumeToggleBtn 

  const pauseBtn = document.querySelector('.resumePauseBtn');
  const playBtn = document.querySelector('.resumePlayBtn');

  pauseBtn.addEventListener('click', () => {
    mySwiper2.autoplay.stop(); // ⛔ 정지
    pauseBtn.classList.remove('on');
    playBtn.classList.add('on');
  });

  playBtn.addEventListener('click', () => {
    mySwiper2.autoplay.start(); // ▶️ 재생
    playBtn.classList.remove('on');
    pauseBtn.classList.add('on');
  });


//skills, Career, certification

  gsap.to(".svg1", { 
    duration: 2,
    x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
    xPercent: 50,
    // or target SVG attributes
    attr: {
      fill: '#8d3dae',
      rx: 50,
    },
  });
  // gsap.to(".svgBox2", { 
  //   duration: 2,
  //   x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  //   xPercent: 100,
  //   // or target SVG attributes
  //   attr: {
  //     fill: '#8d3dae',
  //     rx: 50, 
  //   },
  // });
  // gsap.to(".svgBox3", { 
  //   duration: 2,
  //   x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  //   xPercent: 100,
  //   // or target SVG attributes
  //   attr: {
  //     fill: '#8d3dae',
  //     rx: 50, 
  //   },
  // });
  // gsap.to(".svgBox4", { 
  //   duration: 2,
  //   x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  //   xPercent: 100,
  //   // or target SVG attributes
  //   attr: {
  //     fill: '#8d3dae',
  //     rx: 50, 
  //   },
  // });


});

