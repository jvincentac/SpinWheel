const prizes = [
    {value: "1000", probability: 0.28},
    {value: "3000", probability: 0.22},
    {value: "5000", probability: 0.2},
    {value: "10000", probability: 0.15},
    {value: "15000", probability: 0.139},
    {value: "iphone 13", probability: 0.01},
    {value: "honda scoopy", probability: 0.001},
    {value: "bmw", probability: 0},
]

function countProb(){
    var result = Math.random().toFixed(3)
    var prob = [0, 0.001, 0.01, 0.139, 0.15, 0.2, 0.23, 0.28]

    prob.push(result)
    prob.sort(function(a, b) {return a-b})

    var idx = prob.indexOf(result) + 1

    console.log(idx)

    console.log(prob)

    console.log(prizes[idx].value)
}

countProb()

function rotateFunction(){
    var min = 1024;
    var max = 9999;
    // var deg = Math.floor(Math.random() * (max - min)) + min;
    var deg = 180
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    console.log(deg)

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');

    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);
}

