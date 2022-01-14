var heading = document.getElementById("Heading")
var Section1 = document.getElementById("Section")
var scrolled = false
var topbarHeight = 100
var headingFont = 80
var y = 0

var ThemePromo = document.getElementById("ThemePromo")
var imageID = 0
var ThemeImageNames = ["eliveHackerTheme.png", "EntrarPromo1.png", "EntrarPromo3.png"]

function p(v) {console.log(v)}


document.addEventListener("scroll", ()=>{
    if(scrollY > y){
        y = scrollY
        if(topbarHeight >=50){
            topbarHeight -= 4
            headingFont -= 4
            heading.style.height = String(topbarHeight/10 + "vh")
            heading.style.fontSize = String(headingFont/10 + "vh")
        }
        //Section1.style.height = "80vh"
    }
    else if(scrollY == y){}
    else if(scrollY == 0){
        y = 0
        topbarHeight = 100
        headingFont = 80
        heading.style.height = String(topbarHeight/10 + "vh")
        heading.style.fontSize = String(headingFont/10 + "vh")
    }
    else{
        y = scrollY
        if(topbarHeight <=99){
            topbarHeight += 4
            headingFont += 4
            heading.style.height = String(topbarHeight/10 + "vh")
            heading.style.fontSize = String(headingFont/10 + "vh")
        }
        //Section1.style.height = "95vh"
    }
})

async function getFact(){
    var res = await (await fetch("https://betterentrar.gigipopi.repl.co/randomFact")).text()
    document.getElementById("Fact").innerHTML = res
}

getFact()

setInterval(()=>{
    imageID++
    var i = imageID%(ThemeImageNames.length)
    ThemePromo.setAttribute("src", ThemeImageNames[i])
}, 3000)