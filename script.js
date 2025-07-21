// Ensure this runs after the page fully loads
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("termsForm");
  const checkbox = document.getElementById("acceptTerms");
  const commentBox = document.getElementById("userComment");
  const feedbackDiv = document.getElementById("feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const accepted = checkbox.checked;
    const comment = commentBox.value.trim();

    if (accepted) {
      const response = {
        accepted: true,
        comment: comment || "No comment",
        timestamp: new Date().toISOString()
      };

      // Save to localStorage
      localStorage.setItem("datingTermsResponse", JSON.stringify(response));

      feedbackDiv.innerHTML = `
        ✅ Terms accepted.<br>
        💬 Comment saved: "${response.comment}"
      `;
    } else {
      feedbackDiv.innerHTML = `
        ❌ Terms not accepted.<br>
        ⚠️ You must agree before continuing.
      `;
    }
  });
});
console.log("✅ JS is connected and running!");