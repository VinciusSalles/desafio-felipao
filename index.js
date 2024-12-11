let nickname = "Razzoriel"
let experience = 7001 

if (experience >= 1001 && experience <= 2000){
    console.log("O heroi " +nickname+ " está no nivel bronze");
}
else if (experience >= 2001 && experience <= 5000){
    console.log("O heroi " +nickname+ " está no nivel prata"); 
}
else if (experience >= 5001 && experience <= 7000){
    console.log("O heroi " +nickname+ " está no nivel ouro"); 
}
else if (experience >= 7001 && experience <= 8000){
    console.log("O heroi " +nickname+ " está no nivel platina"); 
}
else if (experience >= 8001 && experience <= 9000){
    console.log("O heroi " +nickname+ " está no nivel ascendente"); 
}
else if (experience >= 9001 && experience <= 10000){
    console.log("O heroi " +nickname+ " está no nivel imortal"); 
}
else if (experience >= 10001){
    console.log("O heroi " +nickname+ " está no nivel radiante"); 
}
else{
    console.log("O heroi " +nickname+ " está no nivel ferro"); 
}
