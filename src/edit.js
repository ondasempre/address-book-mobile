/**
 * Edit Page: this JavaScript allows modifiying Contact object from UI.
 * 
 * @author F.M.
 * @version 1.0
 */

(function(global) {
    var edit = { el : $('#page-edit') };

    edit.onSave = function() {
        var name  = edit.el.find('#fld-name').val(),
            lname  = edit.el.find('#fld-lname').val(),
            phone = edit.el.find('#fld-phone').val(),
            email = edit.el.find('#fld-email').val();

        global.store.editContact(global.store.ContactInfo(name, lname, phone, email));
        global.pages.contacts.refresh();
    };

    edit.el.live('pagecreate', function() {
        edit.el = $(this);
        edit.el.find('#btn-save-contact-edit').click(edit.onSave);
    });

    if ( typeof global.pages === 'undefined' ) {
        global.pages = {};
    }

    global.pages.edit = edit;

}(this));

