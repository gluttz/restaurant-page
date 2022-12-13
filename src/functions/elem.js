const elem = function(content){
    let el = document.createElement(content["prop"]);
    let children = content["children"];
    if(children){
        for(let child of children){
            el.appendChild(child)
        }
    }
    let text = content["textContent"];
    if(text){
        el.textContent = text;
    }
    let id = content["id"];
    if(id){
        el.id = id;
    }
    let className = content["className"]
    if(className){
        el.className = className;
    }
    let HTML = content["innerHTML"];
    if(HTML){
        el.innerHTML = HTML;
    }
    let src = content["src"];
    if(src){
        el.src = src;
    }
    return el;
}

export default elem;


