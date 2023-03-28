/* Fighter class definition */

const MAX_LIFE = 100

class Fighter {
    constructor (name, strength, dexterity, life) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }

     fight(defender) {
        const damage = Math.floor(Math.random(this.strenght))
        const dodge = Math.floor(damage - defender(this.dexterity))
       defender.life = damage - dodge
     }
      
}

module.exports = Fighter