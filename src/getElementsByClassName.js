// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var outputArray = [];
	
	var findElement = function (searchNode) {
		for (var i = 0 ; i < searchNode.length ; i++) {
			if (typeof searchNode[i].className === "string" && searchNode[i].className.indexOf(className) + 1) {
				outputArray.push (searchNode[i]);
			}

			if (searchNode[i].childNodes.length > 0) {
				findElement (searchNode[i].childNodes);
			}
		}
		return outputArray;
	}

	if (document.body.className === className) {
		outputArray.push (document.body);
	} 

	if (document.body.classList.contains(className)) {
		return findElement (document.body.childNodes);
	} else {
		return outputArray;
	}
}