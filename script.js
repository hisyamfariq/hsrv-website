// HSRV landing page
const WHATSAPP_NUMBER = "6285111359965";
const WHATSAPP_MESSAGE = "Halo HSRV, saya tertarik untuk custom jersey. Saya ingin konsultasi mengenai desain dan pemesanan.";
function openWhatsApp(event){
  event.preventDefault();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank", "noopener");
  return false;
}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
