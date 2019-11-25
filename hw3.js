
function colorInput(subject) {
    var color = document.getElementById(subject).value;
    subject = subject.replace("color", "");
    var elements=document.getElementsByClassName(subject)
    for (var i=0; i<elements.length;i++){
        elements[i].style.backgroundColor=color;
    }
    
}
