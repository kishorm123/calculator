//1 display number on text field
function displayNumber(num){
    result.value+=num
}
//to clear
function clearText(){
    result.value=""
}
//to evaluate
function evaluateExp(){
    result.value=eval(result.value)
}
//backspace
function removeLast(){
    result.value=result.value.slice(0,-1)
}