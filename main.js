// Functions

function getRndNumber() {
  console.log("first");
  fetch("api/getRandomNumber", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((r) => {
      let n = r.split(": ")[1];
      rdn.innerHTML = n;
    })
    .catch((e) => console.error(e));
}
