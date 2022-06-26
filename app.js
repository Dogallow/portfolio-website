console.log(
    'Hello World'
)
document.querySelectorAll('a[href="#bottom"').forEach(anchor => {
    console.log('click')
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})
document.querySelectorAll('a[href="#top"').forEach(anchor => {
    console.log('click')
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})
document.querySelectorAll('a[href="#contact"').forEach(anchor => {
    console.log('click')
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})
document.querySelectorAll('a[href="#projects"').forEach(anchor => {
    console.log('click')
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})
document.querySelectorAll('a[href="#home"').forEach(anchor => {
    console.log('click')
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})
