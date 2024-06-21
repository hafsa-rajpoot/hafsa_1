frappe.ui.form.on('Subjects', {
    // Called when the form is refreshed
    // refresh: function(frm) {
    //     calculate_total_marks(frm);
    // },
    // // Called when a row is added to the child table
    // subject_marks_add: function(frm) {
    //     calculate_total_marks(frm);
    // },
    // // Called when a row is removed from the child table
    // subject_marks_remove: function(frm) {
    //     calculate_total_marks(frm);
    // },
    // // Called when the 'marks' field in the child table is changed
    // 'subject_marks.mark': function(frm) {
    //     calculate_total_marks(frm);
    // }
});

// Function to calculate total marks and update the 'total_marks' field
function calculate_total_marks(frm) {
    // Use reduce to sum the marks field of all rows in the child table
    let total = frm.doc.subject_marks.reduce((sum, row) => sum + row.marks, 0);
    // Update the 'total_marks' field with the calculated total
    frm.set_value('total_marks',total);
}
