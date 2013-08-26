function toggleMyPrint(cual,pid) {
	if (cual == "HTML") {
		popWindow('brochure.htm?PID='+pid+'&format=HTML','printProduct','800','600','NO');
	}
	else if (cual == "PDF") {
		popWindow('brochure.htm?PID='+pid+'&format=PDF','printProduct','800','600','NO');
	}
	
}
