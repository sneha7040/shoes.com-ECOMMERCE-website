try { 
	webengage.options("webpush.registerServiceWorker", false);
var serviceWorkerURL = location.origin + '/apps/webengage/service-worker';
navigator.serviceWorker.getRegistration('/').then(function (rootSwRegistration) {
	if (rootSwRegistration && rootSwRegistration.active && rootSwRegistration.active.scriptURL === serviceWorkerURL) {
        console.log('Unregistered older service worker from root scope.');
		return rootSwRegistration.unregister();
	}
}).then(function () {
	return navigator.serviceWorker.getRegistration('/apps/webengage/');
}).then(function (swRegistration) {
	if (!swRegistration) {
		navigator.serviceWorker.register("/apps/webengage/service-worker", { scope: '/apps/webengage/' }).then(function (registration) {
			console.log('Service worker registered on '+registration.scope);
		});
	}
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'd8h61gb');
	 }
 }
