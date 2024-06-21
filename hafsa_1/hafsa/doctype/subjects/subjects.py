# Copyright (c) 2024, hafsa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Subjects(Document):
    def validate(self):
   
        total_marks = 0
        total_subjects = len(self.subject_marks)
        
        # Sum up the marks from the child table
        for row in self.subject_marks:
            total_marks += row.mark

        self.db_set("total_marks", total_marks)
        # Update total marks
        # self.total_marks = total_marks

        # Calculate percentages
        if total_subjects > 0:
            max_marks = total_subjects * 100  # Assuming each subject is out of 100
            self.total_percentage = (total_marks / max_marks) * 100
        else:
            frappe.throw("Please enter subjects in table")
