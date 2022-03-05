function converter() {

    select = document.getElementById("base").value;

    num = document.getElementById("valorConverter").value; //aqui ele vê como uma string
    bin = parseInt(num, 2)
    dec = bin.toString(10) //Aqui ele está pegando a variável dec e colocando no parâmetro 2, convertendo para binário, ou seja, colocando em base 2
    hex = dec.toString(16) //Aqui ele está pegando a variavel dec e colocando no parâmeetro 16, convertendo para hexadecimal, ou seja, colocando em base 16

    if (select == "decimal"){
        document.getElementById("res").value = dec;
    } else {
        document.getElementById("res").value = hex;
    }
}