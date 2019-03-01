define(['knockout'], function(ko){
	
	var IndexPageViewModel = function() {
		
		// Centralized object which accepts all subscribers that have interest about a special topic.
		ko.postbox = new ko.subscribable();

		var SubscriberViewModel1 = function() {
		  
		  var self = this;
		  
		  // "subscribe" function will add the subscriber for "removePersonCallBackTopic" topic.
		  ko.postbox.subscribe(function(removePersonCallback) {
		    
		    removePersonCallback(1);
		    
		  }, this, "removePersonCallBackTopic");
		  
		}

		var SubscriberViewModel2 = function() {
		  
		  var self = this;
		  
		// "subscribe" function will add the subscriber for "removePersonCallBackTopic" topic.
		  ko.postbox.subscribe(function(removePersonCallback) {
		    
		    removePersonCallback(2);
		    
		  }, this, "removePersonCallBackTopic");
		  
		}


		var NotifierViewModel = function() {
		  
		  var self = this;
		  
		  // "removePerson" which is a Javascript function will be shared to all subscribers by "notifySubscribers" function.
		  self.removePerson = function(vmIdentityNumber) {
		    console.log("Person is removed from database! - " + vmIdentityNumber);
		  }
		  
		  // Now, we will notify all subscribers.
		  ko.postbox.notifySubscribers(self.removePerson, "removePersonCallBackTopic");
		  
		}


		// These ViewModel objects will register themselves to a centralized point which is named as "postbox".
		var subscriberViewModel1 = new SubscriberViewModel1();
		var subscriberViewModel2 = new SubscriberViewModel2();
		
		// The object of "NotifierViewModel" will notify all subscribers which are observing the topic named as "removePersonCallBackTopic".
		var notifierViewModel = new NotifierViewModel();
		
	}
	
	ko.applyBindings(new IndexPageViewModel());
	
});







