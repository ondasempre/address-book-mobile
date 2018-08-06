(function(global) {
    /**
     * Store Object
     * 
     * @version 1.0
     */
    var store = { contacts : [] };

    store.ContactInfo = function(name, lname, phone, email) {
        return { name : name, lname : lname, phone : phone, email : email }
    };

    store.addContact = function(contact) {
        store.contacts.push(contact);
    };

    store.removeContact = function(contact) {
        for (var i=0; i < store.contacts.length; ++i ) {
            if ( store.contacts[i].phone === contact.phone ) {
                // found it
                store.contacts.splice(i);
                break;
            }
        }
    };

    store.editContact = function(contact) {
        for (var i=0; i < store.contacts.length; ++i ) {
            if ( store.contacts[i].phone === contact.phone ) {
                // found it
                store.contacts[i] = contact;
                break;
            }
        }
    };

    store.getContacts = function() {
        return store.contacts;
    };

    global.store = store;
}(this));
