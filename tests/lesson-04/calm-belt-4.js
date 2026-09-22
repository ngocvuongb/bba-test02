let crewList = [
    {
        name : "Mario",
        bounty: 111000
    }, 
    {
        name : "Luigi",
        bounty: 890909
    }, 
    {
        name: "Peach",
        bounty: 989898
    },
    {
        name: "Yoshi",
        bounty: 54049
    },
    {
        name: "Zorio",
        bounty: 234234
    }
]
function createLeaderBoard(players){
    crewList.sort((a,b) => b.bounty - a.bounty)
    return crewList.map((player, index) => {
        if (index == 0){
        return `🥇 ${index +1}. ${player.name} - ${player.bounty} pts` 
        } else if (index == 1){
        return `🥈 ${index +1}. ${player.name} - ${player.bounty} pts`           
        } else if (index == 2){
        return `🥉 ${index +1}. ${player.name} - ${player.bounty} pts` 
        } else {
        return `   ${index +1}. ${player.name} - ${player.bounty} pts` 
        }
    }).join("\n")
   
}

console.log(createLeaderBoard(crewList))