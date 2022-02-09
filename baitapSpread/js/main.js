// const heading = document.querySelector(".heading");
// (jump = (e) => {
//   return [...e].map((e) => `<span>${e}</span>`).join("");
// }),
//   (heading.innerHTML = jump(heading.innerText));

let text = document.querySelector(".heading").innerHTML;
let charset = [...text];

console.log(charset);

let hoverText = () => {
  let content = "";
  for (let i in charset) {
    content += `<span>${charset[i]}</span>`;
  }
  console.log(content);
  document.querySelector(".heading").innerHTML = content;

  // return content
};
hoverText();
