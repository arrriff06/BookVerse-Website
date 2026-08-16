import { useEffect, useState } from "react";


function Navbar(){

const [open,setOpen] = useState(false);
const [active,setActive] = useState("home");


useEffect(()=>{

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

setActive(entry.target.id);

}

});

},

{
threshold:0.5
}

);


sections.forEach(section=>{

observer.observe(section);

});


return ()=>observer.disconnect();


},[]);



return(

<nav className="navbar">


<div className="logo">
📚 BookVerse
</div>



<div className={`nav-links ${open ? "active":""}`}>


<a 
className={active==="home"?"active-link":""}
href="#home"
>
Home
</a>


<a
className={active==="features"?"active-link":""}
href="#features"
>
Features
</a>


<a
className={active==="screenshots"?"active-link":""}
href="#screenshots"
>
Screenshots
</a>


<a
className={active==="how-it-works"?"active-link":""}
href="#how-it-works"
>
How It Works
</a>


<a
className={active==="download"?"active-link":""}
href="#download"
>
Download
</a>


</div>



<a
  href="/BookVerse-1.3.0.apk"
  className="nav-button"
>
  Get App
</a>



<div 
className="hamburger"
onClick={()=>setOpen(!open)}
>

<span></span>
<span></span>
<span></span>

</div>



</nav>

)

}


export default Navbar;