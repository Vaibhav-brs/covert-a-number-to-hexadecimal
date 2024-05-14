function convertToHex() {
    const number = document.getElementById("number").valueAsNumber;
    const hex = number.toString(16).toUpperCase();
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<strong>Hexadecimal:</strong> 0x${hex}`;
  }
  