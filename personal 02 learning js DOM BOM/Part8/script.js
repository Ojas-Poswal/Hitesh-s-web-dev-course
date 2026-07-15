//example 1 grabbing 

//basically pehle button select karo , phir kya karne pe kya hoga ye select karo  

document.getElementById("changeTextButton").addEventListener("click",function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The test has been changed"
})

// Select the button with id "changeTextButton" and add a click event listener.
// When the button is clicked, the function executes.
// Inside the function, select the paragraph with id "myParagraph".
// Change the paragraph's displayed text using the textContent property


//example 2 travessing the DOM
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let hold = document.getElementById("citiesList")
    hold.firstElementChild.classList.add("highlight")
})

//example 3  manipulating
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType = document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso"
    coffeeType.style.color = "red"
    coffeeType.style.backgroundColor = "lightyellow"
    coffeeType.style.padding = "5px"
})


//example 4

document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem = document.createElement("li")
    newItem.textContent = "eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})
//example 5 removal 
document.getElementById("removeLastTask").addEventListener("click",function(){
    let tasklist = document.getElementById("taskList")
    taskList.lastElementChild.remove()
})

//example 6 event alerts
document.getElementById("clickMeButton").addEventListener("mouseover",function(){
    alert("You hovered over the button!")
})

//example 7 event alerts
document.getElementById("teaList").addEventListener("click",function(event){
   if(event.target && event.target.matches('.teaItem')){ // ye isliye kyunki zyada elements bhi ho sakte hai toh vo hume disturb na kare
    alert("You clicked on a tea item: " + event.target.textContent)
   }
    
})
//example 8
document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault()
    // Normally, submitting a form refreshes the page.
// This line prevents the default behavior, so:
  let feedback = document.getElementById("feedbackInput").value //.value gives whatever user typed 
  document.getElementById("feedbackDisplay").textContent = "You submitted: " + feedback
})


//example 9 
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent = "DOM is fully loaded and parsed"
})

//example 10

document.getElementById("toggleHighlight").addEventListener("click",function(){
    let textelement = document.getElementById("descriptionText")
    textelement.classList.toggle("highlight")
})
