function solve(input) {
  const integer = Number(input.shift());
  let newDict = {};
  for (let i = 0; i < integer; i++) {
    let [assignee, taskId, title, status, estimatePoints] = input
      .shift()
      .split(":");

    if (newDict.hasOwnProperty(assignee)) {
      newDict[assignee].push({ taskId, title, status, estimatePoints });
    } else {
      newDict[assignee] = [];
      newDict[assignee].push({ taskId, title, status, estimatePoints });
    }
  }
  for (let i = 0; i < input.length; i++) {
    // for (let line of input) {
    let commandLine = input[i].split(":");
    if (commandLine[0] === "Add New") {
      let newAssignee = commandLine[1];
      if (newDict.hasOwnProperty(newAssignee)) {
        taskId = commandLine[2];
        title = commandLine[3];
        newStatus = commandLine[4];
        estimatePoints = commandLine[5];
        newDict[newAssignee].push({
          taskId,
          title,
          status: newStatus,
          estimatePoints,
        });
      } else {
        console.log(`Assignee ${newAssignee} does not exist on the board!`);
      }
    } else if (commandLine[0] === "Change Status") {
      let newAssignee = commandLine[1];
      if (newDict.hasOwnProperty(newAssignee)) {
        newTaskId = commandLine[2];
        newStatus = commandLine[3];
        for (let i = 0; i < newDict[newAssignee].length; i++) {
          if (newDict[newAssignee][i].taskId === newTaskId) {
            newDict[newAssignee][i].status = newStatus;
          } else {
            console.log(
              `Task with ID ${newTaskId} does not exist for ${newAssignee}!`
            );
          }
        }
      } else {
        console.log(`Assignee ${newAssignee} does not exist on the board!`);
      }
    } else if (commandLine[0] === "Remove Task") {
      let newAssignee = commandLine[1];
      let index = Number(commandLine[2]);
      if (newDict.hasOwnProperty(newAssignee)) {
        if (index < 0 || index > newDict[newAssignee].length - 1) {
          console.log(`Index is out of range!`);
        } else {
          newDict[newAssignee].splice(index, 1);
        }
      } else {
        console.log(`Assignee ${newAssignee} does not exist on the board!`);
      }
    }
  }
  let ToDoPoints = 0;
  let InProgressPoints = 0;
  let CodeReviewPoints = 0;
  let DonePoints = 0;
  for (const line in newDict) {
    // console.log(line);
    for (let i = 0; i < newDict[line].length; i++) {
      // console.log(newDict[line][i]);
      if (newDict[line][i].status == "ToDo") {
        ToDoPoints += Number(newDict[line][i].estimatePoints);
      } else if (newDict[line][i].status == "In Progress") {
        InProgressPoints += Number(newDict[line][i].estimatePoints);
      } else if (newDict[line][i].status == "Code Review") {
        CodeReviewPoints += Number(newDict[line][i].estimatePoints);
      } else if (newDict[line][i].status == "Done") {
        DonePoints += Number(newDict[line][i].estimatePoints);
      }
    }
  }

  console.log(`ToDo: ${ToDoPoints}pts`);
  console.log(`In Progress: ${InProgressPoints}pts`);
  console.log(`Code Review: ${CodeReviewPoints}pts`);
  console.log(`Done Points: ${DonePoints}pts`);

  if (DonePoints >= ToDoPoints + InProgressPoints + CodeReviewPoints) {
    console.log(`Sprint was successful!`);
  } else {
    console.log(`Sprint was unsuccessful...`);
  }
}
input = [
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
];

// input = [
//   "4",
//   "Kiril:BOP-1213:Fix Typo:Done:1",
//   "Peter:BOP-1214:New Products Page:In Progress:2",
//   "Mariya:BOP-1215:Setup Routing:ToDo:8",
//   "Georgi:BOP-1216:Add Business Card:Code Review:3",
//   "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
//   "Change Status:Georgi:BOP-1216:Done",
//   "Change Status:Will:BOP-1212:In Progress",
//   "Remove Task:Georgi:3",
//   "Change Status:Mariya:BOP-1215:Done",
// ];

solve(input);
