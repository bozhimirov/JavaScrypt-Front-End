function oddOccurrences(input) {
  let result = new Set();
  let splitted = input.toLowerCase().split(" ");
  for (const element of splitted) {
    let count = splitted.filter((w) => w === element).length;
    if (count % 2 !== 0) {
      result.add(element);
    }
  }

  console.log([...result].join(" "));
}

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
