let element
function createElement(tag) {
    element = document.createElement(toString(tag));
}
function createAttribute(atribute,value) {
    let property
    property = document.createAttribute(toString(atribute));
    property.value = toString(value);
    element.setAttributeNode(property);
}

//////////
element = document.createElement("link");
//
atribute = document.createAttribute("rel");
atribute.value = "stylesheet";
element.setAttributeNode(atribute);
//
atribute = document.createAttribute("href");
atribute.value = "/css/reset.css";
element.setAttributeNode(atribute);
//
document.head.appendChild(element);
///////////
element = document.createElement("link");
//
atribute = document.createAttribute("rel");
atribute.value = "stylesheet";
element.setAttributeNode(atribute);
//
atribute = document.createAttribute("href");
atribute.value = "/css/styles.css";
element.setAttributeNode(atribute);
//
document.head.appendChild(element);
//

console.log(element);
