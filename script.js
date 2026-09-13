function nextSection(id){
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:"smooth"});
}

function createHeart(){
  const container=document.getElementById("hearts");
  const heart=document.createElement("span");
  heart.className="heart";
  heart.textContent=Math.random()>.5?"♥":"♡";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(12+Math.random()*22)+"px";
  heart.style.animationDuration=(5+Math.random()*5)+"s";
  container.appendChild(heart);
  setTimeout(()=>heart.remove(),10000);
}

function sayYes(){
  const finalSection=document.getElementById("final");
  finalSection.classList.remove("hidden");
  setTimeout(()=>finalSection.scrollIntoView({behavior:"smooth"}),100);
  for(let i=0;i<50;i++) setTimeout(createHeart,i*55);
}

setInterval(()=>{if(document.visibilityState==="visible")createHeart()},1800);
