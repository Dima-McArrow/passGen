// passGenController.js

// Function to generate array of characters from 'c1' to 'c2'
function to_a(c1 = "A", c2 = "+") {
  const a =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-=+".split(
      ""
    );
  return a.slice(a.indexOf(c1), a.indexOf(c2) + 1);
}

// Function to generate a random password of a given length
const pass_gen = (length) => {
  let pass = "";
  let a = to_a();
  for (let i = 0; i < length; i++) {
    pass += a[Math.floor(Math.random() * a.length)];
  }
  return pass;
};

// Exporting the controller function
exports.getPass = async (req, res) => {
  try {
    let pass = pass_gen(13);
    res.json({ pass: pass });
  } catch (err) {
    console.error("Error generating password:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getPassByLength = async (req, res) => {
  try {
    const lengthInput = parseInt(req.query.lengthInput, 10); // Ensure parsing as integer
    console.log("Length input: ", lengthInput);
    if (isNaN(lengthInput) || lengthInput <= 0) {
      return res.status(400).json({ message: "Invalid length provided." });
    }
    let pass = pass_gen(lengthInput);
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@]).+$/
    while (!regex.test(pass)) {
      pass = pass_gen(lengthInput);
    }
    res.json({ pass: pass });
  } catch (err) {
    console.error("Error generating password:", err);
    res.status(500).json({ message: err.message });
  }
};

// Logging for debugging purposes
console.log("Symbols: ", to_a("A", "+"));
console.log("Array length: ", to_a("A", "+").length);
