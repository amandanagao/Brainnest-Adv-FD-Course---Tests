function capitalize(str) {
    let capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalizedString;
}

module.exports = capitalize;