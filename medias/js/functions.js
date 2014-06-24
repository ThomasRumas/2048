grid = {};

var row = 4;
var col = 4;

//To initialize the grid
var vectGrid = [];
grid.createGrid = function() {
    for(var i = 0; i < row; i++) {
        vectGrid[i] = [];
        for(var j = 0; j < col; j++) {
            vectGrid[i][j] = 0;
        }
    }
    for(var i = 0; i < 2; i++) {
        grid.addTile();
    }
}
grid.randomEmpty = function(){
    var position = {};
    position.x = Math.floor(Math.random()*4);
    position.y = Math.floor(Math.random()*4);

    if (vectGrid[position.x][position.y] == 0) {
        return position;
    }else{
        return grid.randomEmpty();
    }
    
}
grid.addTile = function(){
    var pos = grid.randomEmpty();
    var random = Math.random() < 0.9 ? 2 : 4;

    vectGrid[pos.x][pos.y] = random;

    $('.tile-container').append('<div class="tile tile-'+random+' tile-'+(pos.x+1)+'-'+(pos.y+1)+'"><span><span>'+random+'</span></span></div>');
}
grid.updateGrid = function(dir) {
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (vectGrid[i][j]!=0 && j!=0) {
                switch(dir){
                    case 'left':

                        break;
                    case 'right':
                        break;
                    case 'up':
                        for (var x =0;x<row;x++) {
                            if (vectGrid[i][x]==0) {
                                $('.tile-'+(i+1)+'-'+(j+1)).removeClass('tile-'+(i+1)+'-'+(j+1)).addClass('tile-'+(i+1)+'-'+(x+1));
                                vectGrid[i][j-1]=vectGrid[i][j];
                                vectGrid[i][j]=0;
                            }  
                        }
                        break;
                    case 'down':
                        break;
                }
            }  
        }
    }
}
grid.createGrid();

$(document).keydown(function(event){
        switch(event.keyCode){
            case 37: //left
                grid.updateGrid('left');
                break;
            case 39: //right
                grid.updateGrid('right');
                break;
            case 38: //up
                grid.updateGrid('up');
                break;
            case 40: //down
                grid.updateGrid('down');
                break;
        }


});