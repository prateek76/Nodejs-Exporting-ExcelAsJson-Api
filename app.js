const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hell World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

app.get('/exceltojson', (req, res) => {
  'use strict';
  const excelToJson = require('convert-excel-to-json');
  
  const result = excelToJson({
      sourceFile: 'Football.xlsx',
      sheets:[{
        name: 'Details',
        header:{
            rows: 1
        },
        columnToKey: {
        	/*A: '{{A1}}',
          B: '{{B1}}',
          C: '{{C1}}',
          D: '{{D1}}',
          E: '{{E1}}',
          F: '{{F1}}',
          G: '{{G1}}',
          H: '{{H1}}',
          I: '{{I1}}',
          J: '{{J1}}',
          K: '{{K1}}',
          L: '{{L1}}'*/ //or
          '*': '{{columnHeader}}' //this itself selectes the header from excel sheet
        }
    }
          ,{
            name: 'La Liga',
            header:{
                rows: 1
            },
            columnToKey: {
              //A: '{{A1}}', B: '{{B1}}', C: '{{C1}}', D: '{{D1}}', E: '{{E1}}' or
              '*': '{{columnHeader}}' //this itself selectes the header from excel sheet
            }
        },
        {
          name: 'Premier League',
          header:{
              rows: 1
          },
          columnToKey: {
            //A: '{{A1}}', B: '{{B1}}', C: '{{C1}}' or
            '*': '{{columnHeader}}' //this itself selectes the header from excel sheet
          }
        },
          {
            name: 'Serie A',
            header:{
                rows: 1
            },
            columnToKey: {
              /*A: '{{A1}}',
              B: '{{B1}}',
              C: '{{C1}}',
              D: '{{D1}}',
              E: '{{E1}}',
              F: '{{F1}}',
              G: '{{G1}}',
              H: '{{H1}}',
              I: '{{I1}}'*/ //or
              '*': '{{columnHeader}}' //this itself selectes the header from excel sheet
            }
        }]
  });

  res.send(result);
});
