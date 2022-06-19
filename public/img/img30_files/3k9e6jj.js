try { 
	webengage.survey.onSubmit(function (data) {
    if (data.surveyId === '~162i7lo') {
        //var name, email, phone;
      var email;
        for (var i = 0; i < data.questionResponses.length; i++) {
     if (Object.prototype.toString.call(data.questionResponses[i].value.values) == "[object Object]") {

                    console.log("object");
            for (var keys in data.questionResponses[i].value.values) {

                           
							if (keys == "Enter your email Id here") {
								email = data.questionResponses[i].value.values[keys];
							}
				
            }
     } }
      
         console.log('we_email', email);      
       
        if(email !== null ) webengage.user.setAttribute('we_email', email); 
        }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e6jj');
	 }
 }
