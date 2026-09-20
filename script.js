// HSRV landing page — replace this number with the official WhatsApp number before launch.
const WHATSAPP_NUMBER = "628XXXXXXXXXX";
const WHATSAPP_MESSAGE = "Halo HSRV, saya tertarik untuk custom jersey. Saya ingin konsultasi mengenai desain dan pemesanan.";
function openWhatsApp(event){
  event.preventDefault();
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Nomor WhatsApp HSRV belum diatur. Buka script.js lalu ganti WHATSAPP_NUMBER dengan nomor WhatsApp resmi HSRV.");
    return false;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank", "noopener");
  return false;
}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
