
const throttleFunction = (func,delay) => {

    let prev = 0;
    return (...args) => {
       let now = new Date().getTime();
          if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        var div = document.createElement("div");
        div.classList.add("imgdiv");
        div.style.left = dets.clientX+"px";
        div.style.top = dets.clientY+"px";

        var img = document.createElement("img");
        img.setAttribute("src" ," https://plus.unsplash.com/premium_photo-1715889644558-1f26f12c50a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
         div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img,{
         y:"0",
         ease:Power1,
         duration:.5,

        })

        gsap.to(img,{
         y:"100%",
         delay:.6,
         ease:Power4,
         duration:.6,

        })

        setTimeout(function(){
         div.remove()
        },2000 )

    }, 500));