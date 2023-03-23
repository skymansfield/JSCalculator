let math = [];
let clear = 0;
let myRegex = /[+-/*]{2,}/g;
let newTot = "";
buttons = document.getElementsByClassName('btn');
buttons = [...buttons];
buttons.forEach(butt => {
    butt.addEventListener('click', function () {
        if (butt.value == ".") {
            document.getElementById('decimal').disabled = true;
        }
        else if (butt.value == "+" || butt.value == "-" || butt.value == "/" || butt.value == "*" || butt.value == "=" || butt.value == "clear") {
            document.getElementById('decimal').disabled = false;
        }
        if (butt.value == "=") {
            let total = math[math.length - 1];
            let test = myRegex.test(total);
            if (test) {
                let rev = total.match(myRegex).toString().split("");
                let op = rev[rev.length - 1];
                let newOp;
                if (op == "-") {
                    newOp = rev[rev.length - 2];
                    newTot = total.replace(myRegex, newOp);
                    newTot = "-" + eval(newTot)
                } else {
                    newOp = rev[rev.length - 1];
                    newTot = total.replace(myRegex, newOp);
                    newTot = eval(newTot)
                }
                $("#display").text(newTot);
            } else {
                total = eval(total);
                $("#display").text(total);
                $("#decimal").disabled = false;
            }
        }
        else if (butt.value !== "clear") {
            if ($('#display').html()[0] == "0") {
                $('#display').html("");
                $('#display').append(butt.value);
            }
            else {
                $('#display').append(butt.value);
                math.push($('#display').text());
            }
        }
        else {
            math = [];
            $('#display').html("0")
            $("#decimal").disabled = false;
        }
    })
})