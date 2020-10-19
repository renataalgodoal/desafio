
const {google} = require('googleapis');
const keys = {
    "type": "service_account",
    "project_id": "my-project-6589489",
    "private_key_id": "022b42b712b83d9226c76e2b01605b2492a482b5",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3vMZEE2DS4Bxb\nVt80cwhdYv/1wAszI0yQDbuENvl8vsbr72dJFLauP7NDmGgiopQ0nRxwwDJwOMTj\ndHyOpZ6+ihhfLAwmY79rKmRD7ljzbJCa4r6xs2YsvtSEqFNHYRwM4bGJ0zQmpgg1\nS1BFiuDWgg5SFMH33yopbpLaj9OB9mlbVBtvvxO3pn2Ru1rQihiA+EHfhfjQfwe2\n2KjDHUue8iR6SAOfu3LTT0y3gQf5c4VsRItUJZLAhBtnvWe8UfkJiPpqMuowt02C\nDreINGYSR7gkz97WZm57RZkS3yWRkti6zjWDZ280icWzDLrMRY+FZ5yIdSK+Kqel\nYZ06tP0DAgMBAAECggEAELur8Mo1AK9xVa4xMLUjN2ILPoXJX1RhJiNiBvX8vawg\nMJ+CcAjnZDIf8NGB9lmJFsuSKgCO92JsJ+zVZSZXMTIhaxV3W82swqU/MWKVDkI+\nXyS0Sjm03fFZKGWuA+unotKxGQS3lKd9SuE7g8HUnSSGClqimaDk1ZYg4K/FiunO\nfh4pkBOK7a/LKVjkZfo1PNwMbHyuch1mY1nPc9Qiby4uMwohcMl04Ugba8qryj4e\nS4REWhmLZFNZge5y6UldJtWFsJ/5CXCUc2+/qznbEYc+3l21kf+cFyDV3dlo2uSV\nE2/+c5tsOl4a18aVMPK18d7R8EJyHpKlL57+PNdj9QKBgQD/39BuNcpjFC+03OkK\niWhcoue1Up1WlFJmtn66T/5pyeNAztY5a+UdNYVaVFEj4XSZAqalf4M2QdL1gFjo\nCebSeOIlUz7V25Xe+xL40meAPRzRJmOhFUO7a7EvhFiMSt4zDsCvubk1RatXknJf\n40Vjk0X2PzeHisHo/5tb0ZhhLQKBgQC30+LpB2G+CEsP8ZNWezgoNZg5qRAN4YHw\nz/X1f9sUj0+jxdoKEm3Mwnu/DNz/vcFZwnFyLa6g9LLT9+hl4yy+4w+YPcN53H4E\nu9xHfkwaNWdG6qrzq9p8umZTRDmp10Z7FGJeEMz3I1UwTcruem4ANs+2fuy9Jh9u\ncyeE0n3U7wKBgHokKKazXqz1EeDQIx44gWzXBqxzh0+w9bS6ILxnOxbcnHJvSauX\naYML7WA1J5ZtJO91aH9P4x6fRUiTv9zj/R8zPSB8IF6Nt3j9eQz1wxpgEcV1AdH/\nCJoKykXYczxk8LSGskwv580aOLRQ3/AN2S2zO45UlvlIr0+91Dd8UbTxAoGAXFPb\nn9bJTLy1lqhqrADvT6K7dhpnqdEdhmmsy0UQL99azJLO1Eg1RaZYqLg5N2mC9yYl\n/IbdMpI0TyowWxwimS1J49kBmO8ZjB8en/nbFz7DRGcQvZoO/p5QTnnxzFAHYkH2\ntfASQf5JBx3LUsPDA/CDmtFc7hN7renAa4GdGZkCgYAOxxaHYo2JHYtiYzJs4yjJ\nBsg/j1eEQZCy2134y6IB524arkdE073YXWH1tDA4r57b1jCGE8RqhHMf5Wnn7Xup\nOzuyE3qUbA20H7zQdWjSf0Pw3oAtsx5laS+eVrOcMXjlI89/l0DIt/4PiZTmc06X\nT5Vml1b8ZKTwM5xMRNy9GA==\n-----END PRIVATE KEY-----\n",
    "client_email": "teste-691@my-project-6589489.iam.gserviceaccount.com",
    "client_id": "114345318131449550558",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/teste-691%40my-project-6589489.iam.gserviceaccount.com"
    }



const client = new google.auth.JWT(
    keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
);

    client.authorize(function (err, token) {

        if(err) {
            console.log(err);
        }

        else {
           // console.log('connected');
             gsrun(client);
        }
    });

    async function gsrun (cl) {
        const gsapi = google.sheets({version: 'v4', auth: cl});
        const opt = {
            spreadsheetId:'1MB_stNchDVyz2X3rjCDt2EDwItoM_-6ThpavvtV5oSw',
            range: 'engenharia_de_software!A4:F27'
        };

        let data = await gsapi.spreadsheets.values.get(opt);
        let dataArray = data.data.values;
        let newDataArray = new Array();
        let item  = new Array();


        const updatedOptions = {
            spreadsheetId:'1MB_stNchDVyz2X3rjCDt2EDwItoM_-6ThpavvtV5oSw',
            range: 'engenharia_de_software!G4:H27',
            valueInputOption: 'USER_ENTERED',
            resource: {values: newDataArray},

        };


        for (let n=0; n<24; n++) {
             media = (parseFloat(dataArray[n][3]) + parseFloat(dataArray[n][4]) + parseFloat(dataArray[n][5]))/3;
           // console.log(media);

            if (dataArray[n][2] >= 15) {
                console.log( dataArray[n][1] + ' reprovado por falta');
                item = ['reprovado por falta', 0];
            }

            else {
                if (media < 50) {
                    console.log ( dataArray[n][1] + ' reprovado por nota');
                    item = ['reprovado por nota', 0];

                }
                else if ( 50 <= media && media < 70) {
                    let naf = Math.ceil(100-media);
                    console.log ( dataArray[n][1] + ' exame final ' + naf);
                    item = ['exame final', naf];

                }
                else {
                    console.log( dataArray[n][1] + ' aprovado');
                    item = ['aprovado', 0];

                }

            }
            newDataArray.push(item);
        }

        //console.log(newDataArray);

        let res = await gsapi.spreadsheets.values.update(updatedOptions);
        //console.log(res);

    };




