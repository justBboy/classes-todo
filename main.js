/* var document = {
    body: {

    },
    getElementById: function(){
        //does some operation to locate the element
        return {

        }
    }
} */

function calculateArea(length, breadth) {
    var area = length * breadth;
    return area;
}

var helloText = document.getElementById("helloText");
var btns = document.getElementsByTagName("a");
var btn = document.getElementById("helloBtn");
var helloText2 = document.getElementsByClassName("text");

var helloText = document.querySelector("div > button");

/* btn.onclick = function() {
    document.write("hello clicked");
} */

var content = document.getElementById("content");

btn.addEventListener("click", function() {
    content.innerHTML = `<h2 class="hello-content">This is new content</h2>`
})

/* console.log(helloText2)

console.log(btns)

console.dir(helloText);

var MyTable = {
    numberOfLegs: 4,
    carryItem: function() {
        // code for carrying item   
    }
} */