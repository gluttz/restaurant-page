import elem from "../functions/elem"
import '../css/home.css';
const home = function(){
    const content = document.querySelector("#content");
    const homeButton = document.querySelector("#home");
    homeButton.classList.add("selected");
    const home = content.appendChild(elem({prop: "div", id: "homeContainer"}));
    
    home.appendChild(elem({prop: "div", id: "about", className: "container", 
                           children: [
                                elem({prop: "h2", textContent: "About Us"}),
                                elem({prop: "p", textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at diam posuere, eleifend elit ut, egestas libero. Mauris sem leo, consequat eget orci non, molestie egestas massa. Vivamus facilisis luctus nisi vel blandit. Sed vel ligula posuere, sollicitudin tellus ac, dapibus libero. Sed hendrerit luctus arcu, id fringilla mi. Praesent a dolor non velit elementum sollicitudin et in nisl. Fusce iaculis facilisis quam, sed convallis nulla luctus vel. Sed consequat vitae nulla id aliquet."})
    ]}));
    
    home.appendChild(elem({prop: "div", id: "hours", className: "container", 
                           children: [   
                                elem({prop: "h2", textContent: "Hours"}),
                                elem({prop: "ul", 
                                      children: [
                                            elem({prop: "li", textContent: "Monday: 10-10"}),
                                            elem({prop: "li", textContent: "Tuesday: 10-10"}),
                                            elem({prop: "li", textContent: "Wednesday: 10-10"}),
                                            elem({prop: "li", textContent: "Thursday: 10-10"}),
                                            elem({prop: "li", textContent: "Friday: 10-12"}),
                                            elem({prop: "li", textContent: "Saturday: 10-12"}),
                                            elem({prop: "li", textContent: "Sunday: 10-10"})
                                      ]})                     
    ]}));

    home.appendChild(elem({prop: "div", id: "location", className: "container",
                           children: [
                                elem({prop: "h2", textContent: "Location"}),
                                elem({prop: "p", innerHTML: "123 North St. <br> NY, NY <br> 01234"}),
                                elem({prop: "iframe", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.698784889143!2d-736.98124444481675!3d40.75433948818903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1670904122638!5m2!1sen!2sus"})
    ]}));

}



export default home;