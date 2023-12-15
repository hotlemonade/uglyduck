 // .wrap을 가지고오며 script에 wrap 변수에 넣어준다.
 const wrap = document.querySelector('.wrap');
 // .cow을 가지고온다
 const cow = document.querySelector('.charactor-cow');
 const circle = cow.querySelector('.circle')
 let cowBox = cow.getBoundingClientRect();
 console.log( cowBox.top, cowBox.bottom)
 // console.log(cow)
 const normal = document.querySelector('.normal')

 

 window.addEventListener('scroll', (e) => {
     let pos = window.scrollY;
     let deg = pos * 0.1; 
     let cowBottom = cowBox.top + (pos*0.3)
     // console.log(`deg : ${deg}`)

     if( deg <= 180) {
         cow.style.transform = `rotate(-${deg}deg)`;
         circle.classList.remove('on')
         cow.style.bottom = '-30vh';
     } else if(deg > 100) { 
         cow.style.transform = `rotate(-180deg)`; 

         if(deg > 400){
           circle.classList.add('on')
           cow.style.bottom = `${cowBottom}px`; 
           console.log(`cowBottom : ${cowBottom}`)
         }
     } 

     if( pos > 6000) {
         window.location.href= './sub.html';
     }

     if(cowBottom > 2800) {
         wrap.style.position = 'relative';
     
     } else {
         wrap.style.position = 'fixed';
     }
 });

