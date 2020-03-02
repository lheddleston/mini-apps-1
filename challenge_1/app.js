
document.querySelectorAll("td").forEach(item => {
  item.addEventListener('click', event => {
    item.append("X");
  });
})


