const render = function(){
    const content = document.querySelector("#content");
    while(content.children.length > 1){
        content.children[1].remove();
    }
    const buttons = document.querySelectorAll("#header .button")
    console.log(buttons)
    for(let btn of buttons){
        console.log(btn)
        btn.classList.remove("selected")
    }
}

export default render;