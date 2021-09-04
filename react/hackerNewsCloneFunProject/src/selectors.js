export function ourSelectors() {
  //open btn
  var openBtn = document.querySelector(".open-btn");
  //close btn
  var closeBtn = document.querySelector(".close-btn");
  //last item of modal
  var lastItemOfModal = document.getElementById("homepage-navbtn");
  return {
    openBtn,
    closeBtn,
    lastItemOfModal,
  };
}
