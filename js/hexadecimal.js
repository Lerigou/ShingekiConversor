function converter() {

    select = document.getElementById("base").value;

    num = document.getElementById("valorConverter").value; //aqui ele vê como uma string
    hex = parseInt(num, 16)
    dec = hex.toString(10)
    bin = hex.toString(2) 

    if (select == "decimal"){
        document.getElementById("res").value = dec;
    } else {
        document.getElementById("res").value = bin;
    }
}
