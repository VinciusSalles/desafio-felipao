let nickname = "Razzoriel"
let experience = 7001
let nivel = ""

if (experience >= 1001 && experience <= 2000){
    nivel = "bronze"
}
else if (experience >= 2001 && experience <= 5000){
    nivel = "prata"
}
else if (experience >= 5001 && experience <= 7000){
    nivel = "ouro" 
}
else if (experience >= 7001 && experience <= 8000){
    nivel = "platina" 
}
else if (experience >= 8001 && experience <= 9000){
    nivel = "ascendente" 
}
else if (experience >= 9001 && experience <= 10000){
    nivel = "imortal" 
}
else if (experience >= 10001){
    nivel = "radiante"
}
else{
    nivel = "ferro"
}

console.log("O heroi " +nickname+ " está no nivel " + nivel)
