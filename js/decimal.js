function converter() {

    select = document.getElementById("base").value;

    num = document.getElementById("valorConverter").value; //aqui ele vê como uma string
    dec = parseInt(num); //aqui ele passa o valor em string pra decimal
    bin = dec.toString(2) //Aqui ele está pegando a variável dec e colocando no parâmetro 2, convertendo para binário, ou seja, colocando em base 2
    hex = dec.toString(16) //Aqui ele está pegando a variavel dec e colocando no parâmeetro 16, convertendo para hexadecimal, ou seja, colocando em base 16

    if (select == "binario"){
        document.getElementById("res").value = bin;
    } else {
        document.getElementById("res").value = hex;
    }
}