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
		 	return this.tab === checkTab;
		 };
	});
	var puppy=[
		{
			breed: 'German Shepherd',
			price: 5000,
			canPurchase:true,
			description:"The cutest",
			origin: "Germany",
			image:
			{
				thumb:'img/german-shepherd.jpg'
			}
		},
		{
			breed: 'French Bulldog',
			price: 2500,
			canPurchase: true,
			description:"",
			origin: "England",
			image:
			{
				thumb:'img/french-bulldog.jpg'
			}
		},
		{
			breed: 'Bernese Mountain Dog',
			price: 2500,
			canPurchase: true,
			description:"",
			origin: "Switzerland",
			image:
			{
				thumb:'img/bernese.jpg'
			}
		},
		{
			breed: 'Chihuahua',
			price: 1500,
			canPurchase: true,
			description:"",
			origin: "Mexico",
			image:
			{
				thumb:'img/chihuahua.jpg'
			}},
			{
			breed: 'Cat',
			price: 500,
			canPurchase: true,
			description:"",
			origin: "no clue",
			image:
			{
				thumb:'img/kitten.jpg'
			}},
			{
			breed: 'Cute Cat',
			price: 0,
			canPurchase: true,
			description:"",
			origin: "unknown",
			image:
			{
				thumb:'img/kitten-2.jpg'
			}},
			{
			breed: 'Shrek Cat',
			price: 5000,
			canPurchase: true,
			description:"",
			origin:"Far Far Away",
			image:
			{
				thumb:'img/kitten-3.jpg'
			}
		}]
})();
