const panels = document.querySelectorAll('.panel');
let prevThis;
function toggleOpen() {
	
	if(prevThis != null && prevThis != this){
		prevThis.classList.toggle('open');
	}
	
	this.classList.toggle('open');
	prevThis = this;
}

function toggleActive(e) {
	console.log('toggleActive '+this.classList);
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));