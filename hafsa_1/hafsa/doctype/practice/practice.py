# Copyright (c) 2024, hafsa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Practice(Document):
	def validate(self):
		pass
		# doc = frappe.get_all("Patient Record")
		# frappe.msgprint(f"Documents are {doc}") 
  # create a new document
# 		doc = frappe.get_doc({
# 		'doctype': 'Operations',
# 		'title': 'ABC-Amir'
# 	})
# 		doc.insert()
#   # add a simple comment
# 		doc.add_comment('Comment', text='Test Comment')
		# doc = frappe.get_doc('Operations', 'Amir')
		# for row in doc.child:
		# 	frappe.msgprint(f"{row.child}")


