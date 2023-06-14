const burgerMenuOpen = document.getElementById("burgerMenuOpen");
const menuDialog = document.getElementById('menu-dialog');
const burgerMenuClose = document.getElementById('burgerMenuClose');
const dialog = document.getElementById('menu-dialog');

export function slideMenuOpen() {burgerMenuOpen.addEventListener('click', () => {
  menuDialog.show()
})
};

export function slideMenuClose() {burgerMenuClose.addEventListener('click', () => {
  menuDialog.close()
})
};

 //добавление меню на экране 1120
export function handleResize() {
  if (window.innerWidth > 1120) {
    dialog.setAttribute('open', ''); 
  } else {
    dialog.removeAttribute('open'); 
  }
}

window.addEventListener('resize', handleResize); 