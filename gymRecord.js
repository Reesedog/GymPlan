let gymRecords = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};

function init() {
  for (let day in gymRecords) {
    displayRecords(day);
  }
}

function displayRecords(day) {
  const ul = document.getElementById(`${day}-records`);
  ul.innerHTML = '';  

  gymRecords[day].forEach((record, index) => {
    const li = document.createElement('li');
    li.textContent = `${record.exercise}, Sets: ${record.sets}, Weight: ${record.weight}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';  
    deleteButton.onclick = function () {
      deleteRecord(day, index);
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

function addRecord(day) {
  let exercise = prompt("Enter the exercise:");
  let sets = prompt("Enter the number of sets:");
  let weight = prompt("Enter the weight:");
  const record = {
    exercise: exercise,
    sets: sets,
    weight: weight
  };

  gymRecords[day].push(record);
  displayRecords(day);
}

function deleteRecord(day, index) {
  gymRecords[day].splice(index, 1);
  displayRecords(day);
}
