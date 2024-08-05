/*
 * This code is taken from Hyperplexed video https://www.youtube.com/watch?v=bAwEj_mSzOs
 */
let isMenuPageActive = false;
let animationRunning = false;

function toggleMenuPage(router, on) {
  if (on !== undefined && on === isMenuPageActive) {
    return;
  }
  isMenuPageActive = !isMenuPageActive;
  ['.main-page-intro', '.main-page-menu'].map((x, index) => {
    isMenuPageActive == index ? show(x) : hide(x);
  });
  router.navigate(isMenuPageActive ? '/menu' : '/');
}

function loadBackground(router) {

  const container = document.body;
  const wrapper = document.querySelector("#tiles");

  let columns = 0, rows = 0;

  function handleOnClick(index) {
    animationRunning = true;
    toggleMenuPage(router);
    anime({
      targets: ".tile",
      opacity: isMenuPageActive ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      }),
      complete: () => { animationRunning = false; }
    });
  }

  function createTile(index) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.opacity = isMenuPageActive ? 0 : 1;
    tile.onclick = _ => handleOnClick(index);
    return tile;
  }

  function createTiles(quantity) {
    Array.from(Array(quantity)).map((_, index) => {
      wrapper.appendChild(createTile(index));
    });
  }

  function createGrid() {
    wrapper.innerHTML = "";
    
    const size = 60;
    
    columns = Math.floor(container.clientWidth / size);
    rows = Math.floor(container.clientHeight / size);
    
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    createTiles(columns * rows);
  }

  createGrid();
  window.onresize = createGrid;
}
