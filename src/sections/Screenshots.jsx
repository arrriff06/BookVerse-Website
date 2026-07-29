import React from "react";

const screenshots = [
  {
    title:"Discover Books",
    image:"/screenshots/home.png"
  },
  {
    title:"Read Anywhere",
    image:"/screenshots/reader.png"
  },
  {
    title:"Your Library",
    image:"/screenshots/library.png"
  }
];


function Screenshots(){

return (

<section className="screenshots" id="screenshots">

<h2>
Beautiful Reading Experience
</h2>

<p className="screenshot-subtitle">
A modern library experience designed for book lovers.
</p>


<div className="screenshot-grid">


{
screenshots.map((item,index)=>(

<div className="screenshot-card" key={index}>

<img 
src={item.image}
alt={item.title}
/>

<h3>
{item.title}
</h3>

</div>

))
}


</div>


</section>

)

}


export default Screenshots;