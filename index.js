
function loco(){
    const scroller = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    })
    
    gsap.registerPlugin(ScrollTrigger)
    
    
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy(
        '.container', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    
    
    ScrollTrigger.create({
        trigger: '.image-mask',
        scroller: '.container',
        start: 'top+=30% 50%',
        end: 'bottom-=40% 50%',
        animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
        scrub: 2,
        // markers: true
    })
    
    
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    
    
    ScrollTrigger.refresh() 
}
// loco()


function navanimation(){
    var nav=document.querySelector("nav")

    nav.addEventListener("mouseenter",function(){
    //    console.log("hello")
    var tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height:"21vh"
       })
       tl.to(".nav-part2 h5",{
        display:"block"
       })
       tl.from(".nav-part2 h5 span",{
        y:40,
        stagger:0.1
       })
       
    })
    nav.addEventListener("mouseleave",function(){
        //    console.log("hello")
      let tl = gsap.timeline()
           tl.to(".nav-part2 h5 span",{
            y:1,
            duration:0.1,
            stagger:{
                amount:0.1
            }
           })
           tl.to(".nav-part2 h5",{
            display:"none",
            duration:0.1
    
           })
           tl.to("#nav-bottom",{
            height:0,
            duration:0.1
           })
        })
    
}
navanimation()

function page2animation(){
    var rightelem= document.querySelectorAll(".right-elem")
    rightelem.forEach(function(elem){
       elem.addEventListener("mouseenter", function(){
      gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
      })
       })
       elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
          })
       })
       elem.addEventListener("mousemove",function(dets){
        // console.log(elem.getBoundingClientRect().y)
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-90,
            y:dets.y-elem.getBoundingClientRect().y-100
        })
    
       })
    })
}
page2animation()

// its not workig
function videoanimation(){

    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")
    
    page3Center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:3,
            paddingBottom:"10vh",
            marginTop: "-38vh",
            height:"100vh"
            
        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform: "scaleX(100) scaleY(10)",
            opacity:0,
            borderRadius:"30px",
        })
    })
  
}


videoanimation()
function video(){
    var sections= document.querySelectorAll (".section-right1")
    
    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave",function(){
            elem.childNodes[3].style.opacity = 0
            // elem.childNodes[3].pause()
            elem.childNodes[3].load()
        })
    })

}
video()

// button effect  fucking probleam
 function effect(){
gsap.from(".animation", {
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-part2",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    }
)
}
effect()

function loadinganimation(){
    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
    tl.from("#page2", {
        opacity: 0,
        duration: 0.6,
        stagger: 0.4
    })
}
loadinganimation()