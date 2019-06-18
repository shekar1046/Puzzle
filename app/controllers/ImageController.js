app.controller("ImageController", function($scope){
    $scope.images = [];
        
    $scope.imageUpload = function(element){
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(element.files[0]);
    }
    
    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
            $scope.images.push(e.target.result);
        });
    }
    $scope.ImagePuzzle=function(e){
        $scope.x=event.clientX;
        $scope.y=event.clientY;
        $scope.images.push(e.target.result +x+" "+y);

    }
});