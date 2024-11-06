var count=3 ;
var countElement = document.querySelector("#count");

console.log(countElement);

function like() {
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count);
}