     console.log ( "Inside Set_State of Pressostat_simple. Args = " + state );
     aiguille = this.svg.find("#path5908")[0];
/*     console.log ( aiguille );
     console.log ( aiguille.node );*/
     var degree = 270*state.valeur/6;
     aiguille./*animate(2000).*/transform ( { rotate: degree, origin: { x: 64.824, y: 64.774 } } );
     if ( state.color != null ) aiguille.css("fill", state.color );
