// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (obj === null) {
		// console.log("null");
		return "null";
	} else if (typeof obj === "string") {
		// console.log('\"' + String(obj) + '\"');
		return '\"' + String(obj) + '\"';
	} else if (typeof obj === "object") {
		var outputArray = [];
		if (Array.isArray(obj)) {			// puts together arrays
			for (var i = 0; i < obj.length; i++) {
				outputArray.push(stringifyJSON(obj[i]));
			}
			// console.log("[" + outputArray.join(",") + "]");
			return "[" + outputArray.join(",") + "]";
		} else {							// puts together objects
			var objectKeys = Object.keys(obj);
			console.log(objetKeys[0]);
			// console.log("{" + outputArray.join(",") + "}");
			return "{" + outputArray.join(",") + "}";
		}
	    // var objKeys = Object.keys(obj);
	    // var keyValueArray = new Array();
	    // for (var i = 0; i < objKeys.length; i++) {
	    //     var keyValueString = '"' + objKeys[i] + '":';
	    //     var objValue = obj[objKeys[i]];
	    //     keyValueString = (typeof objValue == "string") ? 
	    //         keyValueString = keyValueString + '"' + objValue + '"' : 
	    //         keyValueString = keyValueString + my_stringify2(objValue);
	    //     keyValueArray.push(keyValueString);
	    // }
	    // return "{" + keyValueArray.join(",") + "}";
	} else {
		// console.log(String(obj));
		return String(obj);
	}
};
