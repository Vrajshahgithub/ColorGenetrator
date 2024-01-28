const getcolor = () =>{
    //hex code
    const ranum =Math.floor( Math.random() * 1677215);
    const racode = "#" + ranum.toString(16);
    document.body.style.background = racode; 
    document.getElementById("code").innerText = racode;
}

document.getElementById("btn").addEventListener("click",getcolor)
getcolor();