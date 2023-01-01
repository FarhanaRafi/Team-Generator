let form = document.querySelector("form");
let nameInput = document.querySelector("#name-input");
let addButton = document.querySelector("#add-button");
let teamNumberInput = document.querySelector("#team-number-input");
let generateTeamsButton = document.querySelector("#generate-teams-button");
let waitingList = document.querySelector("#waiting-list-items");
let teamsContainer = document.querySelector("#team-container");

let teams = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  teamsContainer.innerHTML = "";
  teams = [];
  // Get the number of teams from the input
  let numTeams = teamNumberInput.value;

  // Generate the specified number of teams
  for (let i = 0; i < numTeams; i++) {
    let team = document.createElement("div");
    team.classList.add("team");
    team.innerHTML = `<h3> Team ${i + 1} </h3> 
                    <ul> </ul> <button class= "remove-button"> Remove</button>`;
    teams.push(team);
    teamsContainer.appendChild(team);
  }

  let removeButtons = teamsContainer.querySelectorAll(".remove-button");

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function (e) {
      if (e.target.classList.contains("remove-button")) {
        // Remove the participant from the team and add them back to the waiting list
        let li = e.target.parentNode.querySelector("li");
        let name = li.innerText;
        e.target.parentNode.querySelector("ul").removeChild(li);
        waitingList.appendChild(li);
      }
    });
  }
});

addButton.addEventListener("click", function () {
  // Get the participant name from the input
  let name = nameInput.value;

  // Add the participant to the waiting list
  let li = document.createElement("li");
  li.innerText = name;
  waitingList.appendChild(li);
  nameInput.value = "";
});

// generateTeamsButton.addEventListener("click", function () {
//   // Assign a random participant from the waiting list to a random team
//   if (waitingList.children.length > 0) {
//     let randomIndex = Math.floor(Math.random() * waitingList.children.length);
//     let randomTeam = teams[Math.floor(Math.random() * teams.length)];
//     let participant = waitingList.children[randomIndex];
//     randomTeam.querySelector("ul").appendChild(participant);
//     waitingList.removeChild(participant);
//   }
// });

function assignMembers(e) {
  let randomIndex = Math.floor(Math.random() * waitingList.children.length);
  let participant = waitingList.children[randomIndex];
  let randomTeam = teams[Math.floor(Math.random() * teams.length)];
  randomTeam.querySelector("ul").appendChild(participant);
  waitingList.removeChild(participant);
}
