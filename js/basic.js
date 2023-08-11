//전역 메뉴바 기본 토글버튼
const gnbBtn = document.querySelector("div.gnb_btn")
const gnbMenu = document.querySelector("div.gnb")

gnbBtn.addEventListener("click",(e)=>{
    gnbMenu.classList.toggle("on");
});

//content4,5,6 웹유효성,접근성 팝업버튼 
const testOpenBtn = document.querySelectorAll(".web_app_btn_open")
const testCloseBtn = document.querySelectorAll(".web_app_btn_close")
const testViewOpen = document.querySelectorAll(".web_app_btn_open_test")
const testMoveBtn = document.querySelectorAll(".web_app_btn_01")


/*오픈하는경우(오픈되어있지않음)*/ 
  for(let c=0; c<testOpenBtn.length; c++){
    testOpenBtn[c].addEventListener("click",(e)=>{
      testViewOpen[c].classList.add("on");
      testCloseBtn[c].classList.add("on");
      testOpenBtn[c].classList.add("on");
      testMoveBtn[c].classList.add("on");
    });
  }
/*클로즈하는경우(오픈되어있음)*/ 
  for(let c=0; c<testCloseBtn.length; c++){
    testCloseBtn[c].addEventListener("click",(e)=>{
      testViewOpen[c].classList.remove("on");
      testCloseBtn[c].classList.remove("on");
      testOpenBtn[c].classList.remove("on");
      testMoveBtn[c].classList.remove("on");
    });
  }




//써클 이벤트들 
let circle = document.querySelectorAll("#circle_wrap>div");
//창문
window.addEventListener('scroll',()=>{
  for (let c = 0; c < contents.length; c++) {
    if (contents[c].classList.contains("on")) {
      circle.forEach(frame => frame.classList.add("on"));
      circle.forEach(frame => frame.classList.remove("con1"));
      circle.forEach(frame => frame.classList.remove("end"));
    }
    // if (c === 1 && contents[c] && contents[c].classList.contains("on"))
    if (c === 1 && contents[c] && contents[c].classList.contains("on")) {
      circle.forEach(frame => frame.classList.add("on"));
      circle.forEach(frame => frame.classList.add("con1"));
      circle.forEach(frame => frame.classList.remove("con2"));
      circle.forEach(frame => frame.classList.remove("end"));
    }
    if (c === 2 && contents[c] && contents[c].classList.contains("on")){
      circle.forEach(frame => frame.classList.add("on"));
      circle.forEach(frame => frame.classList.remove("con1"));
      circle.forEach(frame => frame.classList.add("con2"));
      circle.forEach(frame => frame.classList.remove("end"));
      
    }
    if (c === 7 && contents[c] && contents[c].classList.contains("on")){
      circle.forEach(frame => frame.classList.add("on"));
      circle.forEach(frame => frame.classList.remove("con1"));
      circle.forEach(frame => frame.classList.remove("con2"));
      circle.forEach(frame => frame.classList.add("end"));
      
    }
//         circle.forEach(frame => frame.classList.add("on"));
//         circle.forEach(frame => frame.classList.add("con1"));
//         circle.forEach(frame => frame.classList.remove("con2"));
//         break; // 추가된 경우에 더 이상 반복할 필요가 없으므로 반복문 종료
//     } else if(contents[c+1].classList.contains("on")){
//       circle.forEach(frame => frame.classList.remove("on"));
//         circle.forEach(frame => frame.classList.add("con1"));
//         circle.forEach(frame => frame.classList.remove("con2"));
//         break;
//     }else if(contents[c+2].classList.contains("on")){
//       circle.forEach(frame => frame.classList.remove("on"));
//       circle.forEach(frame => frame.classList.remove("con1"));
//       circle.forEach(frame => frame.classList.add("con2"));
//       break;
//     }else if(contents[c+7].classList.contains("on")){
//       circle.forEach(frame => frame.classList.remove("on"));
//       circle.forEach(frame => frame.classList.add("end"));
//       circle.forEach(frame => frame.classList.remove("con1"));
//       circle.forEach(frame => frame.classList.remove("con2"));
//         break;
//     }else{
//       circle.forEach(frame => frame.classList.remove("on"));
//       circle.forEach(frame => frame.classList.remove("con1"));
//       circle.forEach(frame => frame.classList.remove("con2"));
//       circle.forEach(frame => frame.classList.remove("end"));
// }
  }
})
//     for(let c=1; c<sections.length; c++){

//         /*10000이 넘어갈시 자동으로 모든 써클에 on이 붙음*/
//         // scrollY >= sections[c].offsetTop && scrollY < sections[c].offsetTop + sections[c].clientHeight
//         if (scrollY >= 0 ) {
//           circle.forEach(frame => frame.classList.add("on"));
//           // 콜백 함수 내부에서 frame 변수로 각 요소에 접근할 수 있음
//         }
//         if (scrollY >= sections[c+1].offsetTop){
//           circle.forEach(frame => frame.classList.add("con2"));
//         }else if(scrollY < sections[c+1].offsetTop){
//           circle.forEach(frame => frame.classList.remove("con2"));
//         }

//         if (scrollY <= sections[c+2].offsetTop){
//           circle.forEach(frame => frame.classList.add("con1"));
//         }else if(scrollY <= sections[c+2].offsetTop){
//           circle.forEach(frame => frame.classList.remove("con1"));
//         }

//         if (scrollY >= sections[c+7].offsetTop && scrollY <= sections[c+7].offsetTop) {
//           circle.forEach(frame => frame.classList.add("end"));
//           // 콜백 함수 내부에서 frame 변수로 각 요소에 접근할 수 있음
//         }else {
//           circle.forEach(frame => frame.classList.remove("end"));
//         }

        
//     }
// })

//main.js
const contents = document.querySelectorAll("#container>div");
const sections = document.querySelectorAll("#container > div > section");
// const lis = document.querySelectorAll("aside > .quick > li");

/*div 윈도우 화면 크기맞춤*/
//윈도우 높이값을 가져와서 
//#container > div 높이값으로 지정
//윈도우 resize가 되도 동일하게 적용
let devHeight = window.innerHeight;

window.addEventListener("resize",()=>{
    devHeight = window.innerHeight;
})

for(let i=0; i<contents.length; i++){
  contents[i].style.height = `${devHeight}px`;
  }

// for(let i=0; i<contents.length; i++){
//     if(i === 0){
//         contents[i].style.height = `${devHeight+10000}px`;
//     }else if(i===2){
//         contents[i].style.height = `${devHeight*2}px`;
//     }else{
//         contents[i].style.height = `${devHeight}px`;
//     }    
// }

console.log(devHeight);

/*quick 퀵버튼*/
const lis = document.querySelectorAll("div.gnb_open>ul>li");
//quick을 눌렀을때 스크롤이 
//content(윈도우) 높이값 만큼씩 움직이게 li.on을 눌러라

for(let h=0; h<lis.length; h++){
  lis[h].addEventListener("click", (e) =>{
    e.preventDefault();
    activation(h*devHeight)
  });
}

  
/*content 화면 스크롤을 위아래로 움직일때 한번에 내려가는 효과*/ 
/*content에서 마우스 휠을 움직였을때 
/*content에서 마우스 휠을 움직였을때 
위로 휠이 움직일때 앞에 content로 이동, 
아래 휠이 움직일때는 뒤에 content로 이동,
이동하고 나서 sections.on , quick.on이 붙어라*/

for(let i =0; i<contents.length; i++){
  contents[i].addEventListener('wheel',e=>{

    if(e.deltaY < 0){
      /*만약 e deltaY 가 음수0이라면 휠이 위로 올라간다면*/
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      activation(prev)
      activation2((i-1),contents)
    }else if(e.deltaY>0){
      //wheel scroll down 양수
      let next = e.currentTarget.nextElementSibling.offsetTop;
      activation(next)
      activation2((i+1),contents)

      // if(i===2){
      //   activation(next-devHeight)
      // }
    }

  });
}



/*1번 함수 (scroll+for+if)문의 함수 (화살표식)*/
/*현재페이지의 on을 붙이는 식의 함수*/
let activation = (scrTop) => {
  window.scroll({
      top: scrTop,
      left:0,
      behavior:"smooth"
    });
    
    for(t=0; t<sections.length; t++){
      if(scrTop >= [t]*devHeight && scrTop<(t+1)*devHeight){
        activation2(t,contents);
        
      }
    }
}
/*2번 함수 forEach 문 함수(화살표식)*/
let activation2 =(index,list)=>{
  list.forEach(item =>{
    item.classList.remove("on");
  });
  list[index].classList.add("on");
}


//디자인 패널 페이지 넘기는 이벤트

/*quick 퀵버튼*/
const designPage = document.querySelectorAll("div.design_page");
const designBtnNext = document.querySelector("div.design_btn_next");
const designBtnPrev = document.querySelector("div.design_btn_prev");
//quick을 눌렀을때 스크롤이 
//content(윈도우) 높이값 만큼씩 움직이게 li.on을 눌러라
console.log(designPage)


let currentIndex = 0;

designBtnNext.addEventListener("click", () => {
  currentIndex++; // 현재 인덱스 증가

  if (currentIndex >= designPage.length) {
    currentIndex = 0;
  }

  for (let d = 0; d < designPage.length; d++) {
    if (d === currentIndex) {
      designPage[d].classList.add("pn1");
      designPage[d].classList.remove("pn2");
      designPage[d].classList.remove("pn3");
      designPage[d].classList.remove("pn0");
    } else if (d === currentIndex + 1 ) {
      designPage[d].classList.remove("pn1");
      designPage[d].classList.add("pn2");
      designPage[d].classList.remove("pn3");
      designPage[d].classList.remove("pn0");
    } else if (d === currentIndex + 2 ) {
      designPage[d].classList.remove("pn1");
      designPage[d].classList.remove("pn2");
      designPage[d].classList.add("pn3");
      designPage[d].classList.remove("pn0");
    } else {
      designPage[d].classList.remove("pn1");
      designPage[d].classList.remove("pn2");
      designPage[d].classList.remove("pn3");
      designPage[d].classList.add("pn0");
    }
  }
});


designBtnPrev.addEventListener("click", () => {
  currentIndex++; // 현재 인덱스 증가

  if (currentIndex >= designPage.length) {
    currentIndex = 0;
  }

  for (let d = 0; d < designPage.length; d++) {
    if (d === currentIndex) {
      designPage[d].classList.add("pn1");
      designPage[d].classList.remove("pn2");
      designPage[d].classList.remove("pn3");
      designPage[d].classList.remove("pn0");
    } else if (d === currentIndex - 1 ) {
      designPage[d].classList.remove("pn1");
      designPage[d].classList.add("pn2");
      designPage[d].classList.remove("pn3");
      designPage[d].classList.remove("pn0");
    } else if (d === currentIndex - 2 ) {
      designPage[d].classList.remove("pn1");
      designPage[d].classList.remove("pn2");
      designPage[d].classList.add("pn3");
      designPage[d].classList.remove("pn0");
    } else {
      designPage[d].classList.remove("pn1");
      designPage[d].classList.remove("pn2");
      designPage[d].classList.remove("pn3");
      designPage[d].classList.add("pn0");
    }
  }
});
