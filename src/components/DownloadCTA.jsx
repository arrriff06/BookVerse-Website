export default function DownloadCTA(){

return (

<section className="download" id="download">

<div className="download-box">

<div className="download-content">

<h2>
Start Your Reading Journey Today
</h2>




<div className="download-buttons">

<a
  href="/BookVerse-1.2.0.apk"
  download="BookVerse-1.2.0.apk"
>

<button>

Download App

</button>

</a>

<button 
className="secondary"
onClick={() =>
document
.getElementById("how-it-works")
.scrollIntoView({
behavior:"smooth"
})
}
>
Learn More
</button>

</div>


<div className="stats">

<div>
<h3>Ongoing</h3>
<p>Books</p>
</div>

<div>
<h3>Ongoing</h3>
<p>Readers</p>
</div>

<div>
<h3>24/7</h3>
<p>Access</p>
</div>

</div>


</div>


<div className="cta-phone">

<div className="mini-phone">

<div className="mini-screen">

<h3>
BookVerse
</h3>

<div className="mini-card">
📖 Continue Reading
</div>

<div className="mini-card">
⭐ Your Library
</div>

<div className="mini-card">
🔍 Explore Books
</div>


</div>

</div>

</div>


</div>


</section>

)

}