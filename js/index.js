const icons = Array.from(document.getElementsByClassName('puzzle-icon'));

function hideInfo(e) {
  const div =
    e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement;
  const children = Array.from(div.childNodes);
  const cardBottom = children[7];
  cardBottom.classList.remove('hidden');
}
function addInfo(e) {
  const div =
    e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement;
  const children = Array.from(div.childNodes);
  const cardBottom = children[7];
  cardBottom.classList.add('hidden');
}
console.log(icons);
icons.forEach((element) => {
  element.addEventListener('mouseover', hideInfo);
  element.addEventListener('mouseleave', addInfo);
});
