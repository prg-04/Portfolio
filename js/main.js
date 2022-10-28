const toggleMenu = document.querySelector(".toggle");
const navLinks = document.querySelector(".navlinks");

let menuOpen = false;

toggleMenu.addEventListener("click", () => {
  if (!menuOpen) {
    toggleMenu.classList.add("open");
    menuOpen = true;
  } else {
    toggleMenu.classList.remove("open");
    menuOpen = false;
  }
  navLinks.classList.toggle("open");
});


function closeMenu() {
  toggleMenu.classList.remove('open');
  navLinks.classList.remove('open');
  menuOpen = false;
}



const fstNerr = document.querySelector(".firstNerror");
const lNerr = document.querySelector(".lastNerror");
const flNerr = document.querySelector(".fullNerror");
const emailErr = document.querySelector(".emailError");
const msgErr = document.querySelector(".msgError");
const submitErr = document.querySelector(".submitError");

function validateFirstName() {
  let fstname = document.getElementById("firstName").value;

  if (fstname.length == 0) {
    fstNerr.innerHTML = "First name is required";
    return false;
  }
  fstNerr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
function validateLastName() {
  let lstname = document.getElementById("lastName").value;

  if (lstname.length == 0) {
    lNerr.innerHTML = "Last name is required";
    return false;
  }
  lNerr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
function validateFullName() {
  let fullName = document.getElementById("fullName").value;

  if (fullName.length == 0) {
    flNerr.innerHTML = "Full name is required";
    return false;
  }
  if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    flNerr.innerHTML = "Enter second name"
  }

  flNerr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailErr.innerHTML = "Email is required";
    return false;
  } else if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailErr.innerHTML = "Email Invalid";
    return false;
  }
  emailErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateMsg() {
  let msg = document.getElementById("msg").value;
  let required = 30;

  let charLeft = required - msg.length;
  if (charLeft > 0) {
    msgErr.innerHTML = charLeft + "more characters required";
    return false;
  }
  msgErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function formValidate() {
  if (
    !validateFullName() ||
    !validateFirstName() ||
    !validateLastName() ||
    !validateEmail() ||
    !validateMsg()
  ) {
    submitErr.style.display = 'block';
    submitErr.style.color = 'red';
    submitErr.innerHTML = 'Please fix error to submit';
    setTimeout(function(){submitErr.style.display = 'none';}, 3000)
    return false;
  }
submitErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
}
 