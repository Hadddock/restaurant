export default function home() {
  const home = document.createElement("div");
  home.classList.add("tab");
  home.id = "home";
  home.innerHTML = `

        <h1>BUSINESS FOODS</h1>
        <h2>make deals : eat meals</h2>
        <div class="testimonial">
          <blockquote>
            "I'm at Business Foods. I don't know when I'll be home, okay, I've
            gotta meet a guy about a thing. Just record the recital, okay? I
            will watch it later. "
          </blockquote>
          <figcaption>
            — Business Foods testimonial from Business Foods client Scott Howard
          </figcaption>
        </div>
        <div class="spacer"></div>

  
  `;
  return home;
}
