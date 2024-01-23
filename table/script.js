function generateTable() {
    let num = document.getElementById("numberInput").value;
    // num = parseInt(num);

    for (let i = 1; i <= 10; i++) {
        let result = num * i;

        document.getElementById('result').innerHTML += num + " x " + i + " = " + result + "<br/>";
    }
}