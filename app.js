/* ===== BOMBAY SHUT HOUSE : PRO WHATSAPP ORDER + LANGUAGE TOGGLE ===== */

let currentLang = "en";

const TEXT = {
  en: {
    brand: "BOMBAY SHUT HOUSE",
    title: "CUSTOM TAILORING ORDER",
    customer: "Customer Details",
    garment: "Garment Details",
    measure: "Measurements (inches)",
    note: "Note",
    footer: "Please review the details and confirm the order.",
    fields: {
      name: "Name",
      mobile: "Mobile",
      address: "Address",
      garment: "Garment",
      fabric: "Fabric",
      fit: "Fit",
      chest: "Chest",
      waist: "Waist",
      length: "Length"
    }
  },
  hi: {
    brand: "बॉम्बे शट हाउस",
    title: "सिलाई ऑर्डर विवरण",
    customer: "ग्राहक जानकारी",
    garment: "कपड़े का विवरण",
    measure: "नाप (इंच में)",
    note: "नोट",
    footer: "कृपया विवरण जांचकर ऑर्डर कन्फर्म करें।",
    fields: {
      name: "नाम",
      mobile: "मोबाइल",
      address: "पता",
      garment: "कपड़ा",
      fabric: "फैब्रिक",
      fit: "फिट",
      chest: "छाती",
      waist: "कमर",
      length: "लंबाई"
    }
  }
};

function setLang(lang) {
  currentLang = lang;
  alert(lang === "en"
    ? "Language set to English"
    : "भाषा हिंदी में सेट हो गई");
}

function sendOrderWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("address").value.trim();

  const garment = document.getElementById("garment").value;
  const fabric = document.getElementById("fabric").value;
  const fit = document.getElementById("fit").value;

  const chest = document.getElementById("chest").value;
  const waist = document.getElementById("waist").value;
  const length = document.getElementById("length").value;

  if (!name || !mobile) {
    alert(currentLang === "en"
      ? "Please enter Name and Mobile number"
      : "कृपया नाम और मोबाइल नंबर भरें");
    return;
  }

  const t = TEXT[currentLang];

  const message = `
${t.brand}
${t.title}
----------------------

${t.customer}
${t.fields.name}: ${name}
${t.fields.mobile}: ${mobile}
${t.fields.address}: ${address}

${t.garment}
${t.fields.garment}: ${garment}
${t.fields.fabric}: ${fabric}
${t.fields.fit}: ${fit}

${t.measure}
${t.fields.chest}: ${chest}
${t.fields.waist}: ${waist}
${t.fields.length}: ${length}

${t.note}:
${t.footer}
`.trim();

  // IMPORTANT: WhatsApp number in international format (no +)
  const whatsappNumber = "919792171012";
  const url =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
