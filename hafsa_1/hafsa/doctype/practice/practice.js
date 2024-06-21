// Copyright (c) 2024, hafsa and contributors
// For license information, please see license.txt

frappe.ui.form.on('Practice', {
	validate: function(frm) {
		

		// console.log(frm.doc.blood_group);
	// 	frm.set_value('first_name', frm.doc.days)
	// 	.then(() => {
	//    console.log("hafsa")
	// 	})

	// frm.email_doc();

	// frm.email_doc(`Hello ${frm.doc.first_name}`);


	// if (frm.is_dirty()) {
	// 	frappe.show_alert('Please save form before attaching a file')
	// }


	// if (!frm.is_new()) {
	// 	frm.add_custom_button('Click me', () => console.log('Clicked custom button'))
	// }

	// if (!frm.doc.last_name) {
	// 	frm.set_intro('Please set the value of description', 'blue');
	//  }
	
	// frm.add_custom_button('hafsa amir', () => {
	// 	frappe.set_route('Form', frm.doc.reference_type, frm.doc.reference_name);
	// })
	// frm.add_custom_button('Closed', () => {
	// 	frm.doc.status = 'Closed'
	// }, 'Set Status');
    
	// frm.add_custom_button('ahmad', () => {
	// 	frm.doc.status = 'Closed'
	// }, 'Set Status');

	// frm.add_custom_button('Closed1 ', () => {
	// 	frm.doc.status = 'Closed'
	// }, 'Set Status1');
	// frm.add_custom_button('Closed', () => {
	// 	frm.doc.status = 'Closed'
	// }, 'Set Status1');

	}

});

frappe.ui.form.on('family', { 
    before_family_remove(frm, cdt, cdn) {

        frappe.msgprint('A row has been added to the links table 🎉 ');
    }
});




