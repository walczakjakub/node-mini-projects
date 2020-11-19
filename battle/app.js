const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let health = 100;

function damage() {
    let damageDealt = Math.ceil(Math.random() * 100);
    health -= damageDealt
    console.log(`Damage dealt: ${damageDealt}
    Enemy health: ${health}`);
}

function battle() {
        try {
            rl.question('Hit enemy? (y/n)', (answer) => {
                if (answer !== 'y' && answer !== 'n'){
                    throw new Error("Wrong input! Run app again")
                } else if (answer === 'y'){
                    damage();
                    if (health > 0) {
                        battle();
                        return;
                    } else {
                        console.log("Enemy killed!");
                        process.exit();
                    }         
                } else {
                    console.log('You fled!');
                    process.exit();
                }
            })
        } catch(e) {
            console.log(e);
            }
    }

if (health > 0) {
    battle();
    return;
} else {
    console.log("You died...");
    process.exit;
}




