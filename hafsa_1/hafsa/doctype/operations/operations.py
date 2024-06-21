# Copyright (c) 2024, hafsa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Operations(Document):
    pass
# 	docs=frappe.get_list('Patient Record')
# 	family_member=[]	
# 	for row in docs:
# 		family_member.append({
# 			"name" : row.name1,
# 		})

@frappe.whitelist()
def frappe_function(first_name):
    if first_name:
        frappe.msgprint(f"Hello this is frappe call {first_name}")
    else:
        frappe.msgprint(f"Last name is empty")
    # doc = frappe.get_doc('Operations', first_name)
    # doc.members = []
    # for row in doc.child:
    #     doc.members.append({
    #         "age": row.age
    #     })
        # frappe.msgprint(f"{row.name1}")

    return first_name
     
