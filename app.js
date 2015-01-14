(function(){
	var app=angular.module('petStore',[ ]);
	app.controller('PuppyController',function(){
		this.pets = puppy;
	});
	app.controller('PanelController',function(){
		 this.tab = 1;

		 this.selectTab=function(setTab){
		 	this.tab = setTab;
		 };

		 this.isSelected=function(checkTab){
		 	return this.tab === checkTab; //check to see if the value matches the 'tab' parameter
		 };
	});
	var puppy=[
		{
			breed: 'German Shepherd',
			price: 5000,
			canPurchase: true,
			description: "The German Shepherd is a relatively new breed of dog, with their origin dating to 1899. As part of the Herding Group, German Shepherds are working dogs developed originally for herding sheep. Since that time, however, because of their strength, intelligence, trainability and obedience, German Shepherds around the world are often the preferred breed for many types of work, including search-and-rescue, police and military roles and even acting. The German Shepherd is the second-most popular breed of dog in the United States and fourth-most popular in the United Kingdom",
			personality: "Watchful. Alert. Obedient. Loyal. Courageous. Intelligent. Curious. Confident",
			origin: "Germany",
			perfectfor: "Family. Kids",
			image:
			{
				thumb:'img/german-shepherd.jpg'
			}
		},
		{
			breed: 'French Bulldog',
			price: 2500,
			canPurchase: true,
			description:'The French Bulldog is a small breed of domestic dog. "Frenchies" were the result in the 1800s of a cross between bulldog ancestors imported from England and local ratters in Paris (France).',
			personality:"Lively. Easygoing. Affectionate. Playful. Bright. Social. Alert. Keen",
			origin: "England",
			perfectfor: "Family. Kids. People who live in an apartment",
			image:
			{
				thumb:'img/french-bulldog.jpg'
			}
		},
		{
			breed: 'Bernese Mountain Dog',
			price: 2500,
			canPurchase: true,
			description:'The Bernese Mountain Dog, called in German the Berner Sennenhund, is a large sized breed of dog, one of the four breeds of Sennenhund-type dogs from the Swiss Alps. The name Sennenhund is derived from the German Senne ("alpine pasture") and Hund ("dog"), as they accompanied the alpine herders and dairymen called Senn. Berner (or Bernese in English) refers to the area of the breed’s origin, in the canton of Bern in Switzerland. This mountain dog was originally kept as a general farm dog. Large Sennenhunde in the past were also used as draft animals, pulling carts.',
			personality:"Loyal. Faithful. Intelligent. Affectionate",
			origin: "Switzerland",
			perfectfor: "Family. Kids.",
			image:
			{
				thumb:'img/bernese.jpg'
			}
		},
		{
			breed: 'Chihuahua',
			price: 1500,
			canPurchase: true,
			description:"the smallest breed of dog and is named for the state of Chihuahua in Mexico. Chihuahuas come in a wide variety of sizes, head shapes, colors, and coat lengths.",
			personality:"Courageous. Lively. Devoted. Alert. Quick",
			perfectfor: "Adults",
			origin: "Mexico",
			image:
			{
				thumb:'img/chihuahua.jpg'
			}
		}]
})();
