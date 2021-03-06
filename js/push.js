/*
Class that will allow us to register for push 
and register in push server
*/
var Push = (function() {	
  //Now we call push.register() to request an endpoint
  if (navigator.push) {
	var req = navigator.push.register();
	
	req.onsuccess = function(e) {
	  var endpoint = req.result;
	    debug("New endpoint: " + endpoint );
	}
	
	req.onerror = function(e) {
     debug("Error getting a new endpoint: " + JSON.stringify(e));
    }
  } 
  
  // Listen to push notifications
  window.navigator.mozSetMessageHandler('push', function onPush(version) {
    var channel = [] //an array of all endpoints or extract it from the database in other case;
    var version = //the last version value of the database;
//  for (channel i = channel.length; i >= 0; i--) {
      //for each endpoint, if its version is lower we sent it a notification
    Notifications.notify();
  });

  function sendPushTo(endpoint) {
    // We can do this even if the platform doesn't support push. We cannot receive
    // but we can still send notifications...
    Utils.sendXHR('PUT',endpoint, "version=" + new Date().getTime());
  }

  return {
	  sendPushTo: sendPushto,
    setPushHandler: setPushHandler
  }

});
