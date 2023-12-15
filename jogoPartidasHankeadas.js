function matchesDefeats(victory,defeat){
    let result = victory - defeat;
    return result;
}

function hankGamer(){
    let resulGamer = matchesDefeats(50,10);
    let nivelGamer = 81
    switch(nivelGamer){
        case 10:
            console.log(`${nivelGamer} Heroi tem Nivel "Ferro"`);
            break;
        case 11 || 20:
            console.log(`${nivelGamer} Heroi tem Nivel "Bronse"`);
            break;
        case 21 || 50:
            console.log(`${nivelGamer} Heroi tem Nivel "Prata"`);
            break;
        case 51 || 80:
            console.log(`${nivelGamer} Heroi tem Nivel "Ouro"`);
            break;
        case 81 || 90:
            console.log(`${nivelGamer} Heroi tem Nivel " Diamante"`);
            break;
        case 91 || 100:
            console.log(`${nivelGamer} Heroi tem Nivel "Lendário"`);
            break;
        case 101:
            console.log(`${nivelGamer} Heroi tem Nivel "Imortal"`);
            break;
        case 0:
            default:
                console.log("Pontuação negativa Não foi Dessa Vez!!!")     
            break;
    }
    return `O Herói tem de saldo de **${resulGamer}** está no nível de **${nivelGamer}**`
}

console.log(hankGamer())