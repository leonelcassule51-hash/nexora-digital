const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.header nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰';}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

const photos={
  fish:'https://images.pexels.com/photos/11653557/pexels-photo-11653557.jpeg?auto=compress&cs=tinysrgb&w=1600',
  chicken:'https://images.pexels.com/photos/37100202/pexels-photo-37100202.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stew:'https://images.pexels.com/photos/37648017/pexels-photo-37648017.jpeg?auto=compress&cs=tinysrgb&w=1200',
  prawns:'https://images.pexels.com/photos/7715478/pexels-photo-7715478.jpeg?auto=compress&cs=tinysrgb&w=1200',
  angolan:'https://images.pexels.com/photos/37382214/pexels-photo-37382214.jpeg?auto=compress&cs=tinysrgb&w=1200'
};
const addImage=(parent,src,alt,priority=false)=>{
  const img=document.createElement('img');img.src=src;img.alt=alt;img.loading=priority?'eager':'lazy';img.decoding='async';if(priority)img.fetchPriority='high';parent.replaceChildren(img);return img;
};
const hero=document.querySelector('.hero-art');
if(hero){
  addImage(hero,photos.fish,'Peixe grelhado com legumes assados, fotografia ilustrativa de cozinha de mar',true);
  const shade=document.createElement('div');shade.className='photo-shade';hero.append(shade);
  const caption=document.createElement('div');caption.className='photo-caption';caption.innerHTML='<span>DA TERRA E DO MAR</span><b>✳</b><span>FEITO PARA PARTILHAR</span>';hero.append(caption);
  const seal=document.createElement('div');seal.className='photo-seal';seal.innerHTML='<span>COZINHA</span><b>COM</b><span>IDENTIDADE</span><i>✳</i>';hero.append(seal);
}
const story=document.querySelector('.story-art');
if(story){addImage(story,photos.angolan,'Pastéis tradicionais fotografados em Luanda, Angola');const label=document.createElement('span');label.textContent='SABORES DE LUANDA';story.append(label);}
const dishImages=[
  [photos.chicken,'Estufado africano de frango com feijão e vegetais, imagem de referência para a muamba'],
  [photos.stew,'Estufado africano com folhas e molho, imagem ilustrativa para o calulu'],
  [photos.fish,'Peixe grelhado com legumes assados, imagem de referência para o mufete']
];
document.querySelectorAll('.dish-visual').forEach((el,i)=>{const item=dishImages[i];if(!item)return;const number=el.querySelector('span')?.textContent||String(i+1).padStart(2,'0');addImage(el,item[0],item[1]);const badge=document.createElement('span');badge.textContent=number;el.append(badge);});
const menu=document.querySelector('#ementa');
if(menu&&!document.querySelector('.photo-gallery')){
  const gallery=document.createElement('section');gallery.className='photo-gallery section';
  gallery.innerHTML='<div class="section-label">03 / UM CONVITE A DESCOBRIR</div><div class="gallery-heading"><h2>O prazer também<br><em>entra pelos olhos.</em></h2><p>Texturas, cores e sabores que inspiram uma experiência à volta da mesa.</p></div><div class="gallery-grid"><figure class="gallery-main"><img src="'+photos.prawns+'" alt="Camarões grelhados servidos num prato decorativo" loading="lazy"><figcaption>DO MAR PARA A MESA</figcaption></figure><figure><img src="'+photos.angolan+'" alt="Pastéis angolanos fotografados em Luanda" loading="lazy"><figcaption>UM SABOR DE LUANDA</figcaption></figure><figure><img src="'+photos.stew+'" alt="Estufado africano de folhas e carne, imagem de inspiração" loading="lazy"><figcaption>COZINHA COM MEMÓRIA</figcaption></figure></div><p class="gallery-note">Fotografias de referência. A ementa e os pratos são fictícios e meramente ilustrativos.</p>';
  menu.insertAdjacentElement('afterend',gallery);
}
const contact=document.querySelector('.contact');
if(contact){
  const copy=contact.querySelector('p');if(copy)copy.textContent='Gostou desta demonstração? A NEXORA pode criar um website com identidade própria para o seu restaurante, café ou negócio.';
  const cta=contact.querySelector('a');if(cta){cta.href='https://www.instagram.com/nexoramarketing.ia/';cta.target='_blank';cta.rel='noopener noreferrer';cta.textContent='FALAR COM A NEXORA ↗';}
  const label=contact.querySelector('.section-label');if(label)label.textContent='05 / FALE COM A NEXORA';
}
const footer=document.querySelector('footer');
if(footer&&!document.querySelector('.photo-credits')){
  const credits=document.createElement('p');credits.className='photo-credits';
  credits.innerHTML='Fotografias: <a href="https://www.pexels.com/photo/fried-fish-and-grilled-vegetables-11653557/" target="_blank" rel="noopener noreferrer">Cristian Mihaila</a> · <a href="https://www.pexels.com/photo/delicious-african-dish-with-chicken-and-beans-37100202/" target="_blank" rel="noopener noreferrer">Lionel Ntasano</a> · <a href="https://www.pexels.com/photo/authentic-african-stew-with-spinach-and-meat-37648017/" target="_blank" rel="noopener noreferrer">Tochukwu Ekeh</a> · <a href="https://www.pexels.com/photo/delicious-cooked-prawns-on-a-plate-7715478/" target="_blank" rel="noopener noreferrer">FOX</a> · <a href="https://www.pexels.com/photo/delicious-angolan-pastries-on-decorative-platter-37382214/" target="_blank" rel="noopener noreferrer">basunga visual</a> / Pexels';
  footer.append(credits);
}
const og=document.querySelector('meta[property="og:image"]');if(og)og.content=photos.fish;
const tw=document.querySelector('meta[name="twitter:image"]');if(tw)tw.content=photos.fish;
const css=document.createElement('link');css.rel='stylesheet';css.href='premium.css';document.head.append(css);
