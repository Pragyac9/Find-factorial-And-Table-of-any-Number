function factorial() {
    let num = document.getElementById("numberInput").value;
    num = parseInt(num);

    if (isNaN(num)) {
        alert("Please enter a valid number!");
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerText = "the factorial of " + num + " is " + factorial.toFixed(2);


}