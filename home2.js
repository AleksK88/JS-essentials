var curs = [32, 27, 1.18];

		var EURO  = curs[0];
		var DOLLAR = curs[1];
		var EURODOLLAR = curs[2];

		var euro = prompt("Enter euros:", 0);
		var dollar = prompt("Enter dollars:", 0);

        var uaEu = euro*EURO;
        var uaDoll = dollar*DOLLAR;
        var euDoll = 1*EURODOLLAR;

        alert(euro + " " + "euros" + " " + "equal" + " " +  uaEu + " " + "grns" + "," + " " + dollar + " " 
        + "dollars" + " " + "equal" + " " + uaDoll + " " + "grns" + "," + " " + "1 euro" + " "+ "equals" + " " + euDoll + "$");