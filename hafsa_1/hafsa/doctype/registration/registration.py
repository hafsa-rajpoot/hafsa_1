# Copyright (c) 2024, hafsa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from hafsa_1.events.m_function import frappe_function

class Registration(Document):
    def validate(self):
        data = frappe_function(3, 5)    
        settings = frappe.get_doc("My Settings")
        self.last_name = settings.default_name
    # @frappe.whitelist()
    # def my_function(self):
    #     # frappe.msgprint(f"{self.first_name}")
    #     my_data = []
    #     docs = frappe.get_list("Operations", {'name1': self.first_name}, ["name"])
    #     # frappe.msgprint(f"{docs}")
        
    #     if len(docs) > 0:
    #         for row in docs:
    #             doc = frappe.get_doc("Operations", row.name)
    #             if len(doc.child) > 0:
    #                 for child in doc.child:
    #                     my_data.append(child)
    #     #                 self.append("members", {
    #     #                     "name1": child.name1,
    #     #                     "age": child.age,
    #     #                     "relation": child.relation,
    #     #                     "monthly_income": child.monthly_income
    #     #                 })
    #     return my_data
    
