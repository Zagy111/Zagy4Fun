    const cytaty = [
	'„Życie, które nie jest poddawane refleksji, nie jest warte życia.” – Sokrates',
	'„Życie jest jak jazda na rowerze. Aby utrzymać równowagę, musisz się poruszać.” – Albert Einstein',
	'„jesteś jedynką, czy zerem?” - Mr. Robot',
	'„Nie licz dni, spraw, by dni się liczyły.” – Muhammad Ali',
	'„Prawdziwe bogactwo to nie to, ile twoja praca pozwoli ci zarobić, ale to, kim cię uczyni.” – Pino Pellegrino',
	'„Władza należy do tych, którzy ją biorą. Nie ma to nic wspólnego z ich ciężką pracą, wielkimi ambicjami czy słusznymi kwalifikacjami. Sam fakt woli wzięcia jej jest często jedyną potrzebną rzeczą” - Mr. Robot',
	'„Nie idź tam, gdzie wiedzie ścieżka. Idź tam, gdzie jej nie ma i zostaw ślad.” – Ralph Waldo Emerson',
	'„Dlaczego?” - Arystoteles'
    ];

    let numer = -1;

    function zmienCytat() {
      numer = (numer + 1) % cytaty.length;
      document.getElementById("cytat").textContent = cytaty[numer];
    }

	function menu() {
		window.location.href='../index.html';
	}