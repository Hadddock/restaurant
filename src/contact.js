export default function contact() {
  const contact = document.createElement("div");
  contact.classList.add("tab");
  contact.id = "contact";
  contact.innerHTML = `
      <h1>CONTACT</h1>
      <h2>Reach out to us, preferably about business</h2>
      <ul>
        <li>
          Email:
          <a href="mailto: abc@example.com">businessfoods@business.com</a>
        </li>

        <li>Phone Number: <a href="tel:123-456-7890">123-456-7890</a></li>
      </ul>
    </div>
  `;
  return contact;
}
