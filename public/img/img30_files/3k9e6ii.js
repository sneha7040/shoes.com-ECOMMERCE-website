try { 
	webengage.survey.onSubmit(function (data) {
    if (data.surveyId === "~5g1clim") {
        var email;
        console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                    if (keys == "Enter your email address") {
                        email = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
        console.log("we_email", email);
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined) &&
            email !== null
        ) {
            //webengage.user.login(email);
            webengage.user.setAttribute({
                "we_email": email
            });
            webengage.track('lead_captured', {
                "we_email": email
            });
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e6ii');
	 }
 }
