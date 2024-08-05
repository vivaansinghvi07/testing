document.addEventListener("DOMContentLoaded", () => {
  const router = new Navigo('/');
  router
    .on('/', () => {})
    .on('/menu', () => {
      toggleMenuPage(router, true);
      if (!animationRunning) {
        document.querySelectorAll('.tile').forEach((ele) => {
          ele.style.opacity = '0';
        });
      }
    })
    .resolve();
  loadBackground(router);
});
