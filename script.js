function clicka(){
    let reg = document.getElementById("reg").value
    let fname = document.getElementById("fname").value.trim()
    let lname = document.getElementById("lname").value.trim()
    let dep = document.getElementsByName("dep").value
    let ph = document.getElementById("ph").value
    let gm = document.getElementById("gm").value.trim()
    let blood = document.querySelector("#bloodv")
    let cou = document.getElementById("cou").value.trim()
    let cit = document.getElementById("cit").value.trim()
    let add = document.getElementById("add").value.trim()

    let blo = blood.options[blood.selectedIndex].value
    console.log(blo)

    
    if (reg === "" || fname === "" || lname === "" || dep === "" || ph === "" || gm === "" || cou === "" || cit === "" || add === "" || blo ==="none"){
        alert("You are not Fill required details")
        return false
    }
    else{
        alert("Sucessfully Registered")
        return true
    }
    
}