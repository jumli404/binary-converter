
let binaryArray = [];
let decArray = [];

function convert() {

    binaryArray = [];

    let ans = document.getElementById("ans");
    ans.innerHTML = "0";

    decArray = [];

    let input = document.getElementById("in").value;

    const bigIntDec = BigInt(input);

    if (Number.parseInt(input) < 0) {
        ans.innerHTML = "Please enter a number greater or equal than 0";
        return;
    }

    recursiveDec2Bin(bigIntDec);

    ans.innerHTML = `${bigIntDec.toLocaleString()} in binary is: ` + binaryArray.join("");
    ans.innerHTML += "<br /><br />Step-by-step solution: <br />" + decArray.reverse().join(" % 2 <br />");

    /*var ans = document.getElementById("ans")
    var qu = document.getElementById("in").value
    var an;
    var a;
    var quo = []
    var re = []
    var leng;
    re.unshift(qu % 2)
 
    if (qu !== "") {
        an = parseInt(qu)
        setTimeout(first, 1000)
    }
 
    //first step
    function first() {
        while (parseInt(an) != 0) {
            quo.unshift(parseInt(an / 2))
            var leng = quo.length;
            //   console.log("l" + leng)
            an = quo[0 / 2]
            // console.log(quo)
            //re.unshift(a % 2)
        }
        if (parseInt(an) === 0) {
            leng = quo.length
            while (leng >= 2) {
                leng -= 1
                re.unshift(quo[leng] % 2)
                // console.log(re)
                ans.innerHTML = re.join("")
                // console.log(leng)
            }
        }
    }*/
}

/*function recursiveDec2Bin(n) {
    const m = decimale ? BigInt(recursiveDec2Bin(decimale / 2)) : 0;
    binaryArray.push(decimale % 2);
    return m;
}*/

//Or this one, it's the same thing

const recursiveDec2Bin = (n) => {
    const m = n ? BigInt(recursiveDec2Bin(n / 2n)) : 0;
    binaryArray.push(n % 2n);
    decArray.push(n);
    return m;
}