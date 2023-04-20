function solve(input) {
  let horses = input.shift().split("|");
  // console.log(horses);
  let command = input.shift();
  while (command !== "Finish") {
    let commandStatement = command.split(" ");
    // console.log(commandStatement);
    if (commandStatement[0] === "Retake") {
      let overtakingHorse = commandStatement[1];
      let overtakenHorse = commandStatement[2];
      let indexOvertakingHorse = horses.indexOf(overtakingHorse);
      // console.log(indexOvertakingHorse);
      let indexOvertakenHorse = horses.indexOf(overtakenHorse);
      // console.log(indexOvertakenHorse);
      if (indexOvertakingHorse < indexOvertakenHorse) {
        [horses[indexOvertakingHorse], horses[indexOvertakenHorse]] = [
          horses[indexOvertakenHorse],
          horses[indexOvertakingHorse],
        ];
        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    } else if (commandStatement[0] === "Trouble") {
      let horseName = commandStatement[1];
      let indexHorseName = horses.indexOf(horseName);
      if (indexHorseName !== 0) {
        [horses[indexHorseName - 1], horses[indexHorseName]] = [
          horses[indexHorseName],
          horses[indexHorseName - 1],
        ];
        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    } else if (commandStatement[0] === "Rage") {
      let horseName = commandStatement[1];
      let indexHorseName = horses.indexOf(horseName);
      let maxIndexHorses = horses.length - 1;
      let newIndex = indexHorseName + 2;
      if (newIndex >= maxIndexHorses) {
        newIndex = maxIndexHorses;
      }
      if (indexHorseName !== maxIndexHorses) {
        let horseToReposition = horses.splice(indexHorseName, 1);
        horses.splice(newIndex, 0, horseToReposition[0]);
        // console.log(horses);
        // console.log(`${horseName} rages 2 positions ahead.`);
      }
      console.log(`${horseName} rages 2 positions ahead.`);
    } else if (commandStatement[0] === "Miracle") {
      let lastHorse = horses.shift();
      horses.push(lastHorse);
      console.log(`What a miracle - ${lastHorse} becomes first.`);
    }

    command = input.shift();
  }
  console.log(horses.join("->"));
  let lastIndex = horses.length - 1;
  console.log(`The winner is: ${horses[lastIndex]}`);
}
