// Copyright (c) 2024, hafsa and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Student"] = {
	"filters": [
		{
			"fieldname" : "stud_name",
			"label" : "Student Name",
			"fieldtype" : "Data",
			// "options" : "Operations",
			"width" : "120"	
		},
		{
			"fieldname" : "age",
			"label" : "Age",
			"fieldtype" : "Data",
			// "options" : "Operations",
			"width" : "120"	
		},
		{
			"fieldname" : "from_date",
			"label" : "From-Date",
			"fieldtype" : "Date",
			// "options" : "Operations",
			"width" : "120"	
		},
		{
			"fieldname" : "to_date",
			"label" : "To_Date",
			"fieldtype" : "Date",
			// "options" : "Operations",
			"width" : "120"	
		},
		{
			"fieldname" : "member_name",
			"label" : "Member Name",
			"fieldtype" : "Data",
			// "options" : "Operations",
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
		
	],
};
