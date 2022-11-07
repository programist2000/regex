let d
let result

function clearinfo() {
    document.getElementById('result-row').innerHTML = "";
    document.getElementById('result-col').innerHTML = "";
}

document.getElementById("inp").addEventListener("keyup", function(){
    
    d = document.getElementById("inp").value 

    if (d != 0) {
        result = (d.match(/\№\d+/gmi))
    
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i].slice(1);
        }
    
        document.getElementById('result-row').innerHTML = result.join(' ')
        document.getElementById('result-col').innerHTML = result.join('\n')
        
    } else {
        clearinfo()
    }

});

//console.log(d)
