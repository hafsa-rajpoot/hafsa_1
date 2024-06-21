// Copyright (c) 2024, hafsa and contributors
// For license information, please see license.txt

frappe.ui.form.on('Patient Record', {
	onload(frm){
		frm.set_query('practice', () => {
			return {
				filters: {
					days: 'wednesday',
					first_name : "shahid"
				}
			}
		})
	},

	
	refresh(frm) {

		frm.add_custom_button('Duplicate', () => {
			frm.doc.family2 = []; 
        frm.doc.family.forEach(member => {
            let new_row = frm.add_child('family2', {
                member_name: member.member_name,
                age: member.age,
                relation: member.relation  
            });
		}) 
		frm.refresh_field('family2');
        });

        frm.refresh_field('family');  
		frm.doc.family = []
		let row = frm.add_child('family', {
			member_name: 'Shahid',
			age: 22
		});
		let row2 = frm.add_child('family', {
			member_name: 'Aisha',
			age: 20,
			relation: "sister"
		});
		let row3 = frm.add_child('family', {
			member_name: 'Ali',
			age: 20,
			relation: "brother"
		});
		
		frm.refresh_field('family');
	},
	// age(frm){
	// 	if(frm.doc.age < 18){
	// 		frm.set_df_property("cnic", "reqd", 0)
	// 	}
	
	// }
});
frappe.ui.form.on('Family Members', {
	age: function(frm) {
		frappe.msgprint("Hello")
	}
});

