
export function clinic_info(res) {
    return {
        mainContact: contact(res.mainContact),
        contacts: res.contacts.map(el=>contact(el)),
        adress: res.adress
    }
}

function contact(contact) {
    return {
        name: contact.name,
        contact : contact.contact,
    }
}