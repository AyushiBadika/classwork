const ageContainer = document.querySelector(".ageContainer");
const btn = document.querySelector(".btn");
const input = document.querySelector("#date");

console.log(ageContainer, btn, input);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const date = new Date(input.value);
  const currentDate = new Date();
  // alert(currentDate + " " + date);
  if (input.value == "") alert("Enter Date of Birth");
  else {
    //year
    const year = date.getFullYear();
    const currentYear = currentDate.getFullYear();

    //month
    const month = date.getMonth();
    const currentMonth = currentDate.getMonth();

    //day
    const day = date.getDay();
    const currentDay = currentDate.getDay();
    // alert(year + "\n" + currentYear);
    ageContainer.innerHTML = `You are ${
      currentYear === year ? 0 : currentYear - year - 1
    } year, ${
      12 * (currentYear - year) -
      (currentMonth > month ? currentMonth - month : month - currentMonth)
    } month old`;
  }
});

// 02-07-2022
// 14-04-2024
