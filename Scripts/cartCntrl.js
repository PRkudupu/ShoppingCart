var myModule=angular.module("myApp",[]);

myModule.controller("cartCntrl",function($scope){
   $scope.products=[
       {
           productCode:"121",
           productUrl:"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
           productName:"Shoe",
           productDesc:"Garden broom",
           price:"50$"
       },
        {
           productCode:"122",
           productUrl:"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
           productName:"Garden",
           productDesc:"Garden accessories",
           price:"60$"
       },
        {
           productCode:"123",
           productUrl:"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
           productName:"Shoe",
           productDesc:"Garden Saw",
           price:"70$"
       }
     ];
    $scope.itemsAdded="";
    $scope.filterGrid="";
    $scope.cart=[];
    
$scope.add=function(pr){

   //Create the json object  
    var items={
        productId:pr.productCode,
        productDesc:pr.productDesc,
     };
     $scope.cart.push(items);
      //$scope.itemsAdded=pr.productDesc;
   
}
});