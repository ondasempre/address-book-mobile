/**
 * Get all Contacts
 *  
 * @author F.M.
 * @version 1.0
 */

(function (global) {
    var contacts_page = { el : $('#page-main') };

    contacts_page.initContactList = function(el) {
        var li,
            contacts = global.store.getContacts();

        el.html("");

        for (var i=0; i < contacts.length; ++i ) {
            li = contacts_page.createContactListItem(contacts[i]);
            el.append(li);
        }
    };

    contacts_page.viewContact = function() {
        var el = $(this),
            contact = el.data('contact'),
            viewer  = $('#page-view');

        viewer.find('span#view-name').text(contact.name);
        viewer.find('span#view-lname').text(contact.lname);
        viewer.find('span#view-phone').text(contact.phone);
        viewer.find('span#view-email').text(contact.email);

        $.mobile.changePage(viewer);
    };

    contacts_page.createContactListItem = function(contact) {
        var li, a, b;

        li = $(document.createElement('li'));
        a  = $(document.createElement('a'));
        b  = $(document.createElement('b'));

        a.attr('href', '#');
        a.text(contact.name + " " + contact.lname);
        a.data('contact', contact);
        a.click(contacts_page.viewContact);
        b.text(contact.phone).css("padding-left", "4px");
        a.append(b);
        li.append(a);
        
        return li;
    };

    contacts_page.refresh = function() {
        var list_el = contacts_page.el.find('#all-contacts');
        contacts_page.initContactList(list_el);
        list_el.listview('refresh');
        console.log('refresh');
    };


    $('#page-main').live('pagecreate', function() {
        contacts_page.el = $(this);
        var list_el = contacts_page.el.find('#all-contacts');

        contacts_page.initContactList(list_el);
        list_el.listview();
    });


    if ( typeof global.pages === 'undefined' ) {
        global.pages = {};
    }

    global.pages.contacts = contacts_page;
}(this));
