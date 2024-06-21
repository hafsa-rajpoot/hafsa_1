frappe.ui.form.on('Registration', {
    refresh: function(frm) {
		frm.add_custom_button(__('Fetch Members'), function() {
			// frappe.call({
			// 	method: 'hafsa_1.events.m_function.frappe_function',
			// 	args: {
			// 		first_name: cur_frm.doc.first_name
			// 	},
			// 	callback: (r) => {
			// 		frm.set_value("first_name", r.message)
			frappe.call({
				method: 'hafsa_1.hafsa.doctype.operations.operations.frappe_function',
				args: {
					first_name:"Amir"
				},
				callback: (r) => {
					frm.set_value("first_name", r.message)
				}
			// 	}
			})
			// frm.call('my_function')
			// .then(r => {
			// 	if (r.message) {
			// 		console.log(r.message);
			// 		frm.doc.members = []
			// 		for (let row of r.message) {
			// 			frm.add_child('members', {
			// 				name1: row.name1,
			// 				age: row.age,
			// 				relation: row.relation,
			// 				monthly_income: row.monthly_income // assuming field name is 'monthly income'
			// 			});
			// 		}
			// 		frm.refresh_field('members');
			// 	}
    		// })
		});
        // Add a custom button
        // frm.add_custom_button(__('Fetch Members'), function() {
        //     fetchAndPopulateMembers(frm);
        // });
		// function fetchAndPopulateMembers(frm) {
		// 	frappe.db.get_doc('Operations', frm.doc.hafsa).then(records => {
		// 	console.log(records)
		// 			frm.doc.members = [];
		// 			for (let row of records.child) {
					
		// 				frm.add_child('members', {
		// 					name1: row.name1,
		// 					age: row.age,
		// 					relation: row.relation,
		// 					monthly_income: row.monthly_income // assuming field name is 'monthly income'
		// 				});
		// 			}
		// 			frm.refresh_field('members');
		// 		}
		// 	);
		// }
	
		
    }
});
