const steps = [
  {
    number:"01",
    title:"Create Your Account",
    text:"Sign in and build your personal reading profile in seconds."
  },
  {
    number:"02",
    title:"Explore Thousands of Books",
    text:"Browse categories, discover books and find your next favorite read."
  },
  {
    number:"03",
    title:"Read & Track Progress",
    text:"Continue reading anytime with automatic progress tracking."
  },
  {
    number:"04",
    title:"Request Books",
    text:"Can't find a book? Request it and we will add it to the library."
  }
];


export default function HowItWorks(){

return (

<section className="how" id="how-it-works">
<h2>
How BookVerse Works
</h2>

<p className="how-sub">
A simple reading experience designed for book lovers.
</p>


<div className="steps">

{
steps.map((step,index)=>(

<div className="step-card" key={index}>

<div className="step-number">
{step.number}
</div>

<h3>
{step.title}
</h3>

<p>
{step.text}
</p>

</div>

))
}

</div>


</section>

)

}