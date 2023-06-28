/*
let writing = str => {
    let getElementByld("");
    let arrFromStr = str.split("");
    let i = 0;
    let printStr = setInterval(function(){
        document.body.innerHTML += arrFromStr[i];
        i ++;

        if (i === arrFromStr.length){
            clearInterval(printStr);
        }
    }, 400)
}
*/

const container = document.querySelector('.container')
const colors = ['#4d4d4d', '#2d2d2d', '#151515', '#505050']

const figures = () =>{
    for (let i = 0;i <= 25; i++){
        let figure = document.createElement('span')
        let select = Math.round(colors.length*Math.random())

        figure.style.top = innerHeight*Math.random() + 'px';
        figure.style.left = innerWidth*Math.random() + 'px';
        
        figure.style.background = colors[select >= colors.length ? select -1 : select]
        

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight*Math.random() + 'px';
        figure.style.left = innerWidth*Math.random() + 'px';
        }, 2000)
    }
}

figures()