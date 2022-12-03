const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
  item.onmouseover = () => {        
    console.log("mousse ", index);
    menu.dataset.activeIndex = index;
  };
});
