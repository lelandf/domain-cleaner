var button = document.getElementById("submit");

function validate_domain(domain) {
	var reg = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,14})$/); // 14 characters in .cancerresearch
	
	return domain.match(reg);
}

function domain_found(domain) {
	var result = document.getElementById('result');
	
	result = result.innerHTML.split("\n");
	
	return result.indexOf(domain) > -1;
}

function accepted_extension(domain) {

	/* These should match what's on Wikipedia: http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains */
	
	var original_tld = [".com", ".net", ".org", ".int", ".edu", ".gov", ".mil"];
	var infrastructure_tld = [".arpa"];
	var countrycode_tld = [".ac", ".ad", ".ae", ".af", ".ag", ".ai", ".al", ".am", ".an", ".ao", ".aq", ".ar", ".as", ".at", ".au", ".aw", ".ax", ".az", ".ba", ".bb", ".bd", ".be", ".bf", ".bg", ".bh", ".bi", ".bj", ".bm", ".bn", ".bo", ".bq", ".br", ".bs", ".bt", ".bv", ".bw", ".by", ".bz", ".ca", ".cc", ".cd", ".cf", ".cg", ".ch", ".ci", ".ck", ".cl", ".cm", ".cn", ".co", ".cr", ".cs", ".cu", ".cv", ".cw", ".cx", ".cy", ".cz", ".dd", ".de", ".dj", ".dk", ".dm", ".do", ".dz", ".ec", ".ee", ".eg", ".eh", ".er", ".es", ".et", ".eu", ".fi", ".fj", ".fk", ".fm", ".fo", ".fr", ".ga", ".gb", ".gd", ".ge", ".gf", ".gg", ".gh", ".gi", ".gl", ".gm", ".gn", ".gp", ".gq", ".gr", ".gs", ".gt", ".gu", ".gw", ".gy", ".hk", ".hm", ".hn", ".hr", ".ht", ".hu", ".id", ".ie", ".il", ".im", ".in", ".io", ".iq", ".ir", ".is", ".it", ".je", ".jm", ".jo", ".jp", ".ke", ".kg", ".kh", ".ki", ".km", ".kn", ".kp", ".kr", ".kw", ".ky", ".kz", ".la", ".lb", ".lc", ".li", ".lk", ".lr", ".ls", ".lt", ".lu", ".lv", ".ly", ".ma", ".mc", ".md", ".me", ".mg", ".mh", ".mk", ".ml", ".mm", ".mn", ".mo", ".mp", ".mq", ".mr", ".ms", ".mt", ".mu", ".mv", ".mw", ".mx", ".my", ".mz", ".na", ".nc", ".ne", ".nf", ".ng", ".ni", ".nl", ".no", ".np", ".nr", ".nu", ".nz", ".om", ".pa", ".pe", ".pf", ".pg", ".ph", ".pk", ".pl", ".pm", ".pn", ".pr", ".ps", ".pt", ".pw", ".qa", ".re", ".ro", ".rs", ".ru", ".rw", ".sa", ".sb", ".sc", ".sd", ".se", ".sg", ".sh", ".si", ".sj", ".sk", ".sl", ".sm", ".sn", ".so", ".sr", ".ss", ".st", ".su", ".sv", ".sx", ".sy", ".sz", ".tc", ".td", ".tf", ".tg", ".th", ".tj", ".tk", ".tl", ".tm", ".tn", ".to", ".tp", ".tr", ".tt", ".tv", ".tw", ".tz", ".ua", ".ug", ".uk", ".us", ".uy", ".uz", ".va", ".vc", ".ve", ".vg", ".vi", ".vn", ".vu", ".wf", ".ws", ".ye", ".yt", ".yu", ".za", ".zm", ".zr", ".zw"];
	var countrycode_sub_tld = [".co.uk", ".co.in"];
	var generic_english_tld = [".academy", ".accountants", ".active", ".actor", ".adult", ".aero", ".agency", ".airforce", ".archi", ".army", ".associates", ".attorney", ".auction", ".audio", ".autos", ".band", ".bargains", ".beer", ".best", ".bid", ".bike", ".bio", ".biz", ".black", ".blackfriday", ".blue", ".boo", ".boutique", ".build", ".builders", ".business", ".buzz", ".cab", ".camera", ".camp", ".cancerresearch", ".capital", ".cards", ".care", ".career", ".careers", ".cash", ".catering", ".center", ".ceo", ".channel", ".cheap", ".christmas", ".church", ".city", ".claims", ".cleaning", ".click", ".clinic", ".clothing", ".club", ".coach", ".codes", ".coffee", ".college", ".community", ".company", ".computer", ".condos", ".construction", ".consulting", ".contractors", ".cooking", ".cool", ".country", ".credit", ".creditcard", ".cricket", ".cruises", ".dad", ".dance", ".dating", ".day", ".deals", ".degree", ".delivery", ".democrat", ".dental", ".dentist", ".diamonds", ".diet", ".digital", ".direct", ".directory", ".discount", ".domains", ".eat", ".education", ".email", ".energy", ".engineer", ".engineering", ".equipment", ".esq", ".estate", ".events", ".exchange", ".expert", ".exposed", ".fail", ".farm", ".feedback", ".finance", ".financial", ".fish", ".fishing", ".fitness", ".flights", ".florist", ".fly", ".foo", ".forsale", ".foundation", ".fund", ".furniture", ".futbol", ".gallery", ".gift", ".gifts", ".gives", ".glass", ".global", ".gop", ".graphics", ".green", ".gripe", ".guide", ".guitars", ".guru", ".healthcare", ".help", ".here", ".hiphop", ".hiv", ".holdings", ".holiday", ".homes", ".horse", ".host", ".hosting", ".house", ".how", ".info", ".ing", ".ink", ".institute[49]", ".insure", ".international", ".investments", ".jobs", ".kim", ".kitchen", ".land", ".lawyer", ".legal", ".lease", ".lgbt", ".life", ".lighting", ".limited", ".limo", ".link", ".loans", ".lotto", ".luxe", ".luxury", ".management", ".market", ".marketing", ".media", ".meet", ".meme", ".memorial", ".menu", ".mobi", ".moe", ".money", ".mortgage", ".motorcycles", ".mov", ".museum", ".name", ".navy", ".network", ".new", ".ngo", ".ninja", ".ong", ".onl", ".ooo", ".organic", ".partners", ".parts", ".party", ".pharmacy", ".photo", ".photography", ".photos", ".physio", ".pics", ".pictures", ".pink", ".pizza", ".place", ".plumbing", ".poker", ".porn", ".post", ".press", ".pro", ".productions", ".prof", ".properties", ".property", ".qpon", ".recipes", ".red", ".rehab", ".ren", ".rentals", ".repair", ".report", ".republican", ".reviews", ".rich", ".rip", ".rocks", ".rodeo", ".rsvp", ".science", ".services", ".sexy", ".shoes", ".singles", ".social", ".software", ".solar", ".solutions", ".space", ".supplies", ".supply", ".support", ".surf", ".surgery", ".systems", ".tattoo", ".tax", ".technology", ".tel", ".tips", ".tires", ".today", ".tools", ".top", ".town", ".toys", ".trade", ".training", ".travel", ".university", ".vacations", ".vet", ".villas", ".vision", ".vodka", ".vote", ".voting", ".voyage", ".wang", ".watch", ".webcam", ".website", ".wed", ".wiki", ".works", ".world", ".wtf", ".xxx", ".xyz", ".zone"];
	var generic_french_tld = [".maison"];
	var generic_spanish_tld = [".abogado", ".gratis", ".juegos", ".soy", ".tienda", ".uno", ".viajes"];
	var generic_german_tld = [".haus", ".immobilien", ".jetzt", ".kaufen", ".reise", ".reisen", ".schule", ".versicherung"];
	var generic_hindi_tld = [".desi", ".shiksha"];
	var generic_transligual_tld = [".casa", ".immo", ".moda", ".voto"];
	var corporate_tld = [".bar", ".coop", ".enterprises", ".industries", ".institute", ".ltda", ".pub", ".realtor", ".reit", ".rest", ".restaurant", ".sarl", ".ventures"];
	var geo_africa_tld = [".capetown", ".durban", ".joburg"];
	var geo_americas_tld = [".miami", ".nyc", ".quebec", ".rio", ".vegas"];
	var geo_asia_tld = [".asia", ".krd", ".nagoya", ".okinawa", ".ryukyu", ".tapei", ".tatar", ".tokyo", ".yokohama"];
	var geo_europe_tld = [".alsace", ".bayern", ".berlin", ".brussels", ".budapest", ".bzh", ".cat", ".cologne", ".cymru", ".eus", ".frl", ".gal", ".gent", ".hamburg", ".koeln", ".london", ".madrid", ".moscow", ".nrw", ".paris", ".ruhr", ".saarland", ".scot", ".tirol", ".vlaanderen", ".wales", ".wien"];
	var geo_oceania_tld = [".kiwi", ".melbourne", ".sydney"];
	var brand_tld = [".allfinanz", ".android", ".aquarelle", ".axa", ".bloomberg", ".bmw", ".bnpparibas", ".cal", ".caravan", ".cern", ".chrome", ".citic", ".crs", ".cuisinella", ".dnp", ".dvag", ".emerck", ".everbank", ".firmdale", ".flsmidth", ".frogans", ".gbiz", ".gle", ".globo", ".gmail", ".gmo", ".gmx", ".google", ".ibm", ".kred", ".lacaixa", ".latrobe", ".lds", ".mango", ".mini", ".monash", ".mormon", ".neustar", ".nexus", ".nhk", ".nra", ".otsuka", ".ovh", ".pohl", ".praxi", ".prod", ".sca", ".scb", ".schmidt", ".sohu", ".spiegel", ".suzuki", ".tui", ".uol", ".williamhill", ".wme", ".wtc", ".yandex", ".youtube"];
	
	var extensions = original_tld.concat( infrastructure_tld, countrycode_tld, countrycode_sub_tld, generic_english_tld, generic_french_tld, generic_spanish_tld, generic_german_tld, generic_hindi_tld, generic_transligual_tld, corporate_tld, geo_africa_tld, geo_americas_tld, geo_asia_tld, geo_europe_tld, geo_oceania_tld, brand_tld );
	
	for (var i =0, steps=extensions.length; i < steps; i++) {
		entry = extensions[i];
		
		if (domain.indexOf(entry) == 	domain.length - entry.length) {
			return true;
		}		
	}
}

button.addEventListener("click", function () {
	var result = document.getElementById('result');
	result.innerHTML = '';
	
	var text = document.getElementById("text");
	text = text.value.replace(/(?:\r\n|\r|\n)/g, ' ');
	text = text.split(" ");
	text.forEach(function (entry) {
		if (validate_domain(entry) && !domain_found(entry) && accepted_extension(entry)) {
			result.innerHTML = result.innerHTML + entry + '<br />';
		}
	});
});