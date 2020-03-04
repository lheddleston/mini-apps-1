## CSV Report Generator

* The server must flatten the JSON hierarchy
* Map each item/object in the JSON to a single line of CSV report
* The keys of the JSON objects will be the columns of the CSV report
* You may assume the JSON data has a regular structure and hierarchy
* allsibling records at a particular level of the hierarchy will have the same set of properties
* child objects might not contain the same properties
* In all cases, every property you encounter must be present in the final CSV output
* You may also assume that child records in the JSON will always be in a property called `children`