
let pirates = [
    {
        name: "Doraemon",
        bounty: 100,
        strength: 2000
    },
    {
        name: "Nobita",
        bounty: 500,
        strength: 1000
    },
    {
        name: "Xuka",
        bounty: 200,
        strength: 500
    },
    {
        name: "Chaien",
        bounty: 400,
        strength: 200
    }
]
function upgradeCrew(pirates){
    return pirates.map((pirate, index) => {
        return {
            name:pirate.name.toUpperCase(),
            bounty: pirate.bounty*2,
            strength: pirate.strength*1.5
        }
    })
    
}
let awakenedPirates = upgradeCrew(pirates);
let monsterTrioCandidates = awakenedPirates.filter(pirate => pirate.strength > 500);
console.log(monsterTrioCandidates);