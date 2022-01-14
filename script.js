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

const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
};

if(getDeviceType() == "mobile" || getDeviceType() == "tablet"){
    document.body.hidden = true
    var e = document.createElement("button")
    e.style.height = "10vh"
    e.style.width = "30vh"
    e.style.borderRadius = "5vh"
    e.style.background = "black"
    e.style.border = "white solid"
    e.style.color = "white"
    e.style.fontSize = "5vh"
    e.innerHTML = "View"
    e.addEventListener("click", ()=>{
        document.body.hidden = false
        e.hidden = true
        document.getElementById("mobileHeader").innerHTML = ""
    })
    document.body.insertAdjacentHTML("beforebegin", `<h1 id="mobileHeader"> This site is not for mobiles (Landscape orientation reccomended.) </h1>`)
    document.body.insertAdjacentElement("beforebegin", e)
}

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