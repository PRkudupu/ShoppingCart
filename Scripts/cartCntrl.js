var myModule=angular.module("myApp",[]);

myModule.controller("cartCntrl",function($scope){
    alert("hello");
   $scope.products=[
       {
           productId:"1",
           productUrl:"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
           productName:"Shoe",
           productCode:"121",
           productDesc:"Nike Shoes",
           price:"50$"
       },
        {
           productId:"2",
           productUrl:"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
           productName:"Garden",
           productCode:"122",
           productDesc:"Garden accessories",
           price:"60$"
       },
        {
           productId:"3",
           productUrl:"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
           productName:"Shoe",
           productCode:"123",
           productDesc:"Garden Saw",
           price:"70$"
       }
     ];

});