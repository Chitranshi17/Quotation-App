let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");

const fetchData = async () => {
  const responce = await fetch("https://quotable.io/random");
  const data = await responce.json();

  let h5 = document.querySelector("h5");
  console.log("h5", h5.innerText);
  h5.innerText = data.content;
  //   let Quatation = h5.value;
  //   console.log("Quatation", Quatation);

  let p = document.querySelector("p");
  p.innerText = data.author;

  let a = document.querySelector("a");
  a.innerText = data.tags;

  // Whatsapp Share Fuctionality

  let What = document.querySelector("#what");

  let gotoWhatsapp = () => {
    let whatsappUrl =
      "https://wa.me/9131189261?text=" +
      "Quotation : " +
      h5.innerText +
      "%0a" +
      "Author Name: " +
      p.innerText +
      "%0a" +
      "Type: " +
      a.innerText;

    window.open(whatsappUrl, "_blank").focus();
  };

  What.addEventListener("click", gotoWhatsapp);

  //   Skype Share Functionality

  let Skype = document.querySelector("#skype");

  let gotoSkype = () => {
    let skypeUrl =
      "https://skype.com/invite/eb25c15ae366cbf2" +
      "Quotation : " +
      h5.innerText +
      "%0a" +
      "Author Name: " +
      p.innerText +
      "%0a" +
      "Type: " +
      a.innerText;

    window.open(skypeUrl, "_blank").focus();
  };

  Skype.addEventListener("click", gotoSkype);

  // Voice Function

  let speech = new SpeechSynthesisUtterance();

  let playBtn = document.querySelector("#play");

  const playAudio = () => {
    speech.text = h5.innerText;
    window.speechSynthesis.speak(speech);

    speech.text = p.innerText;
    window.speechSynthesis.speak(speech);
  };

  playBtn.addEventListener("click", playAudio);

  // // Whatsapp Share

  // const whatBtn = () =>{
  //         // e.preventDefault();

  //     }

  // what.addEventListener('click',whatBtn);

  // let What = document.querySelector('#what')
  // const gotoWhatsapp = () =>{
  //     let card = document.querySelector('#card');

  //     let url = "https://wa.me//9179855573?text=" + "h5:" + h5;

  //     window.open(url, "_blank").focus();
  // }

  // what.addEventListener('click', gotoWhatsapp);
};

fetchData();

rightBtn.addEventListener("click", fetchData);

leftBtn.addEventListener("click", fetchData);

// Share button

let share = document.querySelector("#share");

let shareList = document.querySelector("#share-list");

let insta = document.querySelector("#insta");
let what = document.querySelector("#what");
let skype = document.querySelector("#fb");

// const whatBtn = (e) =>{
//     e.preventDefault();
//     window.open("https://wa.me/+919131189261");
// }

// const instaBtn = (e) => {
//     e.preventDefault();
//     window.open("https://www.instagram.com/art_the_piction")
// }

// const skypeBtn = (e) => {
//     e.preventDefault();
//     window.open("https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit")
// }
// shareBtn()
// what.addEventListener('click',whatBtn);
// insta.addEventListener('click',instaBtn);
// skype.addEventListener('click',skypeBtn);
