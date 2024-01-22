
//Toggole bar className is .togglebar
var Bar=document.querySelector('#bar');
Bar.addEventListener('click',function(){
    Bar.classList.toggle('togglebar');
    
})

//Create a new class arrowX click on displey none
var displeyArrow=document.querySelector('.arrowX');
var messageBox=document.querySelector('.messageBox');
//Search box on displey block
var searchBox=document.querySelector('.searchBox');
displeyArrow.addEventListener('click',function(){
    messageBox.classList.add('ChangeChatBox');
    searchBox.classList.add('ShowSearchBox');
})

//when user click in item the remove ClassName
var Items=document.querySelector('.Items');
Items.addEventListener('click', function(){
    messageBox.classList.remove('ChangeChatBox');
    searchBox.classList.remove('ShowSearchBox');
})
