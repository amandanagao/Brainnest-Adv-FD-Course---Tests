function capitalize(value) {
    let capitalizedString = value.charAt(0).toUpperCase() + value.slice(1);

    return capitalizedString;
}

module.exports = capitalize;