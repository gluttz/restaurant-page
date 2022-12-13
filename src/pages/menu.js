import elem from "../functions/elem"
import '../css/menu.css';

const menu = function(){
    const content = document.querySelector("#content");
    const menuButton = document.querySelector("#menu");
    menuButton.classList.add("selected");
    
    const menuContainer = content.appendChild(elem({prop: "div", id: "menuContainer"}));
    
    menuContainer.appendChild(elem({
        prop: "div", id: "drinksContainer", children: [
            elem({prop: "h2", textContent: "Drinks"}),
            elem({prop: "ul", children: [
                elem({prop: "li", className: "drink", textContent: "Coke"}),
                elem({prop: "li", className: "drink", textContent: "Sprite"}),
                elem({prop: "li", className: "drink", textContent: "Root Beer"}),
                elem({prop: "li", className: "drink", textContent: "Beer"}),
                elem({prop: "li", className: "drink", textContent: "Wine"}),
                elem({prop: "li", className: "drink", textContent: "Whiskey"}),
                elem({prop: "li", className: "drink", textContent: "Water"}),
                elem({prop: "li", className: "drink", textContent: "Coffee"}),
                elem({prop: "li", className: "drink", textContent: "Tea"}),
            ]})
        ]
    }));

    menuContainer.appendChild(elem({prop: "div", id: "foodContainer", children: [
            elem({prop: "div", className: "food", id: "blt", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "B.L.T."}),
                    elem({prop: "h3", textContent: "$20"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "cheeseburger", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Cheeseburger"}),
                    elem({prop: "h3", textContent: "$25"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "chili", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Chili"}),
                    elem({prop: "h3", textContent: "$18"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "panini", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Panini"}),
                    elem({prop: "h3", textContent: "$20"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "pizza", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Pizza"}),
                    elem({prop: "h3", textContent: "$25"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "ramen", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Ramen"}),
                    elem({prop: "h3", textContent: "$22"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "salad", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Salad"}),
                    elem({prop: "h3", textContent: "$15"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "spaghetti", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Spaghetti"}),
                    elem({prop: "h3", textContent: "$25"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "stew", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Stew"}),
                    elem({prop: "h3", textContent: "$20"})
                ]})
            ]}),
            elem({prop: "div", className: "food", id: "sushi", children: [
                elem({prop: "div", className: "foodInfo", children: [
                    elem({prop: "h3", textContent: "Sushi"}),
                    elem({prop: "h3", textContent: "$30"})
                ]})
            ]})
        ]
    }));
}

export default menu;