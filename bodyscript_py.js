document.getElementById("timeline").oninput = function() {
	var startDate = new Date(1967, 10, 29);
	var endDate = new Date(2021, 07, 11);
	document.getElementById("dateIndicator").innerHTML = getPaddedDate(startDate*(1-this.value/1000) + endDate*(this.value/1000));
	if (this.value/1000 >= 0.46884878148261444) {
		document.getElementById("ironCurtain").setAttribute("opacity", 0);
	} else if (this.value/1000 < 0.28260426226164986) {
		document.getElementById("ironCurtain").setAttribute("opacity", 1);
	} else {
		document.getElementById("ironCurtain").setAttribute("opacity", jQuery.easing["easeColor"](0,this.value/1000-(0.28260426226164986),1,-1,0.18624451922096458));
	}
	if (this.value/1000 >= 0.4917915774446824 && this.value/1000 < 0.5663811563169164) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.4917915774446824))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.5663811563169164 && this.value/1000 < 0.715203426124197) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#f5ebdb", "#fcefd6", ((this.value/1000-(0.5663811563169164))/0.14882226980728053)));
	}
	else if (this.value/1000 >= 0.715203426124197 && this.value/1000 < 0.7433975731620271) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fcefd6", "#fef2bf", ((this.value/1000-(0.715203426124197))/0.028194147037830186)));
	}
	else if (this.value/1000 >= 0.7433975731620271 && this.value/1000 < 0.8379728765167738) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fef2bf", "#feca6a", ((this.value/1000-(0.7433975731620271))/0.09457530335474662)));
	}
	else if (this.value/1000 >= 0.8379728765167738 && this.value/1000 < 0.875089221984297) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#feca6a", "#fedc67", ((this.value/1000-(0.8379728765167738))/0.03711634546752318)));
	}
	else if (this.value/1000 >= 0.875089221984297 && this.value/1000 < 0.9632405424696645) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fedc67", "#fea964", ((this.value/1000-(0.875089221984297))/0.08815132048536756)));
	}
	else if (this.value/1000 >= 0.9632405424696645) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fea964", "#fea964", 0));
	}
	else {
		if (this.value/1000 >= 0.44261241970021414) {
			document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#c0c0c0", "#f5ebdb", ((this.value/1000-(0.44261241970021414))/0.04917915774446824)));
		}
		else {
			document.getElementById("Ukraine").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.48643825838686655 && this.value/1000 < 0.5239114917915775) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#fe965e", "#fec86a", ((this.value/1000-(0.48643825838686655))/0.037473233404710926)));
	}
	else if (this.value/1000 >= 0.5239114917915775 && this.value/1000 < 0.5985010706638115) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#fec86a", "#fed967", ((this.value/1000-(0.5239114917915775))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.5985010706638115 && this.value/1000 < 0.6723768736616702) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#fed967", "#fec56a", ((this.value/1000-(0.5985010706638115))/0.07387580299785867)));
	}
	else if (this.value/1000 >= 0.6723768736616702 && this.value/1000 < 0.7466095645967167) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#fec56a", "#fed46a", ((this.value/1000-(0.6723768736616702))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.7466095645967167 && this.value/1000 < 0.8211991434689507) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#fed46a", "#fec46a", ((this.value/1000-(0.7466095645967167))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.8211991434689507 && this.value/1000 < 0.9104211277658815) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#fec46a", "#febe69", ((this.value/1000-(0.8211991434689507))/0.08922198429693073)));
	}
	else if (this.value/1000 >= 0.9104211277658815) {
		document.getElementById("Russia").setAttribute("fill", interpolateColor("#febe69", "#febe69", 0));
	}
	else {
		if (this.value/1000 >= 0.4377944325481799) {
			document.getElementById("Russia").setAttribute("fill", interpolateColor("#c0c0c0", "#fe965e", ((this.value/1000-(0.4377944325481799))/0.04864382583868665)));
		}
		else {
			document.getElementById("Russia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.445498113592332 && this.value/1000 < 0.6267462016926685) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.445498113592332))/0.1812480881003365)));
	}
	else if (this.value/1000 >= 0.6267462016926685 && this.value/1000 < 0.701233812582849) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#f2e9e0", "#fed46a", ((this.value/1000-(0.6267462016926685))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.701233812582849 && this.value/1000 < 0.7762312633832976) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed46a", "#fed06a", ((this.value/1000-(0.701233812582849))/0.07499745080044862)));
	}
	else if (this.value/1000 >= 0.7762312633832976 && this.value/1000 < 0.8479657387580299) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed06a", "#fed669", ((this.value/1000-(0.7762312633832976))/0.07173447537473232)));
	}
	else if (this.value/1000 >= 0.8479657387580299 && this.value/1000 < 0.8740185581727338) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed669", "#fedd67", ((this.value/1000-(0.8479657387580299))/0.02605281941470383)));
	}
	else if (this.value/1000 >= 0.8740185581727338 && this.value/1000 < 0.9200571020699501) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fedd67", "#fed06a", ((this.value/1000-(0.8740185581727338))/0.04603854389721629)));
	}
	else if (this.value/1000 >= 0.9200571020699501 && this.value/1000 < 1.0) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed06a", "#fec56a", ((this.value/1000-(0.9200571020699501))/0.07994289793004994)));
	}
	else if (this.value/1000 >= 1.0) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fec56a", "#fec56a", 0));
	}
	else {
		if (this.value/1000 >= 0.4009483022330988) {
			document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.4009483022330988))/0.04454981135923319)));
		}
		else {
			document.getElementById("Bulgaria").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4315794840420108 && this.value/1000 < 0.5800448659121036) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.4315794840420108))/0.14846538187009278)));
	}
	else if (this.value/1000 >= 0.5800448659121036 && this.value/1000 < 0.6545324768022841) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#f2e9e0", "#ea6846", ((this.value/1000-(0.5800448659121036))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.6545324768022841 && this.value/1000 < 0.6880799428979301) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#ea6846", "#fec56a", ((this.value/1000-(0.6545324768022841))/0.03354746609564596)));
	}
	else if (this.value/1000 >= 0.6880799428979301 && this.value/1000 < 0.7626695217701641) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#fec56a", "#febf69", ((this.value/1000-(0.6880799428979301))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.7626695217701641 && this.value/1000 < 0.8372591006423983) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#febf69", "#fed669", ((this.value/1000-(0.7626695217701641))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.8372591006423983 && this.value/1000 < 0.9122055674518201) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#fed669", "#feda67", ((this.value/1000-(0.8372591006423983))/0.07494646680942185)));
	}
	else if (this.value/1000 >= 0.9122055674518201) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#feda67", "#feda67", 0));
	}
	else {
		if (this.value/1000 >= 0.38842153563780973) {
			document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.38842153563780973))/0.04315794840420106)));
		}
		else {
			document.getElementById("Lithuania").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4501886407667992 && this.value/1000 < 0.7248903844192923) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.4501886407667992))/0.2747017436524931)));
	}
	else if (this.value/1000 >= 0.7248903844192923 && this.value/1000 < 0.7993779953094728) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#f2e9e0", "#fed46a", ((this.value/1000-(0.7248903844192923))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.7993779953094728 && this.value/1000 < 0.817222392168859) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#fed46a", "#feb968", ((this.value/1000-(0.7993779953094728))/0.017844396859386102)));
	}
	else if (this.value/1000 >= 0.817222392168859 && this.value/1000 < 0.8739675741817069) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#feb968", "#fead65", ((this.value/1000-(0.817222392168859))/0.05674518201284795)));
	}
	else if (this.value/1000 >= 0.8739675741817069 && this.value/1000 < 0.9485571530539411) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#fead65", "#fec76a", ((this.value/1000-(0.8739675741817069))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.9485571530539411) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#fec76a", "#fec76a", 0));
	}
	else {
		if (this.value/1000 >= 0.4051697766901193) {
			document.getElementById("Latvia").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.4051697766901193))/0.04501886407667993)));
		}
		else {
			document.getElementById("Latvia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4501886407667992 && this.value/1000 < 0.8070255939634954) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.4501886407667992))/0.35683695319669617)));
	}
	else if (this.value/1000 >= 0.8070255939634954 && this.value/1000 < 0.8815132048536759) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#f2e9e0", "#fed46a", ((this.value/1000-(0.8070255939634954))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.8815132048536759 && this.value/1000 < 0.9561027837259101) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#fed46a", "#fea864", ((this.value/1000-(0.8815132048536759))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.9561027837259101) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#fea864", "#fea864", 0));
	}
	else {
		if (this.value/1000 >= 0.4051697766901193) {
			document.getElementById("Estonia").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.4051697766901193))/0.04501886407667993)));
		}
		else {
			document.getElementById("Estonia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.5381870092790864) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0))/0.5381870092790864)));
	}
	else if (this.value/1000 >= 0.5381870092790864 && this.value/1000 < 0.6820128479657388) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#f2e9e0", "#fedd68", ((this.value/1000-(0.5381870092790864))/0.14382583868665244)));
	}
	else if (this.value/1000 >= 0.6820128479657388 && this.value/1000 < 0.7426837972876517) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fedd68", "#fede69", ((this.value/1000-(0.6820128479657388))/0.06067094932191286)));
	}
	else if (this.value/1000 >= 0.7426837972876517 && this.value/1000 < 0.780870806566738) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fede69", "#feb668", ((this.value/1000-(0.7426837972876517))/0.03818700927908636)));
	}
	else if (this.value/1000 >= 0.780870806566738 && this.value/1000 < 0.8290506780870807) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#feb668", "#f4784e", ((this.value/1000-(0.780870806566738))/0.04817987152034264)));
	}
	else if (this.value/1000 >= 0.8290506780870807 && this.value/1000 < 0.831192005710207) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#f4784e", "#fd8557", ((this.value/1000-(0.8290506780870807))/0.0021413276231263545)));
	}
	else if (this.value/1000 >= 0.831192005710207 && this.value/1000 < 0.8797287651677373) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fd8557", "#fe965f", ((this.value/1000-(0.831192005710207))/0.04853675945753033)));
	}
	else if (this.value/1000 >= 0.8797287651677373 && this.value/1000 < 0.8918629550321199) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fe965f", "#fed768", ((this.value/1000-(0.8797287651677373))/0.012134189864382527)));
	}
	else if (this.value/1000 >= 0.8918629550321199 && this.value/1000 < 0.9625267665952891) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fed768", "#fe8d5a", ((this.value/1000-(0.8918629550321199))/0.07066381156316925)));
	}
	else if (this.value/1000 >= 0.9625267665952891) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fe8d5a", "#fe8d5a", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Greece").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Greece").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.8112062812276946) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#f2e9e0", "#feeca7", ((this.value/1000-(0))/0.8112062812276946)));
	}
	else if (this.value/1000 >= 0.8112062812276946 && this.value/1000 < 0.8436830835117773) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#feeca7", "#feefb5", ((this.value/1000-(0.8112062812276946))/0.032476802284082784)));
	}
	else if (this.value/1000 >= 0.8436830835117773 && this.value/1000 < 0.9043540328336902) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#feefb5", "#fede6a", ((this.value/1000-(0.8436830835117773))/0.06067094932191286)));
	}
	else if (this.value/1000 >= 0.9043540328336902 && this.value/1000 < 0.9357601713062098) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#fede6a", "#feda67", ((this.value/1000-(0.9043540328336902))/0.03140613847251961)));
	}
	else if (this.value/1000 >= 0.9357601713062098 && this.value/1000 < 0.9978586723768736) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#feda67", "#fed769", ((this.value/1000-(0.9357601713062098))/0.062098501070663836)));
	}
	else if (this.value/1000 >= 0.9978586723768736) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#fed769", "#fed769", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Cyprus").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.03640256959314775) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#f2e9e0", "#fee06f", ((this.value/1000-(0))/0.03640256959314775)));
	}
	else if (this.value/1000 >= 0.03640256959314775 && this.value/1000 < 0.11099214846538187) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fee06f", "#fedf6c", ((this.value/1000-(0.03640256959314775))/0.07458957887223412)));
	}
	else if (this.value/1000 >= 0.11099214846538187 && this.value/1000 < 0.17880085653104924) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fedf6c", "#fed867", ((this.value/1000-(0.11099214846538187))/0.06780870806566737)));
	}
	else if (this.value/1000 >= 0.17880085653104924 && this.value/1000 < 0.5242683797287652) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fed867", "#fed36a", ((this.value/1000-(0.17880085653104924))/0.3454675231977159)));
	}
	else if (this.value/1000 >= 0.5242683797287652 && this.value/1000 < 0.5860099928622412) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fed36a", "#fea765", ((this.value/1000-(0.5242683797287652))/0.061741613133476037)));
	}
	else if (this.value/1000 >= 0.5860099928622412 && this.value/1000 < 0.6520342612419701) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fea765", "#fed26a", ((this.value/1000-(0.5860099928622412))/0.06602426837972886)));
	}
	else if (this.value/1000 >= 0.6520342612419701 && this.value/1000 < 0.7398286937901499) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fed26a", "#feb868", ((this.value/1000-(0.6520342612419701))/0.08779443254817987)));
	}
	else if (this.value/1000 >= 0.7398286937901499 && this.value/1000 < 0.8122769450392576) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#feb868", "#febe68", ((this.value/1000-(0.7398286937901499))/0.0724482512491077)));
	}
	else if (this.value/1000 >= 0.8122769450392576 && this.value/1000 < 0.8865096359743041) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#febe68", "#feaf66", ((this.value/1000-(0.8122769450392576))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.8865096359743041 && this.value/1000 < 0.8940042826552462) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#feaf66", "#fec36a", ((this.value/1000-(0.8865096359743041))/0.00749464668094213)));
	}
	else if (this.value/1000 >= 0.8940042826552462 && this.value/1000 < 0.943254817987152) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fec36a", "#fec76a", ((this.value/1000-(0.8940042826552462))/0.04925053533190582)));
	}
	else if (this.value/1000 >= 0.943254817987152) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fec76a", "#fec76a", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Turkey").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Turkey").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46395431834404 && this.value/1000 < 0.5403283369022127) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fede69", "#fedd67", ((this.value/1000-(0.46395431834404))/0.07637401855817272)));
	}
	else if (this.value/1000 >= 0.5403283369022127 && this.value/1000 < 0.6159885795860099) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fedd67", "#fea263", ((this.value/1000-(0.5403283369022127))/0.07566024268379723)));
	}
	else if (this.value/1000 >= 0.6159885795860099 && this.value/1000 < 0.6905781584582441) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fea263", "#febe69", ((this.value/1000-(0.6159885795860099))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.6905781584582441 && this.value/1000 < 0.7651677373304783) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#febe69", "#fedf6d", ((this.value/1000-(0.6905781584582441))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7651677373304783 && this.value/1000 < 0.8401142041399001) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fedf6d", "#feea9b", ((this.value/1000-(0.7651677373304783))/0.07494646680942185)));
	}
	else if (this.value/1000 >= 0.8401142041399001 && this.value/1000 < 0.9147037830121342) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#feea9b", "#feedae", ((this.value/1000-(0.8401142041399001))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.9147037830121342 && this.value/1000 < 0.9889364739471805) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#feedae", "#fe905b", ((this.value/1000-(0.9147037830121342))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.9889364739471805) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fe905b", "#fe905b", 0));
	}
	else {
		if (this.value/1000 >= 0.417558886509636) {
			document.getElementById("Romania").setAttribute("fill", interpolateColor("#c0c0c0", "#fede69", ((this.value/1000-(0.417558886509636))/0.04639543183440398)));
		}
		else {
			document.getElementById("Romania").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.5845824411134903) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#f2e9e0", "#feedae", ((this.value/1000-(0))/0.5845824411134903)));
	}
	else if (this.value/1000 >= 0.5845824411134903 && this.value/1000 < 0.6588151320485368) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#feedae", "#fee78c", ((this.value/1000-(0.5845824411134903))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.6588151320485368 && this.value/1000 < 0.7334047109207709) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fee78c", "#fedd68", ((this.value/1000-(0.6588151320485368))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.7334047109207709 && this.value/1000 < 0.8094218415417559) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fedd68", "#fea464", ((this.value/1000-(0.7334047109207709))/0.07601713062098503)));
	}
	else if (this.value/1000 >= 0.8094218415417559 && this.value/1000 < 0.8840114204139901) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fea464", "#fea964", ((this.value/1000-(0.8094218415417559))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.8840114204139901 && this.value/1000 < 0.9582441113490364) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fea964", "#feaa65", ((this.value/1000-(0.8840114204139901))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.9582441113490364) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#feaa65", "#feaa65", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Finland").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Finland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4210257978994596 && this.value/1000 < 0.4581421433669828) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#feb968", "#fed56a", ((this.value/1000-(0.4210257978994596))/0.03711634546752318)));
	}
	else if (this.value/1000 >= 0.4581421433669828 && this.value/1000 < 0.5013255837666972) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fed56a", "#fedb67", ((this.value/1000-(0.4581421433669828))/0.043183440399714446)));
	}
	else if (this.value/1000 >= 0.5013255837666972 && this.value/1000 < 0.5755582747017437) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fedb67", "#fed06a", ((this.value/1000-(0.5013255837666972))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.5755582747017437 && this.value/1000 < 0.6497909656367901) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fed06a", "#fee06d", ((this.value/1000-(0.5755582747017437))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.6497909656367901 && this.value/1000 < 0.7194350973794229) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fee06d", "#fec46a", ((this.value/1000-(0.6497909656367901))/0.06964413174263284)));
	}
	else if (this.value/1000 >= 0.7194350973794229 && this.value/1000 < 0.7936677883144693) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fec46a", "#fe9860", ((this.value/1000-(0.7194350973794229))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.7936677883144693 && this.value/1000 < 0.826144590598552) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fe9860", "#fe975f", ((this.value/1000-(0.7936677883144693))/0.032476802284082784)));
	}
	else if (this.value/1000 >= 0.826144590598552 && this.value/1000 < 0.9003772815335984) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fe975f", "#e16040", ((this.value/1000-(0.826144590598552))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.9003772815335984 && this.value/1000 < 0.9746099724686449) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#e16040", "#f1724c", ((this.value/1000-(0.9003772815335984))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.9746099724686449) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#f1724c", "#f1724c", 0));
	}
	else {
		if (this.value/1000 >= 0.3789232181095136) {
			document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#c0c0c0", "#feb968", ((this.value/1000-(0.3789232181095136))/0.04210257978994597)));
		}
		else {
			document.getElementById("Slovakia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.40292648108493934) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#f2e9e0", "#fed56a", ((this.value/1000-(0))/0.40292648108493934)));
	}
	else if (this.value/1000 >= 0.40292648108493934 && this.value/1000 < 0.49571734475374735) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed56a", "#fed06b", ((this.value/1000-(0.40292648108493934))/0.09279086366880801)));
	}
	else if (this.value/1000 >= 0.49571734475374735 && this.value/1000 < 0.588865096359743) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed06b", "#fec66a", ((this.value/1000-(0.49571734475374735))/0.0931477516059957)));
	}
	else if (this.value/1000 >= 0.588865096359743 && this.value/1000 < 0.6820128479657388) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fec66a", "#fecd6a", ((this.value/1000-(0.588865096359743))/0.09314775160599575)));
	}
	else if (this.value/1000 >= 0.6820128479657388 && this.value/1000 < 0.7748037116345468) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fecd6a", "#fec66a", ((this.value/1000-(0.6820128479657388))/0.09279086366880795)));
	}
	else if (this.value/1000 >= 0.7748037116345468 && this.value/1000 < 0.8561741613133476) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fec66a", "#fed868", ((this.value/1000-(0.7748037116345468))/0.0813704496788008)));
	}
	else if (this.value/1000 >= 0.8561741613133476 && this.value/1000 < 0.9489650249821556) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed868", "#fed36a", ((this.value/1000-(0.8561741613133476))/0.09279086366880807)));
	}
	else if (this.value/1000 >= 0.9489650249821556) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed36a", "#fed36a", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Luxembourg").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.10920770877944326) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#f2e9e0", "#fedc67", ((this.value/1000-(0))/0.10920770877944326)));
	}
	else if (this.value/1000 >= 0.10920770877944326 && this.value/1000 < 0.18379728765167738) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fedc67", "#fee680", ((this.value/1000-(0.10920770877944326))/0.07458957887223412)));
	}
	else if (this.value/1000 >= 0.18379728765167738 && this.value/1000 < 0.2583868665239115) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fee680", "#fedd67", ((this.value/1000-(0.18379728765167738))/0.07458957887223414)));
	}
	else if (this.value/1000 >= 0.2583868665239115 && this.value/1000 < 0.3326195574589579) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fedd67", "#fede6a", ((this.value/1000-(0.2583868665239115))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.3326195574589579 && this.value/1000 < 0.407209136331192) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fede6a", "#febe68", ((this.value/1000-(0.3326195574589579))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.407209136331192 && this.value/1000 < 0.4817987152034261) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#febe68", "#fed968", ((this.value/1000-(0.407209136331192))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.4817987152034261 && this.value/1000 < 0.5563882940756603) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fed968", "#feb367", ((this.value/1000-(0.4817987152034261))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.5563882940756603 && this.value/1000 < 0.6306209850107066) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feb367", "#feb667", ((this.value/1000-(0.5563882940756603))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.6306209850107066 && this.value/1000 < 0.7052105638829408) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feb667", "#fe9a60", ((this.value/1000-(0.6306209850107066))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7052105638829408 && this.value/1000 < 0.7798001427551748) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fe9a60", "#fe965e", ((this.value/1000-(0.7052105638829408))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.7798001427551748 && this.value/1000 < 0.8540328336902213) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fe965e", "#feaf66", ((this.value/1000-(0.7798001427551748))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.8540328336902213 && this.value/1000 < 0.9286733965534822) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feaf66", "#feb367", ((this.value/1000-(0.8540328336902213))/0.07464056286326093)));
	}
	else if (this.value/1000 >= 0.9286733965534822) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feb367", "#feb367", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Norway").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Norway").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.41138982359539106 && this.value/1000 < 0.781992454369328) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.41138982359539106))/0.3706026307739369)));
	}
	else if (this.value/1000 >= 0.781992454369328 && this.value/1000 < 0.8564800652595085) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#f2e9e0", "#fed769", ((this.value/1000-(0.781992454369328))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.8564800652595085 && this.value/1000 < 0.930712756194555) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#fed769", "#fec96b", ((this.value/1000-(0.8564800652595085))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.930712756194555) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#fec96b", "#fec96b", 0));
	}
	else {
		if (this.value/1000 >= 0.37025084123585195) {
			document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.37025084123585195))/0.04113898235953911)));
		}
		else {
			document.getElementById("Czech_Republic").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.5654634444784338) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#f2e9e0", "#fed669", ((this.value/1000-(0))/0.5654634444784338)));
	}
	else if (this.value/1000 >= 0.5654634444784338 && this.value/1000 < 0.6342918323646375) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#fed669", "#fec269", ((this.value/1000-(0.5654634444784338))/0.06882838788620371)));
	}
	else if (this.value/1000 >= 0.6342918323646375 && this.value/1000 < 0.694249005812175) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#fec269", "#febc69", ((this.value/1000-(0.6342918323646375))/0.05995717344753748)));
	}
	else if (this.value/1000 >= 0.694249005812175 && this.value/1000 < 0.7456408687672071) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#febc69", "#feb968", ((this.value/1000-(0.694249005812175))/0.051391862955032175)));
	}
	else if (this.value/1000 >= 0.7456408687672071 && this.value/1000 < 0.8171204241868053) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#feb968", "#fec269", ((this.value/1000-(0.7456408687672071))/0.07147955541959816)));
	}
	else if (this.value/1000 >= 0.8171204241868053 && this.value/1000 < 0.8870704598755991) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#fec269", "#fe9c61", ((this.value/1000-(0.8171204241868053))/0.06995003568879377)));
	}
	else if (this.value/1000 >= 0.8870704598755991 && this.value/1000 < 0.9608952788824309) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#fe9c61", "#f3764d", ((this.value/1000-(0.8870704598755991))/0.0738248190068318)));
	}
	else if (this.value/1000 >= 0.9608952788824309) {
		document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#f3764d", "#f3764d", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Danish_Kingdom").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Danish_Kingdom").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.15810135617416132 && this.value/1000 < 0.892678698888549) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.15810135617416132))/0.7345773427143877)));
	}
	else if (this.value/1000 >= 0.892678698888549 && this.value/1000 < 0.9671663097787295) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#f2e9e0", "#feea9b", ((this.value/1000-(0.892678698888549))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.9671663097787295 && this.value/1000 < 0.9914346895074947) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#feea9b", "#fec36a", ((this.value/1000-(0.9671663097787295))/0.024268379728765166)));
	}
	else if (this.value/1000 >= 0.9914346895074947) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#fec36a", "#fec36a", 0));
	}
	else {
		if (this.value/1000 >= 0.1422912205567452) {
			document.getElementById("Portugal").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.1422912205567452))/0.01581013561741612)));
		}
		else {
			document.getElementById("Portugal").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4315794840420108 && this.value/1000 < 0.5568471499949016) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.4315794840420108))/0.1252676659528908)));
	}
	else if (this.value/1000 >= 0.5568471499949016 && this.value/1000 < 0.6313347608850821) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#f2e9e0", "#fece6b", ((this.value/1000-(0.5568471499949016))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.6313347608850821 && this.value/1000 < 0.7059243397573162) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fece6b", "#fe8a59", ((this.value/1000-(0.6313347608850821))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.7059243397573162 && this.value/1000 < 0.7444682369735903) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fe8a59", "#fa8054", ((this.value/1000-(0.7059243397573162))/0.03854389721627416)));
	}
	else if (this.value/1000 >= 0.7444682369735903 && this.value/1000 < 0.818344039971449) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fa8054", "#fb8355", ((this.value/1000-(0.7444682369735903))/0.07387580299785867)));
	}
	else if (this.value/1000 >= 0.818344039971449 && this.value/1000 < 0.8936473947180585) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fb8355", "#843c2e", ((this.value/1000-(0.818344039971449))/0.07530335474660954)));
	}
	else if (this.value/1000 >= 0.8936473947180585 && this.value/1000 < 0.9675231977159172) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#843c2e", "#843c2e", ((this.value/1000-(0.8936473947180585))/0.07387580299785867)));
	}
	else if (this.value/1000 >= 0.9675231977159172) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#843c2e", "#843c2e", 0));
	}
	else {
		if (this.value/1000 >= 0.38842153563780973) {
			document.getElementById("Poland").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.38842153563780973))/0.04315794840420106)));
		}
		else {
			document.getElementById("Poland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.17931069644131742 && this.value/1000 < 0.8965024982155603) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#f2e9e0", "#f5ebdb", ((this.value/1000-(0.17931069644131742))/0.7171918017742429)));
	}
	else if (this.value/1000 >= 0.8965024982155603 && this.value/1000 < 0.9061384725196289) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.8965024982155603))/0.009635974304068595)));
	}
	else if (this.value/1000 >= 0.9061384725196289 && this.value/1000 < 0.9589578872234118) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#f5ebdb", "#feca6a", ((this.value/1000-(0.9061384725196289))/0.05281941470378293)));
	}
	else if (this.value/1000 >= 0.9589578872234118 && this.value/1000 < 0.9689507494646681) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#feca6a", "#feb467", ((this.value/1000-(0.9589578872234118))/0.009992862241256284)));
	}
	else if (this.value/1000 >= 0.9689507494646681) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#feb467", "#feb467", 0));
	}
	else {
		if (this.value/1000 >= 0.16137962679718568) {
			document.getElementById("Spain").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.16137962679718568))/0.017931069644131742)));
		}
		else {
			document.getElementById("Spain").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.4550321199143469) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#f2e9e0", "#fed26a", ((this.value/1000-(0))/0.4550321199143469)));
	}
	else if (this.value/1000 >= 0.4550321199143469 && this.value/1000 < 0.4917915774446824) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fed26a", "#fed26a", ((this.value/1000-(0.4550321199143469))/0.03675945753033549)));
	}
	else if (this.value/1000 >= 0.4917915774446824 && this.value/1000 < 0.5303354746609564) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fed26a", "#fec96a", ((this.value/1000-(0.4917915774446824))/0.03854389721627405)));
	}
	else if (this.value/1000 >= 0.5303354746609564 && this.value/1000 < 0.6245538900785154) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fec96a", "#fede69", ((this.value/1000-(0.5303354746609564))/0.09421841541755893)));
	}
	else if (this.value/1000 >= 0.6245538900785154 && this.value/1000 < 0.7159172019985724) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fede69", "#fedc68", ((this.value/1000-(0.6245538900785154))/0.09136331192005709)));
	}
	else if (this.value/1000 >= 0.7159172019985724 && this.value/1000 < 0.7533904354032833) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fedc68", "#fed36a", ((this.value/1000-(0.7159172019985724))/0.03747323340471087)));
	}
	else if (this.value/1000 >= 0.7533904354032833 && this.value/1000 < 0.844039971448965) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fed36a", "#fe955f", ((this.value/1000-(0.7533904354032833))/0.09064953604568171)));
	}
	else if (this.value/1000 >= 0.844039971448965 && this.value/1000 < 0.9375446109921485) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fe955f", "#d9573a", ((this.value/1000-(0.844039971448965))/0.09350463954318344)));
	}
	else if (this.value/1000 >= 0.9375446109921485) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#d9573a", "#d9573a", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Italy").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Italy").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4172019985724483 && this.value/1000 < 0.4939329050678087) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#fed06b", "#fed768", ((this.value/1000-(0.4172019985724483))/0.07673090649536041)));
	}
	else if (this.value/1000 >= 0.4939329050678087 && this.value/1000 < 0.5685224839400428) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#fed768", "#fd8758", ((this.value/1000-(0.4939329050678087))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.5685224839400428 && this.value/1000 < 0.6413276231263383) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#fd8758", "#f2734c", ((this.value/1000-(0.5685224839400428))/0.0728051391862955)));
	}
	else if (this.value/1000 >= 0.6413276231263383 && this.value/1000 < 0.7159172019985724) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#f2734c", "#c74d34", ((this.value/1000-(0.6413276231263383))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7159172019985724 && this.value/1000 < 0.7905067808708066) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#c74d34", "#221b1e", ((this.value/1000-(0.7159172019985724))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7905067808708066 && this.value/1000 < 0.864739471805853) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#221b1e", "#261c1f", ((this.value/1000-(0.7905067808708066))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.864739471805853 && this.value/1000 < 0.939329050678087) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#261c1f", "#211a1e", ((this.value/1000-(0.864739471805853))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.939329050678087) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#211a1e", "#211a1e", 0));
	}
	else {
		if (this.value/1000 >= 0.37548179871520343) {
			document.getElementById("Hungary").setAttribute("fill", interpolateColor("#c0c0c0", "#fed06b", ((this.value/1000-(0.37548179871520343))/0.041720199857244844)));
		}
		else {
			document.getElementById("Hungary").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.0) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f2e9e0", "#fef2cd", ((this.value/1000-(0))/0.0)));
	}
	else if (this.value/1000 >= 0.0 && this.value/1000 < 0.07458957887223412) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#fef2cd", "#ec6b48", ((this.value/1000-(0.0))/0.07458957887223412)));
	}
	else if (this.value/1000 >= 0.07458957887223412 && this.value/1000 < 0.14882226980728053) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ec6b48", "#f0724c", ((this.value/1000-(0.07458957887223412))/0.0742326909350464)));
	}
	else if (this.value/1000 >= 0.14882226980728053 && this.value/1000 < 0.22305496074232692) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f0724c", "#f4774f", ((this.value/1000-(0.14882226980728053))/0.07423269093504639)));
	}
	else if (this.value/1000 >= 0.22305496074232692 && this.value/1000 < 0.29764453961456105) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f4774f", "#ed6d48", ((this.value/1000-(0.22305496074232692))/0.07458957887223414)));
	}
	else if (this.value/1000 >= 0.29764453961456105 && this.value/1000 < 0.3718772305496074) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ed6d48", "#ef6f49", ((this.value/1000-(0.29764453961456105))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.3718772305496074 && this.value/1000 < 0.4464668094218415) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ef6f49", "#e96946", ((this.value/1000-(0.3718772305496074))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.4464668094218415 && this.value/1000 < 0.5210563882940756) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e96946", "#e66544", ((this.value/1000-(0.4464668094218415))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.5210563882940756 && this.value/1000 < 0.5956459671663098) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e66544", "#e15f41", ((this.value/1000-(0.5210563882940756))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.5956459671663098 && this.value/1000 < 0.6698786581013562) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e15f41", "#e46142", ((this.value/1000-(0.5956459671663098))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.6698786581013562 && this.value/1000 < 0.7444682369735903) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e46142", "#e76745", ((this.value/1000-(0.6698786581013562))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7444682369735903 && this.value/1000 < 0.8190578158458244) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e76745", "#ef704b", ((this.value/1000-(0.7444682369735903))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.8190578158458244 && this.value/1000 < 0.8932905067808709) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ef704b", "#ef704a", ((this.value/1000-(0.8190578158458244))/0.07423269093504647)));
	}
	else if (this.value/1000 >= 0.8932905067808709 && this.value/1000 < 0.9678800856531049) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ef704a", "#f2754e", ((this.value/1000-(0.8932905067808709))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.9678800856531049) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f2754e", "#f2754e", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Switzerland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.09957173447537473) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#f2e9e0", "#fef0d3", ((this.value/1000-(0))/0.09957173447537473)));
	}
	else if (this.value/1000 >= 0.09957173447537473 && this.value/1000 < 0.19307637401855818) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fef0d3", "#f9edd8", ((this.value/1000-(0.09957173447537473))/0.09350463954318344)));
	}
	else if (this.value/1000 >= 0.19307637401855818 && this.value/1000 < 0.25374732334047106) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#f9edd8", "#fef0d3", ((this.value/1000-(0.19307637401855818))/0.06067094932191289)));
	}
	else if (this.value/1000 >= 0.25374732334047106 && this.value/1000 < 0.3422555317630264) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fef0d3", "#fece6a", ((this.value/1000-(0.25374732334047106))/0.08850820842255536)));
	}
	else if (this.value/1000 >= 0.3422555317630264 && this.value/1000 < 0.3816151728357296) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fece6a", "#feb767", ((this.value/1000-(0.3422555317630264))/0.03935964107270318)));
	}
	else if (this.value/1000 >= 0.3816151728357296 && this.value/1000 < 0.5117773019271948) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#feb767", "#feb567", ((this.value/1000-(0.3816151728357296))/0.13016212909146524)));
	}
	else if (this.value/1000 >= 0.5117773019271948 && this.value/1000 < 0.6420413990007138) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#feb567", "#fea864", ((this.value/1000-(0.5117773019271948))/0.13026409707351894)));
	}
	else if (this.value/1000 >= 0.6420413990007138 && this.value/1000 < 0.7351891506067095) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fea864", "#feca6b", ((this.value/1000-(0.6420413990007138))/0.09314775160599575)));
	}
	else if (this.value/1000 >= 0.7351891506067095 && this.value/1000 < 0.8283369022127052) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#feca6b", "#fea865", ((this.value/1000-(0.7351891506067095))/0.09314775160599564)));
	}
	else if (this.value/1000 >= 0.8283369022127052 && this.value/1000 < 0.9221984296930764) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fea865", "#f77b51", ((this.value/1000-(0.8283369022127052))/0.09386152748037124)));
	}
	else if (this.value/1000 >= 0.9221984296930764) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#f77b51", "#f77b51", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("France").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("France").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= -0.3390435403283369 && this.value/1000 < -0.2633832976445396) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fede68", "#fede68", ((this.value/1000-(-0.3390435403283369))/0.07566024268379729)));
	}
	else if (this.value/1000 >= -0.2633832976445396 && this.value/1000 < -0.18843683083511778) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fede68", "#fee06d", ((this.value/1000-(-0.2633832976445396))/0.07494646680942182)));
	}
	else if (this.value/1000 >= -0.18843683083511778 && this.value/1000 < -0.039257673090649536) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fee06d", "#fde57f", ((this.value/1000-(-0.18843683083511778))/0.14917915774446824)));
	}
	else if (this.value/1000 >= -0.039257673090649536 && this.value/1000 < 0.03568879371877231) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fde57f", "#fedd68", ((this.value/1000-(-0.039257673090649536))/0.07494646680942185)));
	}
	else if (this.value/1000 >= 0.03568879371877231 && this.value/1000 < 0.09421841541755889) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fedd68", "#fef2cd", ((this.value/1000-(0.03568879371877231))/0.05852962169878658)));
	}
	else if (this.value/1000 >= 0.09421841541755889 && this.value/1000 < 0.16630977872947894) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fef2cd", "#fcefd6", ((this.value/1000-(0.09421841541755889))/0.07209136331192005)));
	}
	else if (this.value/1000 >= 0.16630977872947894 && this.value/1000 < 0.24089935760171305) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fcefd6", "#f5ebdb", ((this.value/1000-(0.16630977872947894))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.24089935760171305 && this.value/1000 < 0.28586723768736616) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.24089935760171305))/0.04496788008565311)));
	}
	else if (this.value/1000 >= 0.28586723768736616 && this.value/1000 < 0.35831548893647397) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#f5ebdb", "#fef2cd", ((this.value/1000-(0.28586723768736616))/0.07244825124910781)));
	}
	else if (this.value/1000 >= 0.35831548893647397 && this.value/1000 < 0.4300499643112063) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fef2cd", "#fcefd6", ((this.value/1000-(0.35831548893647397))/0.07173447537473232)));
	}
	else if (this.value/1000 >= 0.4300499643112063 && this.value/1000 < 0.5756602426837973) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fcefd6", "#f9edd8", ((this.value/1000-(0.4300499643112063))/0.14561027837259105)));
	}
	else if (this.value/1000 >= 0.5756602426837973 && this.value/1000 < 0.6498929336188437) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#f9edd8", "#fcefd6", ((this.value/1000-(0.5756602426837973))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.6498929336188437 && this.value/1000 < 0.7055674518201285) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fcefd6", "#fee684", ((this.value/1000-(0.6498929336188437))/0.05567451820128477)));
	}
	else if (this.value/1000 >= 0.7055674518201285 && this.value/1000 < 0.7805139186295503) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fee684", "#fee684", ((this.value/1000-(0.7055674518201285))/0.07494646680942185)));
	}
	else if (this.value/1000 >= 0.7805139186295503 && this.value/1000 < 0.8547466095645967) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fee684", "#fe985f", ((this.value/1000-(0.7805139186295503))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.8547466095645967 && this.value/1000 < 0.9272458448047313) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fe985f", "#fe9a60", ((this.value/1000-(0.8547466095645967))/0.07249923524013457)));
	}
	else if (this.value/1000 >= 0.9272458448047313) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fe9a60", "#fe9a60", 0));
	}
	else {
		if (this.value/1000 >= -0.3051391862955032) {
			document.getElementById("Germany").setAttribute("fill", interpolateColor("#c0c0c0", "#fede68", ((this.value/1000-(-0.3051391862955032))/-0.033904354032833706)));
		}
		else {
			document.getElementById("Germany").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= -0.3390435403283369 && this.value/1000 < -0.2633832976445396) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fede68", "#fede68", ((this.value/1000-(-0.3390435403283369))/0.07566024268379729)));
	}
	else if (this.value/1000 >= -0.2633832976445396 && this.value/1000 < -0.18843683083511778) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fede68", "#fee06d", ((this.value/1000-(-0.2633832976445396))/0.07494646680942182)));
	}
	else if (this.value/1000 >= -0.18843683083511778 && this.value/1000 < -0.039257673090649536) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fee06d", "#fde57f", ((this.value/1000-(-0.18843683083511778))/0.14917915774446824)));
	}
	else if (this.value/1000 >= -0.039257673090649536 && this.value/1000 < 0.03568879371877231) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fde57f", "#fedd68", ((this.value/1000-(-0.039257673090649536))/0.07494646680942185)));
	}
	else if (this.value/1000 >= 0.03568879371877231 && this.value/1000 < 0.09421841541755889) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fedd68", "#fef2cd", ((this.value/1000-(0.03568879371877231))/0.05852962169878658)));
	}
	else if (this.value/1000 >= 0.09421841541755889 && this.value/1000 < 0.16630977872947894) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fef2cd", "#fcefd6", ((this.value/1000-(0.09421841541755889))/0.07209136331192005)));
	}
	else if (this.value/1000 >= 0.16630977872947894 && this.value/1000 < 0.24089935760171305) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fcefd6", "#f5ebdb", ((this.value/1000-(0.16630977872947894))/0.07458957887223411)));
	}
	else if (this.value/1000 >= 0.24089935760171305 && this.value/1000 < 0.28586723768736616) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.24089935760171305))/0.04496788008565311)));
	}
	else if (this.value/1000 >= 0.28586723768736616 && this.value/1000 < 0.35831548893647397) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#f5ebdb", "#fef2cd", ((this.value/1000-(0.28586723768736616))/0.07244825124910781)));
	}
	else if (this.value/1000 >= 0.35831548893647397) {
		document.getElementById("BRD").setAttribute("fill", interpolateColor("#fef2cd", "#fef2cd", 0));
	}
	else {
		if (this.value/1000 >= -0.3051391862955032) {
			document.getElementById("BRD").setAttribute("fill", interpolateColor("#c0c0c0", "#fede68", ((this.value/1000-(-0.3051391862955032))/-0.033904354032833706)));
		}
		else {
			document.getElementById("BRD").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0) {
		document.getElementById("DDR").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("DDR").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("DDR").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.34562047517079636) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0))/0.34562047517079636)));
	}
	else if (this.value/1000 >= 0.34562047517079636 && this.value/1000 < 0.40700520036708476) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#f2e9e0", "#feefb5", ((this.value/1000-(0.34562047517079636))/0.0613847251962884)));
	}
	else if (this.value/1000 >= 0.40700520036708476 && this.value/1000 < 0.49367798511267463) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feefb5", "#fee277", ((this.value/1000-(0.40700520036708476))/0.08667278474558987)));
	}
	else if (this.value/1000 >= 0.49367798511267463 && this.value/1000 < 0.5683185479759355) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#fee277", "#fef0d3", ((this.value/1000-(0.49367798511267463))/0.07464056286326087)));
	}
	else if (this.value/1000 >= 0.5683185479759355 && this.value/1000 < 0.6432650147853574) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#fef0d3", "#feac65", ((this.value/1000-(0.5683185479759355))/0.07494646680942185)));
	}
	else if (this.value/1000 >= 0.6432650147853574 && this.value/1000 < 0.6561129805241154) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feac65", "#feda67", ((this.value/1000-(0.6432650147853574))/0.012847965738758016)));
	}
	else if (this.value/1000 >= 0.6561129805241154 && this.value/1000 < 0.72749056796166) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feda67", "#feba68", ((this.value/1000-(0.6561129805241154))/0.07137758743754463)));
	}
	else if (this.value/1000 >= 0.72749056796166 && this.value/1000 < 0.7935148363413888) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feba68", "#feb267", ((this.value/1000-(0.72749056796166))/0.06602426837972875)));
	}
	else if (this.value/1000 >= 0.7935148363413888 && this.value/1000 < 0.8356276129295401) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feb267", "#fecc6a", ((this.value/1000-(0.7935148363413888))/0.04211277658815138)));
	}
	else if (this.value/1000 >= 0.8356276129295401 && this.value/1000 < 0.9194962781686551) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#fecc6a", "#ef704b", ((this.value/1000-(0.8356276129295401))/0.08386866523911496)));
	}
	else if (this.value/1000 >= 0.9194962781686551 && this.value/1000 < 0.9940858570408891) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#ef704b", "#e66543", ((this.value/1000-(0.9194962781686551))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.9940858570408891) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#e66543", "#e66543", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("The_Netherlands").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.26124197002141325) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f2e9e0", "#feeca7", ((this.value/1000-(0))/0.26124197002141325)));
	}
	else if (this.value/1000 >= 0.26124197002141325 && this.value/1000 < 0.3344039971448965) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#feeca7", "#fede69", ((this.value/1000-(0.26124197002141325))/0.07316202712348324)));
	}
	else if (this.value/1000 >= 0.3344039971448965 && this.value/1000 < 0.3747323340471092) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fede69", "#fedc66", ((this.value/1000-(0.3344039971448965))/0.040328336902212714)));
	}
	else if (this.value/1000 >= 0.3747323340471092 && this.value/1000 < 0.44825124910778014) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fedc66", "#fe915d", ((this.value/1000-(0.3747323340471092))/0.07351891506067093)));
	}
	else if (this.value/1000 >= 0.44825124910778014 && this.value/1000 < 0.5132048536759457) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fe915d", "#f57950", ((this.value/1000-(0.44825124910778014))/0.06495360456816557)));
	}
	else if (this.value/1000 >= 0.5132048536759457 && this.value/1000 < 0.588865096359743) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f57950", "#f67a50", ((this.value/1000-(0.5132048536759457))/0.07566024268379734)));
	}
	else if (this.value/1000 >= 0.588865096359743 && this.value/1000 < 0.6620271234832262) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f67a50", "#f0714b", ((this.value/1000-(0.588865096359743))/0.07316202712348319)));
	}
	else if (this.value/1000 >= 0.6620271234832262 && this.value/1000 < 0.7376873661670236) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f0714b", "#fec269", ((this.value/1000-(0.6620271234832262))/0.07566024268379734)));
	}
	else if (this.value/1000 >= 0.7376873661670236 && this.value/1000 < 0.793718772305496) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fec269", "#fed46a", ((this.value/1000-(0.7376873661670236))/0.05603140613847246)));
	}
	else if (this.value/1000 >= 0.793718772305496 && this.value/1000 < 0.867237687366167) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fed46a", "#fede6a", ((this.value/1000-(0.793718772305496))/0.07351891506067099)));
	}
	else if (this.value/1000 >= 0.867237687366167 && this.value/1000 < 0.9603854389721628) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fede6a", "#fec269", ((this.value/1000-(0.867237687366167))/0.09314775160599575)));
	}
	else if (this.value/1000 >= 0.9603854389721628) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fec269", "#fec269", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Belgium").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Belgium").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.4446823697359029) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0))/0.4446823697359029)));
	}
	else if (this.value/1000 >= 0.4446823697359029 && this.value/1000 < 0.5007137758743755) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#f2e9e0", "#f9edd8", ((this.value/1000-(0.4446823697359029))/0.05603140613847257)));
	}
	else if (this.value/1000 >= 0.5007137758743755 && this.value/1000 < 0.5753033547466095) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#f9edd8", "#fcefd6", ((this.value/1000-(0.5007137758743755))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.5753033547466095 && this.value/1000 < 0.6495360456816559) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#fcefd6", "#fee996", ((this.value/1000-(0.5753033547466095))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.6495360456816559 && this.value/1000 < 0.7241256245538901) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#fee996", "#fee071", ((this.value/1000-(0.6495360456816559))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7241256245538901 && this.value/1000 < 0.7987152034261242) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#fee071", "#feda67", ((this.value/1000-(0.7241256245538901))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.7987152034261242 && this.value/1000 < 0.8729478943611706) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#feda67", "#febe69", ((this.value/1000-(0.7987152034261242))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.8729478943611706 && this.value/1000 < 0.947180585296217) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#febe69", "#feaa65", ((this.value/1000-(0.8729478943611706))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.947180585296217) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#feaa65", "#feaa65", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Sweden").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Sweden").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.45523605587845417) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0))/0.45523605587845417)));
	}
	else if (this.value/1000 >= 0.45523605587845417 && this.value/1000 < 0.5494544712960131) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#f2e9e0", "#fee893", ((this.value/1000-(0.45523605587845417))/0.09421841541755893)));
	}
	else if (this.value/1000 >= 0.5494544712960131 && this.value/1000 < 0.6258284898541858) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#fee893", "#fedb67", ((this.value/1000-(0.5494544712960131))/0.07637401855817272)));
	}
	else if (this.value/1000 >= 0.6258284898541858 && this.value/1000 < 0.6986336290404813) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#fedb67", "#feca6a", ((this.value/1000-(0.6258284898541858))/0.0728051391862955)));
	}
	else if (this.value/1000 >= 0.6986336290404813 && this.value/1000 < 0.791781380646477) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#feca6a", "#fea263", ((this.value/1000-(0.6986336290404813))/0.09314775160599564)));
	}
	else if (this.value/1000 >= 0.791781380646477 && this.value/1000 < 0.8849291322524727) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#fea263", "#fe9a60", ((this.value/1000-(0.791781380646477))/0.09314775160599575)));
	}
	else if (this.value/1000 >= 0.8849291322524727 && this.value/1000 < 0.9238299174059346) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#fe9a60", "#fedc67", ((this.value/1000-(0.8849291322524727))/0.03890078515346185)));
	}
	else if (this.value/1000 >= 0.9238299174059346 && this.value/1000 < 0.9705822371775262) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#fedc67", "#fef2bf", ((this.value/1000-(0.9238299174059346))/0.046752319771591666)));
	}
	else if (this.value/1000 >= 0.9705822371775262) {
		document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#fef2bf", "#fef2bf", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("United_Kingdom").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("United_Kingdom").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0) {
		document.getElementById("Ireland").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Ireland").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Ireland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0) {
		document.getElementById("Iceland").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Iceland").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Iceland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.49036402569593146 && this.value/1000 < 0.6210869786886917) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0.49036402569593146))/0.1307229529927602)));
	}
	else if (this.value/1000 >= 0.6210869786886917 && this.value/1000 < 0.6955745895788722) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#f2e9e0", "#fedc67", ((this.value/1000-(0.6210869786886917))/0.07448761089018052)));
	}
	else if (this.value/1000 >= 0.6955745895788722 && this.value/1000 < 0.8768736616702355) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fedc67", "#fe9f62", ((this.value/1000-(0.6955745895788722))/0.1812990720913633)));
	}
	else if (this.value/1000 >= 0.8768736616702355 && this.value/1000 < 0.9557458957887224) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fe9f62", "#fa8054", ((this.value/1000-(0.8768736616702355))/0.07887223411848687)));
	}
	else if (this.value/1000 >= 0.9557458957887224 && this.value/1000 < 1.0) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fa8054", "#fe8a59", ((this.value/1000-(0.9557458957887224))/0.04425410421127762)));
	}
	else if (this.value/1000 >= 1.0) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fe8a59", "#fe8a59", 0));
	}
	else {
		if (this.value/1000 >= 0.44132762312633833) {
			document.getElementById("Moldova").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.44132762312633833))/0.04903640256959313)));
		}
		else {
			document.getElementById("Moldova").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0) {
		document.getElementById("Malta").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Malta").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Malta").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0 && this.value/1000 < 0.04354032833690221) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", ((this.value/1000-(0))/0.04354032833690221)));
	}
	else if (this.value/1000 >= 0.04354032833690221 && this.value/1000 < 0.2337615988579586) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#f2e9e0", "#fedf6d", ((this.value/1000-(0.04354032833690221))/0.1902212705210564)));
	}
	else if (this.value/1000 >= 0.2337615988579586 && this.value/1000 < 0.35510349750178444) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fedf6d", "#fece6a", ((this.value/1000-(0.2337615988579586))/0.12134189864382583)));
	}
	else if (this.value/1000 >= 0.35510349750178444 && this.value/1000 < 0.4271948608137045) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fece6a", "#fead65", ((this.value/1000-(0.35510349750178444))/0.07209136331192006)));
	}
	else if (this.value/1000 >= 0.4271948608137045 && this.value/1000 < 0.5017844396859387) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fead65", "#fe985f", ((this.value/1000-(0.4271948608137045))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.5017844396859387 && this.value/1000 < 0.5239114917915775) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe985f", "#fe9960", ((this.value/1000-(0.5017844396859387))/0.02212705210563881)));
	}
	else if (this.value/1000 >= 0.5239114917915775 && this.value/1000 < 0.5945753033547466) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe9960", "#fe8b59", ((this.value/1000-(0.5239114917915775))/0.07066381156316914)));
	}
	else if (this.value/1000 >= 0.5945753033547466 && this.value/1000 < 0.6531049250535332) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe8b59", "#fecd6a", ((this.value/1000-(0.5945753033547466))/0.058529621698786616)));
	}
	else if (this.value/1000 >= 0.6531049250535332 && this.value/1000 < 0.7248394004282656) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fecd6a", "#fec86a", ((this.value/1000-(0.6531049250535332))/0.07173447537473232)));
	}
	else if (this.value/1000 >= 0.7248394004282656 && this.value/1000 < 0.7619557458957887) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fec86a", "#feaa65", ((this.value/1000-(0.7248394004282656))/0.03711634546752318)));
	}
	else if (this.value/1000 >= 0.7619557458957887 && this.value/1000 < 0.8551034975017845) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#feaa65", "#fe9f62", ((this.value/1000-(0.7619557458957887))/0.09314775160599575)));
	}
	else if (this.value/1000 >= 0.8551034975017845 && this.value/1000 < 0.930406852248394) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe9f62", "#fe8d5b", ((this.value/1000-(0.8551034975017845))/0.07530335474660954)));
	}
	else if (this.value/1000 >= 0.930406852248394 && this.value/1000 < 0.9668094218415417) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe8d5b", "#feaf66", ((this.value/1000-(0.930406852248394))/0.03640256959314769)));
	}
	else if (this.value/1000 >= 0.9668094218415417) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#feaf66", "#feaf66", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Austria").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Austria").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0) {
		document.getElementById("Belarus").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("Belarus").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Belarus").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.45431834403997146) {
		document.getElementById("Albania").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.40888650963597434) {
			document.getElementById("Albania").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.40888650963597434))/0.04543183440399712)));
		}
		else {
			document.getElementById("Albania").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46823697359029265 && this.value/1000 < 0.5612827572142347) {
		document.getElementById("Yugoslavia1").setAttribute("fill", interpolateColor("#fe975f", "#feb968", ((this.value/1000-(0.46823697359029265))/0.09304578362394206)));
		document.getElementById("Yugoslavia2").setAttribute("fill", interpolateColor("#fe975f", "#feb968", ((this.value/1000-(0.46823697359029265))/0.09304578362394206)));
		document.getElementById("Yugoslavia3").setAttribute("fill", interpolateColor("#fe975f", "#feb968", ((this.value/1000-(0.46823697359029265))/0.09304578362394206)));
		document.getElementById("Yugoslavia4").setAttribute("fill", interpolateColor("#fe975f", "#feb968", ((this.value/1000-(0.46823697359029265))/0.09304578362394206)));
	}
	else if (this.value/1000 >= 0.5612827572142347 && this.value/1000 < 0.617365147343734) {
		document.getElementById("Yugoslavia1").setAttribute("fill", interpolateColor("#feb968", "#fe8858", ((this.value/1000-(0.5612827572142347))/0.05608239012949934)));
		document.getElementById("Yugoslavia2").setAttribute("fill", interpolateColor("#feb968", "#fe8858", ((this.value/1000-(0.5612827572142347))/0.05608239012949934)));
		document.getElementById("Yugoslavia3").setAttribute("fill", interpolateColor("#feb968", "#fe8858", ((this.value/1000-(0.5612827572142347))/0.05608239012949934)));
		document.getElementById("Yugoslavia4").setAttribute("fill", interpolateColor("#feb968", "#fe8858", ((this.value/1000-(0.5612827572142347))/0.05608239012949934)));
	}
	else if (this.value/1000 >= 0.617365147343734 && this.value/1000 < 0.6734475374732334) {
		document.getElementById("Yugoslavia1").setAttribute("fill", interpolateColor("#fe8858", "#fed26a", ((this.value/1000-(0.617365147343734))/0.05608239012949934)));
		document.getElementById("Yugoslavia2").setAttribute("fill", interpolateColor("#fe8858", "#fed26a", ((this.value/1000-(0.617365147343734))/0.05608239012949934)));
		document.getElementById("Yugoslavia3").setAttribute("fill", interpolateColor("#fe8858", "#fed26a", ((this.value/1000-(0.617365147343734))/0.05608239012949934)));
		document.getElementById("Yugoslavia4").setAttribute("fill", interpolateColor("#fe8858", "#fed26a", ((this.value/1000-(0.617365147343734))/0.05608239012949934)));
	}
	else if (this.value/1000 >= 0.6734475374732334 && this.value/1000 < 0.7305496074232691) {
		document.getElementById("Yugoslavia1").setAttribute("fill", interpolateColor("#fed26a", "#fe8958", ((this.value/1000-(0.6734475374732334))/0.05710206995003575)));
		document.getElementById("Yugoslavia2").setAttribute("fill", interpolateColor("#fed26a", "#fe8958", ((this.value/1000-(0.6734475374732334))/0.05710206995003575)));
		document.getElementById("Yugoslavia3").setAttribute("fill", interpolateColor("#fed26a", "#fe8958", ((this.value/1000-(0.6734475374732334))/0.05710206995003575)));
		document.getElementById("Yugoslavia4").setAttribute("fill", interpolateColor("#fed26a", "#fe8958", ((this.value/1000-(0.6734475374732334))/0.05710206995003575)));
	}
	else if (this.value/1000 >= 0.7305496074232691) {
		document.getElementById("Yugoslavia1").setAttribute("fill", interpolateColor("#fe8958", "#fe8958", 0));
		document.getElementById("Yugoslavia2").setAttribute("fill", interpolateColor("#fe8958", "#fe8958", 0));
		document.getElementById("Yugoslavia3").setAttribute("fill", interpolateColor("#fe8958", "#fe8958", 0));
		document.getElementById("Yugoslavia4").setAttribute("fill", interpolateColor("#fe8958", "#fe8958", 0));
	}
	else {
		if (this.value/1000 >= 0.4214132762312634) {
			document.getElementById("Yugoslavia1").setAttribute("fill", interpolateColor("#c0c0c0", "#fe975f", ((this.value/1000-(0.4214132762312634))/0.04682369735902925)));
			document.getElementById("Yugoslavia2").setAttribute("fill", interpolateColor("#c0c0c0", "#fe975f", ((this.value/1000-(0.4214132762312634))/0.04682369735902925)));
			document.getElementById("Yugoslavia3").setAttribute("fill", interpolateColor("#c0c0c0", "#fe975f", ((this.value/1000-(0.4214132762312634))/0.04682369735902925)));
			document.getElementById("Yugoslavia4").setAttribute("fill", interpolateColor("#c0c0c0", "#fe975f", ((this.value/1000-(0.4214132762312634))/0.04682369735902925)));
		}
		else {
			document.getElementById("Yugoslavia1").setAttribute("fill", "#c0c0c0");
			document.getElementById("Yugoslavia2").setAttribute("fill", "#c0c0c0");
			document.getElementById("Yugoslavia3").setAttribute("fill", "#c0c0c0");
			document.getElementById("Yugoslavia4").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46823697359029265 && this.value/1000 < 0.5612827572142347) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fe975f", "#feb968", ((this.value/1000-(0.46823697359029265))/0.09304578362394206)));
	}
	else if (this.value/1000 >= 0.5612827572142347 && this.value/1000 < 0.617365147343734) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#feb968", "#fe8858", ((this.value/1000-(0.5612827572142347))/0.05608239012949934)));
	}
	else if (this.value/1000 >= 0.617365147343734 && this.value/1000 < 0.6734475374732334) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fe8858", "#fed26a", ((this.value/1000-(0.617365147343734))/0.05608239012949934)));
	}
	else if (this.value/1000 >= 0.6734475374732334 && this.value/1000 < 0.7305496074232691) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fed26a", "#fe8958", ((this.value/1000-(0.6734475374732334))/0.05710206995003575)));
	}
	else if (this.value/1000 >= 0.7305496074232691 && this.value/1000 < 0.7548179871520343) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fe8958", "#fd8556", ((this.value/1000-(0.7305496074232691))/0.024268379728765166)));
	}
	else if (this.value/1000 >= 0.7548179871520343 && this.value/1000 < 0.8290506780870807) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fd8556", "#fedc68", ((this.value/1000-(0.7548179871520343))/0.07423269093504636)));
	}
	else if (this.value/1000 >= 0.8290506780870807 && this.value/1000 < 0.8636688079942898) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fedc68", "#fde57f", ((this.value/1000-(0.8290506780870807))/0.03461812990720914)));
	}
	else if (this.value/1000 >= 0.8636688079942898 && this.value/1000 < 0.9029264810849393) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fde57f", "#fed46a", ((this.value/1000-(0.8636688079942898))/0.039257673090649536)));
	}
	else if (this.value/1000 >= 0.9029264810849393 && this.value/1000 < 0.9803711634546752) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fed46a", "#fee47d", ((this.value/1000-(0.9029264810849393))/0.0774446823697359)));
	}
	else if (this.value/1000 >= 0.9803711634546752) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fee47d", "#fee47d", 0));
	}
	else {
		if (this.value/1000 >= 0.4214132762312634) {
			document.getElementById("Serbia").setAttribute("fill", interpolateColor("#c0c0c0", "#fe975f", ((this.value/1000-(0.4214132762312634))/0.04682369735902925)));
		}
		else {
			document.getElementById("Serbia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46823697359029265 && this.value/1000 < 0.5403283369022127) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#fed669", "#fedd68", ((this.value/1000-(0.46823697359029265))/0.07209136331192006)));
	}
	else if (this.value/1000 >= 0.5403283369022127 && this.value/1000 < 0.569593147751606) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#fedd68", "#feeba1", ((this.value/1000-(0.5403283369022127))/0.029264810849393252)));
	}
	else if (this.value/1000 >= 0.569593147751606 && this.value/1000 < 0.6234832262669522) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#feeba1", "#feeba1", ((this.value/1000-(0.569593147751606))/0.05389007851534622)));
	}
	else if (this.value/1000 >= 0.6234832262669522 && this.value/1000 < 0.6513204853675946) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#feeba1", "#fee171", ((this.value/1000-(0.6234832262669522))/0.027837259100642386)));
	}
	else if (this.value/1000 >= 0.6513204853675946 && this.value/1000 < 0.7237687366167024) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#fee171", "#feb668", ((this.value/1000-(0.6513204853675946))/0.07244825124910781)));
	}
	else if (this.value/1000 >= 0.7237687366167024 && this.value/1000 < 0.7712348322626695) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#feb668", "#feea9b", ((this.value/1000-(0.7237687366167024))/0.047466095645967155)));
	}
	else if (this.value/1000 >= 0.7712348322626695 && this.value/1000 < 0.8372591006423983) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#feea9b", "#feefb5", ((this.value/1000-(0.7712348322626695))/0.06602426837972875)));
	}
	else if (this.value/1000 >= 0.8372591006423983 && this.value/1000 < 0.9118486795146324) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#feefb5", "#f5ebdb", ((this.value/1000-(0.8372591006423983))/0.07458957887223416)));
	}
	else if (this.value/1000 >= 0.9118486795146324) {
		document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", 0));
	}
	else {
		if (this.value/1000 >= 0.4214132762312634) {
			document.getElementById("Montenegro").setAttribute("fill", interpolateColor("#c0c0c0", "#fed669", ((this.value/1000-(0.4214132762312634))/0.04682369735902925)));
		}
		else {
			document.getElementById("Montenegro").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4179157744468237 && this.value/1000 < 0.4675231977159172) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#fed669", "#ed6d48", ((this.value/1000-(0.4179157744468237))/0.04960742326909351)));
	}
	else if (this.value/1000 >= 0.4675231977159172 && this.value/1000 < 0.5406852248394004) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#ed6d48", "#e26141", ((this.value/1000-(0.4675231977159172))/0.07316202712348319)));
	}
	else if (this.value/1000 >= 0.5406852248394004 && this.value/1000 < 0.6138472519628837) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#e26141", "#dd5b3d", ((this.value/1000-(0.5406852248394004))/0.0731620271234833)));
	}
	else if (this.value/1000 >= 0.6138472519628837 && this.value/1000 < 0.6877230549607424) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#dd5b3d", "#bf4b34", ((this.value/1000-(0.6138472519628837))/0.07387580299785867)));
	}
	else if (this.value/1000 >= 0.6877230549607424 && this.value/1000 < 0.761598857958601) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#bf4b34", "#c44d34", ((this.value/1000-(0.6877230549607424))/0.07387580299785867)));
	}
	else if (this.value/1000 >= 0.761598857958601 && this.value/1000 < 0.8211991434689507) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#c44d34", "#db5a3c", ((this.value/1000-(0.761598857958601))/0.05960028551034968)));
	}
	else if (this.value/1000 >= 0.8211991434689507 && this.value/1000 < 0.8697359029264811) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#db5a3c", "#e15f40", ((this.value/1000-(0.8211991434689507))/0.04853675945753033)));
	}
	else if (this.value/1000 >= 0.8697359029264811 && this.value/1000 < 0.9421841541755889) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#e15f40", "#d15337", ((this.value/1000-(0.8697359029264811))/0.07244825124910781)));
	}
	else if (this.value/1000 >= 0.9421841541755889) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#d15337", "#d15337", 0));
	}
	else {
		if (this.value/1000 >= 0.37612419700214134) {
			document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#c0c0c0", "#fed669", ((this.value/1000-(0.37612419700214134))/0.04179157744468237)));
		}
		else {
			document.getElementById("Slovenia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4610992148465382 && this.value/1000 < 0.5214132762312634) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed669", "#fedc67", ((this.value/1000-(0.4610992148465382))/0.060314061384725226)));
	}
	else if (this.value/1000 >= 0.5214132762312634 && this.value/1000 < 0.5992658305292138) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fedc67", "#fedb67", ((this.value/1000-(0.5214132762312634))/0.07785255429795035)));
	}
	else if (this.value/1000 >= 0.5992658305292138 && this.value/1000 < 0.6716630977872948) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fedb67", "#fed867", ((this.value/1000-(0.5992658305292138))/0.07239726725808104)));
	}
	else if (this.value/1000 >= 0.6716630977872948 && this.value/1000 < 0.7462526766595289) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed867", "#fedf6b", ((this.value/1000-(0.6716630977872948))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.7462526766595289 && this.value/1000 < 0.7851534618129907) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fedf6b", "#fed967", ((this.value/1000-(0.7462526766595289))/0.03890078515346185)));
	}
	else if (this.value/1000 >= 0.7851534618129907 && this.value/1000 < 0.8783012134189865) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed967", "#fed968", ((this.value/1000-(0.7851534618129907))/0.09314775160599575)));
	}
	else if (this.value/1000 >= 0.8783012134189865 && this.value/1000 < 0.9746099724686449) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed968", "#fec96b", ((this.value/1000-(0.8783012134189865))/0.09630875904965841)));
	}
	else if (this.value/1000 >= 0.9746099724686449) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fec96b", "#fec96b", 0));
	}
	else {
		if (this.value/1000 >= 0.4149892933618844) {
			document.getElementById("Croatia").setAttribute("fill", interpolateColor("#c0c0c0", "#fed669", ((this.value/1000-(0.4149892933618844))/0.046109921484653815)));
		}
		else {
			document.getElementById("Croatia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46884878148261444) {
		document.getElementById("Bosnia_and_Herzegovina").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.421963903334353) {
			document.getElementById("Bosnia_and_Herzegovina").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.421963903334353))/0.04688487814826142)));
		}
		else {
			document.getElementById("Bosnia_and_Herzegovina").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4289793004996431 && this.value/1000 < 0.5021413276231264) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#fb8355", "#feb868", ((this.value/1000-(0.4289793004996431))/0.07316202712348324)));
	}
	else if (this.value/1000 >= 0.5021413276231264 && this.value/1000 < 0.5767309064953604) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#feb868", "#fe8858", ((this.value/1000-(0.5021413276231264))/0.07458957887223405)));
	}
	else if (this.value/1000 >= 0.5767309064953604 && this.value/1000 < 0.6495360456816559) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#fe8858", "#fe8f5c", ((this.value/1000-(0.5767309064953604))/0.0728051391862955)));
	}
	else if (this.value/1000 >= 0.6495360456816559 && this.value/1000 < 0.7203528092179056) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#fe8f5c", "#f97e52", ((this.value/1000-(0.6495360456816559))/0.07081676353624966)));
	}
	else if (this.value/1000 >= 0.7203528092179056 && this.value/1000 < 0.7558886509635975) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f97e52", "#ed6d48", ((this.value/1000-(0.7203528092179056))/0.03553584174569191)));
	}
	else if (this.value/1000 >= 0.7558886509635975 && this.value/1000 < 0.8119200571020699) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#ed6d48", "#f2754d", ((this.value/1000-(0.7558886509635975))/0.05603140613847246)));
	}
	else if (this.value/1000 >= 0.8119200571020699 && this.value/1000 < 0.8650963597430407) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f2754d", "#f0724c", ((this.value/1000-(0.8119200571020699))/0.05317630264097073)));
	}
	else if (this.value/1000 >= 0.8650963597430407 && this.value/1000 < 0.9147037830121342) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f0724c", "#f4774e", ((this.value/1000-(0.8650963597430407))/0.04960742326909351)));
	}
	else if (this.value/1000 >= 0.9147037830121342 && this.value/1000 < 0.9815947792393188) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f4774e", "#f67b51", ((this.value/1000-(0.9147037830121342))/0.06689099622718464)));
	}
	else if (this.value/1000 >= 0.9815947792393188) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f67b51", "#f67b51", 0));
	}
	else {
		if (this.value/1000 >= 0.38608137044967883) {
			document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#c0c0c0", "#fb8355", ((this.value/1000-(0.38608137044967883))/0.042897930049964283)));
		}
		else {
			document.getElementById("North_Macedonia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.5060670949321913) {
		document.getElementById("Kosovo").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.45546038543897216) {
			document.getElementById("Kosovo").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.45546038543897216))/0.050606709493219104)));
		}
		else {
			document.getElementById("Kosovo").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.41138982359539106) {
		document.getElementById("Czechoslovakia").setAttribute("fill", interpolateColor("#f2e9e0", "#f2e9e0", 0));
	}
	else {
		if (this.value/1000 >= 0.37025084123585195) {
			document.getElementById("Czechoslovakia").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.37025084123585195))/0.04113898235953911)));
		}
		else {
			document.getElementById("Czechoslovakia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0) {
		document.getElementById("USSR1").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", 0));
		document.getElementById("USSR2").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
			document.getElementById("USSR1").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", ((this.value/1000-(0.0))/0.0)));
			document.getElementById("USSR2").setAttribute("fill", interpolateColor("#c0c0c0", "#c0c0c0", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("USSR1").setAttribute("fill", "#c0c0c0");
			document.getElementById("USSR2").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 < 0.41597838278780463) {
		document.getElementById("Lithuania").style.display = "none";
		document.getElementById("USSR2").style.display = "none";
	}
	else {
		document.getElementById("Lithuania").style.display = "block";
		document.getElementById("USSR2").style.display = "block";
	}
	if (this.value/1000 < 0.4269909248495972) {
		document.getElementById("Germany").style.display = "none";
	}
	else {
		document.getElementById("Germany").style.display = "block";
	}
	if (this.value/1000 < 0.4405016824717039) {
		document.getElementById("Slovenia").style.display = "none";
		document.getElementById("Croatia").style.display = "none";
		document.getElementById("Yugoslavia2").style.display = "none";
	}
	else {
		document.getElementById("Slovenia").style.display = "block";
		document.getElementById("Croatia").style.display = "block";
		document.getElementById("Yugoslavia2").style.display = "block";
	}
	if (this.value/1000 < 0.4435607219333129) {
		document.getElementById("Moldova").style.display = "none";
		document.getElementById("Ukraine").style.display = "none";
		document.getElementById("Belarus").style.display = "none";
		document.getElementById("Estonia").style.display = "none";
		document.getElementById("Latvia").style.display = "none";
		document.getElementById("Russia").style.display = "none";
	}
	else {
		document.getElementById("Moldova").style.display = "block";
		document.getElementById("Ukraine").style.display = "block";
		document.getElementById("Belarus").style.display = "block";
		document.getElementById("Estonia").style.display = "block";
		document.getElementById("Latvia").style.display = "block";
		document.getElementById("Russia").style.display = "block";
	}
	if (this.value/1000 < 0.4443254817987152) {
		document.getElementById("North_Macedonia").style.display = "none";
		document.getElementById("Yugoslavia3").style.display = "none";
	}
	else {
		document.getElementById("North_Macedonia").style.display = "block";
		document.getElementById("Yugoslavia3").style.display = "block";
	}
	if (this.value/1000 < 0.4532476802284083) {
		document.getElementById("Bosnia_and_Herzegovina").style.display = "none";
		document.getElementById("Yugoslavia4").style.display = "none";
	}
	else {
		document.getElementById("Bosnia_and_Herzegovina").style.display = "block";
		document.getElementById("Yugoslavia4").style.display = "block";
	}
	if (this.value/1000 < 0.46884878148261444) {
		document.getElementById("Slovakia").style.display = "none";
		document.getElementById("Czech_Republic").style.display = "none";
	}
	else {
		document.getElementById("Slovakia").style.display = "block";
		document.getElementById("Czech_Republic").style.display = "block";
	}
	if (this.value/1000 < 0.7180585296216988) {
		document.getElementById("Montenegro").style.display = "none";
		document.getElementById("Serbia").style.display = "none";
	}
	else {
		document.getElementById("Montenegro").style.display = "block";
		document.getElementById("Serbia").style.display = "block";
	}
	if (this.value/1000 < 0.7505353319057816) {
		document.getElementById("Kosovo").style.display = "none";
	}
	else {
		document.getElementById("Kosovo").style.display = "block";
	}
}

var event = document.createEvent('Event');
event.initEvent('input', true, true);
document.getElementById("timeline").dispatchEvent(event);
