function addressBook(input) {
    let sortedAddressBook = {};
    for (const line of input) {
        let [name, address] = line.split(':');
        sortedAddressBook[name] = address;       
    }

    let sortedNames = Object.keys(sortedAddressBook)
        .sort((nameA, nameB) => nameA.localeCompare(nameB));
    for (const name of sortedNames) {
        console.log(`${name} -> ${sortedAddressBook[name]}`);
    }
}


addressBook(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']

)