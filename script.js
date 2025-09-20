// Typing effect
const roles = ["Student Portfolio",];
let idx = 0, char = 0;
const typedText = document.getElementById("typed-text");
function typeRole() {
if (char < roles [idx].length) {
typedText.textContent += roles [idx].charAt(char++);
setTimeout(typeRole, 100);
} else{
setTimeout(eraseRole, 1500);
}
}
function eraseRole() {
if (char > 0) {
typedText.textContent = roles [idx].substring(0, --char);
setTimeout(eraseRole, 50);
} else {
idx = (idx 1) % roles.length;
setTimeout(typeRole, 1000);
}
}
document.addEventListener("DOMContentLoaded", () {
setTimeout(typeRole, 500);
46
v
1.0x
Add to Collection 
document.addEventListener("DOMContent loaded",()=> {
setTineout(typerole,500);
});// Modal logic
function openModal (title, body) {
document.getElementById("modal").classList.remove("hidden");
document.getElementById("modal-title").textContent = title;
document.getElementById("modal-body").textContent = body; }
document.getElementById("modal-close").onclick = () => { document.getElementById("modal").classList.add("hidden"); };
// Dark mode toggle
document.getElementById("theme-toggle").onclick = () => { document.body.classList.toggle("dark-mode");
};
// Contact form submission (demo behavior)
document.getElementById("contact-form").addEventListener("submit", e => { e.preventDefault(); alert("Thank you! Your message has been sent."); e.target.reset(); });