var row = 4;
var col = 4;


//To initialize the grid
var vectGrid = [];

createGrid = function() {
    for(var i = 0; i < row; i++) {
        vectGrid[i] = [];
        for(var j = 0; j < col; j++) {
            vectGrid[i][j] = 0;
        }
    }
    for(var i = 0; i < 2; i++) {
        addTile();
    }
}


console.log(vectGrid);

function addTile(){


};

function random

//Random x et y de 0 à 4
//Voir dans le vecteur
//Si vide donner position
//Sinon recommencer


$(document).keydown(function(event){
        console.log(event.which);
        switch(event.keyCode){
            case 37: //left

                break;
            case 39: //right

                break;
            case 38: //up

                break;
            case 40: //down

                break;
        }


});