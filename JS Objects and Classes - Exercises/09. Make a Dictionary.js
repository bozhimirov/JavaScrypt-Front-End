function dictionary(jsonString) {
  let dict = {};
  for (i of jsonString) {
    let data = JSON.parse(i);
    for (const key in data) {
      dict[key] = data[key];
    }
  }

  let sortedDict = Object.entries(dict).sort((nameA, nameB) => {
    let [termA, _descriptionA] = nameA;
    let [termB, _descriptionB] = nameB;

    return termA.localeCompare(termB);
  });

  for (const [term, description] of sortedDict) {
    console.log(`Term: ${term} => Definition: ${description}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
