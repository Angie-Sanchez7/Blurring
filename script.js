const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {


    if (load <= 100) {



        loadText.innerText = ` ${load} % `                                   //añadir texto
        load++
        loadText.style.opacity = (100 - load) / 100                            // load de 0 a 100 
                                                                            // opacidad de 0 a 1 
        bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`
    }
   
      
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }



