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

        $scope.submit = function(record)
        {
            resetButtonValues = function() 
            {
                $scope.doStartButton = false;
                $scope.doEndButton = false;
            }

            var data = 
            {
                player1: { name: $scope.player1.name, character: $scope.player1.character },
                player2: { name: $scope.player2.name, character: $scope.player2.character }
            };

            if ($scope.doStartButton)
            {
                nodecg.sendMessage("startMarker", data, function (err)
                {
                    if (err) { console.error("Error sending startMarker message."); }
                });
            }
            else if ($scope.doEndButton)
            {
                nodecg.sendMessage("endMarker", data, function (err)
                {
                    if (err) { console.error("Error sending endMarker message."); }
                });
            }

            resetButtonValues();
        };
    });

