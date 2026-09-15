// Gia site — small vanilla-JS behaviors that replace what the old
// in-browser-compiled React version did: the logo squish, and the
// "how it works" step picker on the home page. No framework needed.

(function () {
  // Squish the hero logo on hover, then settle back into its idle wobble.
  var logo = document.querySelector(".gia-logo");
  if (logo) {
    logo.addEventListener("mouseenter", function () {
      logo.style.animation = "none";
      void logo.offsetWidth; // restart the animation
      logo.style.animation = "jello .7s cubic-bezier(.3,.9,.3,1)";
      setTimeout(function () {
        logo.style.animation = "wobble 5s ease-in-out infinite";
      }, 700);
    });
  }
})();

(function () {
  var stepsEl = document.querySelector(".steps");
  if (!stepsEl) return;

  var flowSteps = [
    { title: "Scan your products", body: "Point your camera at the bottle. We log the actives and the start date, so nothing gets fuzzy three months from now." },
    { title: "Upload your photos", body: "New ones, or that messy camera roll from eight months ago. Old photos still count, and we line them up for you." },
    { title: "Add the context", body: "New diet? On your period? Started lifting? Note as much or as little as you feel like, it all sharpens the read." },
    { title: "Let the model analyze", body: "Our AI reads your photos the same unbiased way every time: no placebo effect, no squinting at photos and guessing." },
    { title: "Stay consistent", body: "Then just show up. Our machine learning model will analyze your photos and provide weekly and monthly summaries to show you what's actually moved." }
  ];

  var tabs = Array.prototype.slice.call(stepsEl.querySelectorAll(".step-tab"));
  var dots = Array.prototype.slice.call(stepsEl.querySelectorAll(".step-dot"));
  var numEl = document.getElementById("step-num");
  var titleEl = document.getElementById("step-title");
  var bodyEl = document.getElementById("step-body");

  function dotBg(active) {
    return active
      ? "radial-gradient(circle at 32% 26%, #ffffff, #bfe0ff 38%, #6aa9f5 70%, #2b7fff)"
      : "radial-gradient(circle at 32% 26%, #ffffff, #eef6ff 42%, #cfe3f7 74%, #b3cee8)";
  }

  function paint(step) {
    tabs.forEach(function (el, i) {
      el.style.color = i === step ? "#0b2545" : "#7d97b5";
    });
    dots.forEach(function (el, i) {
      var on = i === step;
      el.style.background = dotBg(on);
      el.style.color = on ? "#0b2545" : "#5c7896";
      el.style.transform = on ? "scale(1.1,.94)" : "scale(1,1)";
      el.style.boxShadow = on
        ? "0 20px 30px rgba(30,90,160,.32), inset 0 -9px 15px rgba(20,80,160,.3)"
        : "0 14px 22px rgba(30,90,160,.2), inset 0 -8px 13px rgba(45,110,180,.2)";
    });
    numEl.textContent = "Step " + (step + 1) + " of " + flowSteps.length;
    titleEl.textContent = flowSteps[step].title;
    bodyEl.textContent = flowSteps[step].body;
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { paint(i); });
  });

  paint(0);
})();
