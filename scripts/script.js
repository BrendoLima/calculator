
function myFunction() {
  let element = document.createElement("link");
  let atribute = document.createAttribute("class");
  atribute.value = "democlass";
  element.setAttributeNode(atribute);
  //Escolher zona para adicionar elemento
  zone = "body"
  if ( zone == "head") {
    document.head.appendChild(element);
  }else{
    document.body.appendChild(element);
  }
  //
  console.log(element);
}
/*
      Estágios de um elemento:
  createElement
  createAttribute + setAttribute
  appendChild



Criar um elemento
algarismos = ["0","1","2","3","4","5","6","7","8","9",]
operadores = ["+","-","/","*"]

console.log(
  "...",
  "/",
  "*",
  "-",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  ".",
  "1",
  "2",
  "3",
  "0",
  ","
);
*/
