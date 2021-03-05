var t;
function Scroll() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('Scroll()',20);
	} else clearTimeout(t);
	return false;
}