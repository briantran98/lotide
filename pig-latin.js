const args = process.argv.splice(2);

const pigLatin = function(stringArray) {
  stringArray.forEach(string => {
    let pigString = "";
    for (let i = 1; i < string.length; i++) {
      pigString += string.charAt(i);
    }
    pigString += `${string.charAt(0)}ay`
    console.log(pigString);
  });
}

pigLatin(args);