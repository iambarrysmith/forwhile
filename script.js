var wrap = document.body.querySelector(".wrapper");

var dragon_health = 10
var user_health = 5

while(user_health > 0 && dragon_health > 0){
  var hits = Number(prompt("How many attempts will you take at hitting the dragon? (Up to 5)"));
  random_damage = Math.floor(Math.random() * hits) + 1;
  
  if(random_damage > 5) {
    dragon_health = dragon_health - 1;
  }else{
    dragon_health = dragon_health - random_damage;
  }
  

if(dragon_health > 0){
  dragon_damage = Math.floor(Math.random() * 2) +1;
  user_health = user_health - dragon_damage;
}

if(dragon_health <=0){
  wrap.innerHTML = "The User wins!"
}
  
if(user_health <=0){
  wrap.innerHTML = "The Dragon wins!"
}


}