import elem from "../functions/elem";
import '../css/contact.css';

const contact = function(){
    const content = document.querySelector("#content");
    const contactButton = document.querySelector("#contact");
    contactButton.classList.add("selected");
    
    const contactContainer = content.appendChild(elem({prop: "div", id: "contactContainer"}))
    contactContainer.appendChild(
        elem({prop: "div", className: "contactDiv", children: [
            elem({prop: "h2", textContent: "Phone"}),
            elem({prop: "h3", textContent: "(555)-555-5555"})
        ]})
    );
    contactContainer.appendChild(
        elem({prop: "div", className: "contactDiv", children: [
            elem({prop: "h2", textContent: "Email"}),
            elem({prop: "h3", textContent: "thediner@gmail.com"})
        ]})
    );
    contactContainer.appendChild(
        elem({prop: "div", className: "contactDiv", children: [
            elem({prop: "div", className: "icon", id: "facebook"}),
            elem({prop: "div", className: "icon", id: "twitter"}),
            elem({prop: "div", className: "icon", id: "youtube"}),
            elem({prop: "div", className: "icon", id: "instagram"})
        ]})
    );
}
export default contact;