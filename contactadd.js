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
    // flag controlling the while loop
let isRunning = true;
    // to satisfy the exercise requirements and add a menu with choices:
    //display the first contact (first)
    //display the last contact (last)
    //display all contacts (all)
    //add a new contact (new)
    //exit the program (quit)
    // I think the best way is to add while True loop combined with switch and/or if statements. I will also add a prompt to ask the user for the choice. I will also add a default case for invalid input.
    while (isRunning) {
        // prompting the user for their choice
        let choice = prompt(
            "Please choose an option:\n" +
            "1. Display the first contact\n" +
            "2. Display the last contact\n" +
            "3. Display all contacts\n" +
            "4. Add a new contact\n" +
            "5. Exit the program"
        );
    
        // in case of canceling the prompt, we should exit the program as well
        if (choice === null) {
            console.log("Program closed.");
            isRunning = false;
            break;
        }
    
        switch (choice) {
            case "1":
                if (contacts.length > 0) {
                    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
                } else {
                    console.log("No contacts found.");
                }
                break;
    
            case "2":
                if (contacts.length > 0) {
                    let lastIndex = contacts.length - 1;
                    alert(`${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`);
                } else {
                    console.log("No contacts found.");
                }
                break;
    
            case "3":
                if (contacts.length === 0) {
                    alert("No contacts found.");
                } else {
                    for (let i = 0; i < contacts.length; i++) {
                        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                    }
                }
                break;
                    //decided to add alert when the list of contacts is empty in each case to improve user experience and avoid confusion when the user tries to display contacts but there are none in the list. This way, the user will receive clear feedback about the state of their contact list. I will also add a confirmation message after adding a new contact to enhance user experience and provide feedback that their action was successful.
            case "4":
                let newContact = {
                    name: prompt("Enter a name for the new entry:"),
                    phone: prompt("Enter a phone number for the new entry:"),
                    email: prompt("Enter an e-mail for the new entry:")
                };
                
                // checking for empty fields before adding the new contact to the array
                if (newContact.name && newContact.phone && newContact.email) {
                    contacts.push(newContact);
                    alert("Contact added successfully!");// I will also add a confirmation message after adding the contact
                } else {
                    alert("Failed to add contact. All fields are required.");
                }
                break;
    
            case "5":
                console.log("Exiting program... Goodbye!");
                isRunning = false; // change the flag to false to exit the loop
                break;
    
            default:
                alert("Invalid choice, please try again.");
        }
    }