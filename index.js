let arrow = document.querySelectorAll('.arrow');
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    // console.log(arrowParent);
    arrowParent.classList.toggle('showMenu');
  });
}

let profileArrow = document.querySelectorAll('.profile_arrow');
for (var i = 0; i < profileArrow.length; i++) {
  profileArrow[i].addEventListener('click', (e) => {
    let profileArrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    // console.log(profileArrowParent);
    profileArrowParent.classList.toggle('showMenu');
  });
}

// const callToActiveNav = document.querySelectorAll('.nav-links');
// callToActiveNav.forEach((nav) => {
//   nav.addEventListener('click', (e) => {
//     callToActiveNav.forEach((f) =>
//       f != e.target ? f.classList.remove('navActive') : ''
//     );
//     e.target.classList.toggle('navActive');
//   });
// });
