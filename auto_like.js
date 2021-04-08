this.previousHeight = null
this.counter = 0
this.timer = setInterval(()=> {
    let newHeight = document.body.scrollHeight || document.documentElement.scrollHeight
    if (this.previousHeight && this.previousHeight == newHeight){
       if(this.counter === 2)
           clearInterval(this.timer)
        else
            this.counter++
    } else {
        this.counter = 0
    }
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
    this.previousHeight = newHeight
}, 500)


var like_divs = document.querySelectorAll("#like-button")
like_divs.forEach( (like_div, index) => {
    const button = like_div.querySelector("button")
    if(button.getAttribute('aria-pressed') == "false")
        button.click()
})
