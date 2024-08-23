function tampilAngka(n) {
	if( n === 0 ) return;
	alert(n);
	return tampilAngka(n-1)
}

tampilAngka(10);