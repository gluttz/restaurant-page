
import headerDiv from "../pages/header"
import home from "../pages/home"

const firstLoad = function(){
    const content = document.querySelector("#content");
    const header = headerDiv();
    content.appendChild(header);
    home();
}

export default firstLoad;