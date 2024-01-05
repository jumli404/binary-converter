
        var ans = document.getElementById("ans")
        function o() {
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
            }




        }




  
