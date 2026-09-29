(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  if (!reduceMotion) {
    window.addEventListener("pointermove", ({ clientX, clientY }) => {
      root.style.setProperty("--mouse-x", `${clientX}px`);
      root.style.setProperty("--mouse-y", `${clientY}px`);
    }, { passive: true });
  }

  const decode = document.querySelector(".decode");
  if (decode && !reduceMotion) {
    const finalText = decode.dataset.text;
    const glyphs = "01/\\[]{}<>—_";
    let frame = 0;
    decode.classList.add("is-decoding");
    const timer = window.setInterval(() => {
      decode.textContent = finalText.split("").map((letter, index) => {
        if (index < frame / 3) return letter;
        return glyphs[Math.floor(Math.random() * glyphs.length)];
      }).join("");
      frame += 1;
      if (frame > finalText.length * 3) {
        window.clearInterval(timer);
        decode.textContent = finalText;
        decode.classList.remove("is-decoding");
      }
    }, 48);
  }

  const logs = [...document.querySelectorAll("[data-log]")];
  if (logs.length && !reduceMotion) {
    logs.forEach((row) => {
      row.querySelector("[data-type]").textContent = "";
    });
    const typeRow = (row, rowIndex) => {
      const label = row.querySelector("[data-type]");
      const text = label.dataset.type;
      let index = 0;
      const timer = window.setInterval(() => {
        index += 1;
        label.textContent = text.slice(0, index);
        if (index === text.length) {
          window.clearInterval(timer);
          row.classList.add("typed");
          row.querySelector(".status").classList.add("visible");
          if (logs[rowIndex + 1]) window.setTimeout(() => typeRow(logs[rowIndex + 1], rowIndex + 1), 280);
        }
      }, 38);
    };
    window.setTimeout(() => typeRow(logs[0], 0), 720);
  } else {
    logs.forEach((row) => {
      row.classList.add("typed");
      row.querySelector(".status").classList.add("visible");
    });
  }

  const card = document.querySelector(".tilt-card");
  if (card && !reduceMotion) {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(3px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  }

  document.querySelectorAll(".pillar").forEach((pillar) => {
    pillar.addEventListener("pointermove", (event) => {
      const bounds = pillar.getBoundingClientRect();
      pillar.style.setProperty("--px", `${event.clientX - bounds.left}px`);
      pillar.style.setProperty("--py", `${event.clientY - bounds.top}px`);
    });
  });

  const wrapWords = (node, state) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const fragment = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part.trim()) {
            fragment.append(part);
            return;
          }
          const span = document.createElement("span");
          span.className = "word";
          span.style.setProperty("--word-index", state.index++);
          span.textContent = part;
          fragment.append(span);
        });
        child.replaceWith(fragment);
      } else {
        wrapWords(child, state);
      }
    });
  };
  const quote = document.querySelector("[data-word-reveal]");
  if (quote) wrapWords(quote, { index: 0 });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .14 });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("in-view"));
  }

  const pillars = document.querySelector(".pillars-section");
  const updateJourney = () => {
    if (!pillars) return;
    const bounds = pillars.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (bounds.height * .72)));
    pillars.style.setProperty("--line-progress", progress.toFixed(3));
  };
  updateJourney();
  window.addEventListener("scroll", updateJourney, { passive: true });

  if (!reduceMotion) {
    document.querySelectorAll(".magnetic[href]").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        button.style.setProperty("--mx", `${(event.clientX - bounds.left - bounds.width / 2) * .13}px`);
        button.style.setProperty("--my", `${(event.clientY - bounds.top - bounds.height / 2) * .18}px`);
      });
      button.addEventListener("pointerleave", () => {
        button.style.setProperty("--mx", "0px");
        button.style.setProperty("--my", "0px");
      });
    });

    document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const destination = new URL(link.href, window.location.href);
        if (destination.pathname === window.location.pathname && destination.hash) return;
        event.preventDefault();
        document.body.classList.add("page-out");
        window.setTimeout(() => { window.location.href = destination.href; }, 260);
      });
    });
  }
})();
