
var useName = document.querySelector("#name");
var counters = document.querySelector("#greetCount");
var outputs = document.querySelector("#output");
var greetBtn = document.querySelector("#buttons");
var count = 0;
var namesGreeted = {}; // empty object initially
var nameStorage = [];



greetBtn.addEventListener("click", () => {
 // count ++;
var s ="";
var whichLang = document.querySelector("input[name='language']:checked");
// console.log("lang" +whichLang.value);
var name =document.querySelector("input[name='language']");
if(whichLang.value === "English" && namesGreeted[useName.value] === undefined){//alikho
  outputs.innerHTML = "Hello, " + useName.value;// bulisa
  count ++;// incremnt counter
  namesGreeted[useName.value] =  useName.value ;// lifake kula empty object
}
else if(whichLang.value === "English" && namesGreeted[useName.value] !== undefined){//likhona
  outputs.innerHTML = "Hello, " + useName.value;// bulisa

}
 if(whichLang.value === "Afrikaans" && namesGreeted[useName.value] === undefined){
  outputs.innerHTML = "Hallo, " + useName.value;
count ++;
namesGreeted[useName.value] =  useName.value ;
}
else if(whichLang.value === "Afrikaans" && namesGreeted[useName.value] !== undefined){
  outputs.innerHTML = "Hallo, " + useName.value;
}
 if(whichLang.value === "Xhosa" && namesGreeted [useName.value] === undefined){
  outputs.innerHTML = "Molo, " + useName.value;
count ++;
namesGreeted[useName.value] =  useName.value ;
}
else if(whichLang.value === "Xhosa" && namesGreeted[useName.value] !== undefined){//likhona
  outputs.innerHTML = "Molo, " + useName.value;// bulisa
}

// console.log("gama" +name);
// // console.log(useName.value)
// console.log(whichLang.value);
// outputs.innerHTML = whichLang.value+' '+useName.value;
console.log(count);

for(var i = 0;i < namesGreeted.length;i++){
if (namesGreeted[useName] === undefined){
    greetCount++;
    namesGreeted[useName] = 0;
    nameStorage.push(useName);
  }
    greetingsElem.innerHTML = greetCount;

}

counters.innerHTML= count;
localStorage.setItem(count , 0)
});
