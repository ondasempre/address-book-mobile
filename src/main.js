/**
 * Store Script: save random value to the store variable.
 * 
 * @author F.M.
 * @version 1.0
 */

(function(global) {

    var store = global.store;
    store.addContact(store.ContactInfo('Flavio', 'Mac', '+39 04 9112212', 'bill@gmail.com'));
    store.addContact(store.ContactInfo('Mario', 'Rossi', '+39 02 9331232', 'rossi@yahoo.com'));
    store.addContact(store.ContactInfo('Sofia','Ricciardi', '+39 03 9441313', 'sofiaric@hotmail.com'));
    store.addContact(store.ContactInfo('Alfred','Back', '+39 03 9441999', 'alfred@gmail.com'));

}(this));

