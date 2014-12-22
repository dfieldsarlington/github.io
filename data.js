      google.setOnLoadCallback(drawChart);

      function drawChart() {
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'ID');
          data.addColumn('date', 'Year');
          data.addColumn('number', 'Family Income');
          data.addColumn('number', 'Bachelors Degree Holders Age 25+');
          data.addRows([
              ['Arlington', new Date(1969), 71206, 18],
              ['Arlington', new Date(1979), 72963, 29],
              ['Arlington', new Date(1989), 91263, 42],
              ['Arlington', new Date(1999), 101398, 53],
              ['Arlington', new Date(2009), 106280, 61],
              ['Belmont', new Date(1969), 78104, 27],
              ['Belmont', new Date(1979), 81911, 42],
              ['Belmont', new Date(1989), 105618, 55],
              ['Belmont', new Date(1999), 122408, 63],
              ['Belmont', new Date(2009), 121301, 68],
              ['Brookline', new Date(1969), 79022, 29],
              ['Brookline', new Date(1979), 75026, 49],
              ['Brookline', new Date(1989), 106291, 64],
              ['Brookline', new Date(1999), 119751, 77],
              ['Brookline', new Date(2009), 139558, 79],
              ['Cambridge', new Date(1969), 57375, 30],
              ['Cambridge', new Date(1979), 52733, 43],
              ['Cambridge', new Date(1989), 69188, 54],
              ['Cambridge', new Date(1999), 76521, 65.1],
              ['Cambridge', new Date(2009), 88574, 71.4],
              ['Lexington', new Date(1969), 96010, 37.2],
              ['Lexington', new Date(1979), 103394, 47.1],
              ['Lexington', new Date(1989), 132200, 58.7],
              ['Lexington', new Date(1999), 144096, 69.1],
              ['Lexington', new Date(2009), 154625, 77.3],
              ['Medford', new Date(1969), 64449, 7.5],
              ['Medford', new Date(1979), 63359, 13.2],
              ['Medford', new Date(1989), 78777, 23.7],
              ['Medford', new Date(1999), 80366, 31.7],
              ['Medford', new Date(2009), 76527, 38.7],
              ['Melrose', new Date(1969), 72042, 15.6],
              ['Melrose', new Date(1979), 73740, 21.6],
              ['Melrose', new Date(1989), 93196, 31.4],
              ['Melrose', new Date(1999), 100629, 40.1],
              ['Melrose', new Date(2009), 99101, 48.5],
              ['Milton', new Date(1969), 85692, 22.3],
              ['Milton', new Date(1979), 84234, 28.3],
              ['Milton', new Date(1989), 107206, 43.1],
              ['Milton', new Date(1999), 121510, 52.2],
              ['Milton', new Date(2009), 124938, 56.1],
              ['Natick', new Date(1969), 75643, 20.8],
              ['Natick', new Date(1979), 75836, 29.1],
              ['Natick', new Date(1989), 96879, 42.4],
              ['Natick', new Date(1999), 110378, 52.5],
              ['Natick', new Date(2009), 115327, 57.8],
              ['Needham', new Date(1969), 91760, 31.8],
              ['Needham', new Date(1979), 93950, 42.8],
              ['Needham', new Date(1989), 120270, 53.7],
              ['Needham', new Date(1999), 138522, 64.9],
              ['Needham', new Date(2009), 162813, 72.2],
              ['Reading', new Date(1969), 77198, 21.1],
              ['Reading', new Date(1979), 83214, 27.9],
              ['Reading', new Date(1989), 105402, 36.7],
              ['Reading', new Date(1999), 114706, 47.8],
              ['Reading', new Date(2009), 116250, 54.5],
              ['Somerville', new Date(1969), 56084, 6],
              ['Somerville', new Date(1979), 53841, 16.4],
              ['Somerville', new Date(1989), 66666, 30.9],
              ['Somerville', new Date(1999), 65988, 40.6],
              ['Somerville', new Date(2009), 73772, 50.5],
              ['Stoneham', new Date(1969), 71341, 15],
              ['Stoneham', new Date(1979), 72476, 18.8],
              ['Stoneham', new Date(1989), 88706, 24.3],
              ['Stoneham', new Date(1999), 91859, 31.6],
              ['Stoneham', new Date(2009), 96399, 36.7],
              ['Watertown', new Date(1969), 66056, 15.9],
              ['Watertown', new Date(1979), 65298, 25.9],
              ['Watertown', new Date(1989), 85585, 41.4],
              ['Watertown', new Date(1999), 86846, 47.2],
              ['Watertown', new Date(2009), 85596, 53.4],
              ['Winchester', new Date(1969), 92701, 35.2],
              ['Winchester', new Date(1979), 97564, 44.6],
              ['Winchester', new Date(1989), 129572, 54.8],
              ['Winchester', new Date(1999), 141942, 64.9],
              ['Winchester', new Date(2009), 156364, 70.1]

          ]);

          var chart = new google.visualization.MotionChart(document.getElementById('chart_div'));

          chart.draw(data, {
              width: 600,
              height: 300
          });
      }