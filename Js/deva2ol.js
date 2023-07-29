// Refer for copy function: https://stackoverflow.com/questions/23048550/how-to-copy-a-divs-content-to-clipboard-without-flash/38672314#38672314
// Refer: Enabled enabled dom.events.testing.asyncClipboard in Firefox Browser : https://stackoverflow.com/questions/67440036/navigator-clipboard-readtext-is-not-working-in-firefox 
// Refer: Paste Clipboard code: https://www.youtube.com/watch?v=X4MZJmxwHqE
// Refer: Remove Non ASCII Character : https://stackoverflow.com/questions/20856197/remove-non-ascii-character-in-string


const substitutions = {
	"उदुगोक् आ": "ᱩᱫᱩᱜᱚᱜᱼᱟ",
	"आ़च् किर": "ᱟᱹᱛᱠᱤᱨ",
	"मेसाक् आ": "ᱢᱮᱥᱟᱜᱼᱟ",
	"ओनोल": "ᱚᱱᱚᱞ",
	"चेदाक्": "ᱪᱮᱫᱟᱜ",
	"ओल": "ᱚᱞ",
	"रिच्": "ᱨᱤᱡ",
	"उचा": "ᱩᱪᱟᱹ",
	"ड़ोक्": "ᱲᱚᱜ",
	"नाक्": "ᱱᱟᱜ",
	"इप": "ᱭᱤᱯ",
	"ड़ो": "ᱲᱚ",
	"ड़ि": "ᱲᱤ",
	"नुक्": "ᱱᱩᱜ",
	"झा़": "ᱡᱷᱟᱹ",
	"बा़": "ᱵᱟᱹ",
	"विं": "ᱣᱤᱱ",
	"ाक्": "ᱟᱜ",
	"ोक्": "ᱚᱜ",
	"ऀ": "ऀ",
	"ँ": "ᱸ",
	"ं": "ᱸ",
	"ः": "ᱷ",
	"ऄ": "ऄ",
	"आ़": "ᱟᱹ",
	"अ": "ᱚ",
	"आ": "ᱟ",
	"इ": "ᱤ",
	"ई": "ᱤᱻ",
	"उ": "ᱩ",
	"ऊ": "ᱩᱻ",
	"ऋ": "ᱨᱩ",
	"ऌ": "ᱞᱩ",
	"ऍ": "ᱚᱹ",
	"ऎ": "ᱮᱹ",
	"ए": "ᱮ",
	"ऐ": "ᱚᱤ",
	"ऑ": "ᱟᱹ",
	"ऒ": "ᱳ",
	"ओ": "ᱳ",
	"औ": "ᱚᱣ",
	"क्": "ᱠ",
	"क": "ᱠ",
	"ख": "ᱠᱷ",
	"ग": "ᱜ",
	"घ": "ᱜᱷ",
	"ङ": "ᱝ",
	"च्": "ᱡ",
	"च": "ᱪ",
	"छ": "ᱪᱷ",
	"ज": "ᱡ",
	"झ": "ᱡᱷ",
	"ञ": "ᱧ",
	"ट": "ᱴ",
	"ठ": "ᱴᱷ",
	"ड": "ᱰ",
	"ढ": "ᱰᱷ",
	"ण": "ᱬ",
	"त्": "ᱫ",
	"त": "ᱛ",
	"थ": "ᱛᱷ",
	"द": "ᱫ",
	"ध": "ᱫᱷ",
	"न": "ᱱ",
	"ऩ": "ᱱ",
	"प": "ᱯ",
	"फ": "ᱯᱷ",
	"ब": "ᱵ",
	"भ": "ᱵᱷ",
	"म": "ᱢ",
	"य": "ᱭ",
	"र": "ᱨ",
	"ऱ": "ᱨ",
	"ल": "ᱞ",
	"ळ": "ᱞ",
	"ऴ": "ᱞ",
	"व": "ᱣ",
	"श": "ᱥ",
	"ष": "ᱥ",
	"स": "ᱥ",
	"ह": "ᱦ",
	"ऺ": "",
	"ला़": "ᱞᱟᱹ",
	"ऻ": "ᱟ",
	// "़":"",
	// "ऽ":"",
	"ा़": "ᱟᱹ",
	"ा": "ᱟ",
	"ि": "ᱤ",
	"ी": "ᱤ",
	"ु": "ᱩ",
	"ू": "ᱩ",
	"ृ": "ᱨᱩ",
	"ॄ": "ᱨᱩ",
	"ॅ": "ᱟᱸ",
	"ॆ": "ᱮ",
	"े": "ᱮ",
	"ै": "ᱮᱭ",
	"ॉ": "ᱟᱸ",
	"ॊ": "ᱚ",
	"ो": "ᱚ",
	"ौ": "ᱚᱣ",
	"्": "",
	"ॎ": "ᱮ",
	"ॏ": "ॏ",
	"ॐ": "ᱳᱸ",
	"॑": "↑",
	"॒": "↓",
	"॓": "॓",
	"॔": "॔",
	"ॕ": "ᱚᱸ",
	"ॖ": "ᱩ",
	"ॗ": "ᱩ",
	"क़": "ᱠᱚ",
	"ख़": "ᱠᱷᱚ",
	"ग़": "ᱜ",
	"ज़": "ᱡ",
	"ड़": "ᱲ",
	"ड़": "ᱲ",
	"ढ़": "ᱰᱷ",
	"फ़": "ᱯ",
	"य़": "ᱭ",
	"ॠ": "ᱨᱩ",
	"ॡ": "ᱞᱩ",
	"ॢ": "ᱞᱩ",
	"ॣ": "ᱞᱩ",
	"।": "᱾",
	"॥": "᱿",
	"०": "᱐",
	"१": "᱑",
	"२": "᱒",
	"३": "᱓",
	"४": "᱔",
	"५": "᱕",
	"६": "᱖",
	"७": "᱗",
	"८": "᱘",
	"९": "᱙",
	"॰": "॰",
	"ॱ": "ॱ",
	"ॲ": "ᱚᱹ",
	"ॳ": "ᱚ",
	"ॴ": "ᱟ",
	"ॵ": "ᱚᱣ",
	"ॶ": "ᱩ",
	"ॷ": "ᱩ",
	"\\.": "᱾",
	"\u{0022}": "\u{201D}",
	"\u{003C}xml": "\u{003C}",
};


// ********** Brain of the Converter (Transliteration Code) ********************
// https://medium.com/digital-linguistics/transliteration-in-javascript-99d306996752) - 70% code credit for creating this tool goes to this post written by **Daniel W. Hieber.** This code solved the issue of feeding.
// A simple version of the transliterate method which makes replacements
// but does not handle common edge cases.
/**
 * A unidirectional transliteration algorithm which makes a set of substitutions on a string, and handles common edge cases.
 * @param  {String} [string='']        The String to transliterate
 * @param  {Object} [substitutions={}] The set of substitutions to make on the String. Each key should be the character(s) to replace, and its value should be the character(s) to replace it with.
 * @return {String}                    Returns a new String with the substitutions made
*/
const transliterate = (string = '', substitutions = {}) => {

	// save the string to a new variable for readability
	let str = string;

	// make a copy of the substitutions Object so that the original is not affected
	const subs = Object.assign({}, substitutions);

	// create an Object to hold any temporary substitutions
	const temps = {};

	// generates a random character from the geometric shapes block (U+25A0-25FF)
	const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);

	// save the list of inputs in order to check for feeding problems
	const inputs = Object.keys(substitutions);

	// get the list of substitutions
	Object.entries(substitutions)

		// sort the substitutions by longest string (avoids the substring problem)
		.sort(([a], [b]) => b.length - a.length)

		// for each substitution...
		.forEach(([input, replacement]) => {

			// check for feeding problem
			if (inputs.includes(replacement)) {

				// get a character to use as a temporary substitution
				let temp = getRandomCodePoint();

				// if that character has already been used, get another
				while (temp in temps) temp = getRandomCodePoint();

				// add the temporary substitution to the temps Object
				temps[temp] = replacement;

				// swap the original replacement with the temporary one
				subs[input] = temp;

			}

			// create a regular expression that searches globally for the string to replace
			const regexp = new RegExp(input, 'gu');

			// replace all matched instances of the regular expression with the new string
			// at this point, `subs` contains temporary substitutions, so those will be made
			str = str.replace(regexp, subs[input]);

		});

	// undo the temporary substitutions:
	// get the list of temporary substitutions
	Object.entries(temps)

		// for each temporary substitution that was made...
		.forEach(([temp, replacement]) => {

			// create a regular expression that searches globally for the temporary substitution to replace
			const regexp = new RegExp(temp, 'gu');

			// replace all matched instances of the temporary substitution with the original subsitution
			str = str.replace(regexp, replacement);

		});

	// return the string with the substitutions made
	return str;

};

// ********** Brain of the Converter (Transliteration Code) ends ********************

// *********** Working Code ***************
// When somene click the submit button then a function is called out when then takes user
// input and pass it through above converter which after the conversion displays in the output.

out1 = document.getElementById('output1');

document.getElementById("btn1").onclick = function () {

	var txt12 = document.getElementById("tbuser").value;
	ipa = transliterate(txt12, substitutions);
	out1.innerHTML = ipa;

}

// *********** Copy Code ***************

function CopyToClipboard(containerid) {
	// Create a new textarea element and give it id='temp_element'
	const textarea = document.createElement('textarea')
	textarea.id = 'temp_element'
	// Optional step to make less noise on the page, if any!
	textarea.style.height = 0
	// Now append it to your page somewhere, I chose <body>
	document.body.appendChild(textarea)
	// Give our textarea a value of whatever inside the div of id=containerid
	textarea.value = document.getElementById(containerid).innerText
	// Now copy whatever inside the textarea to clipboard
	const selector = document.querySelector('#temp_element')
	selector.select()
	document.execCommand('copy')
	// Remove the textarea
	document.body.removeChild(textarea)
}

// *********** Copy Code ends ***************

// ************ Using Paste function *********************

function jsPaste() {
	// read text form clipboard (Function not supported in Firefox browser)

	navigator.clipboard.readText()

		//put the text into the field

		.then(txt => {
			document.getElementById('tbuser').value = txt;
		})

		//If no access
		.catch(err => {
			alert("No access to clipboard");
		})

}

 // ************ Using Paste function ends *********************
