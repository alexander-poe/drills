//1)
 console.log('my name is alex and i\'m 1000 years old');

//2)
 function whoAmI (){
  console.log('my name is alex and i\'m 1000 years old');
 }
 whoAmI();

//3) 
  
  
  function whoAmI(name, age) {
    var name = ' alex ';
    var age = ' 1000 ';
    console.log("my name is" + name + "and i\'m" + age + "years old");
  }
whoAmI();

//4) 
function whoAmI(name, age){ 
  var yearOfBirth = 2016 - age;
  console.log("my name is " + name);
  console.log("I was born in " + yearOfBirth);
}
whoAmI('alex', 21);

//5) 
  function yearOfBirth(age) {
  return 2016 - age;
  }
  function whoAmI(name, age){
  var yob = yearOfBirth(age);
  console.log('my name is ' + name);
  console.log('i was born in ' + yob);
  }

whoAmI('alex', 21);

//6) 
function yearOfBirth(age) {
    if (age < 0) throw " age cannot be less than zero";
 return 2016 - age;
}

function whoAmI(name, age) {
  try{
  var yob = yearOfBirth(age);
    console.log('my name is ' + name);
    console.log('i was born in ' + yob);
  }
  catch(e) {
  console.error(e);
  }

}
whoAmI('alex', 23);

//bonus)
  
function yearOfBirth(age) {
    if (age < 0) throw " age cannot be less than zero";
 return 2016 - age;
}

function whoAmI(name, age) {
  try{
  var yob = yearOfBirth(age);
    
  }
  catch(e) {
  var yob = 'unknown'
  console.error(e);
  
  }
  finally {
    console.log('my name is ' + name);
    console.log('i was born in ' + yob);

  }

}
whoAmI('alex', -23);

//7) 

function yearOfBirth(age) {
    if (age < 0) throw " age cannot be less than zero";
 return 2016 - age;
}

function whoAmI(name, age) {
  if (name === undefined || age === undefined) {
    console.error("arguments not valid");
  }
  else {
  try{
    var yob = yearOfBirth(age);
    
  }
  catch(e) {
    var yob = 'unknown'
    console.error(e);
  
  }
  finally {
    console.log('my name is ' + name);
    console.log('i was born in ' + yob);

  }
  }

}
whoAmI('alex', 35);

//8)

function yearOfBirth(age) {
    if (age < 0) throw " age cannot be less than zero";
 return 2016 - age;
}

function whoAmI(name, age) {
  if (name === undefined || age === undefined) {
    console.error("arguments not valid");
  }
  else if (typeof name !== "string" || typeof age === isNaN) {
    console.error("invalid entry");
  }
  else {
  try{
    var yob = yearOfBirth(age);
    
  }
  catch(e) {
    var yob = 'unknown'
    console.error(e);
  
  }
  finally {
    console.log('my name is ' + name);
    console.log('i was born in ' + yob);

  }
  }

}
whoAmI('alex', '26');
  


