document.getElementById("timeline").oninput = function() {
	if (this.value/1000 >= 0.4893322392040209 && this.value/1000 < 0.5270284131705816) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fe965e");
		}
	}
	else if (this.value/1000 >= 0.5270284131705816 && this.value/1000 < 0.602061749923069) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fec86a");
		}
	}
	else if (this.value/1000 >= 0.602061749923069 && this.value/1000 < 0.6763770643142887) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fed967");
		}
	}
	else if (this.value/1000 >= 0.6763770643142887 && this.value/1000 < 0.7510513898861422) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fec56a");
		}
	}
	else if (this.value/1000 >= 0.7510513898861422 && this.value/1000 < 0.8260847266386296) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fed46a");
		}
	}
	else if (this.value/1000 >= 0.8260847266386296 && this.value/1000 < 0.9158375217971074) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fec46a");
		}
	}
	else if (this.value/1000 >= 0.9158375217971074) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#febe69");
		}
	}
	else {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#c0c0c0");
		}
	}
	if (this.value/1000 >= 0.43153143912196124 && this.value/1000 < 0.505128731151913) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#fb8355");
	}
	else if (this.value/1000 >= 0.505128731151913 && this.value/1000 < 0.5801620679044005) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#feb868");
	}
	else if (this.value/1000 >= 0.5801620679044005 && this.value/1000 < 0.6534003487537183) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#fe8858");
	}
	else if (this.value/1000 >= 0.6534003487537183 && this.value/1000 < 0.7246384244537901) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#fe8f5c");
	}
	else if (this.value/1000 >= 0.7246384244537901 && this.value/1000 < 0.7603856805826239) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#f97e52");
	}
	else if (this.value/1000 >= 0.7603856805826239 && this.value/1000 < 0.8167504359421479) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#ed6d48");
	}
	else if (this.value/1000 >= 0.8167504359421479 && this.value/1000 < 0.8702431018566007) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#f2754d");
	}
	else if (this.value/1000 >= 0.8702431018566007 && this.value/1000 < 0.9201456559647143) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#f0724c");
	}
	else if (this.value/1000 >= 0.9201456559647143 && this.value/1000 < 0.9874346086778131) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#f4774e");
	}
	else if (this.value/1000 >= 0.9874346086778131) {
		document.getElementById("North_Macedonia").setAttribute("fill", "#f67b51");
	}
	else {
		document.getElementById("North_Macedonia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.7054056826341163 && this.value/1000 < 0.7808493178787568) {
		document.getElementById("Bulgaria").setAttribute("fill", "#fed46a");
	}
	else if (this.value/1000 >= 0.7808493178787568 && this.value/1000 < 0.8530105651861729) {
		document.getElementById("Bulgaria").setAttribute("fill", "#fed06a");
	}
	else if (this.value/1000 >= 0.8530105651861729 && this.value/1000 < 0.8792183813724485) {
		document.getElementById("Bulgaria").setAttribute("fill", "#fed669");
	}
	else if (this.value/1000 >= 0.8792183813724485 && this.value/1000 < 0.925530823674223) {
		document.getElementById("Bulgaria").setAttribute("fill", "#fedd67");
	}
	else if (this.value/1000 >= 0.925530823674223) {
		document.getElementById("Bulgaria").setAttribute("fill", "#fed06a");
	}
	else {
		document.getElementById("Bulgaria").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.658426505282593 && this.value/1000 < 0.6921735562621807) {
		document.getElementById("Lithuania").setAttribute("fill", "#ea6846");
	}
	else if (this.value/1000 >= 0.6921735562621807 && this.value/1000 < 0.7672068930146682) {
		document.getElementById("Lithuania").setAttribute("fill", "#fec56a");
	}
	else if (this.value/1000 >= 0.7672068930146682 && this.value/1000 < 0.8422402297671556) {
		document.getElementById("Lithuania").setAttribute("fill", "#febf69");
	}
	else if (this.value/1000 >= 0.8422402297671556 && this.value/1000 < 0.917632577700277) {
		document.getElementById("Lithuania").setAttribute("fill", "#fed669");
	}
	else if (this.value/1000 >= 0.917632577700277) {
		document.getElementById("Lithuania").setAttribute("fill", "#feda67");
	}
	else {
		document.getElementById("Lithuania").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8041337573084419 && this.value/1000 < 0.8220843163401375) {
		document.getElementById("Latvia").setAttribute("fill", "#fed46a");
	}
	else if (this.value/1000 >= 0.8220843163401375 && this.value/1000 < 0.8791670940609293) {
		document.getElementById("Latvia").setAttribute("fill", "#feb968");
	}
	else if (this.value/1000 >= 0.8791670940609293 && this.value/1000 < 0.9542004308134168) {
		document.getElementById("Latvia").setAttribute("fill", "#fead65");
	}
	else if (this.value/1000 >= 0.9542004308134168) {
		document.getElementById("Latvia").setAttribute("fill", "#fec76a");
	}
	else {
		document.getElementById("Latvia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8867576161657605 && this.value/1000 < 0.961790952918248) {
		document.getElementById("Estonia").setAttribute("fill", "#fed46a");
	}
	else if (this.value/1000 >= 0.961790952918248) {
		document.getElementById("Estonia").setAttribute("fill", "#fea864");
	}
	else {
		document.getElementById("Estonia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.541388860395938 && this.value/1000 < 0.6860703661914043) {
		document.getElementById("Greece").setAttribute("fill", "#f2e9e0");
	}
	else if (this.value/1000 >= 0.6860703661914043 && this.value/1000 < 0.7471022668991691) {
		document.getElementById("Greece").setAttribute("fill", "#fedd68");
	}
	else if (this.value/1000 >= 0.7471022668991691 && this.value/1000 < 0.7855164632269976) {
		document.getElementById("Greece").setAttribute("fill", "#fede69");
	}
	else if (this.value/1000 >= 0.7855164632269976 && this.value/1000 < 0.8339829726125757) {
		document.getElementById("Greece").setAttribute("fill", "#feb668");
	}
	else if (this.value/1000 >= 0.8339829726125757 && this.value/1000 < 0.8361370396963791) {
		document.getElementById("Greece").setAttribute("fill", "#f4784e");
	}
	else if (this.value/1000 >= 0.8361370396963791 && this.value/1000 < 0.884962560262591) {
		document.getElementById("Greece").setAttribute("fill", "#fd8557");
	}
	else if (this.value/1000 >= 0.884962560262591 && this.value/1000 < 0.897168940404144) {
		document.getElementById("Greece").setAttribute("fill", "#fe965f");
	}
	else if (this.value/1000 >= 0.897168940404144 && this.value/1000 < 0.9682531541696584) {
		document.getElementById("Greece").setAttribute("fill", "#fed768");
	}
	else if (this.value/1000 >= 0.9682531541696584) {
		document.getElementById("Greece").setAttribute("fill", "#fe8d5a");
	}
	else {
		document.getElementById("Greece").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8160324135808801 && this.value/1000 < 0.848702431018566) {
		document.getElementById("Cyprus").setAttribute("fill", "#feeca7");
	}
	else if (this.value/1000 >= 0.848702431018566 && this.value/1000 < 0.9097343317263309) {
		document.getElementById("Cyprus").setAttribute("fill", "#feefb5");
	}
	else if (this.value/1000 >= 0.9097343317263309 && this.value/1000 < 0.9413273156221151) {
		document.getElementById("Cyprus").setAttribute("fill", "#fede6a");
	}
	else if (this.value/1000 >= 0.9413273156221151 && this.value/1000 < 0.966099087085855) {
		document.getElementById("Cyprus").setAttribute("fill", "#feda67");
	}
	else if (this.value/1000 >= 0.966099087085855) {
		document.getElementById("Cyprus").setAttribute("fill", "#fed36a");
	}
	else {
		document.getElementById("Cyprus").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.03661914042465894 && this.value/1000 < 0.11165247717714638) {
		document.getElementById("Turkey").setAttribute("fill", "#fee06f");
	}
	else if (this.value/1000 >= 0.11165247717714638 && this.value/1000 < 0.1798646014975895) {
		document.getElementById("Turkey").setAttribute("fill", "#fedf6c");
	}
	else if (this.value/1000 >= 0.1798646014975895 && this.value/1000 < 0.5273874243512156) {
		document.getElementById("Turkey").setAttribute("fill", "#fed867");
	}
	else if (this.value/1000 >= 0.5273874243512156 && this.value/1000 < 0.5894963586008821) {
		document.getElementById("Turkey").setAttribute("fill", "#fed36a");
	}
	else if (this.value/1000 >= 0.5894963586008821 && this.value/1000 < 0.6559134270181557) {
		document.getElementById("Turkey").setAttribute("fill", "#fea765");
	}
	else if (this.value/1000 >= 0.6559134270181557 && this.value/1000 < 0.7442301774540978) {
		document.getElementById("Turkey").setAttribute("fill", "#fed26a");
	}
	else if (this.value/1000 >= 0.7442301774540978 && this.value/1000 < 0.8171094471227818) {
		document.getElementById("Turkey").setAttribute("fill", "#feb868");
	}
	else if (this.value/1000 >= 0.8171094471227818 && this.value/1000 < 0.8917837726946354) {
		document.getElementById("Turkey").setAttribute("fill", "#febe68");
	}
	else if (this.value/1000 >= 0.8917837726946354 && this.value/1000 < 0.8993230074879475) {
		document.getElementById("Turkey").setAttribute("fill", "#feaf66");
	}
	else if (this.value/1000 >= 0.8993230074879475 && this.value/1000 < 0.9488665504154272) {
		document.getElementById("Turkey").setAttribute("fill", "#fec36a");
	}
	else if (this.value/1000 >= 0.9488665504154272) {
		document.getElementById("Turkey").setAttribute("fill", "#fec76a");
	}
	else {
		document.getElementById("Turkey").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46384244537901326 && this.value/1000 < 0.5245153349061442) {
		document.getElementById("Croatia").setAttribute("fill", "#fed669");
	}
	else if (this.value/1000 >= 0.5245153349061442 && this.value/1000 < 0.602831059595856) {
		document.getElementById("Croatia").setAttribute("fill", "#fedc67");
	}
	else if (this.value/1000 >= 0.602831059595856 && this.value/1000 < 0.6756590419530208) {
		document.getElementById("Croatia").setAttribute("fill", "#fedb67");
	}
	else if (this.value/1000 >= 0.6756590419530208 && this.value/1000 < 0.7506923787055083) {
		document.getElementById("Croatia").setAttribute("fill", "#fed867");
	}
	else if (this.value/1000 >= 0.7506923787055083 && this.value/1000 < 0.7898245973946045) {
		document.getElementById("Croatia").setAttribute("fill", "#fedf6b");
	}
	else if (this.value/1000 >= 0.7898245973946045 && this.value/1000 < 0.8835265155400553) {
		document.getElementById("Croatia").setAttribute("fill", "#fed967");
	}
	else if (this.value/1000 >= 0.8835265155400553 && this.value/1000 < 0.9804082469996923) {
		document.getElementById("Croatia").setAttribute("fill", "#fed968");
	}
	else if (this.value/1000 >= 0.9804082469996923) {
		document.getElementById("Croatia").setAttribute("fill", "#fec96b");
	}
	else {
		document.getElementById("Croatia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46671453482408454 && this.value/1000 < 0.5435429274797415) {
		document.getElementById("Romania").setAttribute("fill", "#fede69");
	}
	else if (this.value/1000 >= 0.5435429274797415 && this.value/1000 < 0.6196532977741307) {
		document.getElementById("Romania").setAttribute("fill", "#fedd67");
	}
	else if (this.value/1000 >= 0.6196532977741307 && this.value/1000 < 0.6946866345266182) {
		document.getElementById("Romania").setAttribute("fill", "#fea263");
	}
	else if (this.value/1000 >= 0.6946866345266182 && this.value/1000 < 0.7697199712791055) {
		document.getElementById("Romania").setAttribute("fill", "#febe69");
	}
	else if (this.value/1000 >= 0.7697199712791055 && this.value/1000 < 0.8451123192122268) {
		document.getElementById("Romania").setAttribute("fill", "#fedf6d");
	}
	else if (this.value/1000 >= 0.8451123192122268 && this.value/1000 < 0.9201456559647143) {
		document.getElementById("Romania").setAttribute("fill", "#feea9b");
	}
	else if (this.value/1000 >= 0.9201456559647143 && this.value/1000 < 0.9948199815365678) {
		document.getElementById("Romania").setAttribute("fill", "#feedae");
	}
	else if (this.value/1000 >= 0.9948199815365678) {
		document.getElementById("Romania").setAttribute("fill", "#fe905b");
	}
	else {
		document.getElementById("Romania").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.47102266899169143 && this.value/1000 < 0.564622012514104) {
		document.getElementById("Serbia").setAttribute("fill", "#fe975f");
	}
	else if (this.value/1000 >= 0.564622012514104 && this.value/1000 < 0.6210380551851472) {
		document.getElementById("Serbia").setAttribute("fill", "#feb968");
	}
	else if (this.value/1000 >= 0.6210380551851472 && this.value/1000 < 0.6774540978561904) {
		document.getElementById("Serbia").setAttribute("fill", "#fe8858");
	}
	else if (this.value/1000 >= 0.6774540978561904 && this.value/1000 < 0.7348958867576162) {
		document.getElementById("Serbia").setAttribute("fill", "#fed26a");
	}
	else if (this.value/1000 >= 0.7348958867576162 && this.value/1000 < 0.7593086470407221) {
		document.getElementById("Serbia").setAttribute("fill", "#fe8958");
	}
	else if (this.value/1000 >= 0.7593086470407221 && this.value/1000 < 0.8339829726125757) {
		document.getElementById("Serbia").setAttribute("fill", "#fd8556");
	}
	else if (this.value/1000 >= 0.8339829726125757 && this.value/1000 < 0.868807057134065) {
		document.getElementById("Serbia").setAttribute("fill", "#fedc68");
	}
	else if (this.value/1000 >= 0.868807057134065 && this.value/1000 < 0.9082982870037952) {
		document.getElementById("Serbia").setAttribute("fill", "#fde57f");
	}
	else if (this.value/1000 >= 0.9082982870037952 && this.value/1000 < 0.986203713201354) {
		document.getElementById("Serbia").setAttribute("fill", "#fed46a");
	}
	else if (this.value/1000 >= 0.986203713201354) {
		document.getElementById("Serbia").setAttribute("fill", "#fee47d");
	}
	else {
		document.getElementById("Serbia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.5880603138783465 && this.value/1000 < 0.6627346394502001) {
		document.getElementById("Finland").setAttribute("fill", "#feedae");
	}
	else if (this.value/1000 >= 0.6627346394502001 && this.value/1000 < 0.7377679762026874) {
		document.getElementById("Finland").setAttribute("fill", "#fee78c");
	}
	else if (this.value/1000 >= 0.7377679762026874 && this.value/1000 < 0.8142373576777105) {
		document.getElementById("Finland").setAttribute("fill", "#fedd68");
	}
	else if (this.value/1000 >= 0.8142373576777105 && this.value/1000 < 0.889270694430198) {
		document.getElementById("Finland").setAttribute("fill", "#fea464");
	}
	else if (this.value/1000 >= 0.889270694430198 && this.value/1000 < 0.9639450200020515) {
		document.getElementById("Finland").setAttribute("fill", "#fea964");
	}
	else if (this.value/1000 >= 0.9639450200020515) {
		document.getElementById("Finland").setAttribute("fill", "#feaa65");
	}
	else {
		document.getElementById("Finland").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4235306185249769 && this.value/1000 < 0.46086778131090367) {
		document.getElementById("Slovakia").setAttribute("fill", "#feb968");
	}
	else if (this.value/1000 >= 0.46086778131090367 && this.value/1000 < 0.5043081341676069) {
		document.getElementById("Slovakia").setAttribute("fill", "#fed56a");
	}
	else if (this.value/1000 >= 0.5043081341676069 && this.value/1000 < 0.5789824597394605) {
		document.getElementById("Slovakia").setAttribute("fill", "#fedb67");
	}
	else if (this.value/1000 >= 0.5789824597394605 && this.value/1000 < 0.653656785311314) {
		document.getElementById("Slovakia").setAttribute("fill", "#fed06a");
	}
	else if (this.value/1000 >= 0.653656785311314 && this.value/1000 < 0.7237152528464458) {
		document.getElementById("Slovakia").setAttribute("fill", "#fee06d");
	}
	else if (this.value/1000 >= 0.7237152528464458 && this.value/1000 < 0.7983895784182993) {
		document.getElementById("Slovakia").setAttribute("fill", "#fec46a");
	}
	else if (this.value/1000 >= 0.7983895784182993 && this.value/1000 < 0.8310595958559852) {
		document.getElementById("Slovakia").setAttribute("fill", "#fe9860");
	}
	else if (this.value/1000 >= 0.8310595958559852 && this.value/1000 < 0.9057339214278387) {
		document.getElementById("Slovakia").setAttribute("fill", "#fe975f");
	}
	else if (this.value/1000 >= 0.9057339214278387 && this.value/1000 < 0.9804082469996923) {
		document.getElementById("Slovakia").setAttribute("fill", "#e16040");
	}
	else if (this.value/1000 >= 0.9804082469996923) {
		document.getElementById("Slovakia").setAttribute("fill", "#f1724c");
	}
	else {
		document.getElementById("Slovakia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4053236229356857 && this.value/1000 < 0.49866652990050264) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fed56a");
	}
	else if (this.value/1000 >= 0.49866652990050264 && this.value/1000 < 0.5923684480459535) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fed06b");
	}
	else if (this.value/1000 >= 0.5923684480459535 && this.value/1000 < 0.6860703661914043) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fec66a");
	}
	else if (this.value/1000 >= 0.6860703661914043 && this.value/1000 < 0.7794132731562211) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fecd6a");
	}
	else if (this.value/1000 >= 0.7794132731562211 && this.value/1000 < 0.8612678223407529) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fec66a");
	}
	else if (this.value/1000 >= 0.8612678223407529 && this.value/1000 < 0.9546107293055698) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fed868");
	}
	else if (this.value/1000 >= 0.9546107293055698) {
		document.getElementById("Luxembourg").setAttribute("fill", "#fed36a");
	}
	else {
		document.getElementById("Luxembourg").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.10985742127397682 && this.value/1000 < 0.18489075802646426) {
		document.getElementById("Norway").setAttribute("fill", "#fedc67");
	}
	else if (this.value/1000 >= 0.18489075802646426 && this.value/1000 < 0.2599240947789517) {
		document.getElementById("Norway").setAttribute("fill", "#fee680");
	}
	else if (this.value/1000 >= 0.2599240947789517 && this.value/1000 < 0.3345984203508052) {
		document.getElementById("Norway").setAttribute("fill", "#fedd67");
	}
	else if (this.value/1000 >= 0.3345984203508052 && this.value/1000 < 0.40963175710329264) {
		document.getElementById("Norway").setAttribute("fill", "#fede6a");
	}
	else if (this.value/1000 >= 0.40963175710329264 && this.value/1000 < 0.4846650938557801) {
		document.getElementById("Norway").setAttribute("fill", "#febe68");
	}
	else if (this.value/1000 >= 0.4846650938557801 && this.value/1000 < 0.5596984306082675) {
		document.getElementById("Norway").setAttribute("fill", "#fed968");
	}
	else if (this.value/1000 >= 0.5596984306082675 && this.value/1000 < 0.634372756180121) {
		document.getElementById("Norway").setAttribute("fill", "#feb367");
	}
	else if (this.value/1000 >= 0.634372756180121 && this.value/1000 < 0.7094060929326085) {
		document.getElementById("Norway").setAttribute("fill", "#feb667");
	}
	else if (this.value/1000 >= 0.7094060929326085 && this.value/1000 < 0.784439429685096) {
		document.getElementById("Norway").setAttribute("fill", "#fe9a60");
	}
	else if (this.value/1000 >= 0.784439429685096 && this.value/1000 < 0.8591137552569494) {
		document.getElementById("Norway").setAttribute("fill", "#fe965e");
	}
	else if (this.value/1000 >= 0.8591137552569494 && this.value/1000 < 0.934198379320956) {
		document.getElementById("Norway").setAttribute("fill", "#feaf66");
	}
	else if (this.value/1000 >= 0.934198379320956) {
		document.getElementById("Norway").setAttribute("fill", "#feb367");
	}
	else {
		document.getElementById("Norway").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.42040209252231 && this.value/1000 < 0.47030464663042365) {
		document.getElementById("Slovenia").setAttribute("fill", "#fed669");
	}
	else if (this.value/1000 >= 0.47030464663042365 && this.value/1000 < 0.5439019386603754) {
		document.getElementById("Slovenia").setAttribute("fill", "#ed6d48");
	}
	else if (this.value/1000 >= 0.5439019386603754 && this.value/1000 < 0.6174992306903272) {
		document.getElementById("Slovenia").setAttribute("fill", "#e26141");
	}
	else if (this.value/1000 >= 0.6174992306903272 && this.value/1000 < 0.6918145450815468) {
		document.getElementById("Slovenia").setAttribute("fill", "#dd5b3d");
	}
	else if (this.value/1000 >= 0.6918145450815468 && this.value/1000 < 0.7661298594727665) {
		document.getElementById("Slovenia").setAttribute("fill", "#bf4b34");
	}
	else if (this.value/1000 >= 0.7661298594727665 && this.value/1000 < 0.8260847266386296) {
		document.getElementById("Slovenia").setAttribute("fill", "#c44d34");
	}
	else if (this.value/1000 >= 0.8260847266386296 && this.value/1000 < 0.8749102472048416) {
		document.getElementById("Slovenia").setAttribute("fill", "#db5a3c");
	}
	else if (this.value/1000 >= 0.8749102472048416 && this.value/1000 < 0.9477895168735255) {
		document.getElementById("Slovenia").setAttribute("fill", "#e15f40");
	}
	else if (this.value/1000 >= 0.9477895168735255) {
		document.getElementById("Slovenia").setAttribute("fill", "#d15337");
	}
	else {
		document.getElementById("Slovenia").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8615755462098676 && this.value/1000 < 0.9362498717817213) {
		document.getElementById("Czech_Republic").setAttribute("fill", "#fed769");
	}
	else if (this.value/1000 >= 0.9362498717817213) {
		document.getElementById("Czech_Republic").setAttribute("fill", "#fec96b");
	}
	else {
		document.getElementById("Czech_Republic").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.5688275720586727 && this.value/1000 < 0.6380654426094984) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fed669");
		}
	}
	else if (this.value/1000 >= 0.6380654426094984 && this.value/1000 < 0.6983793209559955) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fec269");
		}
	}
	else if (this.value/1000 >= 0.6983793209559955 && this.value/1000 < 0.7500769309672787) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#febc69");
		}
	}
	else if (this.value/1000 >= 0.7500769309672787 && this.value/1000 < 0.8219817417170991) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#feb968");
		}
	}
	else if (this.value/1000 >= 0.8219817417170991 && this.value/1000 < 0.8923479331213457) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fec269");
		}
	}
	else if (this.value/1000 >= 0.8923479331213457 && this.value/1000 < 0.9666119602010462) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fe9c61");
		}
	}
	else if (this.value/1000 >= 0.9666119602010462) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#f3764d");
		}
	}
	else {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#c0c0c0");
		}
	}
	if (this.value/1000 >= 0.9729202995178993 && this.value/1000 < 0.9973330598010053) {
		document.getElementById("Portugal").setAttribute("fill", "#feea9b");
	}
	else if (this.value/1000 >= 0.9973330598010053) {
		document.getElementById("Portugal").setAttribute("fill", "#fec36a");
	}
	else {
		document.getElementById("Portugal").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.6350907785413888 && this.value/1000 < 0.7101241152938763) {
		document.getElementById("Poland").setAttribute("fill", "#fece6b");
	}
	else if (this.value/1000 >= 0.7101241152938763 && this.value/1000 < 0.7488973228023387) {
		document.getElementById("Poland").setAttribute("fill", "#fe8a59");
	}
	else if (this.value/1000 >= 0.7488973228023387 && this.value/1000 < 0.8232126371935583) {
		document.getElementById("Poland").setAttribute("fill", "#fa8054");
	}
	else if (this.value/1000 >= 0.8232126371935583 && this.value/1000 < 0.8989639963073136) {
		document.getElementById("Poland").setAttribute("fill", "#fb8355");
	}
	else if (this.value/1000 >= 0.8989639963073136 && this.value/1000 < 0.9732793106985331) {
		document.getElementById("Poland").setAttribute("fill", "#843c2e");
	}
	else if (this.value/1000 >= 0.9732793106985331) {
		document.getElementById("Poland").setAttribute("fill", "#843c2e");
	}
	else {
		document.getElementById("Poland").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.1803774746127808 && this.value/1000 < 0.9018360857523848) {
		document.getElementById("Spain").setAttribute("fill", "#f2e9e0");
	}
	else if (this.value/1000 >= 0.9018360857523848 && this.value/1000 < 0.9115293876295004) {
		document.getElementById("Spain").setAttribute("fill", "#f5ebdb");
	}
	else if (this.value/1000 >= 0.9115293876295004 && this.value/1000 < 0.9646630423633193) {
		document.getElementById("Spain").setAttribute("fill", "#f5ebdb");
	}
	else if (this.value/1000 >= 0.9646630423633193 && this.value/1000 < 0.9747153554210688) {
		document.getElementById("Spain").setAttribute("fill", "#feca6a");
	}
	else if (this.value/1000 >= 0.9747153554210688) {
		document.getElementById("Spain").setAttribute("fill", "#feb467");
	}
	else {
		document.getElementById("Spain").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4577392553082367 && this.value/1000 < 0.4947174069135296) {
		document.getElementById("Italy").setAttribute("fill", "#fed26a");
	}
	else if (this.value/1000 >= 0.4947174069135296 && this.value/1000 < 0.533490614421992) {
		document.getElementById("Italy").setAttribute("fill", "#fed26a");
	}
	else if (this.value/1000 >= 0.533490614421992 && this.value/1000 < 0.6282695661093446) {
		document.getElementById("Italy").setAttribute("fill", "#fec96a");
	}
	else if (this.value/1000 >= 0.6282695661093446 && this.value/1000 < 0.7201764283516258) {
		document.getElementById("Italy").setAttribute("fill", "#fede69");
	}
	else if (this.value/1000 >= 0.7201764283516258 && this.value/1000 < 0.7578726023181864) {
		document.getElementById("Italy").setAttribute("fill", "#fedc68");
	}
	else if (this.value/1000 >= 0.7578726023181864 && this.value/1000 < 0.8490614421991999) {
		document.getElementById("Italy").setAttribute("fill", "#fed36a");
	}
	else if (this.value/1000 >= 0.8490614421991999 && this.value/1000 < 0.9431223715252847) {
		document.getElementById("Italy").setAttribute("fill", "#fe955f");
	}
	else if (this.value/1000 >= 0.9431223715252847) {
		document.getElementById("Italy").setAttribute("fill", "#d9573a");
	}
	else {
		document.getElementById("Italy").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.41968407016104214 && this.value/1000 < 0.49687147399733306) {
		document.getElementById("Hungary").setAttribute("fill", "#fed06b");
	}
	else if (this.value/1000 >= 0.49687147399733306 && this.value/1000 < 0.5719048107498205) {
		document.getElementById("Hungary").setAttribute("fill", "#fed768");
	}
	else if (this.value/1000 >= 0.5719048107498205 && this.value/1000 < 0.6451430915991384) {
		document.getElementById("Hungary").setAttribute("fill", "#fd8758");
	}
	else if (this.value/1000 >= 0.6451430915991384 && this.value/1000 < 0.7201764283516258) {
		document.getElementById("Hungary").setAttribute("fill", "#f2734c");
	}
	else if (this.value/1000 >= 0.7201764283516258 && this.value/1000 < 0.7952097651041132) {
		document.getElementById("Hungary").setAttribute("fill", "#c74d34");
	}
	else if (this.value/1000 >= 0.7952097651041132 && this.value/1000 < 0.8698840906759667) {
		document.getElementById("Hungary").setAttribute("fill", "#221b1e");
	}
	else if (this.value/1000 >= 0.8698840906759667 && this.value/1000 < 0.9449174274284542) {
		document.getElementById("Hungary").setAttribute("fill", "#261c1f");
	}
	else if (this.value/1000 >= 0.9449174274284542) {
		document.getElementById("Hungary").setAttribute("fill", "#211a1e");
	}
	else {
		document.getElementById("Hungary").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.0 && this.value/1000 < 0.07503333675248744) {
		document.getElementById("Switzerland").setAttribute("fill", "#fef2cd");
	}
	else if (this.value/1000 >= 0.07503333675248744 && this.value/1000 < 0.14970766232434096) {
		document.getElementById("Switzerland").setAttribute("fill", "#ec6b48");
	}
	else if (this.value/1000 >= 0.14970766232434096 && this.value/1000 < 0.22438198789619448) {
		document.getElementById("Switzerland").setAttribute("fill", "#f0724c");
	}
	else if (this.value/1000 >= 0.22438198789619448 && this.value/1000 < 0.2994153246486819) {
		document.getElementById("Switzerland").setAttribute("fill", "#f4774f");
	}
	else if (this.value/1000 >= 0.2994153246486819 && this.value/1000 < 0.3740896502205354) {
		document.getElementById("Switzerland").setAttribute("fill", "#ed6d48");
	}
	else if (this.value/1000 >= 0.3740896502205354 && this.value/1000 < 0.4491229869730229) {
		document.getElementById("Switzerland").setAttribute("fill", "#ef6f49");
	}
	else if (this.value/1000 >= 0.4491229869730229 && this.value/1000 < 0.5241563237255104) {
		document.getElementById("Switzerland").setAttribute("fill", "#e96946");
	}
	else if (this.value/1000 >= 0.5241563237255104 && this.value/1000 < 0.5991896604779977) {
		document.getElementById("Switzerland").setAttribute("fill", "#e66544");
	}
	else if (this.value/1000 >= 0.5991896604779977 && this.value/1000 < 0.6738639860498513) {
		document.getElementById("Switzerland").setAttribute("fill", "#e15f41");
	}
	else if (this.value/1000 >= 0.6738639860498513 && this.value/1000 < 0.7488973228023387) {
		document.getElementById("Switzerland").setAttribute("fill", "#e46142");
	}
	else if (this.value/1000 >= 0.7488973228023387 && this.value/1000 < 0.8239306595548261) {
		document.getElementById("Switzerland").setAttribute("fill", "#e76745");
	}
	else if (this.value/1000 >= 0.8239306595548261 && this.value/1000 < 0.8986049851266796) {
		document.getElementById("Switzerland").setAttribute("fill", "#ef704b");
	}
	else if (this.value/1000 >= 0.8986049851266796 && this.value/1000 < 0.9736383218791671) {
		document.getElementById("Switzerland").setAttribute("fill", "#ef704a");
	}
	else if (this.value/1000 >= 0.9736383218791671) {
		document.getElementById("Switzerland").setAttribute("fill", "#f2754e");
	}
	else {
		document.getElementById("Switzerland").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.10016411939686122 && this.value/1000 < 0.19422504872294594) {
		document.getElementById("France").setAttribute("fill", "#fef0d3");
	}
	else if (this.value/1000 >= 0.19422504872294594 && this.value/1000 < 0.25525694943071087) {
		document.getElementById("France").setAttribute("fill", "#f9edd8");
	}
	else if (this.value/1000 >= 0.25525694943071087 && this.value/1000 < 0.3442917222279208) {
		document.getElementById("France").setAttribute("fill", "#fef0d3");
	}
	else if (this.value/1000 >= 0.3442917222279208 && this.value/1000 < 0.3838855267206893) {
		document.getElementById("France").setAttribute("fill", "#fece6a");
	}
	else if (this.value/1000 >= 0.3838855267206893 && this.value/1000 < 0.5148220330290286) {
		document.getElementById("France").setAttribute("fill", "#feb767");
	}
	else if (this.value/1000 >= 0.5148220330290286 && this.value/1000 < 0.6458611139604062) {
		document.getElementById("France").setAttribute("fill", "#feb567");
	}
	else if (this.value/1000 >= 0.6458611139604062 && this.value/1000 < 0.739563032105857) {
		document.getElementById("France").setAttribute("fill", "#fea864");
	}
	else if (this.value/1000 >= 0.739563032105857 && this.value/1000 < 0.8332649502513079) {
		document.getElementById("France").setAttribute("fill", "#feca6b");
	}
	else if (this.value/1000 >= 0.8332649502513079 && this.value/1000 < 0.9276848907580265) {
		document.getElementById("France").setAttribute("fill", "#fea865");
	}
	else if (this.value/1000 >= 0.9276848907580265) {
		document.getElementById("France").setAttribute("fill", "#f77b51");
	}
	else {
		document.getElementById("France").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= -0.3410606216022156 && this.value/1000 < -0.26495025130782646) {
		document.getElementById("Germany").setAttribute("fill", "#fede68");
	}
	else if (this.value/1000 >= -0.26495025130782646 && this.value/1000 < -0.1895579033747051) {
		document.getElementById("Germany").setAttribute("fill", "#fede68");
	}
	else if (this.value/1000 >= -0.1895579033747051 && this.value/1000 < -0.03949122986973023) {
		document.getElementById("Germany").setAttribute("fill", "#fee06d");
	}
	else if (this.value/1000 >= -0.03949122986973023 && this.value/1000 < 0.035901118063391114) {
		document.getElementById("Germany").setAttribute("fill", "#fde57f");
	}
	else if (this.value/1000 >= 0.035901118063391114 && this.value/1000 < 0.09477895168735255) {
		document.getElementById("Germany").setAttribute("fill", "#fedd68");
	}
	else if (this.value/1000 >= 0.09477895168735255 && this.value/1000 < 0.1672992101754026) {
		document.getElementById("Germany").setAttribute("fill", "#fef2cd");
	}
	else if (this.value/1000 >= 0.1672992101754026 && this.value/1000 < 0.24233254692789005) {
		document.getElementById("Germany").setAttribute("fill", "#fcefd6");
	}
	else if (this.value/1000 >= 0.24233254692789005 && this.value/1000 < 0.28756795568776283) {
		document.getElementById("Germany").setAttribute("fill", "#f5ebdb");
	}
	else if (this.value/1000 >= 0.28756795568776283 && this.value/1000 < 0.3604472253564468) {
		document.getElementById("Germany").setAttribute("fill", "#f5ebdb");
	}
	else if (this.value/1000 >= 0.3604472253564468 && this.value/1000 < 0.432608472663863) {
		document.getElementById("Germany").setAttribute("fill", "#fef2cd");
	}
	else if (this.value/1000 >= 0.432608472663863 && this.value/1000 < 0.5790850343624987) {
		document.getElementById("Germany").setAttribute("fill", "#fcefd6");
	}
	else if (this.value/1000 >= 0.5790850343624987 && this.value/1000 < 0.6537593599343522) {
		document.getElementById("Germany").setAttribute("fill", "#f9edd8");
	}
	else if (this.value/1000 >= 0.6537593599343522 && this.value/1000 < 0.7097651041132423) {
		document.getElementById("Germany").setAttribute("fill", "#fcefd6");
	}
	else if (this.value/1000 >= 0.7097651041132423 && this.value/1000 < 0.7851574520463638) {
		document.getElementById("Germany").setAttribute("fill", "#fee684");
	}
	else if (this.value/1000 >= 0.7851574520463638 && this.value/1000 < 0.8598317776182173) {
		document.getElementById("Germany").setAttribute("fill", "#fee684");
	}
	else if (this.value/1000 >= 0.8598317776182173 && this.value/1000 < 0.9327623345984204) {
		document.getElementById("Germany").setAttribute("fill", "#fe985f");
	}
	else if (this.value/1000 >= 0.9327623345984204) {
		document.getElementById("Germany").setAttribute("fill", "#fe9a60");
	}
	else {
		document.getElementById("Germany").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.3476766847881834 && this.value/1000 < 0.40942660785721613) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#f2e9e0");
	}
	else if (this.value/1000 >= 0.40942660785721613 && this.value/1000 < 0.4966150374397374) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#feefb5");
	}
	else if (this.value/1000 >= 0.4966150374397374 && this.value/1000 < 0.571699661503744) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#fee277");
	}
	else if (this.value/1000 >= 0.571699661503744 && this.value/1000 < 0.6470920094368653) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#fef0d3");
	}
	else if (this.value/1000 >= 0.6470920094368653 && this.value/1000 < 0.6600164119396861) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#feac65");
	}
	else if (this.value/1000 >= 0.6600164119396861 && this.value/1000 < 0.7318186480664683) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#feda67");
	}
	else if (this.value/1000 >= 0.7318186480664683 && this.value/1000 < 0.7982357164837419) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#feba68");
	}
	else if (this.value/1000 >= 0.7982357164837419 && this.value/1000 < 0.8405990357985434) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#feb267");
	}
	else if (this.value/1000 >= 0.8405990357985434 && this.value/1000 < 0.9249666632475125) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#fecc6a");
	}
	else if (this.value/1000 >= 0.9249666632475125 && this.value/1000 < 1.0) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#ef704b");
	}
	else if (this.value/1000 >= 1.0) {
		document.getElementById("The_Netherlands").setAttribute("fill", "#e66543");
	}
	else {
		document.getElementById("The_Netherlands").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.26279618422402296 && this.value/1000 < 0.33639347625397475) {
		document.getElementById("Belgium").setAttribute("fill", "#feeca7");
	}
	else if (this.value/1000 >= 0.33639347625397475 && this.value/1000 < 0.37696173966560675) {
		document.getElementById("Belgium").setAttribute("fill", "#fede69");
	}
	else if (this.value/1000 >= 0.37696173966560675 && this.value/1000 < 0.4509180428761924) {
		document.getElementById("Belgium").setAttribute("fill", "#fedc66");
	}
	else if (this.value/1000 >= 0.4509180428761924 && this.value/1000 < 0.5162580777515643) {
		document.getElementById("Belgium").setAttribute("fill", "#fe915d");
	}
	else if (this.value/1000 >= 0.5162580777515643 && this.value/1000 < 0.5923684480459535) {
		document.getElementById("Belgium").setAttribute("fill", "#f57950");
	}
	else if (this.value/1000 >= 0.5923684480459535 && this.value/1000 < 0.6659657400759053) {
		document.getElementById("Belgium").setAttribute("fill", "#f67a50");
	}
	else if (this.value/1000 >= 0.6659657400759053 && this.value/1000 < 0.7420761103702944) {
		document.getElementById("Belgium").setAttribute("fill", "#f0714b");
	}
	else if (this.value/1000 >= 0.7420761103702944 && this.value/1000 < 0.7984408657298184) {
		document.getElementById("Belgium").setAttribute("fill", "#fec269");
	}
	else if (this.value/1000 >= 0.7984408657298184 && this.value/1000 < 0.8723971689404041) {
		document.getElementById("Belgium").setAttribute("fill", "#fed46a");
	}
	else if (this.value/1000 >= 0.8723971689404041 && this.value/1000 < 0.966099087085855) {
		document.getElementById("Belgium").setAttribute("fill", "#fede6a");
	}
	else if (this.value/1000 >= 0.966099087085855) {
		document.getElementById("Belgium").setAttribute("fill", "#fec269");
	}
	else {
		document.getElementById("Belgium").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4473279310698533 && this.value/1000 < 0.5036926864293774) {
		document.getElementById("Sweden").setAttribute("fill", "#f2e9e0");
	}
	else if (this.value/1000 >= 0.5036926864293774 && this.value/1000 < 0.5787260231818648) {
		document.getElementById("Sweden").setAttribute("fill", "#f9edd8");
	}
	else if (this.value/1000 >= 0.5787260231818648 && this.value/1000 < 0.6534003487537183) {
		document.getElementById("Sweden").setAttribute("fill", "#fcefd6");
	}
	else if (this.value/1000 >= 0.6534003487537183 && this.value/1000 < 0.7284336855062058) {
		document.getElementById("Sweden").setAttribute("fill", "#fee996");
	}
	else if (this.value/1000 >= 0.7284336855062058 && this.value/1000 < 0.8034670222586932) {
		document.getElementById("Sweden").setAttribute("fill", "#fee071");
	}
	else if (this.value/1000 >= 0.8034670222586932 && this.value/1000 < 0.8781413478305468) {
		document.getElementById("Sweden").setAttribute("fill", "#feda67");
	}
	else if (this.value/1000 >= 0.8781413478305468 && this.value/1000 < 0.9528156734024003) {
		document.getElementById("Sweden").setAttribute("fill", "#febe69");
	}
	else if (this.value/1000 >= 0.9528156734024003) {
		document.getElementById("Sweden").setAttribute("fill", "#feaa65");
	}
	else {
		document.getElementById("Sweden").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4579444045543133 && this.value/1000 < 0.5527233562416658) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#f2e9e0");
		}
	}
	else if (this.value/1000 >= 0.5527233562416658 && this.value/1000 < 0.6295517488973228) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#f2e9e0");
		}
	}
	else if (this.value/1000 >= 0.6295517488973228 && this.value/1000 < 0.7027900297466407) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#f5ebdb");
		}
	}
	else if (this.value/1000 >= 0.7027900297466407 && this.value/1000 < 0.7964919478920915) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fef3c7");
		}
	}
	else if (this.value/1000 >= 0.7964919478920915 && this.value/1000 < 0.8901938660375424) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#fee680");
		}
	}
	else if (this.value/1000 >= 0.8901938660375424) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#f2e9e0");
		}
	}
	else {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", "#c0c0c0");
		}
	}
	if (this.value/1000 >= 0.6997127910554929 && this.value/1000 < 0.8820904708175198) {
		document.getElementById("Moldova").setAttribute("fill", "#fedc67");
	}
	else if (this.value/1000 >= 0.8820904708175198 && this.value/1000 < 0.9614319417376141) {
		document.getElementById("Moldova").setAttribute("fill", "#fe9f62");
	}
	else if (this.value/1000 >= 0.9614319417376141) {
		document.getElementById("Moldova").setAttribute("fill", "#fa8054");
	}
	else {
		document.getElementById("Moldova").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.04379936403733716 && this.value/1000 < 0.23515232331521183) {
		document.getElementById("Austria").setAttribute("fill", "#f2e9e0");
	}
	else if (this.value/1000 >= 0.23515232331521183 && this.value/1000 < 0.3572161247307416) {
		document.getElementById("Austria").setAttribute("fill", "#fedf6d");
	}
	else if (this.value/1000 >= 0.3572161247307416 && this.value/1000 < 0.42973638321879165) {
		document.getElementById("Austria").setAttribute("fill", "#fece6a");
	}
	else if (this.value/1000 >= 0.42973638321879165 && this.value/1000 < 0.5047697199712791) {
		document.getElementById("Austria").setAttribute("fill", "#fead65");
	}
	else if (this.value/1000 >= 0.5047697199712791 && this.value/1000 < 0.5270284131705816) {
		document.getElementById("Austria").setAttribute("fill", "#fe985f");
	}
	else if (this.value/1000 >= 0.5270284131705816 && this.value/1000 < 0.598112626936096) {
		document.getElementById("Austria").setAttribute("fill", "#fe9960");
	}
	else if (this.value/1000 >= 0.598112626936096 && this.value/1000 < 0.6569904605600574) {
		document.getElementById("Austria").setAttribute("fill", "#fe8b59");
	}
	else if (this.value/1000 >= 0.6569904605600574 && this.value/1000 < 0.7291517078674736) {
		document.getElementById("Austria").setAttribute("fill", "#fecd6a");
	}
	else if (this.value/1000 >= 0.7291517078674736 && this.value/1000 < 0.7664888706534003) {
		document.getElementById("Austria").setAttribute("fill", "#fec86a");
	}
	else if (this.value/1000 >= 0.7664888706534003 && this.value/1000 < 0.8601907887988511) {
		document.getElementById("Austria").setAttribute("fill", "#feaa65");
	}
	else if (this.value/1000 >= 0.8601907887988511 && this.value/1000 < 0.9359421479126064) {
		document.getElementById("Austria").setAttribute("fill", "#fe9f62");
	}
	else if (this.value/1000 >= 0.9359421479126064 && this.value/1000 < 0.9725612883372654) {
		document.getElementById("Austria").setAttribute("fill", "#fe8d5b");
	}
	else if (this.value/1000 >= 0.9725612883372654) {
		document.getElementById("Austria").setAttribute("fill", "#feaf66");
	}
	else {
		document.getElementById("Austria").setAttribute("fill", "#c0c0c0");
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
}

var event = document.createEvent('Event');
event.initEvent('input', true, true);
document.getElementById("timeline").dispatchEvent(event);
