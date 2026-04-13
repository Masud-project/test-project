let display = document.getElementById('display');
function press(num){
    display.value += num;
}
function calculate(){
    display.value = eval(display.value);
}
function clearDisplay(){
    display.value = '';
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
    
}
function sqrt(){
    display.value = Math.sqrt(display.value);
}
function log(){
    display.value = Math.log10(display.value);
}
function ln(){
    display.value = Math.log(display.value);
}
function sin(){
    display.value = Math.sin(display.value);
}
function cos(){
    display.value = Math.cos(display.value);
}
function tan(){
    display.value = Math.tan(display.value);
}
function percent(){
    display.value = display.value / 100;
}
function power(){
    display.value = Math.pow(display.value, 2);
}
function equal(){
    display.value = eval(display.value);
}
