const prizes = [
    {value: "1000", probability: 0.28, max: 202.5, min: 157.5},
    {value: "3000", probability: 0.22, max: 337.5, min: 292.5},
    {value: "5000", probability: 0.2, max: 382.5, min: 337.5},
    {value: "10000", probability: 0.15, max: 157.5, min: 112.5},
    {value: "15000", probability: 0.13, max: 67.5, min: 22.5},
    {value: "iphone 13", probability: 0.01, max: 292.5, min: 247.5},
    {value: "honda scoopy", probability: 0, max: 112.5, min: 67.5},
    {value: "bmw", probability: 0, max: 247.5, min: 157.5},
]

const activeCode = [
    {kode: "qwerty", spinAmount: 1},
    {kode: "admin", spinAmount: 3},
    {kode: "lorem", spinAmount: 2}
]

var completeList = []
var winningIdx = 0
var result = ""

console.log(result)

setupPage()

function setupPage(){
    disableBtn("spinBtn")
}

function setProb(){
    for (i = 0; i < prizes.length; i++){
        for (j = 0; j < prizes[i].probability*100; j++) {
            completeList.push(i)
        }
    }
}

function countProb(){
    winningIdx = completeList[Math.floor(Math.random()*completeList.length)]
    result = prizes[winningIdx].value
}

function rotateFunction(){
    setProb()
    countProb()
    console.log(result)
    var randomSpin = Math.floor(Math.random() * 50) +10
    var fullSpin = 360 * randomSpin
    var min = prizes[winningIdx].min
    var max = prizes[winningIdx].max
    var deg = Math.floor(Math.random() * (max - min) + min) + fullSpin
    document.getElementById('box').style.transform = "rotate("+deg+"deg)"

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');

    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);
}

//kode sementara: qwerty
function checkKode(){
    let kode = document.getElementById("inputContent").value
    for (i=0; i<activeCode.length; i++){
        if (activeCode[i].kode == kode){
            alert("kode benar")
            enableBtn("spinBtn")
            break
        }
    }
    alert("kode salah")
}

function disableBtn(buttonId){
    document.getElementById(buttonId).disabled = true
}

function enableBtn(buttonId){
    document.getElementById(buttonId).disabled = false
}