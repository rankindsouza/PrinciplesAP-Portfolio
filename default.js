
//input = prompt("Enter a string");
//key = prompt("Enter key");
//key = Number(key);
//alert(cipher(input,key));


//by Zach
function trans(key) {
	text = document.getElementById("tocode").value;
	//alert("GGGGGG");
	if(!isNaN(key))
	{
		translated = cipher(text,key);
		document.getElementById("translated").innerHTML = translated;
	}
}

//by Zach
function encrypt() {
	key = Number(document.getElementById("key").value);
	trans(key);
}

//by Zach
function decrypt() {
	key = Number(document.getElementById("key").value);
	if(!isNaN(key)) {
		key = 26-key;
		trans(key);
	}
}

//by Zach
//Enter a string to encode / decode, then a key to use. Returns the encoded / decoded string
function cipher(string, offset) {
	string = string.toLowerCase();
	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	newStr = "";
	offset%=alphabet.length;
	for(i = 0; i < string.length; i++) {
		index = -1;
		for(k = 0; k < alphabet.length; k++) {
			if(string.charAt(i) == alphabet[k]) {
				index = k;
			}
		}
		if(index == -1) {
			
			newStr+=string.charAt(i);
			continue;
		}
		index+=offset;
		index%=alphabet.length;
		newStr+=alphabet[index];
		
	}
	return newStr;
}
