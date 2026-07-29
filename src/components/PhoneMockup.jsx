import { motion } from "framer-motion";


function PhoneMockup(){

return(

<motion.div

initial={{opacity:0, y:60}}
animate={{opacity:1, y:0}}
transition={{duration:1}}

className="phone"

>

<div className="phone-screen">

<h3>
📚 BookVerse
</h3>

<div className="book-card">
Atomic Habits
</div>

<div className="book-card">
The Alchemist
</div>

<div className="book-card">
Rich Dad Poor Dad
</div>


</div>

</motion.div>

)

}


export default PhoneMockup;