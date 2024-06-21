import frappe


@frappe.whitelist()
def frappe_function(first_name):
    # if last_name:
    #     frappe.msgprint(f"Hello this is frappe call {last_name}")
    # else:
    #     frappe.msgprint(f"Last name is empty")
    doc = frappe.get_doc('Operations', first_name)
    doc.members = []
    for row in doc.child:
        doc.members.append({
            "age": row.age
        })
        # frappe.msgprint(f"{row.name1}")

    return first_name