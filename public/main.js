let isToggled = false;
const navbar = document.querySelector("#nav") as HTMLElement;
const menuBtn = document.querySelector("#hamburger") as HTMLButtonElement;
const links = [...navbar.querySelector("#links-group").children] as HTMLAnchorElement[];

function toggleNavlinks() {
    if (isToggled) {
  navbar.dataset.state = "active";
    } else {
  navbar.dataset.state = "";
    }
}

menuBtn.addEventListener("click", () => {
  isToggled = !isToggled;
  toggleNavlinks();
});