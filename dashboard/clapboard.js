var clapboardModule = angular.module("ClapboardApp", []);

clapboardModule.controller("ClapboardController", function($scope)
    {
        $scope.characters = [
            "Bowser",
            "DK",
            "Dr.Mario",
            "Falco",
            "Falcon",
            "Fox",
            "Game&Watch",
            "Ganondorf",
            "Ice Climbers",
            "Jigglypuff",
            "Kirby",
            "Link",
            "Luigi",
            "Mario",
            "Marth",
            "Mewtwo",
            "Ness",
            "Peach",
            "Pichu",
            "Pikachu",
            "Roy",
            "Samus",
            "Sheik",
            "Yoshi",
            "Young Link",
            "Zelda"
            ];

        $scope.doStartButton = false;
        $scope.doEndButton = false;

        $scope.execute = function(record)
        {
            resetButtonValues = function() 
            {
                $scope.doStartButton = false;
                $scope.doEndButton = false;
            }

            if ($scope.doStartButton)
            {
                console.log("Starto");
            }
            else if ($scope.doEndButton)
            {
                console.log("Endo");
            }

            resetButtonValues();
        };
    });

