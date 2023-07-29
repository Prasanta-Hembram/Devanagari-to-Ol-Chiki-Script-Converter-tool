# A script converter for Santali language #
Devanagari2Santali Script converter is a tool which will convert all input text to Ol Chiki script. This tool is targeted for already written Santali words in devanagari script, which may not work well for some Hindi words. I have used this tool to transcribe many Santali sentence from Devanagari script to Ol Chiki script, it is working very well. I have referenced all the codes which I have used with a minor change and cited videos from sources which may be useful for a beginner for learning.

## Resources Used ##
* [Transliteration in JavaScript](https://medium.com/digital-linguistics/transliteration-in-javascript-99d306996752) - 70% code credit for creating this tool goes to this post written by **Daniel W. Hieber.** This code solved the issue of feeding. I have made no change to their code, and also retained the code and its style. 
* Used [Bootstrap](https://getbootstrap.com/) to make the demo beautiful.
* [Paste Clipboard code](https://www.youtube.com/watch?v=X4MZJmxwHqE).
* [copy function](https://stackoverflow.com/questions/23048550/how-to-copy-a-divs-content-to-clipboard-without-flash/38672314#38672314)

## Bugs: ##
* Many Hindi words are not transliterated well, please add it here if you are in doubt[Pull Request #3](https://github.com/Prasanta-Hembram/Devanagari-to-Ol-Chiki-Script-Converter-tool/issues/3). 
* HTML inputs are not well handled, try to provide plain Devanagari text.
* Some rare Devanagari letters may not transcribe well to Ol Chiki, but majority of them well get converted.
* Paste button will not work in Firefox browser(https://stackoverflow.com/questions/67440036/navigator-clipboard-readtext-is-not-working-in-firefox).
