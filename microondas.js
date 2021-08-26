const pipoca = 10;
const macarrao = 8;
const carne = 15;
const feijao = 12;
const brigadeiro = 8;
function microondas(comida, tempo)
{
    let tempoCocção;
    switch(comida)
    {
        case "pipoca":
            tempoCocção = pipoca;
            break;
        case "macarrao":
            tempoCocção = macarrao;
            break;
        case "carne":
            tempoCocção = carne;
            break;
        case "feijao":
            tempoCocção = feijao;
            break;
        case "brigadeiro":
            tempoCocção = brigadeiro;
            break;
        default:
            console.log("Prato inexistente");
            return false;
    }
    if((tempo >= (2 * tempoCocção)) && (tempo <= (3 * tempoCocção)))
    {
        console.log("Sua comida queimou");
        return false;
    }
    else if(tempo < tempoCocção)
    {
        console.log("Tempo insuficiente");
        return false;
    }
    else if(tempo > (3 * tempoCocção))
    {
        console.log("Kabumm");
        return false;
    }
    else
    {
        console.log("Prato pronto, bom apetite");
        return true;
    }
}
let comida = "carne";
let tempo = 15;
microondas(comida,tempo);