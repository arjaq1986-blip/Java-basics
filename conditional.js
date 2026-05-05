let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
 let choice = prompt ("1. Show the 1st contact \n 2. Show the last contact \n 3. Add a new contact"); //prompting for the choice of the user
 if (choice == 3) {
    let name = prompt("Enter a name:");
    let phone = prompt("Enter a phone number:");
    let email = prompt("Enter an e-mail:");
    if (name && phone && email) {
        let newcontact = {
            name: name,
            phone: phone,
            email: email
        };//creating a new contact object with the user input
        contacts.push(newcontact);//adding the new contact to the contacts array
        alert("Contact added!"+ JSON.stringify(newcontact));//confirming that the contact has been added and showing the details of the new contact
    } else {
        alert("Invalid entry - all fields are required.");//if any of the fields are empty, show an error message
    }
}
    else if (choice==1) {
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);}//showing the first contact
    else if (choice==2) {let last = contacts.length - 1; //calculating the index of the last contact
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);}//showing the last contact
    else {console.log("invalid choice");}//if the user enters an invalid choice