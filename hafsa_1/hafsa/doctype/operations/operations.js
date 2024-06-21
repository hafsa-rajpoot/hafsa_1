// Copyright (c) 2024, hafsa and contributors
// For license information, please see license.txt

frappe.ui.form.on('Operations', {
// 	refresh(frm) {
// 		frm.add_custom_button('Fetch', () => {
// 		})
// 		if(frm.doc.child){
//             frappe.db.get_list('catastro_inmueble', {
//                 fields: ['*'],
//                 filters: {
//                     propietario: frm.doc.propietario
//                 }
//             }).then(records => {
//                 console.log(records);
//                 if(records && records.length > 0 ){
//                     frm.doc.propietario = []
//                     for(let row of records){
//                         frm.add_child('listado_de_otros_inmuebles', {
//                             id : row.name,
//                             propietario : row.propietario 
//                         })
//                     }
//                     frm.refresh_field('listado_de_otros_inmuebles');
//                 }
//             })
//         }

// 	}
});
