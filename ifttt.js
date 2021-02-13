exports.action = (data)=>{

var request = require('request');

var clésdomotiquemaison = "xxxxxxxxxxxxxxxxxxxx"

var urlprise="http://maker.ifttt.com/trigger/"+data.nomprise+"/with/key/"+clésdomotiquemaison

request({ url : urlprise}, (err,response, body)=>{
          console.log(response.body);
          ScribeSpeak(response.body)
  })

return
} 