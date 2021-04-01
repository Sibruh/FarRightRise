var selectedCountry = "";

function countryClick(country) {
	selectedCountry = country;
	if (country == "Ukraine") {
		if (document.getElementById("timeline").value/1000 >= 0.4947174069135296 && document.getElementById("timeline").value/1000 < 0.5697507436660171) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 March 1994.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5697507436660171 && document.getElementById("timeline").value/1000 < 0.719458405990358) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 March 1998.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.719458405990358 && document.getElementById("timeline").value/1000 < 0.747820289260437) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 March 2006.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.747820289260437 && document.getElementById("timeline").value/1000 < 0.8429582521284235) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 September 2007.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8429582521284235 && document.getElementById("timeline").value/1000 < 0.8802954149143501) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 October 2012.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 10.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8802954149143501 && document.getElementById("timeline").value/1000 < 0.9689711765309262) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 October 2014.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 4.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9689711765309262) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 July 2019.<\p>\n<ul>\n	<li>Narional Corps (NC) received 2.2% of the votes</li>\n	<li>Svoboda (Svoboda) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Narional Corps</h3>\n<p>Lorem ipsum et cetera National Corps</p>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n";
		}
	}
	else if (country == "Russia") {
		if (document.getElementById("timeline").value/1000 >= 0.4893322392040209 && document.getElementById("timeline").value/1000 < 0.5270284131705816) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 December 1993.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 22.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5270284131705816 && document.getElementById("timeline").value/1000 < 0.602061749923069) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 December 1995.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 11.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.602061749923069 && document.getElementById("timeline").value/1000 < 0.6763770643142887) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 December 1999.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 6.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6763770643142887 && document.getElementById("timeline").value/1000 < 0.7510513898861422) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 December 2003.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 11.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7510513898861422 && document.getElementById("timeline").value/1000 < 0.8260847266386296) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 02 December 2007.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8260847266386296 && document.getElementById("timeline").value/1000 < 0.9158375217971074) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 December 2011.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 11.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9158375217971074) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 September 2016.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 13.14% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n";
		}
	}
	else if (country == "North_Macedonia") {
		if (document.getElementById("timeline").value/1000 >= 0.43153143912196124 && document.getElementById("timeline").value/1000 < 0.505128731151913) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 November 1990.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 30.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.505128731151913 && document.getElementById("timeline").value/1000 < 0.5801620679044005) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 October 1994.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 14.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5801620679044005 && document.getElementById("timeline").value/1000 < 0.6534003487537183) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 October 1998.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 28.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6534003487537183 && document.getElementById("timeline").value/1000 < 0.7246384244537901) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 2002.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 25.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7246384244537901 && document.getElementById("timeline").value/1000 < 0.7603856805826239) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 05 July 2006.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 32.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7603856805826239 && document.getElementById("timeline").value/1000 < 0.8167504359421479) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 June 2008.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 48.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8167504359421479 && document.getElementById("timeline").value/1000 < 0.8702431018566007) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 June 2011.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 40.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8702431018566007 && document.getElementById("timeline").value/1000 < 0.9201456559647143) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 April 2014.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 43.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9201456559647143 && document.getElementById("timeline").value/1000 < 0.9874346086778131) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 December 2016.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 38.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9874346086778131) {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 July 2020.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 34.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>North_Macedonia</h1>\n<p>Lorem ipsum et cetera North_Macedonia</p>\n";
		}
	}
	else if (country == "Bulgaria") {
		if (document.getElementById("timeline").value/1000 >= 0.7054056826341163 && document.getElementById("timeline").value/1000 < 0.7808493178787568) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 25 June 2005.<\p>\n<ul>\n	<li>Attack (Ataka) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7808493178787568 && document.getElementById("timeline").value/1000 < 0.8530105651861729) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 July 2009.<\p>\n<ul>\n	<li>Attack (Ataka) received 9.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8530105651861729 && document.getElementById("timeline").value/1000 < 0.8792183813724485) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 May 2013.<\p>\n<ul>\n	<li>Attack (Ataka) received 7.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8792183813724485 && document.getElementById("timeline").value/1000 < 0.925530823674223) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 October 2014.<\p>\n<ul>\n	<li>Attack (Ataka) received 4.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.925530823674223) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 March 2017.<\p>\n<ul>\n	<li>Attack (Ataka) received 9.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n";
		}
	}
	else if (country == "Lithuania") {
		if (document.getElementById("timeline").value/1000 >= 0.658426505282593 && document.getElementById("timeline").value/1000 < 0.6921735562621807) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 December 2002.<\p>\n<ul>\n	<li>Order and Justice (TT) received 54.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6921735562621807 && document.getElementById("timeline").value/1000 < 0.7672068930146682) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 October 2004.<\p>\n<ul>\n	<li>Order and Justice (TT) received 11.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7672068930146682 && document.getElementById("timeline").value/1000 < 0.8422402297671556) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 October 2008.<\p>\n<ul>\n	<li>Order and Justice (TT) received 12.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8422402297671556 && document.getElementById("timeline").value/1000 < 0.917632577700277) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 2012.<\p>\n<ul>\n	<li>Order and Justice (TT) received 7.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.917632577700277) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 October 2016.<\p>\n<ul>\n	<li>Order and Justice (TT) received 5.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n";
		}
	}
	else if (country == "Latvia") {
		if (document.getElementById("timeline").value/1000 >= 0.8041337573084419 && document.getElementById("timeline").value/1000 < 0.8220843163401375) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 02 October 2010.<\p>\n<ul>\n	<li>National Alliance (NA) received 7.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8220843163401375 && document.getElementById("timeline").value/1000 < 0.8791670940609293) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 17 September 2011.<\p>\n<ul>\n	<li>National Alliance (NA) received 14.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8791670940609293 && document.getElementById("timeline").value/1000 < 0.9542004308134168) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 04 October 2014.<\p>\n<ul>\n	<li>National Alliance (NA) received 16.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9542004308134168) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 06 October 2018.<\p>\n<ul>\n	<li>National Alliance (NA) received 11.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n";
		}
	}
	else if (country == "Estonia") {
		if (document.getElementById("timeline").value/1000 >= 0.8867576161657605 && document.getElementById("timeline").value/1000 < 0.961790952918248) {
			document.getElementById("textbox").innerHTML = "<h1>Estonia</h1>\n<p>Lorem ipsum et cetera Estonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 March 2015.<\p>\n<ul>\n	<li>Conservative People's Party of Estonia (EKRE) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Conservative People's Party of Estonia</h3>\n<p>Lorem ipsum et cetera Conservative People's Party of Estonia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.961790952918248) {
			document.getElementById("textbox").innerHTML = "<h1>Estonia</h1>\n<p>Lorem ipsum et cetera Estonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 March 2019.<\p>\n<ul>\n	<li>Conservative People's Party of Estonia (EKRE) received 17.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Conservative People's Party of Estonia</h3>\n<p>Lorem ipsum et cetera Conservative People's Party of Estonia</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Estonia</h1>\n<p>Lorem ipsum et cetera Estonia</p>\n";
		}
	}
	else if (country == "Greece") {
		if (document.getElementById("timeline").value/1000 >= 0.541388860395938 && document.getElementById("timeline").value/1000 < 0.6860703661914043) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 September 1996.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6860703661914043 && document.getElementById("timeline").value/1000 < 0.7471022668991691) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 2004.<\p>\n<ul>\n	<li>Popular Orthodox Rally (LAOS) received 4.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7471022668991691 && document.getElementById("timeline").value/1000 < 0.7855164632269976) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 September 2007.<\p>\n<ul>\n	<li>Popular Orthodox Rally (LAOS) received 3.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7855164632269976 && document.getElementById("timeline").value/1000 < 0.8339829726125757) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 October 2009.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 0.3% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 5.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8339829726125757 && document.getElementById("timeline").value/1000 < 0.8361370396963791) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 May 2012.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 7.0% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 2.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8361370396963791 && document.getElementById("timeline").value/1000 < 0.884962560262591) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 June 2012.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 6.9% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 1.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.884962560262591 && document.getElementById("timeline").value/1000 < 0.897168940404144) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 January 2015.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 6.3% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.897168940404144 && document.getElementById("timeline").value/1000 < 0.9682531541696584) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 September 2015.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 7.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9682531541696584) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 July 2019.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 2.9% of the votes</li>\n	<li>Greek Solution (EL) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Greek Solution</h3>\n<p>Lorem ipsum et cetera Greek Solution</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n";
		}
	}
	else if (country == "Cyprus") {
		if (document.getElementById("timeline").value/1000 >= 0.8160324135808801 && document.getElementById("timeline").value/1000 < 0.848702431018566) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 May 2011.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 1.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.848702431018566 && document.getElementById("timeline").value/1000 < 0.9097343317263309) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 February 2013.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 0.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9097343317263309 && document.getElementById("timeline").value/1000 < 0.9413273156221151) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 May 2016.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9413273156221151 && document.getElementById("timeline").value/1000 < 0.966099087085855) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 January 2018.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 5.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.966099087085855) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 May 2019.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 8.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n";
		}
	}
	else if (country == "Turkey") {
		if (document.getElementById("timeline").value/1000 >= 0.03661914042465894 && document.getElementById("timeline").value/1000 < 0.11165247717714638) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 October 1969.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 3.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.11165247717714638 && document.getElementById("timeline").value/1000 < 0.1798646014975895) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 1973.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 3.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.1798646014975895 && document.getElementById("timeline").value/1000 < 0.5273874243512156) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 June 1977.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 6.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5273874243512156 && document.getElementById("timeline").value/1000 < 0.5894963586008821) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 December 1995.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 8.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5894963586008821 && document.getElementById("timeline").value/1000 < 0.6559134270181557) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 April 1999.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 18.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6559134270181557 && document.getElementById("timeline").value/1000 < 0.7442301774540978) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 November 2002.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 8.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7442301774540978 && document.getElementById("timeline").value/1000 < 0.8171094471227818) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 July 2007.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 14.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8171094471227818 && document.getElementById("timeline").value/1000 < 0.8917837726946354) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 June 2011.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 13.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8917837726946354 && document.getElementById("timeline").value/1000 < 0.8993230074879475) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 June 2015.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 16.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8993230074879475 && document.getElementById("timeline").value/1000 < 0.9488665504154272) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 November 2015.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 11.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9488665504154272) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 June 2018.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 11.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n";
		}
	}
	else if (country == "Croatia") {
		if (document.getElementById("timeline").value/1000 >= 0.46384244537901326 && document.getElementById("timeline").value/1000 < 0.5245153349061442) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 02 August 1992.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 7.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5245153349061442 && document.getElementById("timeline").value/1000 < 0.602831059595856) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 October 1995.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.602831059595856 && document.getElementById("timeline").value/1000 < 0.6756590419530208) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Monday 03 January 2000.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 5.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6756590419530208 && document.getElementById("timeline").value/1000 < 0.7506923787055083) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 November 2003.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 6.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7506923787055083 && document.getElementById("timeline").value/1000 < 0.7898245973946045) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 November 2007.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 3.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7898245973946045 && document.getElementById("timeline").value/1000 < 0.8835265155400553) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 December 2009.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 5.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8835265155400553 && document.getElementById("timeline").value/1000 < 0.9804082469996923) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 December 2014.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 6.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9804082469996923) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 29 February 2020.<\p>\n<ul>\n	<li>Homeland Movement (DP) received 10.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Homeland Movement</h3>\n<p>Lorem ipsum et cetera Homeland Movement</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n";
		}
	}
	else if (country == "Romania") {
		if (document.getElementById("timeline").value/1000 >= 0.46671453482408454 && document.getElementById("timeline").value/1000 < 0.5435429274797415) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 September 1992.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 3.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5435429274797415 && document.getElementById("timeline").value/1000 < 0.6196532977741307) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 November 1996.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 4.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6196532977741307 && document.getElementById("timeline").value/1000 < 0.6946866345266182) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 November 2000.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 19.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6946866345266182 && document.getElementById("timeline").value/1000 < 0.7697199712791055) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 November 2004.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 12.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7697199712791055 && document.getElementById("timeline").value/1000 < 0.8451123192122268) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 November 2008.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8451123192122268 && document.getElementById("timeline").value/1000 < 0.9201456559647143) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 December 2012.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9201456559647143 && document.getElementById("timeline").value/1000 < 0.9948199815365678) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 December 2016.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9948199815365678) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 December 2020.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 0.6% of the votes</li>\n	<li>Alliance for the Unity of Romanians (AUR) received 9.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n<h3>Alliance for the Unity of Romanians</h3>\n<p>Lorem ipsum et cetera Alliance for the Unity of Romanians</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n";
		}
	}
	else if (country == "Serbia") {
		if (document.getElementById("timeline").value/1000 >= 0.47102266899169143 && document.getElementById("timeline").value/1000 < 0.564622012514104) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 December 1992.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 22.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.564622012514104 && document.getElementById("timeline").value/1000 < 0.6210380551851472) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 19 December 1997.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6210380551851472 && document.getElementById("timeline").value/1000 < 0.6774540978561904) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 23 December 2000.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 28.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6774540978561904 && document.getElementById("timeline").value/1000 < 0.7348958867576162) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 December 2003.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 8.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7348958867576162 && document.getElementById("timeline").value/1000 < 0.7593086470407221) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 January 2007.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 27.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7593086470407221 && document.getElementById("timeline").value/1000 < 0.8339829726125757) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 May 2008.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 29.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8339829726125757 && document.getElementById("timeline").value/1000 < 0.868807057134065) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 May 2012.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 4.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.868807057134065 && document.getElementById("timeline").value/1000 < 0.9082982870037952) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 March 2014.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9082982870037952 && document.getElementById("timeline").value/1000 < 0.986203713201354) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 April 2016.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.986203713201354) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 June 2020.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 2.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n";
		}
	}
	else if (country == "Finland") {
		if (document.getElementById("timeline").value/1000 >= 0.5880603138783465 && document.getElementById("timeline").value/1000 < 0.6627346394502001) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 March 1999.<\p>\n<ul>\n	<li>The Finns (PS) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6627346394502001 && document.getElementById("timeline").value/1000 < 0.7377679762026874) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 March 2003.<\p>\n<ul>\n	<li>The Finns (PS) received 1.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7377679762026874 && document.getElementById("timeline").value/1000 < 0.8142373576777105) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 March 2007.<\p>\n<ul>\n	<li>The Finns (PS) received 4.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8142373576777105 && document.getElementById("timeline").value/1000 < 0.889270694430198) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 April 2011.<\p>\n<ul>\n	<li>The Finns (PS) received 19.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.889270694430198 && document.getElementById("timeline").value/1000 < 0.9639450200020515) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 April 2015.<\p>\n<ul>\n	<li>The Finns (PS) received 17.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9639450200020515) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 April 2019.<\p>\n<ul>\n	<li>The Finns (PS) received 17.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n";
		}
	}
	else if (country == "Slovakia") {
		if (document.getElementById("timeline").value/1000 >= 0.4235306185249769 && document.getElementById("timeline").value/1000 < 0.46086778131090367) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 08 June 1990.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.46086778131090367 && document.getElementById("timeline").value/1000 < 0.5043081341676069) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 05 June 1992.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 7.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5043081341676069 && document.getElementById("timeline").value/1000 < 0.5789824597394605) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 30 September 1994.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 5.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5789824597394605 && document.getElementById("timeline").value/1000 < 0.653656785311314) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 25 September 1998.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 9.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.653656785311314 && document.getElementById("timeline").value/1000 < 0.7237152528464458) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 20 September 2002.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 3.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7237152528464458 && document.getElementById("timeline").value/1000 < 0.7983895784182993) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 17 June 2006.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 11.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7983895784182993 && document.getElementById("timeline").value/1000 < 0.8310595958559852) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 12 June 2010.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 5.1% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8310595958559852 && document.getElementById("timeline").value/1000 < 0.9057339214278387) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 10 March 2012.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 4.6% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 1.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9057339214278387 && document.getElementById("timeline").value/1000 < 0.9804082469996923) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 05 March 2016.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 8.6% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 8.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9804082469996923) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 29 February 2020.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 3.2% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 8.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n";
		}
	}
	else if (country == "Luxembourg") {
		if (document.getElementById("timeline").value/1000 >= 0.4053236229356857 && document.getElementById("timeline").value/1000 < 0.49866652990050264) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 June 1989.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 7.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.49866652990050264 && document.getElementById("timeline").value/1000 < 0.5923684480459535) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 June 1994.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 9.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5923684480459535 && document.getElementById("timeline").value/1000 < 0.6860703661914043) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 1999.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 11.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6860703661914043 && document.getElementById("timeline").value/1000 < 0.7794132731562211) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 2004.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 10.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7794132731562211 && document.getElementById("timeline").value/1000 < 0.8612678223407529) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 June 2009.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 11.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8612678223407529 && document.getElementById("timeline").value/1000 < 0.9546107293055698) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 2013.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 6.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9546107293055698) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 2018.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 8.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n";
		}
	}
	else if (country == "Norway") {
		if (document.getElementById("timeline").value/1000 >= 0.10985742127397682 && document.getElementById("timeline").value/1000 < 0.18489075802646426) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 September 1973.<\p>\n<ul>\n	<li>Progress Party (FrP) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.18489075802646426 && document.getElementById("timeline").value/1000 < 0.2599240947789517) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 September 1977.<\p>\n<ul>\n	<li>Progress Party (FrP) received 1.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.2599240947789517 && document.getElementById("timeline").value/1000 < 0.3345984203508052) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 September 1981.<\p>\n<ul>\n	<li>Progress Party (FrP) received 4.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3345984203508052 && document.getElementById("timeline").value/1000 < 0.40963175710329264) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 September 1985.<\p>\n<ul>\n	<li>Progress Party (FrP) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.40963175710329264 && document.getElementById("timeline").value/1000 < 0.4846650938557801) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 September 1989.<\p>\n<ul>\n	<li>Progress Party (FrP) received 13.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4846650938557801 && document.getElementById("timeline").value/1000 < 0.5596984306082675) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 September 1993.<\p>\n<ul>\n	<li>Progress Party (FrP) received 6.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5596984306082675 && document.getElementById("timeline").value/1000 < 0.634372756180121) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 September 1997.<\p>\n<ul>\n	<li>Progress Party (FrP) received 15.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.634372756180121 && document.getElementById("timeline").value/1000 < 0.7094060929326085) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 September 2001.<\p>\n<ul>\n	<li>Progress Party (FrP) received 14.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7094060929326085 && document.getElementById("timeline").value/1000 < 0.784439429685096) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 September 2005.<\p>\n<ul>\n	<li>Progress Party (FrP) received 22.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.784439429685096 && document.getElementById("timeline").value/1000 < 0.8591137552569494) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 September 2009.<\p>\n<ul>\n	<li>Progress Party (FrP) received 22.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8591137552569494 && document.getElementById("timeline").value/1000 < 0.934198379320956) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 September 2013.<\p>\n<ul>\n	<li>Progress Party (FrP) received 16.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.934198379320956) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Monday 11 September 2017.<\p>\n<ul>\n	<li>Progress Party (FrP) received 15.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n";
		}
	}
	else if (country == "Slovenia") {
		if (document.getElementById("timeline").value/1000 >= 0.42040209252231 && document.getElementById("timeline").value/1000 < 0.47030464663042365) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 April 1990.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 7.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.47030464663042365 && document.getElementById("timeline").value/1000 < 0.5439019386603754) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 December 1992.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 3.3% of the votes</li>\n	<li>Slovenian National Party (SNS) received 10.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5439019386603754 && document.getElementById("timeline").value/1000 < 0.6174992306903272) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 November 1996.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 16.3% of the votes</li>\n	<li>Slovenian National Party (SNS) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6174992306903272 && document.getElementById("timeline").value/1000 < 0.6918145450815468) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 October 2000.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 15.8% of the votes</li>\n	<li>Slovenian National Party (SNS) received 4.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6918145450815468 && document.getElementById("timeline").value/1000 < 0.7661298594727665) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 2004.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 29.0% of the votes</li>\n	<li>Slovenian National Party (SNS) received 6.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7661298594727665 && document.getElementById("timeline").value/1000 < 0.8260847266386296) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 September 2008.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 29.2% of the votes</li>\n	<li>Slovenian National Party (SNS) received 5.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8260847266386296 && document.getElementById("timeline").value/1000 < 0.8749102472048416) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 December 2011.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 26.1% of the votes</li>\n	<li>Slovenian National Party (SNS) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8749102472048416 && document.getElementById("timeline").value/1000 < 0.9477895168735255) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 July 2014.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 20.7% of the votes</li>\n	<li>Slovenian National Party (SNS) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9477895168735255) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 June 2018.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 24.9% of the votes</li>\n	<li>Slovenian National Party (SNS) received 4.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n";
		}
	}
	else if (country == "Czech_Republic") {
		if (document.getElementById("timeline").value/1000 >= 0.8615755462098676 && document.getElementById("timeline").value/1000 < 0.9362498717817213) {
			document.getElementById("textbox").innerHTML = "<h1>Czech_Republic</h1>\n<p>Lorem ipsum et cetera Czech_Republic</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 26 October 2013.<\p>\n<ul>\n	<li>Freedom and Direct Democracy (SPD) received 6.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom and Direct Democracy</h3>\n<p>Lorem ipsum et cetera Freedom and Direct Democracy</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9362498717817213) {
			document.getElementById("textbox").innerHTML = "<h1>Czech_Republic</h1>\n<p>Lorem ipsum et cetera Czech_Republic</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 21 October 2017.<\p>\n<ul>\n	<li>Freedom and Direct Democracy (SPD) received 10.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom and Direct Democracy</h3>\n<p>Lorem ipsum et cetera Freedom and Direct Democracy</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Czech_Republic</h1>\n<p>Lorem ipsum et cetera Czech_Republic</p>\n";
		}
	}
	else if (country == "Danish_Kingdom") {
		if (document.getElementById("timeline").value/1000 >= 0.5688275720586727 && document.getElementById("timeline").value/1000 < 0.6380654426094984) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 11 March 1998.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 7.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6380654426094984 && document.getElementById("timeline").value/1000 < 0.6983793209559955) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 20 November 2001.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 12.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6983793209559955 && document.getElementById("timeline").value/1000 < 0.7500769309672787) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 08 February 2005.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 13.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7500769309672787 && document.getElementById("timeline").value/1000 < 0.8219817417170991) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 13 November 2007.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8219817417170991 && document.getElementById("timeline").value/1000 < 0.8923479331213457) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 15 September 2011.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 12.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8923479331213457 && document.getElementById("timeline").value/1000 < 0.9666119602010462) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 18 June 2015.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 21.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9666119602010462) {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 05 June 2019.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 8.7% of the votes</li>\n	<li>The New Right (NB) received 2.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n<h3>The New Right</h3>\n<p>Lorem ipsum et cetera The New Right</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Danish_Kingdom</h1>\n<p>Lorem ipsum et cetera Danish_Kingdom</p>\n";
		}
	}
	else if (country == "Portugal") {
		if (document.getElementById("timeline").value/1000 >= 0.9729202995178993 && document.getElementById("timeline").value/1000 < 0.9973330598010053) {
			document.getElementById("textbox").innerHTML = "<h1>Portugal</h1>\n<p>Lorem ipsum et cetera Portugal</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 October 2019.<\p>\n<ul>\n	<li>ENOUGH! (CHEGA!) received 1.29% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>ENOUGH!</h3>\n<p>Lorem ipsum et cetera ENOUGH!</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9973330598010053) {
			document.getElementById("textbox").innerHTML = "<h1>Portugal</h1>\n<p>Lorem ipsum et cetera Portugal</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 January 2021.<\p>\n<ul>\n	<li>ENOUGH! (CHEGA!) received 11.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>ENOUGH!</h3>\n<p>Lorem ipsum et cetera ENOUGH!</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Portugal</h1>\n<p>Lorem ipsum et cetera Portugal</p>\n";
		}
	}
	else if (country == "Poland") {
		if (document.getElementById("timeline").value/1000 >= 0.6350907785413888 && document.getElementById("timeline").value/1000 < 0.7101241152938763) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 September 2001.<\p>\n<ul>\n	<li>United Right (ZP) received 9.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7101241152938763 && document.getElementById("timeline").value/1000 < 0.7488973228023387) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 September 2005.<\p>\n<ul>\n	<li>United Right (ZP) received 27.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7488973228023387 && document.getElementById("timeline").value/1000 < 0.8232126371935583) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 October 2007.<\p>\n<ul>\n	<li>United Right (ZP) received 31.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8232126371935583 && document.getElementById("timeline").value/1000 < 0.8989639963073136) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 October 2011.<\p>\n<ul>\n	<li>United Right (ZP) received 29.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8989639963073136 && document.getElementById("timeline").value/1000 < 0.9732793106985331) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 October 2015.<\p>\n<ul>\n	<li>United Right (ZP) received 37.6% of the votes</li>\n	<li>National Movement (RN) received 8.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n<h3>National Movement</h3>\n<p>Lorem ipsum et cetera National Movement</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9732793106985331) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 October 2019.<\p>\n<ul>\n	<li>United Right (ZP) received 43.6% of the votes</li>\n	<li>National Movement (RN) received 6.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n<h3>National Movement</h3>\n<p>Lorem ipsum et cetera National Movement</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n";
		}
	}
	else if (country == "Spain") {
		if (document.getElementById("timeline").value/1000 >= 0.1803774746127808 && document.getElementById("timeline").value/1000 < 0.9018360857523848) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 June 1977.<\p>\n<ul>\n	<li>FET y de las JONS (FET) received 0.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>FET y de las JONS</h3>\n<p>Lorem ipsum et cetera FET y de las JONS</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9018360857523848 && document.getElementById("timeline").value/1000 < 0.9115293876295004) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 December 2015.<\p>\n<ul>\n	<li>Vox (VOX) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9115293876295004 && document.getElementById("timeline").value/1000 < 0.9646630423633193) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 June 2016.<\p>\n<ul>\n	<li>Vox (VOX) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9646630423633193 && document.getElementById("timeline").value/1000 < 0.9747153554210688) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 April 2019.<\p>\n<ul>\n	<li>Vox (VOX) received 10.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9747153554210688) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 November 2019.<\p>\n<ul>\n	<li>Vox (VOX) received 15.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n";
		}
	}
	else if (country == "Italy") {
		if (document.getElementById("timeline").value/1000 >= 0.4577392553082367 && document.getElementById("timeline").value/1000 < 0.4947174069135296) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 April 1992.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 8.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4947174069135296 && document.getElementById("timeline").value/1000 < 0.533490614421992) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 March 1994.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 8.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.533490614421992 && document.getElementById("timeline").value/1000 < 0.6282695661093446) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 April 1996.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 10.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6282695661093446 && document.getElementById("timeline").value/1000 < 0.7201764283516258) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 May 2001.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 3.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7201764283516258 && document.getElementById("timeline").value/1000 < 0.7578726023181864) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 April 2006.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 4.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7578726023181864 && document.getElementById("timeline").value/1000 < 0.8490614421991999) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 April 2008.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 8.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8490614421991999 && document.getElementById("timeline").value/1000 < 0.9431223715252847) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 February 2013.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 4.1% of the votes</li>\n	<li>Brothers of Italy (FdI) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n<h3>Brothers of Italy</h3>\n<p>Lorem ipsum et cetera Brothers of Italy</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9431223715252847) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 March 2018.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 17.4% of the votes</li>\n	<li>Brothers of Italy (FdI) received 4.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n<h3>Brothers of Italy</h3>\n<p>Lorem ipsum et cetera Brothers of Italy</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n";
		}
	}
	else if (country == "Hungary") {
		if (document.getElementById("timeline").value/1000 >= 0.41968407016104214 && document.getElementById("timeline").value/1000 < 0.49687147399733306) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 March 1990.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 9.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.49687147399733306 && document.getElementById("timeline").value/1000 < 0.5719048107498205) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 May 1994.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 7.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5719048107498205 && document.getElementById("timeline").value/1000 < 0.6451430915991384) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 May 1998.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 28.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6451430915991384 && document.getElementById("timeline").value/1000 < 0.7201764283516258) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 April 2002.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 41.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7201764283516258 && document.getElementById("timeline").value/1000 < 0.7952097651041132) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 April 2006.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 42.0% of the votes</li>\n	<li>Jobbik (Jobbik) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7952097651041132 && document.getElementById("timeline").value/1000 < 0.8698840906759667) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 April 2010.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 52.7% of the votes</li>\n	<li>Jobbik (Jobbik) received 16.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8698840906759667 && document.getElementById("timeline").value/1000 < 0.9449174274284542) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 April 2014.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 44.9% of the votes</li>\n	<li>Jobbik (Jobbik) received 20.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9449174274284542) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 April 2018.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 49.3% of the votes</li>\n	<li>Jobbik (Jobbik) received 19.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n";
		}
	}
	else if (country == "Switzerland") {
		if (document.getElementById("timeline").value/1000 >= 0.0 && document.getElementById("timeline").value/1000 < 0.07503333675248744) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 October 1967.<\p>\n<ul>\n	<li>Swiss Democrats (SD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.07503333675248744 && document.getElementById("timeline").value/1000 < 0.14970766232434096) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 31 October 1971.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.1% of the votes</li>\n	<li>Swiss Democrats (SD) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.14970766232434096 && document.getElementById("timeline").value/1000 < 0.22438198789619448) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 October 1975.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 9.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 2.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.22438198789619448 && document.getElementById("timeline").value/1000 < 0.2994153246486819) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 October 1979.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.2994153246486819 && document.getElementById("timeline").value/1000 < 0.3740896502205354) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 October 1983.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.1% of the votes</li>\n	<li>Swiss Democrats (SD) received 2.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3740896502205354 && document.getElementById("timeline").value/1000 < 0.4491229869730229) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 October 1987.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.0% of the votes</li>\n	<li>Swiss Democrats (SD) received 2.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4491229869730229 && document.getElementById("timeline").value/1000 < 0.5241563237255104) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 1991.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 3.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5241563237255104 && document.getElementById("timeline").value/1000 < 0.5991896604779977) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 October 1995.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 14.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 3.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5991896604779977 && document.getElementById("timeline").value/1000 < 0.6738639860498513) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 October 1999.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 22.5% of the votes</li>\n	<li>Swiss Democrats (SD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6738639860498513 && document.getElementById("timeline").value/1000 < 0.7488973228023387) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 October 2003.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 26.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7488973228023387 && document.getElementById("timeline").value/1000 < 0.8239306595548261) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 October 2007.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 28.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8239306595548261 && document.getElementById("timeline").value/1000 < 0.8986049851266796) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 October 2011.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 26.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8986049851266796 && document.getElementById("timeline").value/1000 < 0.9736383218791671) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 October 2015.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 29.4% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9736383218791671) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 2019.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 25.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n";
		}
	}
	else if (country == "France") {
		if (document.getElementById("timeline").value/1000 >= 0.10016411939686122 && document.getElementById("timeline").value/1000 < 0.19422504872294594) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 March 1973.<\p>\n<ul>\n	<li>National Rally (RN) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.19422504872294594 && document.getElementById("timeline").value/1000 < 0.25525694943071087) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 March 1978.<\p>\n<ul>\n	<li>National Rally (RN) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.25525694943071087 && document.getElementById("timeline").value/1000 < 0.3442917222279208) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 June 1981.<\p>\n<ul>\n	<li>National Rally (RN) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3442917222279208 && document.getElementById("timeline").value/1000 < 0.3838855267206893) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 March 1986.<\p>\n<ul>\n	<li>National Rally (RN) received 9.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3838855267206893 && document.getElementById("timeline").value/1000 < 0.5148220330290286) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 26 April 1988.<\p>\n<ul>\n	<li>National Rally (RN) received 14.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5148220330290286 && document.getElementById("timeline").value/1000 < 0.6458611139604062) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 April 1995.<\p>\n<ul>\n	<li>National Rally (RN) received 15.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6458611139604062 && document.getElementById("timeline").value/1000 < 0.739563032105857) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 April 2002.<\p>\n<ul>\n	<li>National Rally (RN) received 17.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.739563032105857 && document.getElementById("timeline").value/1000 < 0.8332649502513079) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 April 2007.<\p>\n<ul>\n	<li>National Rally (RN) received 10.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8332649502513079 && document.getElementById("timeline").value/1000 < 0.9276848907580265) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 April 2012.<\p>\n<ul>\n	<li>National Rally (RN) received 17.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9276848907580265) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 May 2017.<\p>\n<ul>\n	<li>National Rally (RN) received 33.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n";
		}
	}
	else if (country == "Germany") {
		if (document.getElementById("timeline").value/1000 >= -0.3410606216022156 && document.getElementById("timeline").value/1000 < -0.26495025130782646) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 August 1949.<\p>\n<ul>\n	<li>German Party (DP) received 4.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.26495025130782646 && document.getElementById("timeline").value/1000 < -0.1895579033747051) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 September 1953.<\p>\n<ul>\n	<li>German Party (DP) received 4.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.1895579033747051 && document.getElementById("timeline").value/1000 < -0.03949122986973023) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 1957.<\p>\n<ul>\n	<li>German Party (DP) received 3.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.03949122986973023 && document.getElementById("timeline").value/1000 < 0.035901118063391114) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 September 1965.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.035901118063391114 && document.getElementById("timeline").value/1000 < 0.09477895168735255) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 September 1969.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 4.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.09477895168735255 && document.getElementById("timeline").value/1000 < 0.1672992101754026) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 November 1972.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.1672992101754026 && document.getElementById("timeline").value/1000 < 0.24233254692789005) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 1976.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.24233254692789005 && document.getElementById("timeline").value/1000 < 0.28756795568776283) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 October 1980.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.28756795568776283 && document.getElementById("timeline").value/1000 < 0.3604472253564468) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 March 1983.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3604472253564468 && document.getElementById("timeline").value/1000 < 0.432608472663863) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 January 1987.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.432608472663863 && document.getElementById("timeline").value/1000 < 0.5790850343624987) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 02 December 1990.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5790850343624987 && document.getElementById("timeline").value/1000 < 0.6537593599343522) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 September 1998.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6537593599343522 && document.getElementById("timeline").value/1000 < 0.7097651041132423) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 September 2002.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7097651041132423 && document.getElementById("timeline").value/1000 < 0.7851574520463638) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 September 2005.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7851574520463638 && document.getElementById("timeline").value/1000 < 0.8598317776182173) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 September 2009.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8598317776182173 && document.getElementById("timeline").value/1000 < 0.9327623345984204) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 September 2013.<\p>\n<ul>\n	<li>Alternative for Germany (AfD) received 4.7% of the votes</li>\n	<li>National Democratic Party of Germany (NPD) received 1.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative for Germany</h3>\n<p>Lorem ipsum et cetera Alternative for Germany</p>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9327623345984204) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Monday 14 August 2017.<\p>\n<ul>\n	<li>Alternative for Germany (AfD) received 12.6% of the votes</li>\n	<li>National Democratic Party of Germany (NPD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative for Germany</h3>\n<p>Lorem ipsum et cetera Alternative for Germany</p>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n";
		}
	}
	else if (country == "The_Netherlands") {
		if (document.getElementById("timeline").value/1000 >= 0.3476766847881834 && document.getElementById("timeline").value/1000 < 0.40942660785721613) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 21 May 1986.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.40942660785721613 && document.getElementById("timeline").value/1000 < 0.4966150374397374) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 06 September 1989.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 0.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4966150374397374 && document.getElementById("timeline").value/1000 < 0.571699661503744) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 03 May 1994.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 2.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.571699661503744 && document.getElementById("timeline").value/1000 < 0.6470920094368653) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 06 May 1998.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6470920094368653 && document.getElementById("timeline").value/1000 < 0.6600164119396861) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 May 2002.<\p>\n<ul>\n	<li>Pim Fortuyn List (LPF) received 17.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Pim Fortuyn List</h3>\n<p>Lorem ipsum et cetera Pim Fortuyn List</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6600164119396861 && document.getElementById("timeline").value/1000 < 0.7318186480664683) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 22 January 2003.<\p>\n<ul>\n	<li>Pim Fortuyn List (LPF) received 5.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Pim Fortuyn List</h3>\n<p>Lorem ipsum et cetera Pim Fortuyn List</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7318186480664683 && document.getElementById("timeline").value/1000 < 0.7982357164837419) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 22 November 2006.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 5.9% of the votes</li>\n	<li>Pim Fortuyn List (LPF) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n<h3>Pim Fortuyn List</h3>\n<p>Lorem ipsum et cetera Pim Fortuyn List</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7982357164837419 && document.getElementById("timeline").value/1000 < 0.8405990357985434) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 09 June 2010.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 15.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8405990357985434 && document.getElementById("timeline").value/1000 < 0.9249666632475125) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 12 September 2012.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 10.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9249666632475125 && document.getElementById("timeline").value/1000 < 1.0) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 March 2017.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 13.0% of the votes</li>\n	<li>Forum for Democracy (FvD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n<h3>Forum for Democracy</h3>\n<p>Lorem ipsum et cetera Forum for Democracy</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 1.0) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p><h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 17 March 2021.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 10.8% of the votes</li>\n	<li>Forum for Democracy (FvD) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n<h3>Forum for Democracy</h3>\n<p>Lorem ipsum et cetera Forum for Democracy</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>";
		}
	}
	else if (country == "Belgium") {
		if (document.getElementById("timeline").value/1000 >= 0.26279618422402296 && document.getElementById("timeline").value/1000 < 0.33639347625397475) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 November 1981.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 1.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.33639347625397475 && document.getElementById("timeline").value/1000 < 0.37696173966560675) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 October 1985.<\p>\n<ul>\n	<li>Democracy National (DN) received 0.1% of the votes</li>\n	<li>Flemish Interest (VB) received 1.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.37696173966560675 && document.getElementById("timeline").value/1000 < 0.4509180428761924) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 December 1987.<\p>\n<ul>\n	<li>Democracy National (DN) received 0.1% of the votes</li>\n	<li>Flemish Interest (VB) received 1.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4509180428761924 && document.getElementById("timeline").value/1000 < 0.5162580777515643) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 November 1991.<\p>\n<ul>\n	<li>Democracy National (DN) received 1.1% of the votes</li>\n	<li>Flemish Interest (VB) received 6.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5162580777515643 && document.getElementById("timeline").value/1000 < 0.5923684480459535) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 May 1995.<\p>\n<ul>\n	<li>Democracy National (DN) received 2.3% of the votes</li>\n	<li>Flemish Interest (VB) received 7.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5923684480459535 && document.getElementById("timeline").value/1000 < 0.6659657400759053) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 1999.<\p>\n<ul>\n	<li>Democracy National (DN) received 1.5% of the votes</li>\n	<li>Flemish Interest (VB) received 9.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6659657400759053 && document.getElementById("timeline").value/1000 < 0.7420761103702944) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 May 2003.<\p>\n<ul>\n	<li>Democracy National (DN) received 2.0% of the votes</li>\n	<li>Flemish Interest (VB) received 11.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7420761103702944 && document.getElementById("timeline").value/1000 < 0.7984408657298184) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 June 2007.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 12.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7984408657298184 && document.getElementById("timeline").value/1000 < 0.8723971689404041) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 2010.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 7.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8723971689404041 && document.getElementById("timeline").value/1000 < 0.966099087085855) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 May 2014.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.966099087085855) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 May 2019.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 12.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n";
		}
	}
	else if (country == "Sweden") {
		if (document.getElementById("timeline").value/1000 >= 0.4473279310698533 && document.getElementById("timeline").value/1000 < 0.5036926864293774) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 1991.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5036926864293774 && document.getElementById("timeline").value/1000 < 0.5787260231818648) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 September 1994.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5787260231818648 && document.getElementById("timeline").value/1000 < 0.6534003487537183) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 September 1998.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6534003487537183 && document.getElementById("timeline").value/1000 < 0.7284336855062058) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 2002.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 1.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7284336855062058 && document.getElementById("timeline").value/1000 < 0.8034670222586932) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 September 2006.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 2.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8034670222586932 && document.getElementById("timeline").value/1000 < 0.8781413478305468) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 September 2010.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 5.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8781413478305468 && document.getElementById("timeline").value/1000 < 0.9528156734024003) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 September 2014.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 12.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9528156734024003) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 September 2018.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 17.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n";
		}
	}
	else if (country == "United_Kingdom") {
		if (document.getElementById("timeline").value/1000 >= 0.4579444045543133 && document.getElementById("timeline").value/1000 < 0.5527233562416658) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 09 April 1992.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5527233562416658 && document.getElementById("timeline").value/1000 < 0.6295517488973228) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 01 May 1997.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.1% of the votes</li>\n	<li>UK Independence Party (UKIP) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6295517488973228 && document.getElementById("timeline").value/1000 < 0.7027900297466407) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 07 June 2001.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.2% of the votes</li>\n	<li>UK Independence Party (UKIP) received 1.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7027900297466407 && document.getElementById("timeline").value/1000 < 0.7964919478920915) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 05 May 2005.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.7% of the votes</li>\n	<li>UK Independence Party (UKIP) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7964919478920915 && document.getElementById("timeline").value/1000 < 0.8901938660375424) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 06 May 2010.<\p>\n<ul>\n	<li>British National Party (BNP) received 1.9% of the votes</li>\n	<li>UK Independence Party (UKIP) received 3.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8901938660375424 && document.getElementById("timeline").value/1000 < 0.9293260847266386) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 07 May 2015.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.0% of the votes</li>\n	<li>UK Independence Party (UKIP) received 12.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9293260847266386 && document.getElementById("timeline").value/1000 < 0.976356549389681) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 08 June 2017.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.0% of the votes</li>\n	<li>UK Independence Party (UKIP) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.976356549389681) {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 12 December 2019.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.0% of the votes</li>\n	<li>UK Independence Party (UKIP) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>United_Kingdom</h1>\n<p>Lorem ipsum et cetera United_Kingdom</p>\n";
		}
	}
	else if (country == "Moldova") {
		if (document.getElementById("timeline").value/1000 >= 0.6997127910554929 && document.getElementById("timeline").value/1000 < 0.8820904708175198) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 March 2005.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8820904708175198 && document.getElementById("timeline").value/1000 < 0.9614319417376141) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 November 2014.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 20.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9614319417376141) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 February 2019.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 31.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n";
		}
	}
	else if (country == "Austria") {
		if (document.getElementById("timeline").value/1000 >= 0.04379936403733716 && document.getElementById("timeline").value/1000 < 0.23515232331521183) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 March 1970.<\p>\n<ul>\n	<li>National Democratic Party of Austria (NDP) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Austria</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.23515232331521183 && document.getElementById("timeline").value/1000 < 0.3572161247307416) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 May 1980.<\p>\n<ul>\n	<li>National Democratic Party of Austria (NDP) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Austria</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3572161247307416 && document.getElementById("timeline").value/1000 < 0.42973638321879165) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 November 1986.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 9.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.42973638321879165 && document.getElementById("timeline").value/1000 < 0.5047697199712791) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 October 1990.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 16.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5047697199712791 && document.getElementById("timeline").value/1000 < 0.5270284131705816) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 October 1994.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 22.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5270284131705816 && document.getElementById("timeline").value/1000 < 0.598112626936096) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 December 1995.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 21.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.598112626936096 && document.getElementById("timeline").value/1000 < 0.6569904605600574) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 1999.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 26.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6569904605600574 && document.getElementById("timeline").value/1000 < 0.7291517078674736) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 November 2002.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 10.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7291517078674736 && document.getElementById("timeline").value/1000 < 0.7664888706534003) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 October 2006.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 11.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7664888706534003 && document.getElementById("timeline").value/1000 < 0.8601907887988511) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 September 2008.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 17.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8601907887988511 && document.getElementById("timeline").value/1000 < 0.9359421479126064) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 September 2013.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 20.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9359421479126064 && document.getElementById("timeline").value/1000 < 0.9725612883372654) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 October 2017.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 26.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9725612883372654) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 September 2019.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 16.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n";
		}
	}
	else {
		document.getElementById("textbox").innerHTML = "<p>Unfortunately, there is no data available for this country at this time.</p>";
	}
}
