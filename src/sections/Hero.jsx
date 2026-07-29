import { motion } from "framer-motion";
import PhoneMockup from "../components/PhoneMockup";


function Hero(){

return(

<section className="hero" id="home">


<div className="floating-book book1">
📖
</div>

<div className="floating-book book2">
📚
</div>

<div className="floating-book book3">
📕
</div>


<div className="hero-content">


<motion.h1

initial={{opacity:0,x:-50}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}

>

Your Digital Library,
<br/>
Anytime Anywhere

</motion.h1>


<p>

Explore books, read PDFs,
track your progress and build
your personal library.

</p>


<a
href="/bookverse.apk"
download
>

<button>

Download BookVerse APK

</button>
<p className="version">
Version 1.2.0 • Android 8+ • 77 MB
</p>

</a>


</div>



<PhoneMockup/>


</section>

)

}


export default Hero;