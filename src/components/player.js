export class Person {
    constructor(name, health, weapon, weaponDamage){
        this.name = name,
        this.health = health,
        this.weapon = weapon,
        this.weaponDamage = weaponDamage
    }

    get playerHealth(){
        return this.health;
    }

    set playerHealth(value){
        this.health = value;
    }

    damageOutput(damage, kritzProb) {
        let rng = Math.floor(Math.random() * 20) + 1;

        this.health = (rng > kritzProb) ? this.health -= damage * 2 : this.health -= damage;

        console.log(`O player está com ${this.health} de vida e tomou ${damage} de dano`);
    }
}