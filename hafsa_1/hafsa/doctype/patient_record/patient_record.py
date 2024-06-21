# Copyright (c) 2024, hafsa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class PatientRecord(Document):
	def validate(self):
		# doc = frappe.get_doc("Student Report", "Student00002")
		# self.name1 = doc.grade
		new_doc = frappe.new_doc("Student Report")
		new_doc.age = "Shahid"
		new_doc.insert()
		new_doc.delete()
def after_insert(self):
    frappe.msgprint("Hello Frappe from 'after_insert' Event")