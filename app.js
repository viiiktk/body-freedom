"use strict";

/* Independent fictional profile. No network requests or analytics. */
const posts = [
  {
    "id": 1,
    "image": "post-01-autumn.webp",
    "alt": "Лена без постановочной позы улыбается на осенней набережной Петербурга в пальто и объёмном терракотовом шарфе",
    "title": "Прогулка по каналу",
    "place": "Санкт-Петербург",
    "age": "4 дня назад",
    "date": "8 ноября 2026",
    "likes": 7842,
    "totalComments": 6,
    "caption": "Вчера подруга сделала эту фотографию, и первая мысль была: «Ну нет, такое не выкладывают» 😅\n\nВолосы растрепались, свет какой-то странный, лицо не под тем углом.\n\nА потом вспомнила, какой хороший был день. Мы гуляли часа три, много смеялись и пили ужасно вкусный кофе.\n\nВ общем, пусть остаётся здесь такой, какой получилась 🤎",
    "tags": [
      "#обычныйдень",
      "#прогулки",
      "#безфильтров"
    ],
    "comments": [
      {
        "name": "mari_vech",
        "text": "Ох, как знакомо! У меня в галерее 30 почти одинаковых кадров, а в ленту идёт один 😅",
        "time": "4 дн."
      },
      {
        "name": "fit.aria",
        "text": "Мне наоборот нравится отбирать красивые фото. Это же тоже творчество, не обязательно давление.",
        "time": "3 дн."
      },
      {
        "name": "polya.arts",
        "text": "Очень тёплый кадр. И шарф чудесный!",
        "time": "3 дн."
      },
      {
        "name": "sonya.s",
        "text": "Иногда думаю: если выкладываю только удачное, будто остальные дни не считаются.",
        "time": "2 дн."
      },
      {
        "name": "oldschool_1987",
        "text": "А почему считается, что неидеальный кадр обязательно честнее? Свет и ракурс ведь тоже часть фото.",
        "time": "2 дн."
      },
      {
        "name": "ksenia.walks",
        "text": "Мне нравится, что тут видно саму прогулку, а не только идеальное лицо.",
        "time": "1 дн."
      }
    ]
  },
  {
    "id": 2,
    "image": "post-02-friends.webp",
    "alt": "Лена сидит в осеннем парке с двумя взрослыми подругами разного телосложения, все трое в повседневной закрытой одежде",
    "title": "Мои девочки",
    "place": "Таврический сад",
    "age": "9 дней назад",
    "date": "3 ноября 2026",
    "likes": 6351,
    "totalComments": 6,
    "caption": "Вчера собирались на концерт и, как обычно, полчаса решали, что надеть.\n\nУ каждой свои любимые вещи, свои заморочки и свои представления о том, что ей идёт.\n\nЗато на общей фотографии мы мне очень нравимся. Особенно тем, что вообще друг на друга не похожи.\n\nИ да, Марина опять забрала мою рубашку. Когда-нибудь я её верну 😂",
    "tags": [
      "#друзья",
      "#стиль",
      "#выходные"
    ],
    "comments": [
      {
        "name": "marina_cher",
        "text": "Рубашка теперь моя, смирись 😌❤️",
        "time": "9 дн."
      },
      {
        "name": "varya.d",
        "text": "Как приятно видеть компанию, где все настолько разные и все прекрасные!",
        "time": "8 дн."
      },
      {
        "name": "rita__m",
        "text": "Мне было бы сложно не сравнивать себя с подругами на общей фотке.",
        "time": "8 дн."
      },
      {
        "name": "egor.onair",
        "text": "Но ведь у каждого всё равно есть свой типаж, который нравится больше?",
        "time": "7 дн."
      },
      {
        "name": "anastasia.k",
        "text": "Никогда не удаётся найти наряд, который нравится мне и одновременно подходит для концерта 😄",
        "time": "6 дн."
      },
      {
        "name": "alina.sv",
        "text": "Круто, что вы не пытаетесь выглядеть одинаково. И энергия у фото потрясающая.",
        "time": "5 дн."
      }
    ]
  },
  {
    "id": 3,
    "image": "post-03-mirror.webp",
    "alt": "Лена в просторном коричневом свитере смотрит на отражение в зеркале в комнате, залитой естественным утренним светом",
    "title": "Спокойное утро",
    "place": "Дома",
    "age": "12 дней назад",
    "date": "31 октября 2026",
    "likes": 9138,
    "totalComments": 6,
    "caption": "Сегодня тот самый день, когда ничего особенно не нравится в зеркале.\n\nРаньше я бы обязательно начала что-нибудь исправлять: волосы, одежду, макияж.\n\nА сейчас просто переоделась в самый удобный свитер и пошла завтракать.\n\nНе знаю, обязательно ли каждый день себе нравиться. Иногда хочется просто заниматься своими делами, не думая о том, как выглядишь.",
    "tags": [
      "#утро",
      "#домашниебудни",
      "#мойритм"
    ],
    "comments": [
      {
        "name": "karina.vv",
        "text": "Вот это мне сейчас нужно было прочитать. Устала постоянно искать в себе что-то красивое.",
        "time": "11 дн."
      },
      {
        "name": "sveta.sun",
        "text": "А мне комплименты самой себе помогают. Даже когда не хочется.",
        "time": "11 дн."
      },
      {
        "name": "nastya.l",
        "text": "Интересная мысль: можно вообще не ставить внешности оценку на день.",
        "time": "10 дн."
      },
      {
        "name": "nikita_s",
        "text": "Иногда думаю, что всё это слишком усложняем. Встал, оделся, пошёл — и прекрасно.",
        "time": "9 дн."
      },
      {
        "name": "zoya_in",
        "text": "Обожаю такие медленные утра. Где взяла свитер?",
        "time": "8 дн."
      },
      {
        "name": "alla.rose",
        "text": "Не уверена, что у меня так получится, но сама идея мне близка.",
        "time": "7 дн."
      }
    ]
  },
  {
    "id": 4,
    "image": "post-04-cafe.webp",
    "alt": "Лена в закрытой клетчатой рубашке сидит у уличного столика кафе с чашкой кофе, задумчиво опираясь щекой на ладонь",
    "title": "После случайной встречи",
    "place": "Кофейня у дома",
    "age": "17 дней назад",
    "date": "26 октября 2026",
    "likes": 5986,
    "totalComments": 7,
    "caption": "Сегодня встретила знакомую, которую давно не видела.\n\nПервое, что она сказала: «Ты так изменилась! Тебе сейчас намного лучше».\n\nЯ понимаю, что она хотела сделать комплимент. Но почему-то стало немного неловко. Получается, раньше было хуже? 😅\n\nА потом мы два часа болтали обо всём на свете, и это было гораздо приятнее.\n\nА вы как относитесь к замечаниям о внешности, даже когда их говорят с добрыми намерениями?",
    "tags": [
      "#мысливслух",
      "#люди",
      "#кофевгороде"
    ],
    "comments": [
      {
        "name": "masha_kuz",
        "text": "Я бы обрадовалась, если бы мне так сказали. Для меня это комплимент.",
        "time": "17 дн."
      },
      {
        "name": "irina.s",
        "text": "Меня такие слова задевают. Как будто все следили, как я выгляжу до этого.",
        "time": "16 дн."
      },
      {
        "name": "dany.r",
        "text": "Мне кажется, всё решает интонация. Некоторые умеют сказать очень тепло.",
        "time": "16 дн."
      },
      {
        "name": "veta.r",
        "text": "Однажды мне сказали «тебе так лучше» после новой стрижки, а я до сих пор люблю старую 😂",
        "time": "15 дн."
      },
      {
        "name": "olga.nov",
        "text": "Не вижу ничего плохого в том, чтобы замечать изменения. Люди же общаются, а не читают мысли.",
        "time": "14 дн."
      },
      {
        "name": "lena_b",
        "text": "Мне больше нравятся комплименты про мои идеи и дела, а не про лицо.",
        "time": "13 дн."
      },
      {
        "name": "polina.fx",
        "text": "Бывает, и сама говорю такое автоматически. Теперь чаще задумываюсь.",
        "time": "12 дн."
      }
    ]
  },
  {
    "id": 5,
    "image": "post-05-years.webp",
    "alt": "Коллаж из четырёх фотографий взрослой Лены в возрасте от 22 до 26 лет с разными причёсками и повседневными стилями одежды",
    "title": "Из старого альбома",
    "place": "Из архива",
    "age": "3 недели назад",
    "date": "17 октября 2026",
    "likes": 10324,
    "totalComments": 6,
    "caption": "Нашла старые фотографии, и теперь хочется снова отрезать чёлку. Хотя в прошлый раз я обещала себе больше никогда этого не делать.\n\nЗабавно пересматривать свои образы. В 22 я пыталась одеваться как девушки из сохранёнок. Потом был период, когда у меня почти всё было чёрное.\n\nСейчас в шкафу половина вещей вообще не сочетается между собой, зато мне нравится.\n\nИнтересно, через пять лет я тоже буду смеяться над сегодняшними фотографиями?",
    "tags": [
      "#старыефото",
      "#мойстиль",
      "#воспоминания"
    ],
    "comments": [
      {
        "name": "sonya.jpg",
        "text": "Мода меняется, а на всех фото одна и та же улыбка!",
        "time": "3 нед."
      },
      {
        "name": "vova.p",
        "text": "Строгий чёрный образ всё равно мой фаворит.",
        "time": "3 нед."
      },
      {
        "name": "lilu.m",
        "text": "Помню, как в универе мы все хотели одинаковые пальто. Сейчас смешно.",
        "time": "3 нед."
      },
      {
        "name": "mira.film",
        "text": "Не уверена, что идти за трендами плохо. Они иногда помогают найти своё.",
        "time": "2 нед."
      },
      {
        "name": "tanya_ku",
        "text": "У меня наоборот сейчас одна эстетика и это очень облегчает жизнь.",
        "time": "2 нед."
      },
      {
        "name": "liza.m",
        "text": "Я за чёлку! Но сначала вспомни, сколько времени уходило на укладку 😄",
        "time": "2 нед."
      }
    ]
  },
  {
    "id": 6,
    "image": "post-06-paint.webp",
    "alt": "Лена в джинсовом комбинезоне и закрытом бежевом свитере рисует пейзаж на мольберте в осеннем парке",
    "title": "Почти закончила!",
    "place": "Парк в воскресенье",
    "age": "5 недель назад",
    "date": "8 октября 2026",
    "likes": 7429,
    "totalComments": 6,
    "caption": "Сегодня наконец закончила картину, которую начинала ещё летом! 🎨\n\nТри раза хотела всё закрасить и начать заново, но всё-таки получилось.\n\nНа фото у меня краска на щеке, волосы живут своей жизнью, а руки до сих пор не отмываются.\n\nЗато я очень довольна собой.\n\nТеперь нужно придумать, куда её повесить, потому что свободных стен дома больше нет 😂",
    "tags": [
      "#рисование",
      "#творческиебудни",
      "#маленькиерадости"
    ],
    "comments": [
      {
        "name": "katya.k",
        "text": "Картина невероятная! Покажи её отдельно, пожалуйста.",
        "time": "5 нед."
      },
      {
        "name": "arseniy.d",
        "text": "Очень нравится, как у тебя получается ловить свет на деревьях.",
        "time": "5 нед."
      },
      {
        "name": "mari.cher",
        "text": "На моей стене как раз место есть, просто говорю 😏",
        "time": "5 нед."
      },
      {
        "name": "vika.diy",
        "text": "Когда я делаю что-то руками, вообще забываю про все эти фотографии и зеркала.",
        "time": "4 нед."
      },
      {
        "name": "yulia.f",
        "text": "А мне было бы жалко выходить в парк в такой одежде — вся в краске! 😅",
        "time": "4 нед."
      },
      {
        "name": "nina.t",
        "text": "Лучшее чувство — когда наконец получилось то, над чем долго работала.",
        "time": "4 нед."
      }
    ]
  }
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
const state = { active:null, view:"all", following:false, likes:new Set(), saved:new Set(), comments:{}, messages:[], chatOpen:false, toastTimer:null, searchOpen:false };
const storageKey = "mood_body_freedom_v1";
const number = n => n.toLocaleString("ru-RU");
const icon = (id) => `<svg aria-hidden="true"><use href="#ico-${id}"></use></svg>`;

function readStorage(){
  try{
    const data=JSON.parse(localStorage.getItem(storageKey)||"{}");
    state.following=!!data.following;
    state.likes=new Set((data.likes||[]).map(Number).filter(id=>posts.some(p=>p.id===id)));
    state.saved=new Set((data.saved||[]).map(Number).filter(id=>posts.some(p=>p.id===id)));
    state.comments=data.comments&&typeof data.comments==="object"?data.comments:{};
    state.messages=Array.isArray(data.messages)?data.messages.filter(x=>typeof x==="string").slice(-30):[];
  }catch(_){ /* file:// private sessions can block storage */ }
}
function saveStorage(){
  try{localStorage.setItem(storageKey,JSON.stringify({following:state.following,likes:[...state.likes],saved:[...state.saved],comments:state.comments,messages:state.messages}));}catch(_){}
}
function setToast(message){
  const toast=$("#toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(state.toastTimer);state.toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function getFiltered(){return state.view==="liked"?posts.filter(p=>state.likes.has(p.id)):state.view==="saved"?posts.filter(p=>state.saved.has(p.id)):posts;}
function renderGallery(){
  const gallery=$("#gallery");gallery.textContent="";
  const chosen=getFiltered();
  chosen.forEach((p)=>{
    const b=document.createElement("button");b.type="button";b.className="gallery-card";
    b.setAttribute("aria-label",`Открыть публикацию: ${p.title}`);
    const image=document.createElement("img");image.src=p.image;image.alt=p.alt;image.loading="lazy";
    const hover=document.createElement("div");hover.className="gallery-hover";
    hover.innerHTML=`<span>${icon("heart")} ${number(p.likes+(state.likes.has(p.id)?1:0))}</span><span>${icon("message")} ${number(p.totalComments+(state.comments[p.id]||[]).length)}</span>`;
    b.append(image,hover);b.addEventListener("click",()=>openPost(p.id));gallery.appendChild(b);
  });
  $("#emptyState").hidden=chosen.length>0;
  $("#gallery").hidden=chosen.length===0;
  $("#emptyHeading").textContent=state.view==="saved"?"Здесь пока нет сохранённых": "Пока нет отметок «Нравится»";
  $("#emptyMessage").textContent=state.view==="saved"?"Нажмите на значок закладки в публикации, чтобы она появилась здесь.":"Отметьте понравившуюся публикацию сердечком, чтобы вернуться к ней позже.";
}
function setView(view){
  if(!["all","saved","liked"].includes(view))return;
  state.view=view;
  $$('[data-view]').forEach(el=>{
    el.classList.toggle("is-active",el.dataset.view===view);
    if(el.getAttribute("role")==="tab")el.setAttribute("aria-selected",String(el.dataset.view===view));
  });
  renderGallery();
  if(state.active===null) $(".feed-section").scrollIntoView({behavior:"smooth",block:"start"});
}
function syncFollow(){
  $("#followBtn").textContent=state.following?"✓ Вы подписаны":"Подписаться";
  $("#followBtn").classList.toggle("following",state.following);
  $("#followerNum").textContent=state.following?"18,4 тыс.":"18,4 тыс.";
}
function commentMarkup(comment,idx){
  const row=document.createElement("div");row.className="comment";
  const avatar=document.createElement("div");avatar.className="comment-icon-avatar";
  const shades=["#4c3e45","#3a4346","#514845","#41404c","#384744"];
  avatar.style.background=shades[idx%shades.length];avatar.textContent=comment.name[0].toUpperCase();
  const details=document.createElement("div");details.className="comment-main";
  const name=document.createElement("strong");name.textContent=comment.name;
  const text=document.createElement("span");text.textContent=comment.text;
  const when=document.createElement("span");when.className="comment-meta";when.textContent=comment.time;
  details.append(name,document.createTextNode(" "),text,when);row.append(avatar,details);return row;
}
function renderPost(){
  const p=posts.find(post=>post.id===state.active);if(!p)return;
  $("#modalImage").src=p.image;$("#modalImage").alt=p.alt;
  $("#modalLocation").textContent=p.place;$("#photoCount").textContent=`${String(p.id).padStart(2,"0")} / 06`;
  $("#postCaption").textContent=p.caption;$("#postTags").textContent=p.tags.join("  ");
  $("#postAge").textContent=p.age;$("#modalDate").textContent=p.date.toUpperCase();
  $("#modalLikes").textContent=`Нравится: ${number(p.likes+(state.likes.has(p.id)?1:0))}`;
  $("#modalLike").classList.toggle("active",state.likes.has(p.id));
  $("#modalLike").setAttribute("aria-label",state.likes.has(p.id)?"Убрать отметку Нравится":"Нравится");
  $("#modalSave").classList.toggle("active",state.saved.has(p.id));
  $("#modalSave").setAttribute("aria-label",state.saved.has(p.id)?"Убрать из сохранённого":"Сохранить");
  const own=state.comments[p.id]||[];
  $("#commentTotal").textContent=number(p.totalComments+own.length);
  const list=$("#commentsList");list.textContent="";
  [...p.comments,...own].forEach((comment,i)=>list.appendChild(commentMarkup(comment,i)));
  $("#commentInput").value="";$("#postDiscussion").scrollTop=0;
}
function getShareLink(id){
  const url=new URL(window.location.href);
  if(id)url.searchParams.set("post",String(id));else url.searchParams.delete("post");
  return url.href;
}
function setPostURL(id){
  try{window.history.replaceState(null,"",getShareLink(id));}catch(_){}
}
function openPost(id){
  const numeric=Number(id);if(!posts.some(p=>p.id===numeric))return;
  closeSearch();closeChat();state.active=numeric;renderPost();
  $("#postOverlay").hidden=false;document.body.style.overflow="hidden";setPostURL(numeric);
  $("#closePost").focus({preventScroll:true});
}
function closePost(){
  if(state.active===null)return;
  state.active=null;$("#postOverlay").hidden=true;document.body.style.overflow="";
  setPostURL(null);renderGallery();
}
function movePost(direction){
  if(state.active===null)return;
  const idx=posts.findIndex(p=>p.id===state.active);
  state.active=posts[(idx+direction+posts.length)%posts.length].id;
  renderPost();setPostURL(state.active);$(".post-modal").scrollTop=0;
}
function toggleLike(){
  const id=state.active;if(id===null)return;
  if(state.likes.has(id))state.likes.delete(id);else state.likes.add(id);
  saveStorage();renderPost();renderGallery();setToast(state.likes.has(id)?"Понравилось ♡":"Отметка убрана");
}
function toggleSaved(){
  const id=state.active;if(id===null)return;
  if(state.saved.has(id))state.saved.delete(id);else state.saved.add(id);
  saveStorage();renderPost();renderGallery();setToast(state.saved.has(id)?"Публикация сохранена":"Публикация удалена из сохранённого");
}
function openSearch(){
  closeChat();if(state.active!==null)closePost();
  state.searchOpen=true;$("#searchBackdrop").hidden=false;$("#searchInput").value="";renderSearch();
  $("#searchInput").focus();document.body.style.overflow="hidden";
}
function closeSearch(){
  state.searchOpen=false;$("#searchBackdrop").hidden=true;
  if(state.active===null)document.body.style.overflow="";
}
function renderSearch(){
  const text=$("#searchInput").value.toLocaleLowerCase("ru").trim();
  const results=posts.filter(p=>[p.title,p.caption,...p.tags,p.place].join(" ").toLocaleLowerCase("ru").includes(text));
  const box=$("#searchResults");box.textContent="";
  if(!results.length){const msg=document.createElement("p");msg.className="search-no-results";msg.textContent="Ничего не нашлось. Попробуйте другое слово.";box.appendChild(msg);return;}
  results.forEach(p=>{
    const btn=document.createElement("button");btn.className="search-result";btn.type="button";
    const img=document.createElement("img");img.src=p.image;img.alt="";
    const detail=document.createElement("div");const title=document.createElement("strong");title.textContent=p.title;
    const description=document.createElement("span");description.textContent=p.caption.slice(0,95)+(p.caption.length>95?"…":"");
    detail.append(title,description);btn.append(img,detail);btn.addEventListener("click",()=>openPost(p.id));box.appendChild(btn);
  });
}
async function copyLink(url){
  let done=false;
  try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(url);done=true;}}catch(_){}
  if(!done){
    const area=document.createElement("textarea");area.value=url;area.style.position="fixed";area.style.left="-9999px";
    document.body.append(area);area.select();try{done=document.execCommand("copy");}catch(_){}area.remove();
  }
  setToast(done?"Ссылка скопирована":"Ссылка доступна в адресной строке");
}


function drawChat(){
  const box=$("#chatBody");box.querySelectorAll(".chat-bubble").forEach(el=>el.remove());
  state.messages.forEach(message=>{const b=document.createElement("div");b.className="chat-bubble";b.textContent=message;box.appendChild(b)});
  box.scrollTop=box.scrollHeight;
}
function openChat(){
  if(state.active!==null)closePost();closeSearch();state.chatOpen=true;drawChat();
  $("#chatOverlay").hidden=false;document.body.style.overflow="hidden";$("#chatInput").focus();
}
function closeChat(){
  if(!state.chatOpen)return;state.chatOpen=false;$("#chatOverlay").hidden=true;
  if(state.active===null&&!state.searchOpen)document.body.style.overflow="";
}

function init(){
  readStorage();syncFollow();renderGallery();
  $$('[data-view]').forEach(button=>button.addEventListener("click",()=>setView(button.dataset.view)));
  $$('[data-open]').forEach(button=>button.addEventListener("click",()=>openPost(Number(button.dataset.open)+1)));
  $("#brandBtn").addEventListener("click",()=>{setView("all");window.scrollTo({top:0,behavior:"smooth"});});
  for(const id of ["mobileTop","mobileAccount"]){$("#"+id).addEventListener("click",()=>{setView("all");window.scrollTo({top:0,behavior:"smooth"});});}
  $("#resetView").addEventListener("click",()=>setView("all"));
  $("#followBtn").addEventListener("click",()=>{state.following=!state.following;syncFollow();saveStorage();setToast(state.following?"Вы подписались на body.freedom":"Подписка отменена");});
  $("#messageProfileBtn").addEventListener("click",openChat);
  $("#closeChat").addEventListener("click",closeChat);
  $("#chatOverlay").addEventListener("click",event=>{if(event.target===$("#chatOverlay"))closeChat();});
  $("#chatForm").addEventListener("submit",event=>{
    event.preventDefault();const text=$("#chatInput").value.trim();if(!text)return;
    state.messages.push(text.slice(0,300));saveStorage();drawChat();$("#chatInput").value="";
    setToast("Сообщение сохранено локально");
  });
  for(const id of ["searchButton","mobileSearch","mobileBottomSearch"]){$("#"+id).addEventListener("click",openSearch);}
  $("#closeSearch").addEventListener("click",closeSearch);
  $("#searchBackdrop").addEventListener("click",event=>{if(event.target===$("#searchBackdrop"))closeSearch();});
  $("#searchInput").addEventListener("input",renderSearch);
  $("#postOverlay").addEventListener("click",event=>{if(event.target===$("#postOverlay"))closePost();});
  $("#closePost").addEventListener("click",closePost);
  $("#prevPost").addEventListener("click",()=>movePost(-1));$("#nextPost").addEventListener("click",()=>movePost(1));
  let swipeStart=null;
  $(".post-photo").addEventListener("pointerdown",event=>{if(event.isPrimary&&event.pointerType!=="mouse"&&!event.target.closest("button")){swipeStart={x:event.clientX,y:event.clientY,id:event.pointerId};event.currentTarget.setPointerCapture(event.pointerId);}});
  $(".post-photo").addEventListener("pointerup",event=>{if(!swipeStart||swipeStart.id!==event.pointerId)return;const dx=event.clientX-swipeStart.x,dy=event.clientY-swipeStart.y;swipeStart=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)movePost(dx<0?1:-1);});
  $(".post-photo").addEventListener("pointercancel",()=>{swipeStart=null;});
  $("#photoPrev").addEventListener("click",()=>movePost(-1));$("#photoNext").addEventListener("click",()=>movePost(1));
  $("#modalLike").addEventListener("click",toggleLike);$("#modalSave").addEventListener("click",toggleSaved);
  $("#modalComment").addEventListener("click",()=>$("#commentInput").focus());
  $("#modalShare").addEventListener("click",()=>copyLink(getShareLink(state.active)));
  $("#commentForm").addEventListener("submit",event=>{
    event.preventDefault();const text=$("#commentInput").value.trim();if(!text||state.active===null)return;
    const id=state.active;if(!Array.isArray(state.comments[id]))state.comments[id]=[];
    state.comments[id].push({name:"you",text:text.slice(0,280),time:"только что"});saveStorage();renderPost();
    $("#postDiscussion").scrollTop=$("#postDiscussion").scrollHeight;
    setToast("Комментарий сохранён на этом устройстве");
  });
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){if(state.chatOpen)closeChat();else if(state.active!==null)closePost();else if(state.searchOpen)closeSearch();}
    if(state.active!==null && !["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)){
      if(event.key==="ArrowRight"){event.preventDefault();movePost(1);}
      if(event.key==="ArrowLeft"){event.preventDefault();movePost(-1);}
    }
  });
  const url=new URL(window.location.href);const requested=Number(url.searchParams.get("post"));
  if(requested&&posts.some(p=>p.id===requested))openPost(requested);
}
document.addEventListener("DOMContentLoaded",init);
