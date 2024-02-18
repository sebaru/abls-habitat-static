     console.log ( "Inside Set_State of Phmetre. Args = " + state );
     aiguille = this.svggroupe.find("#path5908")[0];
/*     console.log ( aiguille );
     console.log ( aiguille.node );*/
     var valeur;
          if (state.valeur < 7.1) valeur = 7.1;
     else if (state.valeur > 7.5) valeur = 7.5;
     else valeur = state.valeur;
     var degree  = 200* (valeur-7.1)/ (7.5-7.1);
     aiguille./*animate(2000).*/transform ( { rotate: degree, origin: { x: 65, y: 62 } } );
     if ( state.color != null ) aiguille.css("fill", state.color );
