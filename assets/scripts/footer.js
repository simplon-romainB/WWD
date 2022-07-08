

let slide = setInterval(sliding, 3000);
let proto = 0
function sliding() {
    let proto1 = document.getElementById("proto1")
    let proto2 = document.getElementById("proto2")
    let proto3 = document.getElementById("proto3")
    let proto4 = document.getElementById("proto4")
    let proto5 = document.getElementById("proto5")
    

    const parts = [proto1, proto2, proto3, proto4, proto5]
    if (proto == 5) {
        proto = 0
    }
    parts[proto].classList.add("sliding")
    
    if (proto == 0) {
        parts[4].classList.remove("sliding")
        
    }
    else if (proto != 0) {
        parts[proto-1].classList.remove("sliding")
        
    }
    
    proto++

    

}