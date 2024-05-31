
let array = new Array(8);

document.addEventListener("mousemove", function(event) {
    let dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    
    if(array.length != 8){
        array.push(document.body.appendChild(dot))
    }else
    {
        let removedDot = array.shift();
        removedDot.remove();
        
        array.push(document.body.appendChild(dot))
    }


    });