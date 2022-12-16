function main(){
    //computer first so player=2 else player =1
    var move;
    for(var turn =0; turn<11; turn++) {
        if((turn) % 2 === 0){
            console.log("computer turn");
            console.log("move",turn);
            move=turn;
            var rowidx=Math.floor(move/6);
            var colidx=move%6;
            table.rows[rowidx].cells[colidx].classList.toggle("computer_selected");
        }
        else {
            console.log("player turn");
            $(document).on("click", "#table td", function(e) {
                var data = $(this).attr('id');
                move=data;
                console.log("move",move);
                $(this).css("background-color","black");
           }); 
        }
    }
}
main();