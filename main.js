
let i = 0;
let typeWriter = () => {

    let myNameContainer = document.querySelector('.top-container > .my-name')
    let myName = "I'm AL"
    let speed = 150;
    
    if (i < myName.length) {
        myNameContainer.innerHTML += myName.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()
