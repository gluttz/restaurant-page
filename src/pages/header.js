import elem from "../functions/elem";
import '../css/header.css';
const headerDiv = function(){
    const header = elem({prop: "div", id: "header", 
                         children: [
                            elem({prop: "h1", textContent: "Diner"}),
                            elem({prop: "ul", children: [
                                elem({prop: "li", textContent: "Home", id: "home", className: "button"}),
                                elem({prop: "li", textContent: "Menu", id: "menu", className: "button"}),
                                elem({prop: "li", textContent: "Contact", id: "contact", className: "button"})
                            ]})
                         ]
    })

    return header;
}

export default headerDiv;