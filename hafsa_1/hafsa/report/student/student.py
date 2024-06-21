# Copyright (c) 2024, hafsa and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns, data = get_columns(filters), get_data(filters)
	return columns, data

def get_columns(filters):
    columns = [
        {
		"fieldname" : "docname",
		"label" : "Document Name",
		"fieldtype" : "Link",
		"options" : "Operations",
		"width" : "120"	
	},
    {
		"fieldname" : "name",
		"label" : "Student Name",
		"fieldtype" : "Data",
		"width" : "120"	
	},
    {
		"fieldname" : "age",
		"label" : "Age",
		"fieldtype" : "Data",
		"width" : "120"	
	},
    {
		"fieldname" : "date",
		"label" : "Date",
		"fieldtype" : "Date",
		"width" : "120"	
	},
    {
		"fieldname" : "member_name",
		"label" : "Member Name",
		"fieldtype" : "Data",
		"width" : "120"	
	},
    {
		"fieldname" : "member_age",
		"label" : "Member Age",
		"fieldtype" : "Data",
		"width" : "120"	
	},
    {
		"fieldname" : "member_relation",
		"label" : "Member Relation",
		"fieldtype" : "Data",
		"width" : "120"	
	}
    ]
    return columns

def get_data(filters):
    data = []
    
    my_filter = {}
    if filters.get("stud_name"):
        my_filter["full_name"] = filters.get("stud_name")
    if filters.get("age"):
        age_filter = int(filters.get("age"))
        my_filter["age"] = [">=", age_filter]
    if filters.get("from_date"): # and filters.get("to_date"):
        from_date = filters.get("from_date")
        my_filter["date"] = [">=",from_date ]
    if filters.get("to_date"): # and filters.get("to_date"):
        to_date = filters.get("to_date")
        my_filter["date"] = ["<=",to_date ]
        # to_date = filters.get("to_date")
        # my_filter["date"] = ["between", (from_date, to_date)]
    # if filters.get("member_name"):
    #     my_filter["name"] = filters.get("member_name")
    op_docs = frappe.get_list("Operations",my_filter, ["*"])
    for doc in op_docs:
        child_filter = {'parent': doc.name}
        if filters.get("member_name"):
            child_filter["name1"] = filters.get("member_name")
        if filters.get("member_age"):
            child_filter["age"] = filters.get("member_age")
        if filters.get("member_relation"):
            child_filter["relation"] = filters.get("member_relation")
        my_doc = frappe.get_list("Salaar", child_filter, ["*"])
        for child in my_doc: 
        #      if not filters.get("member_name") or (filters.get("member_name") and child.name1 == filters.get("member_name")):
                data.append({
					"docname": doc.name,
					"name": doc.full_name,
					"age": doc.age,
					"date": doc.date,
					"member_name": child.name1,
					"member_age": child.age,
					"member_relation": child.relation
				})
    return data
        
        
        # my_doc = frappe.get_doc("Operations", doc.name)
        # for child in my_doc.get("child"): 
        #      if not filters.get("member_name") or (filters.get("member_name") and child.name1 == filters.get("member_name")):
        #          data.append({
		# 			"docname": my_doc.name,
		# 			"name": my_doc.full_name,
		# 			"age": my_doc.age,
		# 			"date": my_doc.date,
		# 			"member_name": child.name1,
		# 			"member_age": child.age,
		# 			"member_relation": child.relation
		# 		})
        #          return data
