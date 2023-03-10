export default function about() {
  const contact = document.createElement("div");
  contact.classList.add("tab");
  contact.innerHTML = `
    <div class="tab hidden" id="contact">
      <h1>Contact Info</h1>
      <h2>Reach out to us, preferably about business</h2>
      <ul>
        <li>
          Email:
          <a href="mailto: abc@example.com">businessfoods@business.com</a>
        </li>

        <li>Phone Number: <a href="tel:123-456-7890">123-456-7890</a></li>
      </ul>
    </div>
  </div>
  `;
  return contact;
}
