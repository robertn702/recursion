// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var objType = typeof obj;
	if (obj === null) { return "null";} 
	// else if (objType === "undefined" || objType === "function") { return ""; }
	else if (objType === "string") { return '\"' + String(obj) + '\"'; } 
	else if (objType === "object") {
		var outputArray = [];
		if (Array.isArray(obj)) {			// puts together arrays
			for (var i = 0; i < obj.length; i++) {
				if (typeof obj[i] !== "undefined" && typeof obj[i] !== "function") {
					outputArray.push(stringifyJSON(obj[i]));
				}
			}
			return "[" + outputArray.join(",") + "]";
		} else {							// puts together objects
			for (var key in obj) {
				if (typeof obj[key] !== "undefined" && typeof obj[key] !== "function") {
					outputArray.push('\"' + key + '\":' + stringifyJSON(obj[key]));
				}
			}
			return "{" + outputArray.join(",") + "}";
		}
	} else { return String(obj); }
};
