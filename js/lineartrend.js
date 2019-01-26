// JavaScript File Pertaining to All the Linear Trend Model Stuff.

var regyear = [1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000];				// List of Decades.
var regtemp = [13.73,13.75,13.74,13.72,13.83,13.96,14.04,13.98,13.99,14,14.18,14.31,14.51];	// Avg. Smoothed Out Temperature in that Decade.

// Values of a and b obtained from the Python Regression Library.

var a = 3.698
var b = 0.005292

// Gives Line : Y = 3.698 + 0.005292(X)

var estimate = (year=2010) => {
	return (year>=2020 && year<2100)?(a+b*(year)+0.4):(year>=2100)?"We're All Dead.":(year<1600)?"Invalid Year.":(a+b*(year));	// Predicted increase in temperature for every decade.
}

// Node Execution

var estimator = (e,year=2010) => {
	e.preventDefault();
	
	let str = estimate(year).toString();

	document.getElementById('tempcard').style.display="inline-block";

	if(!isNaN(str))			// If the result is a number.
		document.getElementById('tempcard').textContent = [...str].slice(0,5).join('');	// Round off to 2 or 3 decimal places.
	else
		document.getElementById('tempcard').textContent = str;		// Print the message.
}