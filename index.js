let quotes = document.getElementById("renderquote");
let buttoncopy = document.querySelector(".copy");
let buttonNewquotes = document.querySelector(".newquote");
let author = document.querySelector(".author");

const copyContent = async () => {
  let text = quotes.textContent;
  let speaker = author.textContent;
  try {
    await navigator.clipboard.writeText(`${text}`);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
  alert(`Quote by ${speaker} copied to clipboard!`);
};
buttoncopy.addEventListener("click", copyContent);
buttonNewquotes.addEventListener("click", function () {
  let index = random();
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quotes.textContent = data[index - 1].text;
      author.textContent = data[index - 1].author;
    });
});

function random() {
  let no = Math.floor(Math.random() * 1643 + 1);
  return no;
}
