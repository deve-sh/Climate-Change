var map = new Datamap({
        scope: 'world',
        element: document.getElementById('worldmap'),
        projection: 'mercator',
        height: (window.innerWidth<=600)?300:(window.innerWidth<1000)?400:680,
        fills: {
          defaultFill: '#343434',
          midwarm: '#ea7812',
          extreme: '#ea3612',
          somewhere: '#3584b8',
          upper : '#ec4d15',
          aboveless: '#1987ce',
          least : '#45abee'
        },
        
        data: {
          USA: {fillKey: 'midwarm' },
          RUS: {fillKey: 'somewhere' },
          CAN: {fillKey: 'aboveless' },
          BGD: {fillKey: 'extreme' },
          IND: {fillKey: 'extreme'},
          NPL: {fillKey: 'midwarm' },
          AUS: {fillKey: 'extreme' },
          ZAF: {fillKey: 'extreme' },
          MAD: {fillKey: 'extreme' },
          AUS: {fillKey: 'least'},
          GRL: {fillKey: 'least'},
          NZL: {fillKey: 'least'},
          GBR: {fillKey: 'midwarm'},
          FIN: {fillKey: 'aboveless'},
          IRL: {fillKey: 'aboveless'},
          SWE: {fillKey: 'least'},
          LBR: {fillKey: 'aboveless'},
          NOR:{fillKey: 'least'},
          EST:{fillKey: 'least'},
          BRN: {fillKey: 'least'},
          ISL: {fillKey: 'least'},
          PAK: {fillKey: 'extreme'},
          CHN: {fillKey: 'extreme'},
          AFG: {fillKey: 'extreme'},
          ARE : {fillKey:'midwarm'},
          EGY: {fillKey: 'extreme'},
          MNG : {fillKey: 'midwarm'},
          QAT: {fillKey: 'extreme'},
          AUT: {fillKey: 'least'},
          DEU : {fillKey: 'midwarm'},
          LKA : {fillKey: 'extreme'},
          SSD : {fillKey: 'extreme'},
          BRA: { fillKey: 'extreme'},
          BRN: {fillKey: 'least'},
          JPN : {fillKey: 'extreme'},
          FRA : {fillKey: 'midwarm'}
        }
      })
      
        
      
       //bubbles, custom popup on hover template
     map.bubbles([
       {name: 'The Biggest Pollutant of All Time', latitude: 39.913818, longitude: 116.363625, radius: 10, fillKey: 'extreme'},
       {name: 'Least Polluting. Just Because They don\'t have any to begin with.', latitude: -25.32, longitude: 120.32, radius: 9, fillKey: 'defaultFill'},
       {name: 'God.. Its Already Hot here!', latitude: 23.4162, longitude: 25.6628, radius: 8, fillKey: 'extreme'},
       {name: 'We are Here... And Screwed!', latitude: 18.5204, longitude: 73.8567, radius: 8, fillKey: 'extreme'},
       {name: "Trump Claims Humans Don't cause Climate Change. What an Idiot?!",latitude:38.9072, longitude: -77.0369,radius: 8 ,fillKey : 'extreme'}
     ], {
       popupTemplate: function(geo, data) {
         return "<div class='hoverinfo' style='color: #000000'>" + data.name + "</div>";
       }
     });