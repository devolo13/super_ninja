class Ninja{
  constructor(name, health=100, speed=3, strength=3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName(){
    console.log(this.name);
    return this
  }
  showStats(){
    console.log(this.name, this.strength, this.speed, this.health);
    return this
  }
  drinkSake(){
    this.health+=10;
    return this
  }
}

class Sensei extends Ninja{
  constructor(name, health=200, speed=10, strength=10, wisdom=10){
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom(){
    this.drinkSake();
    console.log(42);
    return this
  }
}

const superNinja1 = new Sensei('Hyabusa');
superNinja1.sayName().showStats().speakWisdom();