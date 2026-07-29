import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Clock,
  FileText,
  MessageSquare,
  Moon
} from "lucide-react";


const features = [

{
icon:<BookOpen/>,
title:"Thousands of Books",
description:
"Explore books from different categories and build your personal digital library."
},

{
icon:<FileText/>,
title:"PDF Reading Experience",
description:
"Read your favorite books with a smooth and comfortable PDF reader."
},

{
icon:<Clock/>,
title:"Continue Reading",
description:
"Track your reading progress and continue exactly where you stopped."
},

{
icon:<Search/>,
title:"Smart Search",
description:
"Quickly find books using search and categories."
},

{
icon:<MessageSquare/>,
title:"Request Books",
description:
"Request books that are not available in the library."
},

{
icon:<Moon/>,
title:"Dark Mode",
description:
"Enjoy a comfortable reading experience anytime."
}

];


function Features(){

return(

<section 
id="features"
className="features"
>


<h2>
Everything You Need For Reading
</h2>


<p className="feature-subtitle">
A modern digital library designed for book lovers.
</p>


<div className="feature-grid">


{
features.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.1
}}

viewport={{
once:true
}}

className="feature-card"

>


<div className="feature-icon">

{item.icon}

</div>


<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


</motion.div>


))
}


</div>


</section>

)

}


export default Features;