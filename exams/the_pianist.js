function solve(input) {
  const iter = Number(input.shift());
  let pieces = {};
  for (let i = 0; i < iter; i++) {
    let [piece, composer, key] = input.shift().split("|");
    pieces[piece] = { composer, key };
  }
  let commands = input.shift();
  while (commands !== "Stop") {
    let command = commands.split("|");
    if (command[0] === "Add") {
      if (pieces.hasOwnProperty(command[1])) {
        console.log(`${command[1]} is already in the collection!`);
      } else {
        pieces[command[1]] = { composer: command[2], key: command[3] };
        console.log(
          `${command[1]} by ${command[2]} in ${command[3]} added to the collection!`
        );
      }
    } else if (command[0] === "Remove") {
      if (pieces.hasOwnProperty(command[1])) {
        let song = command[1];
        delete pieces[song];
        console.log(`Successfully removed ${command[1]}!`);
      } else {
        console.log(
          `Invalid operation! ${command[1]} does not exist in the collection.`
        );
      }
    } else if (command[0] === "ChangeKey") {
      if (pieces.hasOwnProperty(command[1])) {
        pieces[command[1]] = {
          composer: pieces[command[1]].composer,
          key: command[2],
        };
        console.log(`Changed the key of ${command[1]} to ${command[2]}!`);
      } else {
        console.log(
          `Invalid operation! ${command[1]} does not exist in the collection.`
        );
      }
    } else {
      console.log(
        `Invalid operation! ${command[1]} does not exist in the collection.`
      );
    }

    commands = input.shift();
  }
  let entries = Object.entries(pieces);
  for (const [piece, info] of entries) {
    console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
  }
}

input = [
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
];

solve(input);
