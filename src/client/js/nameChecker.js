function checkForName(formText) {
    console.log("::: Running checkForName :::", formText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(formText)) {
        window.alert("Welcome, Captain!")
    }
}

export { checkForName }
