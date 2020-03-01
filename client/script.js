function generate_table(countries) {
	$('#table tbody').empty();
	for (i in countries){
		let country = countries[i];
		let checked = "<input type = \"checkbox\"";
		checked += country.english ? " checked>":">";
		$('#table').append('<tr><th scope="row">' + (Number(i)+1)+
			               '</th><td>'+country.name+
			               '</td><td>'+country.area+
			               '</td><td>'+checked+'</td></tr>');
	}
}

$("form").on("submit", function (event){
	event.preventDefault();
	let encodedForm = $(this).serialize();
	$.post("/countries", encodedForm, function(data){
		let mas = JSON.parse(data);
		generate_table(mas);
	});
});