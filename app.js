(function (arguments) {

  //------------------------------------------------
  // Below is an ANGULAR API Implementation
  //------------------------------------------------
  angular.module('pokemonObjects', [])
      .controller('pokemonController', pokemonController)

    function pokemonController() {
      var PC = this


      function pokemonController($http) {
        var pokeCtrl = this
        // make an AJAX reequest to the pokemon api
        $http.get(http://pokeapi.co/api/v2/pokemon/')
      }


    //------------------------------------------------
    // Below is a JQUERY API Implementation
    //------------------------------------------------
    // $.ajax({
    //   url: 'http://pokeapi.co/api/v2/pokemon/',
    //   method: 'GET',
    //   success: sucFunc
    // })
    //
    // // $.ajax({
    // //   url: 'http://pokeapi.co/api/v2/pokemon/',
    // //   method: 'GET',
    // //   success: function(response){
    // //     for (var i = 1; i < 812; i++){
    // //     console.log('Response: ', response.results[i].name)
    // //     }
    // //   }
    // // })
    // function sucFunc (response){
    //   $(response.results).each(printIDandName)
    //   // $.each(response, function(response){
    //   // console.log('Response: ', results.name)
    //   // }
    //   }
    //
    //   function printIDandName () {
    //     console.log('Name: ' + this.name)
    //   }
    }

})();
