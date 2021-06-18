"user strict";

function main() {
  // Get the text from 'input'
  const input = document.getElementById("input").value;
  console.log(input);

  // Blur the text
  const result = blur(input);
  console.log(result);

  // Print the text to 'result'
  document.getElementById("result").value = result;
  document.getElementById("result").select;
}

// Replace the flag text with asterisks.
//
// Example:
//   flag{foo bar} => flag{*** ***}
//   foo barrrr => *** ******
//
function blur(str) {
  if (str == "") {
    return "";
  }

  // Replace all strings except for spaces with asterisks.
  replace = (raw) => {
    let res = "";
    for (let i = 0; i < raw.length; i++) {
      if (raw[i] == " ") {
        res += " ";
      } else {
        res += "*";
      }
    }
    return res;
  };

  if (str.length >= 6 && str.slice(0, 5) == "flag{" && str.slice(-1) == "}") {
    const substr = str.substring(5, str.length - 1);
    console.log(substr);
    const result = "flag{" + replace(substr) + "}";
    return result;
  } else {
    return replace(str);
  }
}
