/** County Area Coords, recommend tool for getting coords: http://www.birdtheme.org/useful/v3tool.html 
*** Author: Yiqi Gao
*** Last Modified: July 20, 2015
**/
// Define the LatLng coordinates for the polygon's path.
var FloridaCoords = [
	new google.maps.LatLng(30.9988, -87.6050),
	new google.maps.LatLng(30.9964, -86.5613),
	new google.maps.LatLng(31.0035, -85.5313),
	new google.maps.LatLng(31.0012, -85.1193),
	new google.maps.LatLng(31.0023, -85.0012),
	new google.maps.LatLng(30.9364, -84.9847),
	new google.maps.LatLng(30.8845, -84.9367),
	new google.maps.LatLng(30.8409, -84.9271),
	new google.maps.LatLng(30.7902, -84.9257),
	new google.maps.LatLng(30.7489, -84.9147),
	new google.maps.LatLng(30.6993, -84.8611),
	new google.maps.LatLng(30.6911, -84.4272),
	new google.maps.LatLng(30.6509, -83.5991),
	new google.maps.LatLng(30.5895, -82.5595),
	new google.maps.LatLng(30.5682, -82.2134),
	new google.maps.LatLng(30.5315, -82.2134),
	new google.maps.LatLng(30.3883, -82.1997),
	new google.maps.LatLng(30.3598, -82.1544),
	new google.maps.LatLng(30.3598, -82.0638),
	new google.maps.LatLng(30.4877, -82.0226),
	new google.maps.LatLng(30.6308, -82.0473),
	new google.maps.LatLng(30.6757, -82.0514),
	new google.maps.LatLng(30.7111, -82.0377),
	new google.maps.LatLng(30.7371, -82.0514),
	new google.maps.LatLng(30.7678, -82.0102),
	new google.maps.LatLng(30.7914, -82.0322),
	new google.maps.LatLng(30.7997, -81.9717),
	new google.maps.LatLng(30.8244, -81.9608),
	new google.maps.LatLng(30.8056, -81.8893),
	new google.maps.LatLng(30.7914, -81.8372),
	new google.maps.LatLng(30.7796, -81.7960),
	new google.maps.LatLng(30.7536, -81.6696),
	new google.maps.LatLng(30.7289, -81.6051),
	new google.maps.LatLng(30.7324, -81.5666),
	new google.maps.LatLng(30.7229, -81.5295),
	new google.maps.LatLng(30.7253, -81.4856),
	new google.maps.LatLng(30.7111, -81.4609),
	new google.maps.LatLng(30.7088, -81.4169),
	new google.maps.LatLng(30.7064, -81.2274),
	new google.maps.LatLng(30.4345, -81.2357),
	new google.maps.LatLng(30.3160, -81.1725),
	new google.maps.LatLng(29.7763, -81.0379),
	new google.maps.LatLng(28.8603, -80.5861),
	new google.maps.LatLng(28.4771, -80.3650),
	new google.maps.LatLng(28.1882, -80.3815),
	new google.maps.LatLng(27.1789, -79.9255),
	new google.maps.LatLng(26.8425, -79.8198),
	new google.maps.LatLng(26.1394, -79.9118),
	new google.maps.LatLng(25.5115, -79.9997),
	new google.maps.LatLng(24.8802, -80.3815),
	new google.maps.LatLng(24.5384, -80.8704),
	new google.maps.LatLng(24.3959, -81.9250),
	new google.maps.LatLng(24.4496, -82.2066),
	new google.maps.LatLng(24.5484, -82.3137),
	new google.maps.LatLng(24.6982, -82.1997),
	new google.maps.LatLng(25.2112, -81.3977),
	new google.maps.LatLng(25.6019, -81.4622),
	new google.maps.LatLng(25.9235, -81.9456),
	new google.maps.LatLng(26.3439, -82.2876),
	new google.maps.LatLng(26.9098, -82.5307),
	new google.maps.LatLng(27.3315, -82.8342),
	new google.maps.LatLng(27.7565, -83.0182),
	new google.maps.LatLng(28.0574, -83.0017),
	new google.maps.LatLng(28.6098, -82.8548),
	new google.maps.LatLng(28.9697, -83.0264),
	new google.maps.LatLng(29.0478, -83.2050),
	new google.maps.LatLng(29.4157, -83.5318),
	new google.maps.LatLng(29.9133, -83.9767),
	new google.maps.LatLng(29.8930, -84.1072),
	new google.maps.LatLng(29.6940, -84.4409),
	new google.maps.LatLng(29.4551, -85.0465),
	new google.maps.LatLng(29.4946, -85.3610),
	new google.maps.LatLng(29.7262, -85.5807),
	new google.maps.LatLng(30.1594, -86.1946),
	new google.maps.LatLng(30.2175, -86.8510),
	new google.maps.LatLng(30.1499, -87.5171),
	new google.maps.LatLng(30.3006, -87.4429),
	new google.maps.LatLng(30.4256, -87.3750),
	new google.maps.LatLng(30.4830, -87.3743),
	new google.maps.LatLng(30.5658, -87.3907),
	new google.maps.LatLng(30.6344, -87.4004),
	new google.maps.LatLng(30.6763, -87.4141),
	new google.maps.LatLng(30.7702, -87.5253),
	new google.maps.LatLng(30.8527, -87.6256),
	new google.maps.LatLng(30.9470, -87.5912),
	new google.maps.LatLng(30.9682, -87.5912),
	new google.maps.LatLng(30.9964, -87.6050)
];
var countyCoords = {	
	"counties": [
		{"name": "Alachua", "coords": [
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(29.838261,-82.114563),
			new google.maps.LatLng(29.709525,-82.051392),
			new google.maps.LatLng(29.444381,-82.062378),
			new google.maps.LatLng(29.504000,-82.196960),
			new google.maps.LatLng(29.504000,-82.551270),
			new google.maps.LatLng(29.547177,-82.556763),
			new google.maps.LatLng(29.547177,-82.655640)
		]}
		,
		{"name": "Bradford", "coords": [
			new google.maps.LatLng(30.145127,-82.139282),
			new google.maps.LatLng(29.910000,-82.431013),
			new google.maps.LatLng(29.838261,-82.114563),
			new google.maps.LatLng(29.709525,-82.051392),
			new google.maps.LatLng(30.147502,-82.048645)
		]}
		,
		{"name": "Union", "coords": [
			new google.maps.LatLng(30.145127,-82.139282),
			new google.maps.LatLng(30.139189,-82.453766),
			new google.maps.LatLng(30.002517,-82.573242),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(29.910000,-82.431013)
		]}
		,
		{"name": "Columbia", "coords": [
			new google.maps.LatLng(30.146315,-82.453766),
			new google.maps.LatLng(30.583500,-82.462006),
			new google.maps.LatLng(30.597680,-82.698212),
			new google.maps.LatLng(30.532694,-82.731171),
			new google.maps.LatLng(30.443938,-82.665253),
			new google.maps.LatLng(30.369321,-82.688599),
			new google.maps.LatLng(30.336139,-82.805328),
			new google.maps.LatLng(29.939465,-82.797089),
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(30.002517,-82.573242),
			new google.maps.LatLng(30.139189,-82.453766)
		]}
		,
		{"name": "Gilchrist", "coords": [
			new google.maps.LatLng(29.939465,-82.797089),
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.547177,-82.655640),
			new google.maps.LatLng(29.588983,-82.949524),
			new google.maps.LatLng(29.823370,-82.909012)
		]}
		,
		{"name": "Levy", "coords": [
			new google.maps.LatLng(29.588983,-82.949524),
			new google.maps.LatLng(29.300771,-83.166504),
			new google.maps.LatLng(28.986520,-82.757263),
			new google.maps.LatLng(29.057370,-82.533417),
			new google.maps.LatLng(29.213908,-82.537537),
			new google.maps.LatLng(29.215107,-82.402954),
			new google.maps.LatLng(29.504000,-82.404327),
			new google.maps.LatLng(29.504000,-82.551270),
			new google.maps.LatLng(29.547177,-82.556763),
			new google.maps.LatLng(29.547177,-82.655640)
		]}
		,
		{"name": "Dixie", "coords": [
			new google.maps.LatLng(29.588983,-82.949524),
			new google.maps.LatLng(29.300771,-83.166504),
			new google.maps.LatLng(29.513720,-83.394470),
			new google.maps.LatLng(29.657029,-83.424683),
			new google.maps.LatLng(29.822583,-83.318939),
			new google.maps.LatLng(29.823370,-82.909012)
		]}
		,
		{"name": "Suwannee", "coords": [
			new google.maps.LatLng(30.336139,-82.805328),
			new google.maps.LatLng(29.939465,-82.797089),
			new google.maps.LatLng(29.823370,-82.909012),
			new google.maps.LatLng(30.109494,-83.215942),
			new google.maps.LatLng(30.262626,-83.250275),
			new google.maps.LatLng(30.423809,-83.151398),
			new google.maps.LatLng(30.451041,-83.069000)
		]}
		,
		{"name": "Lafayette", "coords": [
			new google.maps.LatLng(30.262626,-83.367691),
			new google.maps.LatLng(30.262626,-83.250275),
			new google.maps.LatLng(30.109494,-83.215942),
			new google.maps.LatLng(29.823370,-82.909012),
			new google.maps.LatLng(29.822490,-83.367691)
		]}
		,
		{"name": "Madison", "coords": [
			new google.maps.LatLng(30.631244,-83.269501),
			new google.maps.LatLng(30.387092,-83.173942),
			new google.maps.LatLng(30.262626,-83.250275),
			new google.maps.LatLng(30.262626,-83.472748),
			new google.maps.LatLng(30.302946,-83.472748),
			new google.maps.LatLng(30.302946,-83.814697),
			new google.maps.LatLng(30.651207,-83.612823)
		]}
		,
		{"name": "Taylor", "coords": [
			new google.maps.LatLng(30.244239,-83.923874),
			new google.maps.LatLng(30.088702,-83.998718),
			new google.maps.LatLng(29.657029,-83.424683),
			new google.maps.LatLng(29.822583,-83.318939),
			new google.maps.LatLng(29.822490,-83.367691),
			new google.maps.LatLng(30.262626,-83.367691),
			new google.maps.LatLng(30.262626,-83.472748),
			new google.maps.LatLng(30.302946,-83.472748),
			new google.maps.LatLng(30.302946,-83.814697)
		]}
		,
		{"name": "Santa Rosa", "coords": [
			new google.maps.LatLng(30.997800,-87.166901),
			new google.maps.LatLng(30.851542,-87.313843),
			new google.maps.LatLng(30.345621,-87.195740),
			new google.maps.LatLng(30.387229,-86.796886),
			new google.maps.LatLng(30.996923,-86.786499)
		]}
		,
		{"name": "Okaloosa", "coords": [
			new google.maps.LatLng(30.387229,-86.796886),
			new google.maps.LatLng(30.996923,-86.786499),
			new google.maps.LatLng(30.994680,-86.390991),
			new google.maps.LatLng(30.378799,-86.396484)
		]}
		,
		{"name": "Walton", "coords": [
			new google.maps.LatLng(30.994680,-86.390991),
			new google.maps.LatLng(30.378799,-86.396484),
			new google.maps.LatLng(30.269149,-85.996170),
			new google.maps.LatLng(30.416111,-85.992737),
			new google.maps.LatLng(30.496018,-85.857468),
			new google.maps.LatLng(30.621368,-85.915833),
			new google.maps.LatLng(30.698154,-85.853348),
			new google.maps.LatLng(30.705239,-86.036682),
			new google.maps.LatLng(30.994092,-86.038055)
		]}
		,
		{"name": "Calhoun", "coords": [
			new google.maps.LatLng(30.566789, -85.384318),
			new google.maps.LatLng(30.564597, -85.173896),
			new google.maps.LatLng(30.607965, -85.167712),
			new google.maps.LatLng(30.606400, -84.933283),
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.201685, -85.389920)
		]}
		,
		{"name": "Gulf", "coords": [			
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.201685, -85.389920),
			new google.maps.LatLng(29.924028, -85.389573),
			new google.maps.LatLng(29.832145, -85.420951),
			new google.maps.LatLng(29.656620, -85.349449),
			new google.maps.LatLng(29.676287, -85.235766),
			new google.maps.LatLng(29.807599, -85.021260),
			new google.maps.LatLng(29.901734, -85.053668),
			new google.maps.LatLng(29.951665, -85.018688),
			new google.maps.LatLng(29.991770, -85.037721),
			new google.maps.LatLng(30.052343, -85.136487)
		]}
		,
		{"name": "Liberty", "coords": [			
			new google.maps.LatLng(30.606400, -84.933283),
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.052343, -85.136487),
			new google.maps.LatLng(29.991770, -85.037721),
			new google.maps.LatLng(29.951665, -85.018688),
			new google.maps.LatLng(30.013658, -85.005977),
			new google.maps.LatLng(30.011502, -84.547400),
			new google.maps.LatLng(30.266186, -84.734321),
			new google.maps.LatLng(30.387845, -84.652017),
			new google.maps.LatLng(30.604148, -84.885556)
		]}
		,
		{"name": "Franklin", "coords": [			
			new google.maps.LatLng(30.011502, -84.547400),
			new google.maps.LatLng(30.013658, -85.005977),
			new google.maps.LatLng(29.951665, -85.018688),
			new google.maps.LatLng(29.901734, -85.053668),
			new google.maps.LatLng(29.807599, -85.021260),
			new google.maps.LatLng(29.676287, -85.235766),
			new google.maps.LatLng(29.586165, -85.051187),
			new google.maps.LatLng(29.904502, -84.339716),
			new google.maps.LatLng(29.943593, -84.333896),
			new google.maps.LatLng(30.010389, -84.546319)
		]}
		,
		{"name": "Wakulla", "coords": [			
			new google.maps.LatLng(30.266186, -84.734321),
			new google.maps.LatLng(30.011502, -84.547400),
			new google.maps.LatLng(29.974932, -84.429659),
			new google.maps.LatLng(29.969822, -84.338312),
			new google.maps.LatLng(30.092430, -84.077042),
			new google.maps.LatLng(30.273609, -84.075422),
			new google.maps.LatLng(30.274107, -84.241135),
			new google.maps.LatLng(30.303523, -84.247775),
			new google.maps.LatLng(30.299934, -84.710826)
		]}
		,
		{"name": "Leon", "coords": [			
			new google.maps.LatLng(30.273609, -84.075422),
			new google.maps.LatLng(30.274107, -84.241135),
			new google.maps.LatLng(30.303523, -84.247775),
			new google.maps.LatLng(30.299934, -84.710826),
			new google.maps.LatLng(30.387845, -84.652017),
			new google.maps.LatLng(30.500983, -84.403939),
			new google.maps.LatLng(30.683986, -84.292702),
			new google.maps.LatLng(30.670276, -84.007380),
			new google.maps.LatLng(30.522038, -83.977347),
			new google.maps.LatLng(30.522038, -84.041001),
			new google.maps.LatLng(30.463740, -84.041729),
			new google.maps.LatLng(30.434264, -84.074465)
		]}
		,
		{"name": "Nassau", "coords": [
			new google.maps.LatLng(30.514272, -81.434499),
			new google.maps.LatLng(30.568740, -81.721717),
			new google.maps.LatLng(30.275515, -82.048929),
			new google.maps.LatLng(30.3598, -82.0638),
			new google.maps.LatLng(30.4877, -82.0226),
			new google.maps.LatLng(30.6308, -82.0473),
			new google.maps.LatLng(30.6757, -82.0514),
			new google.maps.LatLng(30.7111, -82.0377),
			new google.maps.LatLng(30.7371, -82.0514),
			new google.maps.LatLng(30.7678, -82.0102),
			new google.maps.LatLng(30.7914, -82.0322),
			new google.maps.LatLng(30.7997, -81.9717),
			new google.maps.LatLng(30.8244, -81.9608),
			new google.maps.LatLng(30.8056, -81.8893),
			new google.maps.LatLng(30.7914, -81.8372),
			new google.maps.LatLng(30.7796, -81.7960),
			new google.maps.LatLng(30.7536, -81.6696),
			new google.maps.LatLng(30.7289, -81.6051),
			new google.maps.LatLng(30.7324, -81.5666),
			new google.maps.LatLng(30.7229, -81.5295),
			new google.maps.LatLng(30.7253, -81.4856),
			new google.maps.LatLng(30.7111, -81.4609),
			new google.maps.LatLng(30.7088, -81.4249)
		]}
		,
		{"name": "Duval", "coords": [
			new google.maps.LatLng(30.514272, -81.434499),
			new google.maps.LatLng(30.568740, -81.721717),
			new google.maps.LatLng(30.275515, -82.048929),
			new google.maps.LatLng(30.187535, -82.049838),
			new google.maps.LatLng(30.189311, -81.693972),
			new google.maps.LatLng(30.129082, -81.660059),
			new google.maps.LatLng(30.134395, -81.622654),
			new google.maps.LatLng(30.118858, -81.567757),
			new google.maps.LatLng(30.120241, -81.539202),
			new google.maps.LatLng(30.103673, -81.538813),
			new google.maps.LatLng(30.105334, -81.434007),
			new google.maps.LatLng(30.252086, -81.436794),
			new google.maps.LatLng(30.252963, -81.379881)
		]}
		,
		{"name": "St. Johns", "coords": [
			new google.maps.LatLng(30.252963, -81.379881),
			new google.maps.LatLng(30.252086, -81.436794),
			new google.maps.LatLng(30.105334, -81.434007),
			new google.maps.LatLng(30.103673, -81.538813),
			new google.maps.LatLng(30.120241, -81.539202),
			new google.maps.LatLng(30.118858, -81.567757),
			new google.maps.LatLng(30.134395, -81.622654),
			new google.maps.LatLng(30.116262, -81.646159),
			new google.maps.LatLng(30.044314, -81.684267),
			new google.maps.LatLng(29.983850, -81.617623),
			new google.maps.LatLng(29.759317, -81.525606),
			new google.maps.LatLng(29.622720, -81.524232),
			new google.maps.LatLng(29.626301, -81.325105),
			new google.maps.LatLng(29.670965, -81.213018)
		]}
		,
		{"name": "Flagler", "coords": [
			new google.maps.LatLng(29.670965, -81.213018),
			new google.maps.LatLng(29.626301, -81.325105),
			new google.maps.LatLng(29.622720, -81.524232),
			new google.maps.LatLng(29.518796, -81.521612),
			new google.maps.LatLng(29.396597, -81.473389),
			new google.maps.LatLng(29.391934, -81.450034),
			new google.maps.LatLng(29.398617, -81.435480),
			new google.maps.LatLng(29.400473, -81.421190),
			new google.maps.LatLng(29.261393, -81.417416),
			new google.maps.LatLng(29.266155, -81.149968),
			new google.maps.LatLng(29.411010, -81.155461),
			new google.maps.LatLng(29.427159, -81.102246)
		]}
		,
		{"name": "Putnam", "coords": [
			new google.maps.LatLng(29.840020, -81.605451),
			new google.maps.LatLng(29.759317, -81.525606),
			new google.maps.LatLng(29.518796, -81.521612),
			new google.maps.LatLng(29.396597, -81.473389),
			new google.maps.LatLng(29.391934, -81.450034),
			new google.maps.LatLng(29.378920, -81.452357),
			new google.maps.LatLng(29.330111, -81.652036),
			new google.maps.LatLng(29.371350, -81.668562),
			new google.maps.LatLng(29.371350, -81.742123),
			new google.maps.LatLng(29.429790, -81.742123),
			new google.maps.LatLng(29.431483, -81.774852),
			new google.maps.LatLng(29.487068, -81.776796),
			new google.maps.LatLng(29.486280, -81.843373),
			new google.maps.LatLng(29.509623, -81.843373),
			new google.maps.LatLng(29.498329, -82.016397),
			new google.maps.LatLng(29.471971, -82.061128),
			new google.maps.LatLng(29.717609, -82.051156),
			new google.maps.LatLng(29.718736, -82.028770),
			new google.maps.LatLng(29.744015, -81.998519),
			new google.maps.LatLng(29.749693, -81.940205),
			new google.maps.LatLng(29.790849, -81.917860),
			new google.maps.LatLng(29.803146, -81.863361),
			new google.maps.LatLng(29.837189, -81.813222)
		]}
		,
		{"name": "Volusia", "coords": [
			new google.maps.LatLng(29.427159, -81.102246),
			new google.maps.LatLng(29.411010, -81.155461),
			new google.maps.LatLng(29.266155, -81.149968),
			new google.maps.LatLng(29.261393, -81.417416),
			new google.maps.LatLng(29.400473, -81.421190),
			new google.maps.LatLng(29.398617, -81.435480),
			new google.maps.LatLng(29.391934, -81.450034),
			new google.maps.LatLng(29.378920, -81.452357),
			new google.maps.LatLng(29.348172, -81.574296),
			new google.maps.LatLng(29.202231, -81.567986),
			new google.maps.LatLng(28.956600, -81.372970),
			new google.maps.LatLng(28.847474, -81.358305),
			new google.maps.LatLng(28.785638, -81.175909),
			new google.maps.LatLng(28.820977, -81.108083),
			new google.maps.LatLng(28.612345, -80.989544),
			new google.maps.LatLng(28.613624, -80.965267),
			new google.maps.LatLng(28.790787, -80.967695),
			new google.maps.LatLng(28.791730, -80.732634)
		]}
		,
		{"name": "Brevard", "coords": [
			new google.maps.LatLng(28.791730, -80.732634),
			new google.maps.LatLng(28.790787, -80.967695),
			new google.maps.LatLng(28.613624, -80.965267),
			new google.maps.LatLng(28.562349, -80.932378),
			new google.maps.LatLng(28.536120, -80.942574),
			new google.maps.LatLng(28.499217, -80.884310),
			new google.maps.LatLng(28.473612, -80.876056),
			new google.maps.LatLng(28.463795, -80.899119),
			new google.maps.LatLng(28.385227, -80.889409),
			new google.maps.LatLng(28.358722, -80.873020),
			new google.maps.LatLng(28.347799, -80.872142),
			new google.maps.LatLng(28.342930, -80.863190),
			new google.maps.LatLng(28.085003, -80.863147),
			new google.maps.LatLng(28.084575, -80.869944),
			new google.maps.LatLng(27.822093, -80.868502),
			new google.maps.LatLng(27.822093, -80.511670),
			new google.maps.LatLng(27.863448, -80.447579),
			new google.maps.LatLng(28.532261, -80.527461)
		]}
		,
		{"name": "Orange", "coords": [
			new google.maps.LatLng(28.612345, -80.989544),
			new google.maps.LatLng(28.613624, -80.965267),
			new google.maps.LatLng(28.562349, -80.932378),
			new google.maps.LatLng(28.536120, -80.942574),
			new google.maps.LatLng(28.499217, -80.884310),
			new google.maps.LatLng(28.473612, -80.876056),
			new google.maps.LatLng(28.463795, -80.899119),
			new google.maps.LatLng(28.385227, -80.889409),
			new google.maps.LatLng(28.358722, -80.873020),
			new google.maps.LatLng(28.347799, -80.872142),
			new google.maps.LatLng(28.347066, -81.657348),
			new google.maps.LatLng(28.782932, -81.657553),
			new google.maps.LatLng(28.785062, -81.414593),
			new google.maps.LatLng(28.741533, -81.420655),
			new google.maps.LatLng(28.712419, -81.444040),
			new google.maps.LatLng(28.713685, -81.458475),
			new google.maps.LatLng(28.640992, -81.459630),
			new google.maps.LatLng(28.639725, -81.328272),
			new google.maps.LatLng(28.610836, -81.327694)
		]}
		,
		{"name": "Osceola", "coords": [
			new google.maps.LatLng(28.347066, -81.657348),
			new google.maps.LatLng(28.347799, -80.872142),
			new google.maps.LatLng(28.342930, -80.863190),
			new google.maps.LatLng(28.085003, -80.863147),
			new google.maps.LatLng(28.084575, -80.869944),
			new google.maps.LatLng(27.822093, -80.868502),
			new google.maps.LatLng(27.822567, -80.881758),
			new google.maps.LatLng(27.734700, -80.880026),
			new google.maps.LatLng(27.733915, -80.873687),
			new google.maps.LatLng(27.642810, -80.873278),
			new google.maps.LatLng(27.643668, -81.139746),
			new google.maps.LatLng(28.002679, -81.385711),
			new google.maps.LatLng(28.083242, -81.361435),
			new google.maps.LatLng(28.086669, -81.456599),
			new google.maps.LatLng(28.143197, -81.457570),
			new google.maps.LatLng(28.143640, -81.525029),
			new google.maps.LatLng(28.200566, -81.524058),
			new google.maps.LatLng(28.259172, -81.558045),
			new google.maps.LatLng(28.259600, -81.657579),
			new google.maps.LatLng(28.347234, -81.657579)
		]}
		,
		{"name": "Pasco", "coords": [
			new google.maps.LatLng(28.171675, -82.848132),
			new google.maps.LatLng(28.172280, -82.105868),
			new google.maps.LatLng(28.258803, -82.105868),
			new google.maps.LatLng(28.259408, -82.055743),
			new google.maps.LatLng(28.478726, -82.055056),
			new google.maps.LatLng(28.479330, -82.252810),
			new google.maps.LatLng(28.435261, -82.254184),
			new google.maps.LatLng(28.432846, -82.687457),
			new google.maps.LatLng(28.214038, -82.852252)
		]}
		,
		{"name": "Pinellas", "coords": [
			new google.maps.LatLng(28.171675, -82.848132),
			new google.maps.LatLng(28.173013, -82.651107),
			new google.maps.LatLng(27.966409, -82.649047),
			new google.maps.LatLng(27.920308, -82.609222),
			new google.maps.LatLng(27.880257, -82.582443),
			new google.maps.LatLng(27.818331, -82.587249),
			new google.maps.LatLng(27.704100, -82.636001),
			new google.maps.LatLng(27.644507, -82.672393),
			new google.maps.LatLng(27.627474, -82.701919),
			new google.maps.LatLng(27.611047, -82.737625),
			new google.maps.LatLng(27.858405, -82.853668)
		]}
		,
		{"name": "Sarasota", "coords": [
			new google.maps.LatLng(27.389976, -82.646488),
			new google.maps.LatLng(27.386209, -82.252332),
			new google.maps.LatLng(27.209079, -82.253787),
			new google.maps.LatLng(27.207785, -82.056641),
			new google.maps.LatLng(27.031990, -82.057369),
			new google.maps.LatLng(27.033155, -82.255295),
			new google.maps.LatLng(26.945317, -82.255659),
			new google.maps.LatLng(26.946290, -82.376783)
		]}
		,
		{"name": "St. Lucie", "coords": [
			new google.maps.LatLng(27.558824, -80.679817),
			new google.maps.LatLng(27.557169, -80.321190),
			new google.maps.LatLng(27.262679, -80.199673),
			new google.maps.LatLng(27.263594, -80.284474),
			new google.maps.LatLng(27.206205, -80.285504),
			new google.maps.LatLng(27.206368, -80.677915)
		]}
	]
}