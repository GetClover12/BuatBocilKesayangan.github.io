const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question.innerHTML = "Kirim Ke WA ya cantikk... I Love you Cil<3 ";
gif.src =
"https://i.pinimg.com/originals/ae/85/01/ae85017b35de07f0fe5fc5accfa3c59f.gif"; });

noBtn.addEventListener("click", () => {
question.innerHTML = " Memang Boleh Bilang Enggak :( ";
    gif.src =
"https://media.giphy.com/media/gg2xeZ5JBaH1ThoiTP/giphy.gif";});