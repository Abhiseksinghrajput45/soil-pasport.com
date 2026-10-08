const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL";
const SUPABASE_KEY = "PASTE_YOUR_ANON_KEY";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // Hidden field that real visitors leave empty; bots often fill it
    if (data.get("website")) return;

    status.textContent = "Sending...";
    const { error } = await db.from("contact_messages").insert({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (error) {
      status.textContent = "Sorry, something went wrong. Please try again.";
      console.error(error);
    } else {
      status.textContent = "Thank you! We will reply by email.";
      form.reset();
    }
  });
}