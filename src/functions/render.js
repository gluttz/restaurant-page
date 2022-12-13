const render = function(){
    const content = document.querySelector("#content");
    while(content.children.length > 1){
        content.children[1].remove();
    }
    const buttons = document.querySelectorAll("#header .button")
    for(let btn of buttons){
        btn.classList.remove("selected")
    }
}

export default render;