var selectedCountry = "";

function countryClick(country) {
	selectedCountry = country;
	if (country == "Ukraine") {
		if (document.getElementById("timeline").value/1000 >= 0.4917915774446824 && document.getElementById("timeline").value/1000 < 0.5663811563169164) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 March 1994.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5663811563169164 && document.getElementById("timeline").value/1000 < 0.715203426124197) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 March 1998.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.715203426124197 && document.getElementById("timeline").value/1000 < 0.7433975731620271) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 March 2006.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7433975731620271 && document.getElementById("timeline").value/1000 < 0.8379728765167738) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 September 2007.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 0.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8379728765167738 && document.getElementById("timeline").value/1000 < 0.875089221984297) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 October 2012.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 10.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.875089221984297 && document.getElementById("timeline").value/1000 < 0.9632405424696645) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 October 2014.<\p>\n<ul>\n	<li>Svoboda (Svoboda) received 4.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9632405424696645) {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 July 2019.<\p>\n<ul>\n	<li>Narional Corps (NC) received 2.2% of the votes</li>\n	<li>Svoboda (Svoboda) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Narional Corps</h3>\n<p>Lorem ipsum et cetera National Corps</p>\n<h3>Svoboda</h3>\n<p>Lorem ipsum et cetera Svoboda</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Ukraine</h1>\n<p>Lorem ipsum et cetera Ukraine</p>\n";
		}
	}
	else if (country == "Russia") {
		if (document.getElementById("timeline").value/1000 >= 0.48643825838686655 && document.getElementById("timeline").value/1000 < 0.5239114917915775) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 December 1993.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 22.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5239114917915775 && document.getElementById("timeline").value/1000 < 0.5985010706638115) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 December 1995.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 11.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5985010706638115 && document.getElementById("timeline").value/1000 < 0.6723768736616702) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 December 1999.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 6.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6723768736616702 && document.getElementById("timeline").value/1000 < 0.7466095645967167) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 December 2003.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 11.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7466095645967167 && document.getElementById("timeline").value/1000 < 0.8211991434689507) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 02 December 2007.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8211991434689507 && document.getElementById("timeline").value/1000 < 0.9104211277658815) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 December 2011.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 11.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9104211277658815) {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 September 2016.<\p>\n<ul>\n	<li>Liberal Democratic Party of Russia (LDPR) received 13.14% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Liberal Democratic Party of Russia</h3>\n<p>Lorem ipsum et cetera Liberal Democratic Party of Russia</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Russia</h1>\n<p>Lorem ipsum et cetera Russia</p>\n";
		}
	}
	else if (country == "Bulgaria") {
		if (document.getElementById("timeline").value/1000 >= 0.701233812582849 && document.getElementById("timeline").value/1000 < 0.7762312633832976) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 25 June 2005.<\p>\n<ul>\n	<li>Attack (Ataka) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7762312633832976 && document.getElementById("timeline").value/1000 < 0.8479657387580299) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 July 2009.<\p>\n<ul>\n	<li>Attack (Ataka) received 9.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8479657387580299 && document.getElementById("timeline").value/1000 < 0.8740185581727338) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 May 2013.<\p>\n<ul>\n	<li>Attack (Ataka) received 7.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8740185581727338 && document.getElementById("timeline").value/1000 < 0.9200571020699501) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 October 2014.<\p>\n<ul>\n	<li>Attack (Ataka) received 4.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9200571020699501 && document.getElementById("timeline").value/1000 < 1.0) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 March 2017.<\p>\n<ul>\n	<li>Attack (Ataka) received 9.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 1.0) {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 July 2021.<\p>\n<ul>\n	<li>Attack (Ataka) received 0.5% of the votes</li>\n	<li>Bulgarian Patriots (BP) received 3.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Attack</h3>\n<p>Lorem ipsum et cetera Attack</p>\n<h3>Bulgarian Patriots</h3>\n<p>Lorem ipsum et cetera Bulgarian Patriots</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Bulgaria</h1>\n<p>Lorem ipsum et cetera Bulgaria</p>\n";
		}
	}
	else if (country == "Lithuania") {
		if (document.getElementById("timeline").value/1000 >= 0.6545324768022841 && document.getElementById("timeline").value/1000 < 0.6880799428979301) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 December 2002.<\p>\n<ul>\n	<li>Order and Justice (TT) received 54.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6880799428979301 && document.getElementById("timeline").value/1000 < 0.7626695217701641) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 October 2004.<\p>\n<ul>\n	<li>Order and Justice (TT) received 11.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7626695217701641 && document.getElementById("timeline").value/1000 < 0.8372591006423983) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 October 2008.<\p>\n<ul>\n	<li>Order and Justice (TT) received 12.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8372591006423983 && document.getElementById("timeline").value/1000 < 0.9122055674518201) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 2012.<\p>\n<ul>\n	<li>Order and Justice (TT) received 7.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9122055674518201) {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 October 2016.<\p>\n<ul>\n	<li>Order and Justice (TT) received 5.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Order and Justice</h3>\n<p>Lorem ipsum et cetera Order and Justice</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Lithuania</h1>\n<p>Lorem ipsum et cetera Lithuania</p>\n";
		}
	}
	else if (country == "Latvia") {
		if (document.getElementById("timeline").value/1000 >= 0.7993779953094728 && document.getElementById("timeline").value/1000 < 0.817222392168859) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 02 October 2010.<\p>\n<ul>\n	<li>National Alliance (NA) received 7.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.817222392168859 && document.getElementById("timeline").value/1000 < 0.8739675741817069) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 17 September 2011.<\p>\n<ul>\n	<li>National Alliance (NA) received 14.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8739675741817069 && document.getElementById("timeline").value/1000 < 0.9485571530539411) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 04 October 2014.<\p>\n<ul>\n	<li>National Alliance (NA) received 16.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9485571530539411) {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 06 October 2018.<\p>\n<ul>\n	<li>National Alliance (NA) received 11.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Alliance</h3>\n<p>Lorem ipsum et cetera National Alliance</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Latvia</h1>\n<p>Lorem ipsum et cetera Latvia</p>\n";
		}
	}
	else if (country == "Estonia") {
		if (document.getElementById("timeline").value/1000 >= 0.8815132048536759 && document.getElementById("timeline").value/1000 < 0.9561027837259101) {
			document.getElementById("textbox").innerHTML = "<h1>Estonia</h1>\n<p>Lorem ipsum et cetera Estonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 March 2015.<\p>\n<ul>\n	<li>Conservative People's Party of Estonia (EKRE) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Conservative People's Party of Estonia</h3>\n<p>Lorem ipsum et cetera Conservative People's Party of Estonia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9561027837259101) {
			document.getElementById("textbox").innerHTML = "<h1>Estonia</h1>\n<p>Lorem ipsum et cetera Estonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 March 2019.<\p>\n<ul>\n	<li>Conservative People's Party of Estonia (EKRE) received 17.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Conservative People's Party of Estonia</h3>\n<p>Lorem ipsum et cetera Conservative People's Party of Estonia</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Estonia</h1>\n<p>Lorem ipsum et cetera Estonia</p>\n";
		}
	}
	else if (country == "Greece") {
		if (document.getElementById("timeline").value/1000 >= 0.5381870092790864 && document.getElementById("timeline").value/1000 < 0.6820128479657388) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 September 1996.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6820128479657388 && document.getElementById("timeline").value/1000 < 0.7426837972876517) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 2004.<\p>\n<ul>\n	<li>Popular Orthodox Rally (LAOS) received 4.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7426837972876517 && document.getElementById("timeline").value/1000 < 0.780870806566738) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 September 2007.<\p>\n<ul>\n	<li>Popular Orthodox Rally (LAOS) received 3.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.780870806566738 && document.getElementById("timeline").value/1000 < 0.8290506780870807) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 October 2009.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 0.3% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 5.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8290506780870807 && document.getElementById("timeline").value/1000 < 0.831192005710207) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 May 2012.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 7.0% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 2.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.831192005710207 && document.getElementById("timeline").value/1000 < 0.8797287651677373) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 June 2012.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 6.9% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 1.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8797287651677373 && document.getElementById("timeline").value/1000 < 0.8918629550321199) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 January 2015.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 6.3% of the votes</li>\n	<li>Popular Orthodox Rally (LAOS) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Popular Orthodox Rally</h3>\n<p>Lorem ipsum et cetera Popular Orthodox Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8918629550321199 && document.getElementById("timeline").value/1000 < 0.9625267665952891) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 September 2015.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 7.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9625267665952891) {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 July 2019.<\p>\n<ul>\n	<li>Golden Dawn (XA) received 2.9% of the votes</li>\n	<li>Greek Solution (EL) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Golden Dawn</h3>\n<p>Lorem ipsum et cetera Golden Dawn</p>\n<h3>Greek Solution</h3>\n<p>Lorem ipsum et cetera Greek Solution</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Greece</h1>\n<p>Lorem ipsum et cetera Greece</p>\n";
		}
	}
	else if (country == "Cyprus") {
		if (document.getElementById("timeline").value/1000 >= 0.8112062812276946 && document.getElementById("timeline").value/1000 < 0.8436830835117773) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 May 2011.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 1.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8436830835117773 && document.getElementById("timeline").value/1000 < 0.9043540328336902) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 February 2013.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 0.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9043540328336902 && document.getElementById("timeline").value/1000 < 0.9357601713062098) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 May 2016.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9357601713062098 && document.getElementById("timeline").value/1000 < 0.9978586723768736) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 January 2018.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 5.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9978586723768736) {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 May 2021.<\p>\n<ul>\n	<li>National Popular Front (ELAM) received 6.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Popular Front</h3>\n<p>Lorem ipsum et cetera National Popular Front</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Cyprus</h1>\n<p>Lorem ipsum et cetera Cyprus</p>\n";
		}
	}
	else if (country == "Turkey") {
		if (document.getElementById("timeline").value/1000 >= 0.03640256959314775 && document.getElementById("timeline").value/1000 < 0.11099214846538187) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 October 1969.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 3.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.11099214846538187 && document.getElementById("timeline").value/1000 < 0.17880085653104924) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 1973.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 3.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.17880085653104924 && document.getElementById("timeline").value/1000 < 0.5242683797287652) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 June 1977.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 6.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5242683797287652 && document.getElementById("timeline").value/1000 < 0.5860099928622412) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 December 1995.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 8.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5860099928622412 && document.getElementById("timeline").value/1000 < 0.6520342612419701) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 April 1999.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 18.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6520342612419701 && document.getElementById("timeline").value/1000 < 0.7398286937901499) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 November 2002.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 8.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7398286937901499 && document.getElementById("timeline").value/1000 < 0.8122769450392576) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 July 2007.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 14.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8122769450392576 && document.getElementById("timeline").value/1000 < 0.8865096359743041) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 June 2011.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 13.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8865096359743041 && document.getElementById("timeline").value/1000 < 0.8940042826552462) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 June 2015.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 16.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8940042826552462 && document.getElementById("timeline").value/1000 < 0.943254817987152) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 November 2015.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 11.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.943254817987152) {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 June 2018.<\p>\n<ul>\n	<li>Nationalist Movement Party (MHP) received 11.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Nationalist Movement Party</h3>\n<p>Lorem ipsum et cetera Nationalist Movement Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Turkey</h1>\n<p>Lorem ipsum et cetera Turkey</p>\n";
		}
	}
	else if (country == "Romania") {
		if (document.getElementById("timeline").value/1000 >= 0.46395431834404 && document.getElementById("timeline").value/1000 < 0.5403283369022127) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 September 1992.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 3.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5403283369022127 && document.getElementById("timeline").value/1000 < 0.6159885795860099) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 November 1996.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 4.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6159885795860099 && document.getElementById("timeline").value/1000 < 0.6905781584582441) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 November 2000.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 19.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6905781584582441 && document.getElementById("timeline").value/1000 < 0.7651677373304783) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 November 2004.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 12.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7651677373304783 && document.getElementById("timeline").value/1000 < 0.8401142041399001) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 November 2008.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8401142041399001 && document.getElementById("timeline").value/1000 < 0.9147037830121342) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 December 2012.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9147037830121342 && document.getElementById("timeline").value/1000 < 0.9889364739471805) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 December 2016.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9889364739471805) {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 December 2020.<\p>\n<ul>\n	<li>Greater Romania Party (PRM) received 0.6% of the votes</li>\n	<li>Alliance for the Unity of Romanians (AUR) received 9.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Greater Romania Party</h3>\n<p>Lorem ipsum et cetera Greater Romania Party</p>\n<h3>Alliance for the Unity of Romanians</h3>\n<p>Lorem ipsum et cetera Alliance for the Unity of Romanians</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Romania</h1>\n<p>Lorem ipsum et cetera Romania</p>\n";
		}
	}
	else if (country == "Finland") {
		if (document.getElementById("timeline").value/1000 >= 0.5845824411134903 && document.getElementById("timeline").value/1000 < 0.6588151320485368) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 March 1999.<\p>\n<ul>\n	<li>The Finns (PS) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6588151320485368 && document.getElementById("timeline").value/1000 < 0.7334047109207709) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 March 2003.<\p>\n<ul>\n	<li>The Finns (PS) received 1.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7334047109207709 && document.getElementById("timeline").value/1000 < 0.8094218415417559) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 March 2007.<\p>\n<ul>\n	<li>The Finns (PS) received 4.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8094218415417559 && document.getElementById("timeline").value/1000 < 0.8840114204139901) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 April 2011.<\p>\n<ul>\n	<li>The Finns (PS) received 19.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8840114204139901 && document.getElementById("timeline").value/1000 < 0.9582441113490364) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 April 2015.<\p>\n<ul>\n	<li>The Finns (PS) received 17.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9582441113490364) {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 April 2019.<\p>\n<ul>\n	<li>The Finns (PS) received 17.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>The Finns</h3>\n<p>Lorem ipsum et cetera The Finns</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Finland</h1>\n<p>Lorem ipsum et cetera Finland</p>\n";
		}
	}
	else if (country == "Slovakia") {
		if (document.getElementById("timeline").value/1000 >= 0.4210257978994596 && document.getElementById("timeline").value/1000 < 0.4581421433669828) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 08 June 1990.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4581421433669828 && document.getElementById("timeline").value/1000 < 0.5013255837666972) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 05 June 1992.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 7.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5013255837666972 && document.getElementById("timeline").value/1000 < 0.5755582747017437) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 30 September 1994.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 5.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5755582747017437 && document.getElementById("timeline").value/1000 < 0.6497909656367901) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 25 September 1998.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 9.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6497909656367901 && document.getElementById("timeline").value/1000 < 0.7194350973794229) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 20 September 2002.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 3.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7194350973794229 && document.getElementById("timeline").value/1000 < 0.7936677883144693) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 17 June 2006.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 11.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7936677883144693 && document.getElementById("timeline").value/1000 < 0.826144590598552) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 12 June 2010.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 5.1% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.826144590598552 && document.getElementById("timeline").value/1000 < 0.9003772815335984) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 10 March 2012.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 4.6% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 1.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9003772815335984 && document.getElementById("timeline").value/1000 < 0.9746099724686449) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 05 March 2016.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 8.6% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 8.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9746099724686449) {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 29 February 2020.<\p>\n<ul>\n	<li>Slovak National Party (SNS) received 3.2% of the votes</li>\n	<li>People's Party Our Slovakia (KOTLEBA) received 8.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovak National Party</h3>\n<p>Lorem ipsum et cetera Slovak National Party</p>\n<h3>People's Party Our Slovakia</h3>\n<p>Lorem ipsum et cetera People's Party Our Slovakia</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Slovakia</h1>\n<p>Lorem ipsum et cetera Slovakia</p>\n";
		}
	}
	else if (country == "Luxembourg") {
		if (document.getElementById("timeline").value/1000 >= 0.40292648108493934 && document.getElementById("timeline").value/1000 < 0.49571734475374735) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 June 1989.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 7.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.49571734475374735 && document.getElementById("timeline").value/1000 < 0.588865096359743) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 June 1994.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 9.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.588865096359743 && document.getElementById("timeline").value/1000 < 0.6820128479657388) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 1999.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 11.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6820128479657388 && document.getElementById("timeline").value/1000 < 0.7748037116345468) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 2004.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 10.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7748037116345468 && document.getElementById("timeline").value/1000 < 0.8561741613133476) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 June 2009.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 11.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8561741613133476 && document.getElementById("timeline").value/1000 < 0.9489650249821556) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 2013.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 6.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9489650249821556) {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 2018.<\p>\n<ul>\n	<li>Alternative Democratic Reform Party (ADR) received 8.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative Democratic Reform Party</h3>\n<p>Lorem ipsum et cetera Alternative Democratic Reform Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Luxembourg</h1>\n<p>Lorem ipsum et cetera Luxembourg</p>\n";
		}
	}
	else if (country == "Norway") {
		if (document.getElementById("timeline").value/1000 >= 0.10920770877944326 && document.getElementById("timeline").value/1000 < 0.18379728765167738) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 September 1973.<\p>\n<ul>\n	<li>Progress Party (FrP) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.18379728765167738 && document.getElementById("timeline").value/1000 < 0.2583868665239115) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 September 1977.<\p>\n<ul>\n	<li>Progress Party (FrP) received 1.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.2583868665239115 && document.getElementById("timeline").value/1000 < 0.3326195574589579) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 September 1981.<\p>\n<ul>\n	<li>Progress Party (FrP) received 4.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3326195574589579 && document.getElementById("timeline").value/1000 < 0.407209136331192) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 September 1985.<\p>\n<ul>\n	<li>Progress Party (FrP) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.407209136331192 && document.getElementById("timeline").value/1000 < 0.4817987152034261) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 September 1989.<\p>\n<ul>\n	<li>Progress Party (FrP) received 13.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4817987152034261 && document.getElementById("timeline").value/1000 < 0.5563882940756603) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 September 1993.<\p>\n<ul>\n	<li>Progress Party (FrP) received 6.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5563882940756603 && document.getElementById("timeline").value/1000 < 0.6306209850107066) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 September 1997.<\p>\n<ul>\n	<li>Progress Party (FrP) received 15.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6306209850107066 && document.getElementById("timeline").value/1000 < 0.7052105638829408) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 September 2001.<\p>\n<ul>\n	<li>Progress Party (FrP) received 14.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7052105638829408 && document.getElementById("timeline").value/1000 < 0.7798001427551748) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 September 2005.<\p>\n<ul>\n	<li>Progress Party (FrP) received 22.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7798001427551748 && document.getElementById("timeline").value/1000 < 0.8540328336902213) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 September 2009.<\p>\n<ul>\n	<li>Progress Party (FrP) received 22.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8540328336902213 && document.getElementById("timeline").value/1000 < 0.9286733965534822) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 September 2013.<\p>\n<ul>\n	<li>Progress Party (FrP) received 16.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9286733965534822) {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Monday 11 September 2017.<\p>\n<ul>\n	<li>Progress Party (FrP) received 15.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Progress Party</h3>\n<p>Lorem ipsum et cetera Progress Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Norway</h1>\n<p>Lorem ipsum et cetera Norway</p>\n";
		}
	}
	else if (country == "Czech_Republic") {
		if (document.getElementById("timeline").value/1000 >= 0.8564800652595085 && document.getElementById("timeline").value/1000 < 0.930712756194555) {
			document.getElementById("textbox").innerHTML = "<h1>Czech Republic</h1>\n<p>Lorem ipsum et cetera Czech Republic</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 26 October 2013.<\p>\n<ul>\n	<li>Freedom and Direct Democracy (SPD) received 6.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom and Direct Democracy</h3>\n<p>Lorem ipsum et cetera Freedom and Direct Democracy</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.930712756194555) {
			document.getElementById("textbox").innerHTML = "<h1>Czech Republic</h1>\n<p>Lorem ipsum et cetera Czech Republic</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 21 October 2017.<\p>\n<ul>\n	<li>Freedom and Direct Democracy (SPD) received 10.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom and Direct Democracy</h3>\n<p>Lorem ipsum et cetera Freedom and Direct Democracy</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Czech Republic</h1>\n<p>Lorem ipsum et cetera Czech Republic</p>\n";
		}
	}
	else if (country == "Danish_Kingdom") {
		if (document.getElementById("timeline").value/1000 >= 0.5654634444784338 && document.getElementById("timeline").value/1000 < 0.6342918323646375) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 11 March 1998.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 7.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6342918323646375 && document.getElementById("timeline").value/1000 < 0.694249005812175) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 20 November 2001.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 12.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.694249005812175 && document.getElementById("timeline").value/1000 < 0.7456408687672071) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 08 February 2005.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 13.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7456408687672071 && document.getElementById("timeline").value/1000 < 0.8171204241868053) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 13 November 2007.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8171204241868053 && document.getElementById("timeline").value/1000 < 0.8870704598755991) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 15 September 2011.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 12.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8870704598755991 && document.getElementById("timeline").value/1000 < 0.9608952788824309) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 18 June 2015.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 21.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9608952788824309) {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 05 June 2019.<\p>\n<ul>\n	<li>Danish People's Party (DF) received 8.7% of the votes</li>\n	<li>The New Right (NB) received 2.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Danish People's Party</h3>\n<p>Lorem ipsum et cetera Danish People's Party</p>\n<h3>The New Right</h3>\n<p>Lorem ipsum et cetera The New Right</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Danish Kingdom</h1>\n<p>Lorem ipsum et cetera Danish Kingdom</p>\n";
		}
	}
	else if (country == "Portugal") {
		if (document.getElementById("timeline").value/1000 >= 0.9671663097787295 && document.getElementById("timeline").value/1000 < 0.9914346895074947) {
			document.getElementById("textbox").innerHTML = "<h1>Portugal</h1>\n<p>Lorem ipsum et cetera Portugal</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 October 2019.<\p>\n<ul>\n	<li>ENOUGH! (CHEGA!) received 1.29% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>ENOUGH!</h3>\n<p>Lorem ipsum et cetera ENOUGH!</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9914346895074947) {
			document.getElementById("textbox").innerHTML = "<h1>Portugal</h1>\n<p>Lorem ipsum et cetera Portugal</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 January 2021.<\p>\n<ul>\n	<li>ENOUGH! (CHEGA!) received 11.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>ENOUGH!</h3>\n<p>Lorem ipsum et cetera ENOUGH!</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Portugal</h1>\n<p>Lorem ipsum et cetera Portugal</p>\n";
		}
	}
	else if (country == "Poland") {
		if (document.getElementById("timeline").value/1000 >= 0.6313347608850821 && document.getElementById("timeline").value/1000 < 0.7059243397573162) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 September 2001.<\p>\n<ul>\n	<li>United Right (ZP) received 9.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7059243397573162 && document.getElementById("timeline").value/1000 < 0.7444682369735903) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 September 2005.<\p>\n<ul>\n	<li>United Right (ZP) received 27.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7444682369735903 && document.getElementById("timeline").value/1000 < 0.818344039971449) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 October 2007.<\p>\n<ul>\n	<li>United Right (ZP) received 31.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.818344039971449 && document.getElementById("timeline").value/1000 < 0.8936473947180585) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 October 2011.<\p>\n<ul>\n	<li>United Right (ZP) received 29.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8936473947180585 && document.getElementById("timeline").value/1000 < 0.9675231977159172) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 October 2015.<\p>\n<ul>\n	<li>United Right (ZP) received 37.6% of the votes</li>\n	<li>National Movement (RN) received 8.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n<h3>National Movement</h3>\n<p>Lorem ipsum et cetera National Movement</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9675231977159172) {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 October 2019.<\p>\n<ul>\n	<li>United Right (ZP) received 43.6% of the votes</li>\n	<li>National Movement (RN) received 6.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>United Right</h3>\n<p>Lorem ipsum et cetera United Right</p>\n<h3>National Movement</h3>\n<p>Lorem ipsum et cetera National Movement</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Poland</h1>\n<p>Lorem ipsum et cetera Poland</p>\n";
		}
	}
	else if (country == "Spain") {
		if (document.getElementById("timeline").value/1000 >= 0.17931069644131742 && document.getElementById("timeline").value/1000 < 0.8965024982155603) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 June 1977.<\p>\n<ul>\n	<li>FET y de las JONS (FET) received 0.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>FET y de las JONS</h3>\n<p>Lorem ipsum et cetera FET y de las JONS</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8965024982155603 && document.getElementById("timeline").value/1000 < 0.9061384725196289) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 December 2015.<\p>\n<ul>\n	<li>Vox (VOX) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9061384725196289 && document.getElementById("timeline").value/1000 < 0.9589578872234118) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 June 2016.<\p>\n<ul>\n	<li>Vox (VOX) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9589578872234118 && document.getElementById("timeline").value/1000 < 0.9689507494646681) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 April 2019.<\p>\n<ul>\n	<li>Vox (VOX) received 10.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9689507494646681) {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 November 2019.<\p>\n<ul>\n	<li>Vox (VOX) received 15.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Vox</h3>\n<p>Lorem ipsum et cetera Vox</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Spain</h1>\n<p>Lorem ipsum et cetera Spain</p>\n";
		}
	}
	else if (country == "Italy") {
		if (document.getElementById("timeline").value/1000 >= 0.4550321199143469 && document.getElementById("timeline").value/1000 < 0.4917915774446824) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 April 1992.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 8.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4917915774446824 && document.getElementById("timeline").value/1000 < 0.5303354746609564) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 March 1994.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 8.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5303354746609564 && document.getElementById("timeline").value/1000 < 0.6245538900785154) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 April 1996.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 10.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6245538900785154 && document.getElementById("timeline").value/1000 < 0.7159172019985724) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 May 2001.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 3.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7159172019985724 && document.getElementById("timeline").value/1000 < 0.7533904354032833) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 April 2006.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 4.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7533904354032833 && document.getElementById("timeline").value/1000 < 0.844039971448965) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 April 2008.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 8.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.844039971448965 && document.getElementById("timeline").value/1000 < 0.9375446109921485) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 February 2013.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 4.1% of the votes</li>\n	<li>Brothers of Italy (FdI) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n<h3>Brothers of Italy</h3>\n<p>Lorem ipsum et cetera Brothers of Italy</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9375446109921485) {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 March 2018.<\p>\n<ul>\n	<li>Lega Nord (LEGA) received 17.4% of the votes</li>\n	<li>Brothers of Italy (FdI) received 4.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Lega Nord</h3>\n<p>Lorem ipsum et cetera Lega Nord</p>\n<h3>Brothers of Italy</h3>\n<p>Lorem ipsum et cetera Brothers of Italy</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Italy</h1>\n<p>Lorem ipsum et cetera Italy</p>\n";
		}
	}
	else if (country == "Hungary") {
		if (document.getElementById("timeline").value/1000 >= 0.4172019985724483 && document.getElementById("timeline").value/1000 < 0.4939329050678087) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 March 1990.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 9.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4939329050678087 && document.getElementById("timeline").value/1000 < 0.5685224839400428) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 May 1994.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 7.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5685224839400428 && document.getElementById("timeline").value/1000 < 0.6413276231263383) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 May 1998.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 28.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6413276231263383 && document.getElementById("timeline").value/1000 < 0.7159172019985724) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 April 2002.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 41.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7159172019985724 && document.getElementById("timeline").value/1000 < 0.7905067808708066) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 April 2006.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 42.0% of the votes</li>\n	<li>Jobbik (Jobbik) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7905067808708066 && document.getElementById("timeline").value/1000 < 0.864739471805853) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 April 2010.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 52.7% of the votes</li>\n	<li>Jobbik (Jobbik) received 16.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.864739471805853 && document.getElementById("timeline").value/1000 < 0.939329050678087) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 April 2014.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 44.9% of the votes</li>\n	<li>Jobbik (Jobbik) received 20.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.939329050678087) {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 April 2018.<\p>\n<ul>\n	<li>Fidesz (Fidesz) received 49.3% of the votes</li>\n	<li>Jobbik (Jobbik) received 19.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Fidesz</h3>\n<p>Lorem ipsum et cetera Fidesz</p>\n<h3>Jobbik</h3>\n<p>Lorem ipsum et cetera Jobbik</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Hungary</h1>\n<p>Lorem ipsum et cetera Hungary</p>\n";
		}
	}
	else if (country == "Switzerland") {
		if (document.getElementById("timeline").value/1000 >= 0.0 && document.getElementById("timeline").value/1000 < 0.07458957887223412) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 October 1967.<\p>\n<ul>\n	<li>Swiss Democrats (SD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.07458957887223412 && document.getElementById("timeline").value/1000 < 0.14882226980728053) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 31 October 1971.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.1% of the votes</li>\n	<li>Swiss Democrats (SD) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.14882226980728053 && document.getElementById("timeline").value/1000 < 0.22305496074232692) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 October 1975.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 9.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 2.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.22305496074232692 && document.getElementById("timeline").value/1000 < 0.29764453961456105) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 October 1979.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.29764453961456105 && document.getElementById("timeline").value/1000 < 0.3718772305496074) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 October 1983.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.1% of the votes</li>\n	<li>Swiss Democrats (SD) received 2.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3718772305496074 && document.getElementById("timeline").value/1000 < 0.4464668094218415) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 October 1987.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.0% of the votes</li>\n	<li>Swiss Democrats (SD) received 2.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4464668094218415 && document.getElementById("timeline").value/1000 < 0.5210563882940756) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 1991.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 11.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 3.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5210563882940756 && document.getElementById("timeline").value/1000 < 0.5956459671663098) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 October 1995.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 14.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 3.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5956459671663098 && document.getElementById("timeline").value/1000 < 0.6698786581013562) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 October 1999.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 22.5% of the votes</li>\n	<li>Swiss Democrats (SD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6698786581013562 && document.getElementById("timeline").value/1000 < 0.7444682369735903) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 October 2003.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 26.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 1.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7444682369735903 && document.getElementById("timeline").value/1000 < 0.8190578158458244) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 October 2007.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 28.9% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8190578158458244 && document.getElementById("timeline").value/1000 < 0.8932905067808709) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 October 2011.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 26.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8932905067808709 && document.getElementById("timeline").value/1000 < 0.9678800856531049) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 October 2015.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 29.4% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9678800856531049) {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 2019.<\p>\n<ul>\n	<li>Swiss People's Party (SVP) received 25.6% of the votes</li>\n	<li>Swiss Democrats (SD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Swiss People's Party</h3>\n<p>Lorem ipsum et cetera Swiss People's Party</p>\n<h3>Swiss Democrats</h3>\n<p>Lorem ipsum et cetera Swiss Democrats</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Switzerland</h1>\n<p>Lorem ipsum et cetera Switzerland</p>\n";
		}
	}
	else if (country == "France") {
		if (document.getElementById("timeline").value/1000 >= 0.09957173447537473 && document.getElementById("timeline").value/1000 < 0.19307637401855818) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 March 1973.<\p>\n<ul>\n	<li>National Rally (RN) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.19307637401855818 && document.getElementById("timeline").value/1000 < 0.25374732334047106) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 12 March 1978.<\p>\n<ul>\n	<li>National Rally (RN) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.25374732334047106 && document.getElementById("timeline").value/1000 < 0.3422555317630264) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 June 1981.<\p>\n<ul>\n	<li>National Rally (RN) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3422555317630264 && document.getElementById("timeline").value/1000 < 0.3816151728357296) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 March 1986.<\p>\n<ul>\n	<li>National Rally (RN) received 9.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3816151728357296 && document.getElementById("timeline").value/1000 < 0.5117773019271948) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 26 April 1988.<\p>\n<ul>\n	<li>National Rally (RN) received 14.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5117773019271948 && document.getElementById("timeline").value/1000 < 0.6420413990007138) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 April 1995.<\p>\n<ul>\n	<li>National Rally (RN) received 15.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6420413990007138 && document.getElementById("timeline").value/1000 < 0.7351891506067095) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 April 2002.<\p>\n<ul>\n	<li>National Rally (RN) received 17.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7351891506067095 && document.getElementById("timeline").value/1000 < 0.8283369022127052) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 April 2007.<\p>\n<ul>\n	<li>National Rally (RN) received 10.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8283369022127052 && document.getElementById("timeline").value/1000 < 0.9221984296930764) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 April 2012.<\p>\n<ul>\n	<li>National Rally (RN) received 17.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9221984296930764) {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 May 2017.<\p>\n<ul>\n	<li>National Rally (RN) received 33.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Rally</h3>\n<p>Lorem ipsum et cetera National Rally</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>France</h1>\n<p>Lorem ipsum et cetera France</p>\n";
		}
	}
	else if (country == "Germany") {
		if (document.getElementById("timeline").value/1000 >= -0.3390435403283369 && document.getElementById("timeline").value/1000 < -0.2633832976445396) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 August 1949.<\p>\n<ul>\n	<li>German Party (DP) received 4.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.2633832976445396 && document.getElementById("timeline").value/1000 < -0.18843683083511778) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 September 1953.<\p>\n<ul>\n	<li>German Party (DP) received 4.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.18843683083511778 && document.getElementById("timeline").value/1000 < -0.039257673090649536) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 1957.<\p>\n<ul>\n	<li>German Party (DP) received 3.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.039257673090649536 && document.getElementById("timeline").value/1000 < 0.03568879371877231) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 September 1965.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.03568879371877231 && document.getElementById("timeline").value/1000 < 0.09421841541755889) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 September 1969.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 4.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.09421841541755889 && document.getElementById("timeline").value/1000 < 0.16630977872947894) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 November 1972.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.16630977872947894 && document.getElementById("timeline").value/1000 < 0.24089935760171305) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 1976.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.24089935760171305 && document.getElementById("timeline").value/1000 < 0.28586723768736616) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 October 1980.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.28586723768736616 && document.getElementById("timeline").value/1000 < 0.35831548893647397) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 March 1983.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.35831548893647397 && document.getElementById("timeline").value/1000 < 0.4300499643112063) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 January 1987.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4300499643112063 && document.getElementById("timeline").value/1000 < 0.5756602426837973) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 02 December 1990.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5756602426837973 && document.getElementById("timeline").value/1000 < 0.6498929336188437) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 September 1998.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6498929336188437 && document.getElementById("timeline").value/1000 < 0.7055674518201285) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 September 2002.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7055674518201285 && document.getElementById("timeline").value/1000 < 0.7805139186295503) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 September 2005.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7805139186295503 && document.getElementById("timeline").value/1000 < 0.8547466095645967) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 September 2009.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8547466095645967 && document.getElementById("timeline").value/1000 < 0.9272458448047313) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 September 2013.<\p>\n<ul>\n	<li>Alternative for Germany (AfD) received 4.7% of the votes</li>\n	<li>National Democratic Party of Germany (NPD) received 1.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative for Germany</h3>\n<p>Lorem ipsum et cetera Alternative for Germany</p>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9272458448047313) {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Monday 14 August 2017.<\p>\n<ul>\n	<li>Alternative for Germany (AfD) received 12.6% of the votes</li>\n	<li>National Democratic Party of Germany (NPD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Alternative for Germany</h3>\n<p>Lorem ipsum et cetera Alternative for Germany</p>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Germany</h1>\n<p>Lorem ipsum et cetera Germany</p>\n";
		}
	}
	else if (country == "BRD") {
		if (document.getElementById("timeline").value/1000 >= -0.3390435403283369 && document.getElementById("timeline").value/1000 < -0.2633832976445396) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 August 1949.<\p>\n<ul>\n	<li>German Party (DP) received 4.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.2633832976445396 && document.getElementById("timeline").value/1000 < -0.18843683083511778) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 September 1953.<\p>\n<ul>\n	<li>German Party (DP) received 4.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.18843683083511778 && document.getElementById("timeline").value/1000 < -0.039257673090649536) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 1957.<\p>\n<ul>\n	<li>German Party (DP) received 3.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>German Party</h3>\n<p>Lorem ipsum et cetera German Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= -0.039257673090649536 && document.getElementById("timeline").value/1000 < 0.03568879371877231) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 September 1965.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.03568879371877231 && document.getElementById("timeline").value/1000 < 0.09421841541755889) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 September 1969.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 4.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.09421841541755889 && document.getElementById("timeline").value/1000 < 0.16630977872947894) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 November 1972.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.16630977872947894 && document.getElementById("timeline").value/1000 < 0.24089935760171305) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 1976.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.24089935760171305 && document.getElementById("timeline").value/1000 < 0.28586723768736616) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 October 1980.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.28586723768736616 && document.getElementById("timeline").value/1000 < 0.35831548893647397) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 March 1983.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.35831548893647397) {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 January 1987.<\p>\n<ul>\n	<li>National Democratic Party of Germany (NPD) received 0.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Germany</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Germany</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>BRD</h1>\n<p>Lorem ipsum et cetera BRD</p>\n";
		}
	}
	else if (country == "DDR") {
		document.getElementById("textbox").innerHTML = "<h1>DDR</h1>\n<p>Lorem ipsum et cetera DDR</p>\n";
	}
	else if (country == "The_Netherlands") {
		if (document.getElementById("timeline").value/1000 >= 0.34562047517079636 && document.getElementById("timeline").value/1000 < 0.40700520036708476) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 21 May 1986.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.40700520036708476 && document.getElementById("timeline").value/1000 < 0.49367798511267463) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 06 September 1989.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 0.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.49367798511267463 && document.getElementById("timeline").value/1000 < 0.5683185479759355) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Tuesday 03 May 1994.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 2.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5683185479759355 && document.getElementById("timeline").value/1000 < 0.6432650147853574) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 06 May 1998.<\p>\n<ul>\n	<li>Centre Democrats (CD) received 0.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Centre Democrats</h3>\n<p>Lorem ipsum et cetera Centre Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6432650147853574 && document.getElementById("timeline").value/1000 < 0.6561129805241154) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 May 2002.<\p>\n<ul>\n	<li>Pim Fortuyn List (LPF) received 17.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Pim Fortuyn List</h3>\n<p>Lorem ipsum et cetera Pim Fortuyn List</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6561129805241154 && document.getElementById("timeline").value/1000 < 0.72749056796166) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 22 January 2003.<\p>\n<ul>\n	<li>Pim Fortuyn List (LPF) received 5.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Pim Fortuyn List</h3>\n<p>Lorem ipsum et cetera Pim Fortuyn List</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.72749056796166 && document.getElementById("timeline").value/1000 < 0.7935148363413888) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 22 November 2006.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 5.9% of the votes</li>\n	<li>Pim Fortuyn List (LPF) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n<h3>Pim Fortuyn List</h3>\n<p>Lorem ipsum et cetera Pim Fortuyn List</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7935148363413888 && document.getElementById("timeline").value/1000 < 0.8356276129295401) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 09 June 2010.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 15.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8356276129295401 && document.getElementById("timeline").value/1000 < 0.9194962781686551) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 12 September 2012.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 10.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9194962781686551 && document.getElementById("timeline").value/1000 < 0.9940858570408891) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 March 2017.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 13.0% of the votes</li>\n	<li>Forum for Democracy (FvD) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n<h3>Forum for Democracy</h3>\n<p>Lorem ipsum et cetera Forum for Democracy</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9940858570408891) {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 17 March 2021.<\p>\n<ul>\n	<li>Party for Freedom (PVV) received 10.8% of the votes</li>\n	<li>Forum for Democracy (FvD) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party for Freedom</h3>\n<p>Lorem ipsum et cetera Party for Freedom</p>\n<h3>Forum for Democracy</h3>\n<p>Lorem ipsum et cetera Forum for Democracy</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>The Netherlands</h1>\n<p>Lorem ipsum et cetera The Netherlands</p>\n";
		}
	}
	else if (country == "Belgium") {
		if (document.getElementById("timeline").value/1000 >= 0.26124197002141325 && document.getElementById("timeline").value/1000 < 0.3344039971448965) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 November 1981.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 1.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3344039971448965 && document.getElementById("timeline").value/1000 < 0.3747323340471092) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 October 1985.<\p>\n<ul>\n	<li>Democracy National (DN) received 0.1% of the votes</li>\n	<li>Flemish Interest (VB) received 1.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.3747323340471092 && document.getElementById("timeline").value/1000 < 0.44825124910778014) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 December 1987.<\p>\n<ul>\n	<li>Democracy National (DN) received 0.1% of the votes</li>\n	<li>Flemish Interest (VB) received 1.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.44825124910778014 && document.getElementById("timeline").value/1000 < 0.5132048536759457) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 November 1991.<\p>\n<ul>\n	<li>Democracy National (DN) received 1.1% of the votes</li>\n	<li>Flemish Interest (VB) received 6.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5132048536759457 && document.getElementById("timeline").value/1000 < 0.588865096359743) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 May 1995.<\p>\n<ul>\n	<li>Democracy National (DN) received 2.3% of the votes</li>\n	<li>Flemish Interest (VB) received 7.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.588865096359743 && document.getElementById("timeline").value/1000 < 0.6620271234832262) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 1999.<\p>\n<ul>\n	<li>Democracy National (DN) received 1.5% of the votes</li>\n	<li>Flemish Interest (VB) received 9.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6620271234832262 && document.getElementById("timeline").value/1000 < 0.7376873661670236) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 May 2003.<\p>\n<ul>\n	<li>Democracy National (DN) received 2.0% of the votes</li>\n	<li>Flemish Interest (VB) received 11.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Democracy National</h3>\n<p>Lorem ipsum et cetera Democracy National</p>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7376873661670236 && document.getElementById("timeline").value/1000 < 0.793718772305496) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 June 2007.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 12.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.793718772305496 && document.getElementById("timeline").value/1000 < 0.867237687366167) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 June 2010.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 7.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.867237687366167 && document.getElementById("timeline").value/1000 < 0.9603854389721628) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 May 2014.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 3.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9603854389721628) {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 26 May 2019.<\p>\n<ul>\n	<li>Flemish Interest (VB) received 12.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Flemish Interest</h3>\n<p>Lorem ipsum et cetera Flemish Interest</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Belgium</h1>\n<p>Lorem ipsum et cetera Belgium</p>\n";
		}
	}
	else if (country == "Sweden") {
		if (document.getElementById("timeline").value/1000 >= 0.4446823697359029 && document.getElementById("timeline").value/1000 < 0.5007137758743755) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 1991.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5007137758743755 && document.getElementById("timeline").value/1000 < 0.5753033547466095) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 September 1994.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5753033547466095 && document.getElementById("timeline").value/1000 < 0.6495360456816559) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 September 1998.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 0.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6495360456816559 && document.getElementById("timeline").value/1000 < 0.7241256245538901) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 2002.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 1.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7241256245538901 && document.getElementById("timeline").value/1000 < 0.7987152034261242) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 September 2006.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 2.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7987152034261242 && document.getElementById("timeline").value/1000 < 0.8729478943611706) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 19 September 2010.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 5.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8729478943611706 && document.getElementById("timeline").value/1000 < 0.947180585296217) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 September 2014.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 12.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.947180585296217) {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 September 2018.<\p>\n<ul>\n	<li>Sweden Democrats (SD) received 17.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Sweden Democrats</h3>\n<p>Lorem ipsum et cetera Sweden Democrats</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Sweden</h1>\n<p>Lorem ipsum et cetera Sweden</p>\n";
		}
	}
	else if (country == "United_Kingdom") {
		if (document.getElementById("timeline").value/1000 >= 0.45523605587845417 && document.getElementById("timeline").value/1000 < 0.5494544712960131) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 09 April 1992.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5494544712960131 && document.getElementById("timeline").value/1000 < 0.6258284898541858) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 01 May 1997.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.1% of the votes</li>\n	<li>UK Independence Party (UKIP) received 0.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6258284898541858 && document.getElementById("timeline").value/1000 < 0.6986336290404813) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 07 June 2001.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.2% of the votes</li>\n	<li>UK Independence Party (UKIP) received 1.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6986336290404813 && document.getElementById("timeline").value/1000 < 0.791781380646477) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 05 May 2005.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.7% of the votes</li>\n	<li>UK Independence Party (UKIP) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.791781380646477 && document.getElementById("timeline").value/1000 < 0.8849291322524727) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 06 May 2010.<\p>\n<ul>\n	<li>British National Party (BNP) received 1.9% of the votes</li>\n	<li>UK Independence Party (UKIP) received 3.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8849291322524727 && document.getElementById("timeline").value/1000 < 0.9238299174059346) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 07 May 2015.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.0% of the votes</li>\n	<li>UK Independence Party (UKIP) received 12.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9238299174059346 && document.getElementById("timeline").value/1000 < 0.9705822371775262) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 08 June 2017.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.0% of the votes</li>\n	<li>UK Independence Party (UKIP) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9705822371775262) {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Thursday 12 December 2019.<\p>\n<ul>\n	<li>British National Party (BNP) received 0.0% of the votes</li>\n	<li>UK Independence Party (UKIP) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>British National Party</h3>\n<p>Lorem ipsum et cetera British National Party</p>\n<h3>UK Independence Party</h3>\n<p>Lorem ipsum et cetera UKIP</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>United Kingdom</h1>\n<p>Lorem ipsum et cetera United Kingdom</p>\n";
		}
	}
	else if (country == "Ireland") {
		document.getElementById("textbox").innerHTML = "<h1>Ireland</h1>\n<p>Lorem ipsum et cetera Ireland</p>\n";
	}
	else if (country == "Iceland") {
		document.getElementById("textbox").innerHTML = "<h1>Iceland</h1>\n<p>Lorem ipsum et cetera Iceland</p>\n";
	}
	else if (country == "Moldova") {
		if (document.getElementById("timeline").value/1000 >= 0.6955745895788722 && document.getElementById("timeline").value/1000 < 0.8768736616702355) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 March 2005.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8768736616702355 && document.getElementById("timeline").value/1000 < 0.9557458957887224) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 30 November 2014.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 20.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9557458957887224 && document.getElementById("timeline").value/1000 < 1.0) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 February 2019.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 31.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 1.0) {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 July 2021.<\p>\n<ul>\n	<li>Party of Socialists of the Republic of Moldova (PSRM) received 27.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Socialists of the Republic of Moldova</h3>\n<p>Lorem ipsum et cetera Party of Socialists of the Republic of Moldova</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Moldova</h1>\n<p>Lorem ipsum et cetera Moldova</p>\n";
		}
	}
	else if (country == "Malta") {
		document.getElementById("textbox").innerHTML = "<h1>Malta</h1>\n<p>Lorem ipsum et cetera Malta</p>\n";
	}
	else if (country == "Austria") {
		if (document.getElementById("timeline").value/1000 >= 0.04354032833690221 && document.getElementById("timeline").value/1000 < 0.2337615988579586) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 March 1970.<\p>\n<ul>\n	<li>National Democratic Party of Austria (NDP) received 0.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Austria</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.2337615988579586 && document.getElementById("timeline").value/1000 < 0.35510349750178444) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 May 1980.<\p>\n<ul>\n	<li>National Democratic Party of Austria (NDP) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>National Democratic Party of Austria</h3>\n<p>Lorem ipsum et cetera National Democratic Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.35510349750178444 && document.getElementById("timeline").value/1000 < 0.4271948608137045) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 November 1986.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 9.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4271948608137045 && document.getElementById("timeline").value/1000 < 0.5017844396859387) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 07 October 1990.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 16.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5017844396859387 && document.getElementById("timeline").value/1000 < 0.5239114917915775) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 09 October 1994.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 22.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5239114917915775 && document.getElementById("timeline").value/1000 < 0.5945753033547466) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 17 December 1995.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 21.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5945753033547466 && document.getElementById("timeline").value/1000 < 0.6531049250535332) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 1999.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 26.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6531049250535332 && document.getElementById("timeline").value/1000 < 0.7248394004282656) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 November 2002.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 10.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7248394004282656 && document.getElementById("timeline").value/1000 < 0.7619557458957887) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 October 2006.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 11.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7619557458957887 && document.getElementById("timeline").value/1000 < 0.8551034975017845) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 September 2008.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 17.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8551034975017845 && document.getElementById("timeline").value/1000 < 0.930406852248394) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 September 2013.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 20.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.930406852248394 && document.getElementById("timeline").value/1000 < 0.9668094218415417) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 October 2017.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 26.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9668094218415417) {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 September 2019.<\p>\n<ul>\n	<li>Freedom Party of Austria (FPÖ) received 16.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Freedom Party of Austria</h3>\n<p>Lorem ipsum et cetera Freedom Party of Austria</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Austria</h1>\n<p>Lorem ipsum et cetera Austria</p>\n";
		}
	}
	else if (country == "Belarus") {
		document.getElementById("textbox").innerHTML = "<h1>Belarus</h1>\n<p>Lorem ipsum et cetera Belarus</p>\n";
	}
	else if (country == "Albania") {
		document.getElementById("textbox").innerHTML = "<h1>Albania</h1>\n<p>Lorem ipsum et cetera Albania</p>\n";
	}
	else if (country == "Yugoslavia") {
		if (document.getElementById("timeline").value/1000 >= 0.46823697359029265 && document.getElementById("timeline").value/1000 < 0.5612827572142347) {
			document.getElementById("textbox").innerHTML = "<h1>Yugoslavia</h1>\n<p>Lorem ipsum et cetera Yugoslavia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 December 1992.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 22.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5612827572142347 && document.getElementById("timeline").value/1000 < 0.617365147343734) {
			document.getElementById("textbox").innerHTML = "<h1>Yugoslavia</h1>\n<p>Lorem ipsum et cetera Yugoslavia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 19 December 1997.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.617365147343734 && document.getElementById("timeline").value/1000 < 0.6734475374732334) {
			document.getElementById("textbox").innerHTML = "<h1>Yugoslavia</h1>\n<p>Lorem ipsum et cetera Yugoslavia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 23 December 2000.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 28.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6734475374732334 && document.getElementById("timeline").value/1000 < 0.7305496074232691) {
			document.getElementById("textbox").innerHTML = "<h1>Yugoslavia</h1>\n<p>Lorem ipsum et cetera Yugoslavia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 December 2003.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 8.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7305496074232691) {
			document.getElementById("textbox").innerHTML = "<h1>Yugoslavia</h1>\n<p>Lorem ipsum et cetera Yugoslavia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 January 2007.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 27.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Yugoslavia</h1>\n<p>Lorem ipsum et cetera Yugoslavia</p>\n";
		}
	}
	else if (country == "Serbia") {
		if (document.getElementById("timeline").value/1000 >= 0.46823697359029265 && document.getElementById("timeline").value/1000 < 0.5612827572142347) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 December 1992.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 22.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5612827572142347 && document.getElementById("timeline").value/1000 < 0.617365147343734) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Friday 19 December 1997.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 13.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.617365147343734 && document.getElementById("timeline").value/1000 < 0.6734475374732334) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 23 December 2000.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 28.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6734475374732334 && document.getElementById("timeline").value/1000 < 0.7305496074232691) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 December 2003.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 8.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7305496074232691 && document.getElementById("timeline").value/1000 < 0.7548179871520343) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 January 2007.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 27.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7548179871520343 && document.getElementById("timeline").value/1000 < 0.8290506780870807) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 May 2008.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 29.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8290506780870807 && document.getElementById("timeline").value/1000 < 0.8636688079942898) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 May 2012.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 4.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8636688079942898 && document.getElementById("timeline").value/1000 < 0.9029264810849393) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 March 2014.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 2.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9029264810849393 && document.getElementById("timeline").value/1000 < 0.9803711634546752) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 24 April 2016.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 8.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9803711634546752) {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 June 2020.<\p>\n<ul>\n	<li>Serbian Radical Party (CPC) received 2.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Serbian Radical Party</h3>\n<p>Lorem ipsum et cetera Serbian Radical Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Serbia</h1>\n<p>Lorem ipsum et cetera Serbia</p>\n";
		}
	}
	else if (country == "Montenegro") {
		if (document.getElementById("timeline").value/1000 >= 0.46823697359029265 && document.getElementById("timeline").value/1000 < 0.5403283369022127) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 December 1992.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 7.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5403283369022127 && document.getElementById("timeline").value/1000 < 0.569593147751606) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 November 1996.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 4.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.569593147751606 && document.getElementById("timeline").value/1000 < 0.6234832262669522) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 31 May 1998.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 1.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6234832262669522 && document.getElementById("timeline").value/1000 < 0.6513204853675946) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 22 April 2001.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 1.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6513204853675946 && document.getElementById("timeline").value/1000 < 0.7237687366167024) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 20 October 2002.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 2.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7237687366167024 && document.getElementById("timeline").value/1000 < 0.7712348322626695) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 September 2006.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 14.7% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7712348322626695 && document.getElementById("timeline").value/1000 < 0.8372591006423983) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 March 2009.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 1.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8372591006423983 && document.getElementById("timeline").value/1000 < 0.9118486795146324) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 14 October 2012.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 0.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9118486795146324) {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 October 2016.<\p>\n<ul>\n	<li>Party of Serb Radicals (SSR) received 0.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Party of Serb Radicals</h3>\n<p>Lorem ipsum et cetera Party of Serb Radicals</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Montenegro</h1>\n<p>Lorem ipsum et cetera Montenegro</p>\n";
		}
	}
	else if (country == "Slovenia") {
		if (document.getElementById("timeline").value/1000 >= 0.4179157744468237 && document.getElementById("timeline").value/1000 < 0.4675231977159172) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 08 April 1990.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 7.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.4675231977159172 && document.getElementById("timeline").value/1000 < 0.5406852248394004) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 06 December 1992.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 3.3% of the votes</li>\n	<li>Slovenian National Party (SNS) received 10.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5406852248394004 && document.getElementById("timeline").value/1000 < 0.6138472519628837) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 10 November 1996.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 16.3% of the votes</li>\n	<li>Slovenian National Party (SNS) received 3.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6138472519628837 && document.getElementById("timeline").value/1000 < 0.6877230549607424) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 October 2000.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 15.8% of the votes</li>\n	<li>Slovenian National Party (SNS) received 4.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6877230549607424 && document.getElementById("timeline").value/1000 < 0.761598857958601) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 October 2004.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 29.0% of the votes</li>\n	<li>Slovenian National Party (SNS) received 6.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.761598857958601 && document.getElementById("timeline").value/1000 < 0.8211991434689507) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 21 September 2008.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 29.2% of the votes</li>\n	<li>Slovenian National Party (SNS) received 5.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8211991434689507 && document.getElementById("timeline").value/1000 < 0.8697359029264811) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 04 December 2011.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 26.1% of the votes</li>\n	<li>Slovenian National Party (SNS) received 1.8% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8697359029264811 && document.getElementById("timeline").value/1000 < 0.9421841541755889) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 July 2014.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 20.7% of the votes</li>\n	<li>Slovenian National Party (SNS) received 2.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9421841541755889) {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 03 June 2018.<\p>\n<ul>\n	<li>Slovenian Democratic Party (SDS) received 24.9% of the votes</li>\n	<li>Slovenian National Party (SNS) received 4.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Slovenian Democratic Party</h3>\n<p>Lorem ipsum et cetera Slovenian Democratic Party</p>\n<h3>Slovenian National Party</h3>\n<p>Lorem ipsum et cetera Slovenian National Party</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Slovenia</h1>\n<p>Lorem ipsum et cetera Slovenia</p>\n";
		}
	}
	else if (country == "Croatia") {
		if (document.getElementById("timeline").value/1000 >= 0.4610992148465382 && document.getElementById("timeline").value/1000 < 0.5214132762312634) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 02 August 1992.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 7.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5214132762312634 && document.getElementById("timeline").value/1000 < 0.5992658305292138) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 29 October 1995.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 5.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5992658305292138 && document.getElementById("timeline").value/1000 < 0.6716630977872948) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Monday 03 January 2000.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 5.2% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6716630977872948 && document.getElementById("timeline").value/1000 < 0.7462526766595289) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 23 November 2003.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 6.4% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7462526766595289 && document.getElementById("timeline").value/1000 < 0.7851534618129907) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 25 November 2007.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 3.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7851534618129907 && document.getElementById("timeline").value/1000 < 0.8783012134189865) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 27 December 2009.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 5.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8783012134189865 && document.getElementById("timeline").value/1000 < 0.9746099724686449) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 28 December 2014.<\p>\n<ul>\n	<li>Croatian Party of Rights (HSP) received 6.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Croatian Party of Rights</h3>\n<p>Lorem ipsum et cetera Croatian Party of Rights</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9746099724686449) {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Saturday 29 February 2020.<\p>\n<ul>\n	<li>Homeland Movement (DP) received 10.9% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>Homeland Movement</h3>\n<p>Lorem ipsum et cetera Homeland Movement</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>Croatia</h1>\n<p>Lorem ipsum et cetera Croatia</p>\n";
		}
	}
	else if (country == "Bosnia_and_Herzegovina") {
		document.getElementById("textbox").innerHTML = "<h1>Bosnia and Herzegovina</h1>\n<p>Lorem ipsum et cetera Bosnia and Herzegovina</p>\n";
	}
	else if (country == "North_Macedonia") {
		if (document.getElementById("timeline").value/1000 >= 0.4289793004996431 && document.getElementById("timeline").value/1000 < 0.5021413276231264) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 November 1990.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 30.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5021413276231264 && document.getElementById("timeline").value/1000 < 0.5767309064953604) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 16 October 1994.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 14.3% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.5767309064953604 && document.getElementById("timeline").value/1000 < 0.6495360456816559) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 18 October 1998.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 28.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.6495360456816559 && document.getElementById("timeline").value/1000 < 0.7203528092179056) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 15 September 2002.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 25.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7203528092179056 && document.getElementById("timeline").value/1000 < 0.7558886509635975) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 05 July 2006.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 32.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.7558886509635975 && document.getElementById("timeline").value/1000 < 0.8119200571020699) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 01 June 2008.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 48.5% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8119200571020699 && document.getElementById("timeline").value/1000 < 0.8650963597430407) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 05 June 2011.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 40.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.8650963597430407 && document.getElementById("timeline").value/1000 < 0.9147037830121342) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 13 April 2014.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 43.0% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9147037830121342 && document.getElementById("timeline").value/1000 < 0.9815947792393188) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Sunday 11 December 2016.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 38.1% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else if (document.getElementById("timeline").value/1000 >= 0.9815947792393188) {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n<h2>Latest election</h2>\n<p>At this time, the most recent election in which at least one far-right party participated was held at Wednesday 15 July 2020.<\p>\n<ul>\n	<li>International Macedonian Revolutionary Organisation (VMRO-DPMNE) received 34.6% of the votes</li>\n</ul>\n<h2>Parties</h2>\n<h3>International Macedonian Revolutionary Organisation</h3>\n<p>Lorem ipsum et cetera International Macedonian Revolutionary Organisation</p>\n";
		}
		else {
			document.getElementById("textbox").innerHTML = "<h1>North Macedonia</h1>\n<p>Lorem ipsum et cetera North Macedonia</p>\n";
		}
	}
	else if (country == "Kosovo") {
		document.getElementById("textbox").innerHTML = "<h1>Kosovo</h1>\n<p>Lorem ipsum et cetera Kosovo</p>\n";
	}
	else if (country == "Czechoslovakia") {
		document.getElementById("textbox").innerHTML = "<h1>Czechoslovakia</h1>\n<p>Lorem ipsum et cetera Czechoslovakia</p>\n";
	}
	else if (country == "USSR") {
		document.getElementById("textbox").innerHTML = "<h1>USSR</h1>\n<p>Lorem ipsum et cetera USSR</p>\n";
	}
	else {
		document.getElementById("textbox").innerHTML = "<p>Unfortunately, there is no data available for this country at this time.</p>";
	}
}
