/**
 * Add Form Page: provides functionality of the add Contact Page.
 * 
 * @author F.M.
 * @version 1.0
 */

(function(global) {
    var add = { el : $('#page-add') };

    add.onSave = function() {
        var name  = add.el.find('#fld-name').val(),
            lname  = add.el.find('#fld-lname').val(),
            phone = add.el.find('#fld-phone').val(),
            email = add.el.find('#fld-email').val();

        // Correct Phone form '+39 02 1234567'
        const regex = /[+][0-9][0-9]\s\d{2}\s\d{4}/gm;
        
        let m;
        var checkValue = false;
        
        while ((m = regex.exec(phone)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {

                if( match ) {
                    console.log(`Found match, group ${groupIndex}: ${match}`);
                }
            });

            if (m.length > 0) checkValue = true;
            
        }

        if (checkValue) {
            console.log('Correct Phone Number!')
        } else {
            alert('Invalid phone Number! Correct form is: +00 00 1234567')
        }

        if(phone && name && lname) {
            global.store.addContact(global.store.ContactInfo(name, lname, phone, email));
            global.pages.contacts.refresh();
        } else {
            console.log('[Error] Invalid phone Number!');
        }
    };

    add.el.live('pagecreate', function() {
        add.el = $(this);
        add.el.find('#btn-save-contact').click(add.onSave);
    });

    if ( typeof global.pages === 'undefined' ) {
        global.pages = {};
    }

    global.pages.add = add;

}(this));

