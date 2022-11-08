let d
let dTwo
let result
let resultTwo

function clearinfo() {
    document.getElementById('result-row').innerHTML = "";
    document.getElementById('result-col').innerHTML = "";
}

document.getElementById("inp").addEventListener("keyup", function(){
    
    d = document.getElementById("inp").value 

    if (d != 0) {
        result = (d.match(/\№\d+/gmi));
            if (result !=null) {
                for (let i = 0; i < result.length; i++) {
                    result[i] = result[i].slice(1);
                }
                document.getElementById('result-row').innerHTML = result.join(' ')
                document.getElementById('result-col').innerHTML = result.join('\n')     
            }
                
    } else {
        clearinfo()
    }


});

document.getElementById("inp2").addEventListener("keyup", function(){
    dTwo = document.getElementById("inp2").value
    if (dTwo != 0) {
        resultTwo = dTwo.match(/\d+/gmi);
        document.getElementById('result-row').innerHTML = resultTwo.join(' ')
        document.getElementById('result-col').innerHTML = resultTwo.join('\n')      
    } else {
        clearinfo()
    }
});

//console.log(d)
