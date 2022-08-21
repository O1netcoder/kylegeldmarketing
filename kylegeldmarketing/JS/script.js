let sectionProgress = document.querySelector(".section_progress"),
    progressValue = document.querySelector(".progress_value");

let progressStartValue = 0,
    progressEndValue = 41,
    speed = 100;

let progress = setInterval(()=>{
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}`
    sectionProgress.style.background = `conic-gradient(#7d2ae8  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue ){
        clearInterval(progress);
    }
     
},speed);

let sectionProgress2 = document.querySelector(".section_progress2"),
    progressValue2 = document.querySelector(".progress_value2");

let progressStartValue2 = 0,
    progressEndValue2 = 41,
    speed2 = 100;

let progress2 = setInterval(()=>{
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}`
    sectionProgress2.style.background = `conic-gradient(#7d2ae8  ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2 ){
        clearInterval(progress2);
    }
     
},speed);

let sectionProgress3 = document.querySelector(".section_progress3"),
    progressValue3 = document.querySelector(".progress_value3");

let progressStartValue3 = 0,
    progressEndValue3 = 95,
    speed3 = 100;

let progress3 = setInterval(()=>{
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    sectionProgress3.style.background = `conic-gradient(#7d2ae8  ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3 ){
        clearInterval(progress3);
    }
     
},speed);




 