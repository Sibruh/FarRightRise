document.getElementById("timeline").oninput = function() {
	var startDate = new Date(1967, 10, 29);
	var endDate = new Date(2021, 03, 17);
	document.getElementById("dateIndicator").innerHTML = getPaddedDate(startDate*(1-this.value/1000) + endDate*(this.value/1000));
	if (this.value/1000 >= 0.4947174069135296 && this.value/1000 < 0.5697507436660171) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.4947174069135296))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.5697507436660171 && this.value/1000 < 0.719458405990358) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#f5ebdb", "#fcefd6", ((this.value/1000-(0.5697507436660171))/0.14970766232434096)));
	}
	else if (this.value/1000 >= 0.719458405990358 && this.value/1000 < 0.747820289260437) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fcefd6", "#fef2bf", ((this.value/1000-(0.719458405990358))/0.028361883270078936)));
	}
	else if (this.value/1000 >= 0.747820289260437 && this.value/1000 < 0.8429582521284235) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fef2bf", "#feca6a", ((this.value/1000-(0.747820289260437))/0.09513796286798648)));
	}
	else if (this.value/1000 >= 0.8429582521284235 && this.value/1000 < 0.8802954149143501) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#feca6a", "#fedc67", ((this.value/1000-(0.8429582521284235))/0.03733716278592669)));
	}
	else if (this.value/1000 >= 0.8802954149143501 && this.value/1000 < 0.9689711765309262) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fedc67", "#fea964", ((this.value/1000-(0.8802954149143501))/0.08867576161657609)));
	}
	else if (this.value/1000 >= 0.9689711765309262) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#fea964", "#fea964", 0));
	}
	else {
		if (this.value/1000 >= 0.44524566622217665) {
		document.getElementById("Ukraine").setAttribute("fill", interpolateColor("#c0c0c0", "#f5ebdb", ((this.value/1000-(0.44524566622217665))/0.04947174069135296)));
		}
		else {
			document.getElementById("Ukraine").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4893322392040209 && this.value/1000 < 0.5270284131705816) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fe965e", "#fec86a", ((this.value/1000-(0.4893322392040209))/0.037696173966560664)));
		}
	}
	else if (this.value/1000 >= 0.5270284131705816 && this.value/1000 < 0.602061749923069) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fec86a", "#fed967", ((this.value/1000-(0.5270284131705816))/0.07503333675248747)));
		}
	}
	else if (this.value/1000 >= 0.602061749923069 && this.value/1000 < 0.6763770643142887) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fed967", "#fec56a", ((this.value/1000-(0.602061749923069))/0.07431531439121963)));
		}
	}
	else if (this.value/1000 >= 0.6763770643142887 && this.value/1000 < 0.7510513898861422) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fec56a", "#fed46a", ((this.value/1000-(0.6763770643142887))/0.0746743255718535)));
		}
	}
	else if (this.value/1000 >= 0.7510513898861422 && this.value/1000 < 0.8260847266386296) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fed46a", "#fec46a", ((this.value/1000-(0.7510513898861422))/0.07503333675248747)));
		}
	}
	else if (this.value/1000 >= 0.8260847266386296 && this.value/1000 < 0.9158375217971074) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fec46a", "#febe69", ((this.value/1000-(0.8260847266386296))/0.08975279515847778)));
		}
	}
	else if (this.value/1000 >= 0.9158375217971074) {
		paths = document.getElementById("Russia").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#febe69", "#febe69", 0));
		}
	}
	else {
		paths = document.getElementById("Russia").querySelectorAll("path");
		if (this.value/1000 >= 0.44039901528361886) {
			for (i = 0; i < paths.length; i++) {
				paths[i].setAttribute("fill", interpolateColor("#c0c0c0", "#fe965e", ((this.value/1000-(0.44039901528361886))/0.04893322392040206)));
			}
		}
		else {
			for (i = 0; i < paths.length; i++) {
				paths[i].setAttribute("fill", "#c0c0c0");
			}
		}
	}
	if (this.value/1000 >= 0.43153143912196124 && this.value/1000 < 0.505128731151913) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#fb8355", "#feb868", ((this.value/1000-(0.43153143912196124))/0.0735972920299518)));
	}
	else if (this.value/1000 >= 0.505128731151913 && this.value/1000 < 0.5801620679044005) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#feb868", "#fe8858", ((this.value/1000-(0.505128731151913))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.5801620679044005 && this.value/1000 < 0.6534003487537183) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#fe8858", "#fe8f5c", ((this.value/1000-(0.5801620679044005))/0.07323828084931783)));
	}
	else if (this.value/1000 >= 0.6534003487537183 && this.value/1000 < 0.7246384244537901) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#fe8f5c", "#f97e52", ((this.value/1000-(0.6534003487537183))/0.07123807570007179)));
	}
	else if (this.value/1000 >= 0.7246384244537901 && this.value/1000 < 0.7603856805826239) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f97e52", "#ed6d48", ((this.value/1000-(0.7246384244537901))/0.03574725612883378)));
	}
	else if (this.value/1000 >= 0.7603856805826239 && this.value/1000 < 0.8167504359421479) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#ed6d48", "#f2754d", ((this.value/1000-(0.7603856805826239))/0.05636475535952401)));
	}
	else if (this.value/1000 >= 0.8167504359421479 && this.value/1000 < 0.8702431018566007) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f2754d", "#f0724c", ((this.value/1000-(0.8167504359421479))/0.053492665914452786)));
	}
	else if (this.value/1000 >= 0.8702431018566007 && this.value/1000 < 0.9201456559647143) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f0724c", "#f4774e", ((this.value/1000-(0.8702431018566007))/0.04990255410811362)));
	}
	else if (this.value/1000 >= 0.9201456559647143 && this.value/1000 < 0.9874346086778131) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f4774e", "#f67b51", ((this.value/1000-(0.9201456559647143))/0.06728895271309876)));
	}
	else if (this.value/1000 >= 0.9874346086778131) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#f67b51", "#f67b51", 0));
	}
	else {
		if (this.value/1000 >= 0.38837829520976513) {
		document.getElementById("North_Macedonia").setAttribute("fill", interpolateColor("#c0c0c0", "#fb8355", ((this.value/1000-(0.38837829520976513))/0.0431531439121961)));
		}
		else {
			document.getElementById("North_Macedonia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.7054056826341163 && this.value/1000 < 0.7808493178787568) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed46a", "#fed06a", ((this.value/1000-(0.7054056826341163))/0.07544363524464048)));
	}
	else if (this.value/1000 >= 0.7808493178787568 && this.value/1000 < 0.8530105651861729) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed06a", "#fed669", ((this.value/1000-(0.7808493178787568))/0.07216124730741613)));
	}
	else if (this.value/1000 >= 0.8530105651861729 && this.value/1000 < 0.8792183813724485) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed669", "#fedd67", ((this.value/1000-(0.8530105651861729))/0.026207816186275545)));
	}
	else if (this.value/1000 >= 0.8792183813724485 && this.value/1000 < 0.925530823674223) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fedd67", "#fed06a", ((this.value/1000-(0.8792183813724485))/0.04631244230177456)));
	}
	else if (this.value/1000 >= 0.925530823674223) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#fed06a", "#fed06a", 0));
	}
	else {
		if (this.value/1000 >= 0.6348651143707047) {
		document.getElementById("Bulgaria").setAttribute("fill", interpolateColor("#c0c0c0", "#fed46a", ((this.value/1000-(0.6348651143707047))/0.0705405682634116)));
		}
		else {
			document.getElementById("Bulgaria").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.658426505282593 && this.value/1000 < 0.6921735562621807) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#ea6846", "#fec56a", ((this.value/1000-(0.658426505282593))/0.033747050979587634)));
	}
	else if (this.value/1000 >= 0.6921735562621807 && this.value/1000 < 0.7672068930146682) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#fec56a", "#febf69", ((this.value/1000-(0.6921735562621807))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.7672068930146682 && this.value/1000 < 0.8422402297671556) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#febf69", "#fed669", ((this.value/1000-(0.7672068930146682))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.8422402297671556 && this.value/1000 < 0.917632577700277) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#fed669", "#feda67", ((this.value/1000-(0.8422402297671556))/0.07539234793312133)));
	}
	else if (this.value/1000 >= 0.917632577700277) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#feda67", "#feda67", 0));
	}
	else {
		if (this.value/1000 >= 0.5925838547543337) {
		document.getElementById("Lithuania").setAttribute("fill", interpolateColor("#c0c0c0", "#ea6846", ((this.value/1000-(0.5925838547543337))/0.06584265052825933)));
		}
		else {
			document.getElementById("Lithuania").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8041337573084419 && this.value/1000 < 0.8220843163401375) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#fed46a", "#feb968", ((this.value/1000-(0.8041337573084419))/0.017950559031695512)));
	}
	else if (this.value/1000 >= 0.8220843163401375 && this.value/1000 < 0.8791670940609293) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#feb968", "#fead65", ((this.value/1000-(0.8220843163401375))/0.057082777720791844)));
	}
	else if (this.value/1000 >= 0.8791670940609293 && this.value/1000 < 0.9542004308134168) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#fead65", "#fec76a", ((this.value/1000-(0.8791670940609293))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.9542004308134168) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#fec76a", "#fec76a", 0));
	}
	else {
		if (this.value/1000 >= 0.7237203815775978) {
		document.getElementById("Latvia").setAttribute("fill", interpolateColor("#c0c0c0", "#fed46a", ((this.value/1000-(0.7237203815775978))/0.08041337573084417)));
		}
		else {
			document.getElementById("Latvia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8867576161657605 && this.value/1000 < 0.961790952918248) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#fed46a", "#fea864", ((this.value/1000-(0.8867576161657605))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.961790952918248) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#fea864", "#fea864", 0));
	}
	else {
		if (this.value/1000 >= 0.7980818545491845) {
		document.getElementById("Estonia").setAttribute("fill", interpolateColor("#c0c0c0", "#fed46a", ((this.value/1000-(0.7980818545491845))/0.08867576161657609)));
		}
		else {
			document.getElementById("Estonia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.541388860395938 && this.value/1000 < 0.6860703661914043) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#f2e9e0", "#fedd68", ((this.value/1000-(0.541388860395938))/0.14468150579546624)));
	}
	else if (this.value/1000 >= 0.6860703661914043 && this.value/1000 < 0.7471022668991691) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fedd68", "#fede69", ((this.value/1000-(0.6860703661914043))/0.061031900707764875)));
	}
	else if (this.value/1000 >= 0.7471022668991691 && this.value/1000 < 0.7855164632269976) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fede69", "#feb668", ((this.value/1000-(0.7471022668991691))/0.0384141963278285)));
	}
	else if (this.value/1000 >= 0.7855164632269976 && this.value/1000 < 0.8339829726125757) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#feb668", "#f4784e", ((this.value/1000-(0.7855164632269976))/0.04846650938557806)));
	}
	else if (this.value/1000 >= 0.8339829726125757 && this.value/1000 < 0.8361370396963791) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#f4784e", "#fd8557", ((this.value/1000-(0.8339829726125757))/0.0021540670838033904)));
	}
	else if (this.value/1000 >= 0.8361370396963791 && this.value/1000 < 0.884962560262591) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fd8557", "#fe965f", ((this.value/1000-(0.8361370396963791))/0.04882552056621192)));
	}
	else if (this.value/1000 >= 0.884962560262591 && this.value/1000 < 0.897168940404144) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fe965f", "#fed768", ((this.value/1000-(0.884962560262591))/0.012206380141552953)));
	}
	else if (this.value/1000 >= 0.897168940404144 && this.value/1000 < 0.9682531541696584) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fed768", "#fe8d5a", ((this.value/1000-(0.897168940404144))/0.07108421376551444)));
	}
	else if (this.value/1000 >= 0.9682531541696584) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#fe8d5a", "#fe8d5a", 0));
	}
	else {
		if (this.value/1000 >= 0.48724997435634426) {
		document.getElementById("Greece").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.48724997435634426))/0.05413888603959377)));
		}
		else {
			document.getElementById("Greece").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8160324135808801 && this.value/1000 < 0.848702431018566) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#feeca7", "#feefb5", ((this.value/1000-(0.8160324135808801))/0.03267001743768594)));
	}
	else if (this.value/1000 >= 0.848702431018566 && this.value/1000 < 0.9097343317263309) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#feefb5", "#fede6a", ((this.value/1000-(0.848702431018566))/0.061031900707764875)));
	}
	else if (this.value/1000 >= 0.9097343317263309 && this.value/1000 < 0.9413273156221151) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#fede6a", "#feda67", ((this.value/1000-(0.9097343317263309))/0.031592983895784243)));
	}
	else if (this.value/1000 >= 0.9413273156221151 && this.value/1000 < 0.966099087085855) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#feda67", "#fed36a", ((this.value/1000-(0.9413273156221151))/0.024771771463739878)));
	}
	else if (this.value/1000 >= 0.966099087085855) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#fed36a", "#fed36a", 0));
	}
	else {
		if (this.value/1000 >= 0.7344291722227921) {
		document.getElementById("Cyprus").setAttribute("fill", interpolateColor("#c0c0c0", "#feeca7", ((this.value/1000-(0.7344291722227921))/0.08160324135808794)));
		}
		else {
			document.getElementById("Cyprus").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.03661914042465894 && this.value/1000 < 0.11165247717714638) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fee06f", "#fedf6c", ((this.value/1000-(0.03661914042465894))/0.07503333675248744)));
	}
	else if (this.value/1000 >= 0.11165247717714638 && this.value/1000 < 0.1798646014975895) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fedf6c", "#fed867", ((this.value/1000-(0.11165247717714638))/0.06821212432044313)));
	}
	else if (this.value/1000 >= 0.1798646014975895 && this.value/1000 < 0.5273874243512156) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fed867", "#fed36a", ((this.value/1000-(0.1798646014975895))/0.347522822853626)));
	}
	else if (this.value/1000 >= 0.5273874243512156 && this.value/1000 < 0.5894963586008821) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fed36a", "#fea765", ((this.value/1000-(0.5273874243512156))/0.06210893424966657)));
	}
	else if (this.value/1000 >= 0.5894963586008821 && this.value/1000 < 0.6559134270181557) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fea765", "#fed26a", ((this.value/1000-(0.5894963586008821))/0.06641706841727357)));
	}
	else if (this.value/1000 >= 0.6559134270181557 && this.value/1000 < 0.7442301774540978) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fed26a", "#feb868", ((this.value/1000-(0.6559134270181557))/0.08831675043594212)));
	}
	else if (this.value/1000 >= 0.7442301774540978 && this.value/1000 < 0.8171094471227818) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#feb868", "#febe68", ((this.value/1000-(0.7442301774540978))/0.07287926966868397)));
	}
	else if (this.value/1000 >= 0.8171094471227818 && this.value/1000 < 0.8917837726946354) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#febe68", "#feaf66", ((this.value/1000-(0.8171094471227818))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.8917837726946354 && this.value/1000 < 0.8993230074879475) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#feaf66", "#fec36a", ((this.value/1000-(0.8917837726946354))/0.0075392347933120885)));
	}
	else if (this.value/1000 >= 0.8993230074879475 && this.value/1000 < 0.9488665504154272) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fec36a", "#fec76a", ((this.value/1000-(0.8993230074879475))/0.049543542927479756)));
	}
	else if (this.value/1000 >= 0.9488665504154272) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#fec76a", "#fec76a", 0));
	}
	else {
		if (this.value/1000 >= 0.03295722638219305) {
		document.getElementById("Turkey").setAttribute("fill", interpolateColor("#c0c0c0", "#fee06f", ((this.value/1000-(0.03295722638219305))/0.003661914042465894)));
		}
		else {
			document.getElementById("Turkey").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46384244537901326 && this.value/1000 < 0.5245153349061442) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed669", "#fedc67", ((this.value/1000-(0.46384244537901326))/0.06067288952713096)));
	}
	else if (this.value/1000 >= 0.5245153349061442 && this.value/1000 < 0.602831059595856) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fedc67", "#fedb67", ((this.value/1000-(0.5245153349061442))/0.07831572468971182)));
	}
	else if (this.value/1000 >= 0.602831059595856 && this.value/1000 < 0.6756590419530208) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fedb67", "#fed867", ((this.value/1000-(0.602831059595856))/0.07282798235716481)));
	}
	else if (this.value/1000 >= 0.6756590419530208 && this.value/1000 < 0.7506923787055083) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed867", "#fedf6b", ((this.value/1000-(0.6756590419530208))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.7506923787055083 && this.value/1000 < 0.7898245973946045) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fedf6b", "#fed967", ((this.value/1000-(0.7506923787055083))/0.03913221868909622)));
	}
	else if (this.value/1000 >= 0.7898245973946045 && this.value/1000 < 0.8835265155400553) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed967", "#fed968", ((this.value/1000-(0.7898245973946045))/0.09370191814545081)));
	}
	else if (this.value/1000 >= 0.8835265155400553 && this.value/1000 < 0.9804082469996923) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fed968", "#fec96b", ((this.value/1000-(0.8835265155400553))/0.09688173145963697)));
	}
	else if (this.value/1000 >= 0.9804082469996923) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#fec96b", "#fec96b", 0));
	}
	else {
		if (this.value/1000 >= 0.41745820084111196) {
		document.getElementById("Croatia").setAttribute("fill", interpolateColor("#c0c0c0", "#fed669", ((this.value/1000-(0.41745820084111196))/0.0463842445379013)));
		}
		else {
			document.getElementById("Croatia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.46671453482408454 && this.value/1000 < 0.5435429274797415) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fede69", "#fedd67", ((this.value/1000-(0.46671453482408454))/0.076828392655657)));
	}
	else if (this.value/1000 >= 0.5435429274797415 && this.value/1000 < 0.6196532977741307) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fedd67", "#fea263", ((this.value/1000-(0.5435429274797415))/0.07611037029438916)));
	}
	else if (this.value/1000 >= 0.6196532977741307 && this.value/1000 < 0.6946866345266182) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fea263", "#febe69", ((this.value/1000-(0.6196532977741307))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.6946866345266182 && this.value/1000 < 0.7697199712791055) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#febe69", "#fedf6d", ((this.value/1000-(0.6946866345266182))/0.07503333675248736)));
	}
	else if (this.value/1000 >= 0.7697199712791055 && this.value/1000 < 0.8451123192122268) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fedf6d", "#feea9b", ((this.value/1000-(0.7697199712791055))/0.07539234793312133)));
	}
	else if (this.value/1000 >= 0.8451123192122268 && this.value/1000 < 0.9201456559647143) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#feea9b", "#feedae", ((this.value/1000-(0.8451123192122268))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.9201456559647143 && this.value/1000 < 0.9948199815365678) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#feedae", "#fe905b", ((this.value/1000-(0.9201456559647143))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.9948199815365678) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#fe905b", "#fe905b", 0));
	}
	else {
		if (this.value/1000 >= 0.4200430813416761) {
		document.getElementById("Romania").setAttribute("fill", interpolateColor("#c0c0c0", "#fede69", ((this.value/1000-(0.4200430813416761))/0.04667145348240842)));
		}
		else {
			document.getElementById("Romania").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.47102266899169143 && this.value/1000 < 0.564622012514104) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fe975f", "#feb968", ((this.value/1000-(0.47102266899169143))/0.09359934352241261)));
	}
	else if (this.value/1000 >= 0.564622012514104 && this.value/1000 < 0.6210380551851472) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#feb968", "#fe8858", ((this.value/1000-(0.564622012514104))/0.056416042671043165)));
	}
	else if (this.value/1000 >= 0.6210380551851472 && this.value/1000 < 0.6774540978561904) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fe8858", "#fed26a", ((this.value/1000-(0.6210380551851472))/0.056416042671043165)));
	}
	else if (this.value/1000 >= 0.6774540978561904 && this.value/1000 < 0.7348958867576162) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fed26a", "#fe8958", ((this.value/1000-(0.6774540978561904))/0.057441788901425817)));
	}
	else if (this.value/1000 >= 0.7348958867576162 && this.value/1000 < 0.7593086470407221) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fe8958", "#fd8556", ((this.value/1000-(0.7348958867576162))/0.024412760283105905)));
	}
	else if (this.value/1000 >= 0.7593086470407221 && this.value/1000 < 0.8339829726125757) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fd8556", "#fedc68", ((this.value/1000-(0.7593086470407221))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.8339829726125757 && this.value/1000 < 0.868807057134065) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fedc68", "#fde57f", ((this.value/1000-(0.8339829726125757))/0.03482408452148933)));
	}
	else if (this.value/1000 >= 0.868807057134065 && this.value/1000 < 0.9082982870037952) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fde57f", "#fed46a", ((this.value/1000-(0.868807057134065))/0.03949122986973019)));
	}
	else if (this.value/1000 >= 0.9082982870037952 && this.value/1000 < 0.986203713201354) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fed46a", "#fee47d", ((this.value/1000-(0.9082982870037952))/0.0779054261975588)));
	}
	else if (this.value/1000 >= 0.986203713201354) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#fee47d", "#fee47d", 0));
	}
	else {
		if (this.value/1000 >= 0.4239204020925223) {
		document.getElementById("Serbia").setAttribute("fill", interpolateColor("#c0c0c0", "#fe975f", ((this.value/1000-(0.4239204020925223))/0.04710226689916913)));
		}
		else {
			document.getElementById("Serbia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.5880603138783465 && this.value/1000 < 0.6627346394502001) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#feedae", "#fee78c", ((this.value/1000-(0.5880603138783465))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.6627346394502001 && this.value/1000 < 0.7377679762026874) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fee78c", "#fedd68", ((this.value/1000-(0.6627346394502001))/0.07503333675248736)));
	}
	else if (this.value/1000 >= 0.7377679762026874 && this.value/1000 < 0.8142373576777105) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fedd68", "#fea464", ((this.value/1000-(0.7377679762026874))/0.07646938147502313)));
	}
	else if (this.value/1000 >= 0.8142373576777105 && this.value/1000 < 0.889270694430198) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fea464", "#fea964", ((this.value/1000-(0.8142373576777105))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.889270694430198 && this.value/1000 < 0.9639450200020515) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#fea964", "#feaa65", ((this.value/1000-(0.889270694430198))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.9639450200020515) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#feaa65", "#feaa65", 0));
	}
	else {
		if (this.value/1000 >= 0.5292542824905119) {
		document.getElementById("Finland").setAttribute("fill", interpolateColor("#c0c0c0", "#feedae", ((this.value/1000-(0.5292542824905119))/0.05880603138783458)));
		}
		else {
			document.getElementById("Finland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4235306185249769 && this.value/1000 < 0.46086778131090367) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#feb968", "#fed56a", ((this.value/1000-(0.4235306185249769))/0.03733716278592675)));
	}
	else if (this.value/1000 >= 0.46086778131090367 && this.value/1000 < 0.5043081341676069) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fed56a", "#fedb67", ((this.value/1000-(0.46086778131090367))/0.043440352856703224)));
	}
	else if (this.value/1000 >= 0.5043081341676069 && this.value/1000 < 0.5789824597394605) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fedb67", "#fed06a", ((this.value/1000-(0.5043081341676069))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.5789824597394605 && this.value/1000 < 0.653656785311314) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fed06a", "#fee06d", ((this.value/1000-(0.5789824597394605))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.653656785311314 && this.value/1000 < 0.7237152528464458) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fee06d", "#fec46a", ((this.value/1000-(0.653656785311314))/0.07005846753513179)));
	}
	else if (this.value/1000 >= 0.7237152528464458 && this.value/1000 < 0.7983895784182993) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fec46a", "#fe9860", ((this.value/1000-(0.7237152528464458))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.7983895784182993 && this.value/1000 < 0.8310595958559852) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fe9860", "#fe975f", ((this.value/1000-(0.7983895784182993))/0.03267001743768594)));
	}
	else if (this.value/1000 >= 0.8310595958559852 && this.value/1000 < 0.9057339214278387) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#fe975f", "#e16040", ((this.value/1000-(0.8310595958559852))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.9057339214278387 && this.value/1000 < 0.9804082469996923) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#e16040", "#f1724c", ((this.value/1000-(0.9057339214278387))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.9804082469996923) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#f1724c", "#f1724c", 0));
	}
	else {
		if (this.value/1000 >= 0.3811775566724792) {
		document.getElementById("Slovakia").setAttribute("fill", interpolateColor("#c0c0c0", "#feb968", ((this.value/1000-(0.3811775566724792))/0.04235306185249771)));
		}
		else {
			document.getElementById("Slovakia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4053236229356857 && this.value/1000 < 0.49866652990050264) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed56a", "#fed06b", ((this.value/1000-(0.4053236229356857))/0.09334290696481695)));
	}
	else if (this.value/1000 >= 0.49866652990050264 && this.value/1000 < 0.5923684480459535) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed06b", "#fec66a", ((this.value/1000-(0.49866652990050264))/0.09370191814545081)));
	}
	else if (this.value/1000 >= 0.5923684480459535 && this.value/1000 < 0.6860703661914043) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fec66a", "#fecd6a", ((this.value/1000-(0.5923684480459535))/0.09370191814545081)));
	}
	else if (this.value/1000 >= 0.6860703661914043 && this.value/1000 < 0.7794132731562211) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fecd6a", "#fec66a", ((this.value/1000-(0.6860703661914043))/0.09334290696481684)));
	}
	else if (this.value/1000 >= 0.7794132731562211 && this.value/1000 < 0.8612678223407529) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fec66a", "#fed868", ((this.value/1000-(0.7794132731562211))/0.08185454918453183)));
	}
	else if (this.value/1000 >= 0.8612678223407529 && this.value/1000 < 0.9546107293055698) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed868", "#fed36a", ((this.value/1000-(0.8612678223407529))/0.09334290696481684)));
	}
	else if (this.value/1000 >= 0.9546107293055698) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#fed36a", "#fed36a", 0));
	}
	else {
		if (this.value/1000 >= 0.36479126064211714) {
		document.getElementById("Luxembourg").setAttribute("fill", interpolateColor("#c0c0c0", "#fed56a", ((this.value/1000-(0.36479126064211714))/0.04053236229356855)));
		}
		else {
			document.getElementById("Luxembourg").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.10985742127397682 && this.value/1000 < 0.18489075802646426) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fedc67", "#fee680", ((this.value/1000-(0.10985742127397682))/0.07503333675248744)));
	}
	else if (this.value/1000 >= 0.18489075802646426 && this.value/1000 < 0.2599240947789517) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fee680", "#fedd67", ((this.value/1000-(0.18489075802646426))/0.07503333675248741)));
	}
	else if (this.value/1000 >= 0.2599240947789517 && this.value/1000 < 0.3345984203508052) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fedd67", "#fede6a", ((this.value/1000-(0.2599240947789517))/0.07467432557185355)));
	}
	else if (this.value/1000 >= 0.3345984203508052 && this.value/1000 < 0.40963175710329264) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fede6a", "#febe68", ((this.value/1000-(0.3345984203508052))/0.07503333675248741)));
	}
	else if (this.value/1000 >= 0.40963175710329264 && this.value/1000 < 0.4846650938557801) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#febe68", "#fed968", ((this.value/1000-(0.40963175710329264))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.4846650938557801 && this.value/1000 < 0.5596984306082675) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fed968", "#feb367", ((this.value/1000-(0.4846650938557801))/0.07503333675248741)));
	}
	else if (this.value/1000 >= 0.5596984306082675 && this.value/1000 < 0.634372756180121) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feb367", "#feb667", ((this.value/1000-(0.5596984306082675))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.634372756180121 && this.value/1000 < 0.7094060929326085) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feb667", "#fe9a60", ((this.value/1000-(0.634372756180121))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.7094060929326085 && this.value/1000 < 0.784439429685096) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fe9a60", "#fe965e", ((this.value/1000-(0.7094060929326085))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.784439429685096 && this.value/1000 < 0.8591137552569494) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#fe965e", "#feaf66", ((this.value/1000-(0.784439429685096))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.8591137552569494 && this.value/1000 < 0.934198379320956) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feaf66", "#feb367", ((this.value/1000-(0.8591137552569494))/0.07508462406400651)));
	}
	else if (this.value/1000 >= 0.934198379320956) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#feb367", "#feb367", 0));
	}
	else {
		if (this.value/1000 >= 0.09887167914657914) {
		document.getElementById("Norway").setAttribute("fill", interpolateColor("#c0c0c0", "#fedc67", ((this.value/1000-(0.09887167914657914))/0.010985742127397682)));
		}
		else {
			document.getElementById("Norway").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.42040209252231 && this.value/1000 < 0.47030464663042365) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#fed669", "#ed6d48", ((this.value/1000-(0.42040209252231))/0.04990255410811367)));
	}
	else if (this.value/1000 >= 0.47030464663042365 && this.value/1000 < 0.5439019386603754) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#ed6d48", "#e26141", ((this.value/1000-(0.47030464663042365))/0.07359729202995174)));
	}
	else if (this.value/1000 >= 0.5439019386603754 && this.value/1000 < 0.6174992306903272) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#e26141", "#dd5b3d", ((this.value/1000-(0.5439019386603754))/0.0735972920299518)));
	}
	else if (this.value/1000 >= 0.6174992306903272 && this.value/1000 < 0.6918145450815468) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#dd5b3d", "#bf4b34", ((this.value/1000-(0.6174992306903272))/0.07431531439121963)));
	}
	else if (this.value/1000 >= 0.6918145450815468 && this.value/1000 < 0.7661298594727665) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#bf4b34", "#c44d34", ((this.value/1000-(0.6918145450815468))/0.07431531439121963)));
	}
	else if (this.value/1000 >= 0.7661298594727665 && this.value/1000 < 0.8260847266386296) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#c44d34", "#db5a3c", ((this.value/1000-(0.7661298594727665))/0.05995486716586318)));
	}
	else if (this.value/1000 >= 0.8260847266386296 && this.value/1000 < 0.8749102472048416) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#db5a3c", "#e15f40", ((this.value/1000-(0.8260847266386296))/0.04882552056621192)));
	}
	else if (this.value/1000 >= 0.8749102472048416 && this.value/1000 < 0.9477895168735255) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#e15f40", "#d15337", ((this.value/1000-(0.8749102472048416))/0.07287926966868397)));
	}
	else if (this.value/1000 >= 0.9477895168735255) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#d15337", "#d15337", 0));
	}
	else {
		if (this.value/1000 >= 0.37836188327007897) {
		document.getElementById("Slovenia").setAttribute("fill", interpolateColor("#c0c0c0", "#fed669", ((this.value/1000-(0.37836188327007897))/0.04204020925223101)));
		}
		else {
			document.getElementById("Slovenia").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.8615755462098676 && this.value/1000 < 0.9362498717817213) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#fed769", "#fec96b", ((this.value/1000-(0.8615755462098676))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.9362498717817213) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#fec96b", "#fec96b", 0));
	}
	else {
		if (this.value/1000 >= 0.7754179915888809) {
		document.getElementById("Czech_Republic").setAttribute("fill", interpolateColor("#c0c0c0", "#fed769", ((this.value/1000-(0.7754179915888809))/0.08615755462098673)));
		}
		else {
			document.getElementById("Czech_Republic").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.5688275720586727 && this.value/1000 < 0.6380654426094984) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fed669", "#fec269", ((this.value/1000-(0.5688275720586727))/0.06923787055082564)));
		}
	}
	else if (this.value/1000 >= 0.6380654426094984 && this.value/1000 < 0.6983793209559955) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fec269", "#febc69", ((this.value/1000-(0.6380654426094984))/0.06031387834649715)));
		}
	}
	else if (this.value/1000 >= 0.6983793209559955 && this.value/1000 < 0.7500769309672787) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#febc69", "#feb968", ((this.value/1000-(0.6983793209559955))/0.051697610011283146)));
		}
	}
	else if (this.value/1000 >= 0.7500769309672787 && this.value/1000 < 0.8219817417170991) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#feb968", "#fec269", ((this.value/1000-(0.7500769309672787))/0.07190481074982047)));
		}
	}
	else if (this.value/1000 >= 0.8219817417170991 && this.value/1000 < 0.8923479331213457) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fec269", "#fe9c61", ((this.value/1000-(0.8219817417170991))/0.0703661914042466)));
		}
	}
	else if (this.value/1000 >= 0.8923479331213457 && this.value/1000 < 0.9666119602010462) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fe9c61", "#f3764d", ((this.value/1000-(0.8923479331213457))/0.07426402707970048)));
		}
	}
	else if (this.value/1000 >= 0.9666119602010462) {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#f3764d", "#f3764d", 0));
		}
	}
	else {
		paths = document.getElementById("Danish_Kingdom").querySelectorAll("path");
		if (this.value/1000 >= 0.5119448148528055) {
			for (i = 0; i < paths.length; i++) {
				paths[i].setAttribute("fill", interpolateColor("#c0c0c0", "#fed669", ((this.value/1000-(0.5119448148528055))/0.05688275720586722)));
			}
		}
		else {
			for (i = 0; i < paths.length; i++) {
				paths[i].setAttribute("fill", "#c0c0c0");
			}
		}
	}
	if (this.value/1000 >= 0.9729202995178993 && this.value/1000 < 0.9973330598010053) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#feea9b", "#fec36a", ((this.value/1000-(0.9729202995178993))/0.024412760283106016)));
	}
	else if (this.value/1000 >= 0.9973330598010053) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#fec36a", "#fec36a", 0));
	}
	else {
		if (this.value/1000 >= 0.8756282695661094) {
		document.getElementById("Portugal").setAttribute("fill", interpolateColor("#c0c0c0", "#feea9b", ((this.value/1000-(0.8756282695661094))/0.09729202995178987)));
		}
		else {
			document.getElementById("Portugal").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.6350907785413888 && this.value/1000 < 0.7101241152938763) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fece6b", "#fe8a59", ((this.value/1000-(0.6350907785413888))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.7101241152938763 && this.value/1000 < 0.7488973228023387) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fe8a59", "#fa8054", ((this.value/1000-(0.7101241152938763))/0.03877320750846236)));
	}
	else if (this.value/1000 >= 0.7488973228023387 && this.value/1000 < 0.8232126371935583) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fa8054", "#fb8355", ((this.value/1000-(0.7488973228023387))/0.07431531439121963)));
	}
	else if (this.value/1000 >= 0.8232126371935583 && this.value/1000 < 0.8989639963073136) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#fb8355", "#843c2e", ((this.value/1000-(0.8232126371935583))/0.0757513591137553)));
	}
	else if (this.value/1000 >= 0.8989639963073136 && this.value/1000 < 0.9732793106985331) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#843c2e", "#843c2e", ((this.value/1000-(0.8989639963073136))/0.07431531439121952)));
	}
	else if (this.value/1000 >= 0.9732793106985331) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#843c2e", "#843c2e", 0));
	}
	else {
		if (this.value/1000 >= 0.57158170068725) {
		document.getElementById("Poland").setAttribute("fill", interpolateColor("#c0c0c0", "#fece6b", ((this.value/1000-(0.57158170068725))/0.06350907785413884)));
		}
		else {
			document.getElementById("Poland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.1803774746127808 && this.value/1000 < 0.9018360857523848) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#f2e9e0", "#f5ebdb", ((this.value/1000-(0.1803774746127808))/0.721458611139604)));
	}
	else if (this.value/1000 >= 0.9018360857523848 && this.value/1000 < 0.9115293876295004) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.9018360857523848))/0.00969330187711559)));
	}
	else if (this.value/1000 >= 0.9115293876295004 && this.value/1000 < 0.9646630423633193) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#f5ebdb", "#feca6a", ((this.value/1000-(0.9115293876295004))/0.053133654733818925)));
	}
	else if (this.value/1000 >= 0.9646630423633193 && this.value/1000 < 0.9747153554210688) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#feca6a", "#feb467", ((this.value/1000-(0.9646630423633193))/0.010052313057749451)));
	}
	else if (this.value/1000 >= 0.9747153554210688) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#feb467", "#feb467", 0));
	}
	else {
		if (this.value/1000 >= 0.16233972715150274) {
		document.getElementById("Spain").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.16233972715150274))/0.018037747461278064)));
		}
		else {
			document.getElementById("Spain").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4577392553082367 && this.value/1000 < 0.4947174069135296) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fed26a", "#fed26a", ((this.value/1000-(0.4577392553082367))/0.036978151605292886)));
	}
	else if (this.value/1000 >= 0.4947174069135296 && this.value/1000 < 0.533490614421992) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fed26a", "#fec96a", ((this.value/1000-(0.4947174069135296))/0.03877320750846236)));
	}
	else if (this.value/1000 >= 0.533490614421992 && this.value/1000 < 0.6282695661093446) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fec96a", "#fede69", ((this.value/1000-(0.533490614421992))/0.09477895168735262)));
	}
	else if (this.value/1000 >= 0.6282695661093446 && this.value/1000 < 0.7201764283516258) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fede69", "#fedc68", ((this.value/1000-(0.6282695661093446))/0.09190686224228117)));
	}
	else if (this.value/1000 >= 0.7201764283516258 && this.value/1000 < 0.7578726023181864) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fedc68", "#fed36a", ((this.value/1000-(0.7201764283516258))/0.037696173966560664)));
	}
	else if (this.value/1000 >= 0.7578726023181864 && this.value/1000 < 0.8490614421991999) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fed36a", "#fe955f", ((this.value/1000-(0.7578726023181864))/0.09118883988101345)));
	}
	else if (this.value/1000 >= 0.8490614421991999 && this.value/1000 < 0.9431223715252847) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#fe955f", "#d9573a", ((this.value/1000-(0.8490614421991999))/0.09406092932608479)));
	}
	else if (this.value/1000 >= 0.9431223715252847) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#d9573a", "#d9573a", 0));
	}
	else {
		if (this.value/1000 >= 0.41196532977741307) {
		document.getElementById("Italy").setAttribute("fill", interpolateColor("#c0c0c0", "#fed26a", ((this.value/1000-(0.41196532977741307))/0.045773925530823656)));
		}
		else {
			document.getElementById("Italy").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.41968407016104214 && this.value/1000 < 0.49687147399733306) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#fed06b", "#fed768", ((this.value/1000-(0.41968407016104214))/0.07718740383629091)));
	}
	else if (this.value/1000 >= 0.49687147399733306 && this.value/1000 < 0.5719048107498205) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#fed768", "#fd8758", ((this.value/1000-(0.49687147399733306))/0.07503333675248741)));
	}
	else if (this.value/1000 >= 0.5719048107498205 && this.value/1000 < 0.6451430915991384) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#fd8758", "#f2734c", ((this.value/1000-(0.5719048107498205))/0.07323828084931794)));
	}
	else if (this.value/1000 >= 0.6451430915991384 && this.value/1000 < 0.7201764283516258) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#f2734c", "#c74d34", ((this.value/1000-(0.6451430915991384))/0.07503333675248736)));
	}
	else if (this.value/1000 >= 0.7201764283516258 && this.value/1000 < 0.7952097651041132) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#c74d34", "#221b1e", ((this.value/1000-(0.7201764283516258))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.7952097651041132 && this.value/1000 < 0.8698840906759667) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#221b1e", "#261c1f", ((this.value/1000-(0.7952097651041132))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.8698840906759667 && this.value/1000 < 0.9449174274284542) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#261c1f", "#211a1e", ((this.value/1000-(0.8698840906759667))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.9449174274284542) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#211a1e", "#211a1e", 0));
	}
	else {
		if (this.value/1000 >= 0.37771566314493793) {
		document.getElementById("Hungary").setAttribute("fill", interpolateColor("#c0c0c0", "#fed06b", ((this.value/1000-(0.37771566314493793))/0.041968407016104214)));
		}
		else {
			document.getElementById("Hungary").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.0 && this.value/1000 < 0.07503333675248744) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#fef2cd", "#ec6b48", ((this.value/1000-(0.0))/0.07503333675248744)));
	}
	else if (this.value/1000 >= 0.07503333675248744 && this.value/1000 < 0.14970766232434096) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ec6b48", "#f0724c", ((this.value/1000-(0.07503333675248744))/0.07467432557185352)));
	}
	else if (this.value/1000 >= 0.14970766232434096 && this.value/1000 < 0.22438198789619448) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f0724c", "#f4774f", ((this.value/1000-(0.14970766232434096))/0.07467432557185352)));
	}
	else if (this.value/1000 >= 0.22438198789619448 && this.value/1000 < 0.2994153246486819) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f4774f", "#ed6d48", ((this.value/1000-(0.22438198789619448))/0.07503333675248744)));
	}
	else if (this.value/1000 >= 0.2994153246486819 && this.value/1000 < 0.3740896502205354) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ed6d48", "#ef6f49", ((this.value/1000-(0.2994153246486819))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.3740896502205354 && this.value/1000 < 0.4491229869730229) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ef6f49", "#e96946", ((this.value/1000-(0.3740896502205354))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.4491229869730229 && this.value/1000 < 0.5241563237255104) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e96946", "#e66544", ((this.value/1000-(0.4491229869730229))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.5241563237255104 && this.value/1000 < 0.5991896604779977) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e66544", "#e15f41", ((this.value/1000-(0.5241563237255104))/0.07503333675248736)));
	}
	else if (this.value/1000 >= 0.5991896604779977 && this.value/1000 < 0.6738639860498513) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e15f41", "#e46142", ((this.value/1000-(0.5991896604779977))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.6738639860498513 && this.value/1000 < 0.7488973228023387) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e46142", "#e76745", ((this.value/1000-(0.6738639860498513))/0.07503333675248736)));
	}
	else if (this.value/1000 >= 0.7488973228023387 && this.value/1000 < 0.8239306595548261) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#e76745", "#ef704b", ((this.value/1000-(0.7488973228023387))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.8239306595548261 && this.value/1000 < 0.8986049851266796) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ef704b", "#ef704a", ((this.value/1000-(0.8239306595548261))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.8986049851266796 && this.value/1000 < 0.9736383218791671) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#ef704a", "#f2754e", ((this.value/1000-(0.8986049851266796))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.9736383218791671) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#f2754e", "#f2754e", 0));
	}
	else {
		if (this.value/1000 >= 0.0) {
		document.getElementById("Switzerland").setAttribute("fill", interpolateColor("#c0c0c0", "#fef2cd", ((this.value/1000-(0.0))/0.0)));
		}
		else {
			document.getElementById("Switzerland").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.10016411939686122 && this.value/1000 < 0.19422504872294594) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fef0d3", "#f9edd8", ((this.value/1000-(0.10016411939686122))/0.09406092932608472)));
	}
	else if (this.value/1000 >= 0.19422504872294594 && this.value/1000 < 0.25525694943071087) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#f9edd8", "#fef0d3", ((this.value/1000-(0.19422504872294594))/0.06103190070776493)));
	}
	else if (this.value/1000 >= 0.25525694943071087 && this.value/1000 < 0.3442917222279208) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fef0d3", "#fece6a", ((this.value/1000-(0.25525694943071087))/0.08903477279720995)));
	}
	else if (this.value/1000 >= 0.3442917222279208 && this.value/1000 < 0.3838855267206893) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fece6a", "#feb767", ((this.value/1000-(0.3442917222279208))/0.0395938044927685)));
	}
	else if (this.value/1000 >= 0.3838855267206893 && this.value/1000 < 0.5148220330290286) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#feb767", "#feb567", ((this.value/1000-(0.3838855267206893))/0.1309365063083393)));
	}
	else if (this.value/1000 >= 0.5148220330290286 && this.value/1000 < 0.6458611139604062) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#feb567", "#fea864", ((this.value/1000-(0.5148220330290286))/0.13103908093137762)));
	}
	else if (this.value/1000 >= 0.6458611139604062 && this.value/1000 < 0.739563032105857) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fea864", "#feca6b", ((this.value/1000-(0.6458611139604062))/0.09370191814545081)));
	}
	else if (this.value/1000 >= 0.739563032105857 && this.value/1000 < 0.8332649502513079) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#feca6b", "#fea865", ((this.value/1000-(0.739563032105857))/0.09370191814545081)));
	}
	else if (this.value/1000 >= 0.8332649502513079 && this.value/1000 < 0.9276848907580265) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#fea865", "#f77b51", ((this.value/1000-(0.8332649502513079))/0.09441994050671865)));
	}
	else if (this.value/1000 >= 0.9276848907580265) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#f77b51", "#f77b51", 0));
	}
	else {
		if (this.value/1000 >= 0.0901477074571751) {
		document.getElementById("France").setAttribute("fill", interpolateColor("#c0c0c0", "#fef0d3", ((this.value/1000-(0.0901477074571751))/0.010016411939686123)));
		}
		else {
			document.getElementById("France").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= -0.3410606216022156 && this.value/1000 < -0.26495025130782646) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fede68", "#fede68", ((this.value/1000-(-0.3410606216022156))/0.07611037029438916)));
	}
	else if (this.value/1000 >= -0.26495025130782646 && this.value/1000 < -0.1895579033747051) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fede68", "#fee06d", ((this.value/1000-(-0.26495025130782646))/0.07539234793312136)));
	}
	else if (this.value/1000 >= -0.1895579033747051 && this.value/1000 < -0.03949122986973023) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fee06d", "#fde57f", ((this.value/1000-(-0.1895579033747051))/0.15006667350497488)));
	}
	else if (this.value/1000 >= -0.03949122986973023 && this.value/1000 < 0.035901118063391114) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fde57f", "#fedd68", ((this.value/1000-(-0.03949122986973023))/0.07539234793312134)));
	}
	else if (this.value/1000 >= 0.035901118063391114 && this.value/1000 < 0.09477895168735255) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fedd68", "#fef2cd", ((this.value/1000-(0.035901118063391114))/0.058877833623961436)));
	}
	else if (this.value/1000 >= 0.09477895168735255 && this.value/1000 < 0.1672992101754026) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fef2cd", "#fcefd6", ((this.value/1000-(0.09477895168735255))/0.07252025848805006)));
	}
	else if (this.value/1000 >= 0.1672992101754026 && this.value/1000 < 0.24233254692789005) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fcefd6", "#f5ebdb", ((this.value/1000-(0.1672992101754026))/0.07503333675248744)));
	}
	else if (this.value/1000 >= 0.24233254692789005 && this.value/1000 < 0.28756795568776283) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#f5ebdb", "#f5ebdb", ((this.value/1000-(0.24233254692789005))/0.04523540875987278)));
	}
	else if (this.value/1000 >= 0.28756795568776283 && this.value/1000 < 0.3604472253564468) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#f5ebdb", "#fef2cd", ((this.value/1000-(0.28756795568776283))/0.07287926966868397)));
	}
	else if (this.value/1000 >= 0.3604472253564468 && this.value/1000 < 0.432608472663863) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fef2cd", "#fcefd6", ((this.value/1000-(0.3604472253564468))/0.07216124730741619)));
	}
	else if (this.value/1000 >= 0.432608472663863 && this.value/1000 < 0.5790850343624987) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fcefd6", "#f9edd8", ((this.value/1000-(0.432608472663863))/0.1464765616986357)));
	}
	else if (this.value/1000 >= 0.5790850343624987 && this.value/1000 < 0.6537593599343522) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#f9edd8", "#fcefd6", ((this.value/1000-(0.5790850343624987))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.6537593599343522 && this.value/1000 < 0.7097651041132423) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fcefd6", "#fee684", ((this.value/1000-(0.6537593599343522))/0.05600574417889015)));
	}
	else if (this.value/1000 >= 0.7097651041132423 && this.value/1000 < 0.7851574520463638) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fee684", "#fee684", ((this.value/1000-(0.7097651041132423))/0.07539234793312144)));
	}
	else if (this.value/1000 >= 0.7851574520463638 && this.value/1000 < 0.8598317776182173) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fee684", "#fe985f", ((this.value/1000-(0.7851574520463638))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.8598317776182173 && this.value/1000 < 0.9327623345984204) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fe985f", "#fe9a60", ((this.value/1000-(0.8598317776182173))/0.07293055698020312)));
	}
	else if (this.value/1000 >= 0.9327623345984204) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#fe9a60", "#fe9a60", 0));
	}
	else {
		if (this.value/1000 >= -0.30695455944199407) {
		document.getElementById("Germany").setAttribute("fill", interpolateColor("#c0c0c0", "#fede68", ((this.value/1000-(-0.30695455944199407))/-0.03410606216022155)));
		}
		else {
			document.getElementById("Germany").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.3476766847881834 && this.value/1000 < 0.40942660785721613) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#f2e9e0", "#feefb5", ((this.value/1000-(0.3476766847881834))/0.06174992306903271)));
	}
	else if (this.value/1000 >= 0.40942660785721613 && this.value/1000 < 0.4966150374397374) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feefb5", "#fee277", ((this.value/1000-(0.40942660785721613))/0.08718842958252127)));
	}
	else if (this.value/1000 >= 0.4966150374397374 && this.value/1000 < 0.571699661503744) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#fee277", "#fef0d3", ((this.value/1000-(0.4966150374397374))/0.07508462406400657)));
	}
	else if (this.value/1000 >= 0.571699661503744 && this.value/1000 < 0.6470920094368653) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#fef0d3", "#feac65", ((this.value/1000-(0.571699661503744))/0.07539234793312133)));
	}
	else if (this.value/1000 >= 0.6470920094368653 && this.value/1000 < 0.6600164119396861) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feac65", "#feda67", ((this.value/1000-(0.6470920094368653))/0.012924402502820787)));
	}
	else if (this.value/1000 >= 0.6600164119396861 && this.value/1000 < 0.7318186480664683) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feda67", "#feba68", ((this.value/1000-(0.6600164119396861))/0.07180223612678227)));
	}
	else if (this.value/1000 >= 0.7318186480664683 && this.value/1000 < 0.7982357164837419) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feba68", "#feb267", ((this.value/1000-(0.7318186480664683))/0.06641706841727357)));
	}
	else if (this.value/1000 >= 0.7982357164837419 && this.value/1000 < 0.8405990357985434) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#feb267", "#fecc6a", ((this.value/1000-(0.7982357164837419))/0.04236331931480153)));
	}
	else if (this.value/1000 >= 0.8405990357985434 && this.value/1000 < 0.9249666632475125) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#fecc6a", "#ef704b", ((this.value/1000-(0.8405990357985434))/0.08436762744896908)));
	}
	else if (this.value/1000 >= 0.9249666632475125 && this.value/1000 < 1.0) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#ef704b", "#e66543", ((this.value/1000-(0.9249666632475125))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 1.0) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#e66543", "#e66543", 0));
	}
	else {
		if (this.value/1000 >= 0.3129090163093651) {
		document.getElementById("The_Netherlands").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.3129090163093651))/0.03476766847881835)));
		}
		else {
			document.getElementById("The_Netherlands").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.26279618422402296 && this.value/1000 < 0.33639347625397475) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#feeca7", "#fede69", ((this.value/1000-(0.26279618422402296))/0.0735972920299518)));
	}
	else if (this.value/1000 >= 0.33639347625397475 && this.value/1000 < 0.37696173966560675) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fede69", "#fedc66", ((this.value/1000-(0.33639347625397475))/0.040568263411632)));
	}
	else if (this.value/1000 >= 0.37696173966560675 && this.value/1000 < 0.4509180428761924) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fedc66", "#fe915d", ((this.value/1000-(0.37696173966560675))/0.07395630321058566)));
	}
	else if (this.value/1000 >= 0.4509180428761924 && this.value/1000 < 0.5162580777515643) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fe915d", "#f57950", ((this.value/1000-(0.4509180428761924))/0.06534003487537188)));
	}
	else if (this.value/1000 >= 0.5162580777515643 && this.value/1000 < 0.5923684480459535) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f57950", "#f67a50", ((this.value/1000-(0.5162580777515643))/0.07611037029438916)));
	}
	else if (this.value/1000 >= 0.5923684480459535 && this.value/1000 < 0.6659657400759053) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f67a50", "#f0714b", ((this.value/1000-(0.5923684480459535))/0.0735972920299518)));
	}
	else if (this.value/1000 >= 0.6659657400759053 && this.value/1000 < 0.7420761103702944) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#f0714b", "#fec269", ((this.value/1000-(0.6659657400759053))/0.07611037029438916)));
	}
	else if (this.value/1000 >= 0.7420761103702944 && this.value/1000 < 0.7984408657298184) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fec269", "#fed46a", ((this.value/1000-(0.7420761103702944))/0.05636475535952401)));
	}
	else if (this.value/1000 >= 0.7984408657298184 && this.value/1000 < 0.8723971689404041) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fed46a", "#fede6a", ((this.value/1000-(0.7984408657298184))/0.07395630321058566)));
	}
	else if (this.value/1000 >= 0.8723971689404041 && this.value/1000 < 0.966099087085855) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fede6a", "#fec269", ((this.value/1000-(0.8723971689404041))/0.09370191814545092)));
	}
	else if (this.value/1000 >= 0.966099087085855) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#fec269", "#fec269", 0));
	}
	else {
		if (this.value/1000 >= 0.23651656580162067) {
		document.getElementById("Belgium").setAttribute("fill", interpolateColor("#c0c0c0", "#feeca7", ((this.value/1000-(0.23651656580162067))/0.026279618422402284)));
		}
		else {
			document.getElementById("Belgium").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4473279310698533 && this.value/1000 < 0.5036926864293774) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#f2e9e0", "#f9edd8", ((this.value/1000-(0.4473279310698533))/0.056364755359524066)));
	}
	else if (this.value/1000 >= 0.5036926864293774 && this.value/1000 < 0.5787260231818648) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#f9edd8", "#fcefd6", ((this.value/1000-(0.5036926864293774))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.5787260231818648 && this.value/1000 < 0.6534003487537183) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#fcefd6", "#fee996", ((this.value/1000-(0.5787260231818648))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.6534003487537183 && this.value/1000 < 0.7284336855062058) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#fee996", "#fee071", ((this.value/1000-(0.6534003487537183))/0.07503333675248747)));
	}
	else if (this.value/1000 >= 0.7284336855062058 && this.value/1000 < 0.8034670222586932) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#fee071", "#feda67", ((this.value/1000-(0.7284336855062058))/0.07503333675248736)));
	}
	else if (this.value/1000 >= 0.8034670222586932 && this.value/1000 < 0.8781413478305468) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#feda67", "#febe69", ((this.value/1000-(0.8034670222586932))/0.0746743255718536)));
	}
	else if (this.value/1000 >= 0.8781413478305468 && this.value/1000 < 0.9528156734024003) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#febe69", "#feaa65", ((this.value/1000-(0.8781413478305468))/0.0746743255718535)));
	}
	else if (this.value/1000 >= 0.9528156734024003) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#feaa65", "#feaa65", 0));
	}
	else {
		if (this.value/1000 >= 0.402595137962868) {
		document.getElementById("Sweden").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.402595137962868))/0.0447327931069853)));
		}
		else {
			document.getElementById("Sweden").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.4579444045543133 && this.value/1000 < 0.5527233562416658) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#f2e9e0", "#fee893", ((this.value/1000-(0.4579444045543133))/0.09477895168735251)));
		}
	}
	else if (this.value/1000 >= 0.5527233562416658 && this.value/1000 < 0.6295517488973228) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fee893", "#fedb67", ((this.value/1000-(0.5527233562416658))/0.076828392655657)));
		}
	}
	else if (this.value/1000 >= 0.6295517488973228 && this.value/1000 < 0.7027900297466407) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fedb67", "#feca6a", ((this.value/1000-(0.6295517488973228))/0.07323828084931794)));
		}
	}
	else if (this.value/1000 >= 0.7027900297466407 && this.value/1000 < 0.7964919478920915) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#feca6a", "#fea263", ((this.value/1000-(0.7027900297466407))/0.09370191814545081)));
		}
	}
	else if (this.value/1000 >= 0.7964919478920915 && this.value/1000 < 0.8901938660375424) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fea263", "#fe9a60", ((this.value/1000-(0.7964919478920915))/0.09370191814545081)));
		}
	}
	else if (this.value/1000 >= 0.8901938660375424 && this.value/1000 < 0.9293260847266386) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fe9a60", "#fedc67", ((this.value/1000-(0.8901938660375424))/0.03913221868909622)));
		}
	}
	else if (this.value/1000 >= 0.9293260847266386 && this.value/1000 < 0.976356549389681) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fedc67", "#fef2bf", ((this.value/1000-(0.9293260847266386))/0.04703046466304239)));
		}
	}
	else if (this.value/1000 >= 0.976356549389681) {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		for (i = 0; i < paths.length; i++) {
			paths[i].setAttribute("fill", interpolateColor("#fef2bf", "#fef2bf", 0));
		}
	}
	else {
		paths = document.getElementById("United_Kingdom").querySelectorAll("path");
		if (this.value/1000 >= 0.412149964098882) {
			for (i = 0; i < paths.length; i++) {
				paths[i].setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.412149964098882))/0.045794440455431296)));
			}
		}
		else {
			for (i = 0; i < paths.length; i++) {
				paths[i].setAttribute("fill", "#c0c0c0");
			}
		}
	}
	if (this.value/1000 >= 0.6997127910554929 && this.value/1000 < 0.8820904708175198) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fedc67", "#fe9f62", ((this.value/1000-(0.6997127910554929))/0.1823776797620269)));
	}
	else if (this.value/1000 >= 0.8820904708175198 && this.value/1000 < 0.9614319417376141) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fe9f62", "#fa8054", ((this.value/1000-(0.8820904708175198))/0.07934147092009436)));
	}
	else if (this.value/1000 >= 0.9614319417376141) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#fa8054", "#fa8054", 0));
	}
	else {
		if (this.value/1000 >= 0.6297415119499437) {
		document.getElementById("Moldova").setAttribute("fill", interpolateColor("#c0c0c0", "#fedc67", ((this.value/1000-(0.6297415119499437))/0.06997127910554923)));
		}
		else {
			document.getElementById("Moldova").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
	if (this.value/1000 >= 0.04379936403733716 && this.value/1000 < 0.23515232331521183) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#f2e9e0", "#fedf6d", ((this.value/1000-(0.04379936403733716))/0.19135295927787466)));
	}
	else if (this.value/1000 >= 0.23515232331521183 && this.value/1000 < 0.3572161247307416) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fedf6d", "#fece6a", ((this.value/1000-(0.23515232331521183))/0.12206380141552978)));
	}
	else if (this.value/1000 >= 0.3572161247307416 && this.value/1000 < 0.42973638321879165) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fece6a", "#fead65", ((this.value/1000-(0.3572161247307416))/0.07252025848805005)));
	}
	else if (this.value/1000 >= 0.42973638321879165 && this.value/1000 < 0.5047697199712791) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fead65", "#fe985f", ((this.value/1000-(0.42973638321879165))/0.07503333675248741)));
	}
	else if (this.value/1000 >= 0.5047697199712791 && this.value/1000 < 0.5270284131705816) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe985f", "#fe9960", ((this.value/1000-(0.5047697199712791))/0.022258693199302515)));
	}
	else if (this.value/1000 >= 0.5270284131705816 && this.value/1000 < 0.598112626936096) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe9960", "#fe8b59", ((this.value/1000-(0.5270284131705816))/0.07108421376551444)));
	}
	else if (this.value/1000 >= 0.598112626936096 && this.value/1000 < 0.6569904605600574) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe8b59", "#fecd6a", ((this.value/1000-(0.598112626936096))/0.05887783362396137)));
	}
	else if (this.value/1000 >= 0.6569904605600574 && this.value/1000 < 0.7291517078674736) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fecd6a", "#fec86a", ((this.value/1000-(0.6569904605600574))/0.07216124730741624)));
	}
	else if (this.value/1000 >= 0.7291517078674736 && this.value/1000 < 0.7664888706534003) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fec86a", "#feaa65", ((this.value/1000-(0.7291517078674736))/0.03733716278592669)));
	}
	else if (this.value/1000 >= 0.7664888706534003 && this.value/1000 < 0.8601907887988511) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#feaa65", "#fe9f62", ((this.value/1000-(0.7664888706534003))/0.09370191814545081)));
	}
	else if (this.value/1000 >= 0.8601907887988511 && this.value/1000 < 0.9359421479126064) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe9f62", "#fe8d5b", ((this.value/1000-(0.8601907887988511))/0.0757513591137553)));
	}
	else if (this.value/1000 >= 0.9359421479126064 && this.value/1000 < 0.9725612883372654) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#fe8d5b", "#feaf66", ((this.value/1000-(0.9359421479126064))/0.03661914042465897)));
	}
	else if (this.value/1000 >= 0.9725612883372654) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#feaf66", "#feaf66", 0));
	}
	else {
		if (this.value/1000 >= 0.03941942763360345) {
		document.getElementById("Austria").setAttribute("fill", interpolateColor("#c0c0c0", "#f2e9e0", ((this.value/1000-(0.03941942763360345))/0.004379936403733714)));
		}
		else {
			document.getElementById("Austria").setAttribute("fill", "#c0c0c0");
		}
	}
	if (typeof selectedCountry != 'undefined' && selectedCountry != "") {
		countryClick(selectedCountry)
	}
}

var event = document.createEvent('Event');
event.initEvent('input', true, true);
document.getElementById("timeline").dispatchEvent(event);
