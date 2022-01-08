const money1 = document.querySelector(".monney1");
const money2 = document.querySelector(".monney2");
const money3 = document.querySelector(".monney3");
const check = document.querySelector("#checkbox");

check.addEventListener("change", handleCheck);

function handleCheck() {
  if (check.checked) {
    money1.innerHTML = ` <span>$</span>
                <h2>199.99</h2>`;
    money2.innerHTML = ` <span>$</span>
                <h2>299.99</h2>`;
    money3.innerHTML = ` <span>$</span>
                <h2>399.99</h2>`;
  }
  if (!check.checked) {
    money1.innerHTML = ` <span>$</span>
                <h2>19.99</h2>`;
    money2.innerHTML = ` <span>$</span>
                <h2>29.99</h2>`;
    money3.innerHTML = ` <span>$</span>
                <h2>39.99</h2>`;
  }
}
