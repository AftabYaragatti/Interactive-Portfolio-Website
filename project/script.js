// Open modals
document.querySelectorAll(".openModal").forEach(btn=>{
  btn.addEventListener("click",()=>{document.getElementById(btn.dataset.modal).style.display="flex";});
});

// Close modals
document.querySelectorAll(".close").forEach(closeBtn=>{
  closeBtn.addEventListener("click",()=>{closeBtn.parentElement.parentElement.style.display="none";});
});

// Close on outside click
window.addEventListener("click",(e)=>{
  document.querySelectorAll(".modal").forEach(modal=>{
    if(e.target===modal){modal.style.display="none";}
  });
});
