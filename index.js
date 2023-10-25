let firstDiv = document.querySelector('.one'); 
let secondDiv = document.querySelector('.two'); 
let thirdDiv = document.querySelector('.three');
let fourthDiv = document.querySelector('.four');
let fifthDiv = document.querySelector('.five');  

 console.log(firstDiv) 
 firstDiv.onmouseenter = function(){
      firstDiv.children[0].style.color = 'white';  
 } 
 firstDiv.children[0].onmouseenter = function(){ 
      firstDiv.children[0].style.color = 'white';  
 }
 firstDiv.onmouseleave = function(){
  firstDiv.children[0].style.color = '#858E9C';  
 }  
 // second
 
 secondDiv.onmouseenter = function(){
  secondDiv.children[0].style.color = 'white';  
 } 
 secondDiv.children[0].onmouseenter = function(){ 
  secondDiv.children[0].style.color = 'white';  
 }
 secondDiv.onmouseleave = function(){
  secondDiv.children[0].style.color = '#858E9C';  
 } 
 //thired
 thirdDiv.onmouseenter = function(){
  thirdDiv.children[0].style.color = 'white';  
 } 
 thirdDiv.children[0].onmouseenter = function(){ 
  thirdDiv.children[0].style.color = 'white';  
 }
 thirdDiv.onmouseleave = function(){
  thirdDiv.children[0].style.color = '#858E9C';  
 } 
 //fourth
 fourthDiv.onmouseenter = function(){
  fourthDiv.children[0].style.color = 'white';  
 } 
 fourthDiv.children[0].onmouseenter = function(){ 
  fourthDiv.children[0].style.color = 'white';  
 }
 fourthDiv.onmouseleave = function(){
  fourthDiv.children[0].style.color = '#858E9C';  
 } 
 //five
 fifthDiv.onmouseenter = function(){
  fifthDiv.children[0].style.color = 'white';  
 } 
 fifthDiv.children[0].onmouseenter = function(){ 
  fifthDiv.children[0].style.color = 'white';  
 }
 fifthDiv.onmouseleave = function(){
  fifthDiv.children[0].style.color = '#858E9C';  
 } 
 