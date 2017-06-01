describe("the greeting function", function(){

it("should say hello to the name inputed", function(){
assert.equal(greeting("Cara"), 'Hello, Cara')
})
 it('should greet as many people as possible', function(){
   assert.equal(greeting('Luba'), 'Hello, Luba')
 })
})


describe("the add function", function(){

it("should add 1 everytime", function(){

assert.equal(add(1), 1);
})

})


describe("the createMessage function", function(language, usename){

it("should greet a person,in English", function(){

assert.equal(createMessage("English", 'mbu'),"Hello, mbu");
})
it("should greet a person,in Afrikaans", function(){

assert.equal(createMessage("Afrikaans", "mbu"),"Hallo, mbu");
})

it("should greet a person,in Xhosa", function(){

assert.equal(createMessage("Xhosa", "mbu"),"Molo, mbu");
})

it("should return undefined if a language is not selected ", function(){

assert.equal(createMessage(), undefined);

})
})
