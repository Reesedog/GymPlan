let gymRecords = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  };
  
  function addRecord(day) {
    let exercise = prompt("Enter the exercise:");
    let sets = prompt("Enter the number of sets:");
    let weight = prompt("Enter the weight:");
  
    let record = {
      exercise: exercise,
      sets: sets,
      weight: weight
    };
  
    gymRecords[day].push(record);
    displayRecords(day);
  }
  
  function deleteRecord(day) {
    gymRecords[day].pop();
    displayRecords(day);
  }
  
  function displayRecords(day) {
    let dayDiv = document.getElementById(day + "-records");
    dayDiv.innerHTML = "";
  
    for (let record of gymRecords[day]) {
      let p = document.createElement("p");
      p.textContent = "Exercise: " + record.exercise + ", Sets: " + record.sets + ", Weight: " + record.weight;
      dayDiv.appendChild(p);
    }
  }
  
  // Call displayRecords for each day to show record
  displayRecords('Monday');
  displayRecords('Tuesday');
  displayRecords('Wednesday');
  displayRecords('Thursday');
  displayRecords('Friday');
  displayRecords('Saturday');
  displayRecords('Sunday');
  