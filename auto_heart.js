this.previousHeight = null
this.counter = 0
this.timer = setInterval(()=> {
    let newHeight = document.body.scrollHeight || document.documentElement.scrollHeight
    if (this.previousHeight && this.previousHeight == newHeight){
         clearInterval(this.timer)
    }
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
    this.previousHeight = newHeight
}, 500)


var heart_divs = document.querySelectorAll("#creator-heart")
heart_divs.forEach( (heart_div, index) => {
    if(heart_div.querySelector("#unhearted"))
         heart_div.querySelector("#button").click();
})
