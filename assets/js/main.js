
function toggleMobileMenu(){
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function downloadResume(){
  const link=document.createElement('a');
  link.href='assets/resume.pdf';
  link.download='Christian-Aglanu-Resume.pdf';
  link.click();
}

function startTyping(){
  const text="Cybersecurity Engineer";
  let i=0;
  const el=document.getElementById("typing");
  function type(){
    if(i<text.length){
      el.textContent+=text[i++];
      setTimeout(type,70);
    }
  }
  type();
}

window.onload=()=>{
  startTyping();
}
