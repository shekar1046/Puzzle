var app=angular.module("ImageShuffle", []);
app.controller("ImageController", function($scope){
    $scope.cars={
        carName:"Audi",
        photo:"Cars/audi.jpeg"
    };
    

  
    $scope.showImage=function(img){
        $scope.pic=img.pic;
        $scope.title=img.title;
    }
});