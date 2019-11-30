const axios = require('axios');





axios({
url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + process.argv[2],
port: '443',
method: "GET",
headers: {
  'app_id': 'a3bb126d',
  'app_key': '430086d5312b6e73a77fafb5013bfdac',
}
}).then(res => {



    // console.log(res.data.results[0].lexicalEntries[0].entries[0].senses);
    console.log(res.data/* .data.results */);

}
).catch(err => console.log(err))
