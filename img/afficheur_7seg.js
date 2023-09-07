     console.log ( "Inside Set_State of afficheur. Args = " + state.valeur );
     main_svg = this.svggroupe;
     var valeur = state.valeur;
     var coul_off = "#212121";
     var coul_on  = state.color;
     if (valeur > 9999) valeur = 9999;
     if (valeur < -999) valeur = -999;
     Update_chiffre = function ( digit, valeur )
      { console.log ( "digit "+ digit + " valeur " + valeur );
        patha = main_svg.find("#path"+digit+"a")[0];
        pathb = main_svg.find("#path"+digit+"b")[0];
        pathc = main_svg.find("#path"+digit+"c")[0];
        pathd = main_svg.find("#path"+digit+"d")[0];
        pathe = main_svg.find("#path"+digit+"e")[0];
        pathf = main_svg.find("#path"+digit+"f")[0];
        pathg = main_svg.find("#path"+digit+"g")[0];
        if (valeur == "0")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_on ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_off );
         }
        else if (valeur == "1")
         { patha.css ("fill", coul_off ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_off ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_off ); pathg.css ("fill", coul_off );
         }
        else if (valeur == "2")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_off );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_on ); pathf.css ("fill", coul_off ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "3")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_off ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "4")
         { patha.css ("fill", coul_off ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_off ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "5")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_off ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "6")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_off ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_on ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "7")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_off ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_off );
         }
        else if (valeur == "8")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_on ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "9")
         { patha.css ("fill", coul_on ); pathb.css ("fill", coul_on ); pathc.css ("fill", coul_on );
           pathd.css ("fill", coul_on ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_on ); pathg.css ("fill", coul_on );
         }
        else if (valeur == "-")
         { patha.css ("fill", coul_off ); pathb.css ("fill", coul_off ); pathc.css ("fill", coul_off );
           pathd.css ("fill", coul_off ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_off ); pathg.css ("fill", coul_on );
         }
        else if (valeur == " ")
         { patha.css ("fill", coul_off ); pathb.css ("fill", coul_off ); pathc.css ("fill", coul_off );
           pathd.css ("fill", coul_off ); pathe.css ("fill", coul_off ); pathf.css ("fill", coul_off ); pathg.css ("fill", coul_off );
         }
      }
     console.log ( valeur.toString().split("").reverse() );
     tableau = valeur.toString().split("").reverse();
     if (valeur < 0) Update_chiffre ( "1", "-" );
     if (tableau[3]) Update_chiffre ( "1", tableau[3] ); else Update_chiffre ( "1", " " );
     if (tableau[2]) Update_chiffre ( "2", tableau[2] ); else Update_chiffre ( "2", " " );
     if (tableau[1]) Update_chiffre ( "3", tableau[1] ); else Update_chiffre ( "3", " " );
     if (tableau[0]) Update_chiffre ( "4", tableau[0] ); else Update_chiffre ( "4", " " );

