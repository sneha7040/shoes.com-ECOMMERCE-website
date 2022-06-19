try { 
	webengage.survey.onSubmit(function (data) {
    if (data.surveyId === "7djke4h") {
        var fName;
        var email;
        console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                    if (keys == "First Name") {
                        fName = data.questionResponses[i].value.values[keys];
                    }
                    if (keys == "Email") {
                        email = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
        console.log("we_fName", fName);
        console.log("we_email", email);
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined)
        ) {
            webengage.user.setAttribute({
                "we_first_name": fName,
                "we_email": email
            });
            webengage.track('Signed Up For News Letter', {
                "First Name": fName,
                "Email Address": email
            });
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~a61h753');
	 }
 }
