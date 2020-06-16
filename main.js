
const divTimer = document.getElementById('clock');
const cf = document.getElementById('cf');
let cfFlag = true;
cf.addEventListener('click' , function changeformat(){
    cfFlag = !cfFlag;
    console.log(cfFlag);  
} );

clock();
function clock(){
    var d = new Date();
    var hr  = d.getHours();
    var mt  = d.getMinutes();
    var sec = d.getSeconds();
    if(cfFlag===true){
    cf.textContent ='Change to 24 Hr format';
    if (hr>12){hr=hr-12; sec = sec +' PM';}
    else {sec=sec+' AM';}}
    else {cf.textContent ='Change to 12 Hr format';}
    divTimer.textContent = hr+':'+mt+':'+sec;
    setTimeout(clock,100);
}