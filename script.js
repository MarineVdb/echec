//Fonction Init
function Initialiser ()
{
    GenererEchiquierVideHTML ();
    GenererEchiquierVideJS ();
    PoserPiece();
}

//Generer l'échiquier
function GenererEchiquierVideHTML()
{
    for (i=0; i<=7; i++) {
       for(j=0; j<=7; j++){
            if ((j%2 != 0 && i%2 != 0) || (j%2 == 0 && i%2 == 0)) {
                document.getElementById(i).innerHTML += "<td id='" + i + "-" + j + "' bgcolor='ivory' width=60 height=60></td>";
            } else {
                document.getElementById(i).innerHTML += "<td id='" + i + "-" + j + "' bgcolor='sienna' width=60 height=60></td>";
            }
        }
    }
}

//Classe Case
class Case {
    constructor(i,j){
        this.id = i+"-"+j;
        this.piece="";
        this.couleur="";

        this.ImagePiece = function (){
            let HTML="<img src=\"pions/" + this.piece+this.couleur+".png\" />";
            document.getElementById(this.id).innerHTML = HTML;       
        }
    }
}

//Fonction GenererEchiquier
function GenererEchiquierVideJS () 
{
    Echiquier = new Array (8);
    for (i=0; i<=7; i++) {
        Echiquier[i]=new Array(8);
    }

    for (i=0;i<=7;i++) {
      for (j=0;j<=7;j++) {
        Echiquier[i][j]= new Case(i,j);
      }  
   }
}


//Fonction PoserPieces 
function PoserPiece(){
    for (i=0;i<=7;i++){
        for(j=0;j<=7;j++){
            if(i==0 || i==1 || i==6 || i==7) {
                if(i==0 || i==1) {
                    Echiquier[i][j].couleur = "Noir";
                } else {
                    Echiquier[i][j].couleur = "Blanc";
                }
                if(i==1 || i==6){
                    Echiquier[i][j].piece = "pion";
                }else if(j==0 || j==7) {
                    Echiquier[i][j].piece = "tour";
                } else if (j==1 || j==6) {
                    Echiquier[i][j].piece = "cavalier";
                } else if (j==2 || j==5) {
                    Echiquier[i][j].piece = "fou";
                } else if (j==3){
                    Echiquier[i][j].piece = "reine";
                } else {
                    Echiquier[i][j].piece = "roi"; 
                } 
                Echiquier[i][j].ImagePiece();
            }
        }
    }

}







 











