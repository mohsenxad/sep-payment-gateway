
const axios = require('axios');
const got = require('got');
const {HttpsProxyAgent} = require('hpagent');
const fetch = require('node-fetch');

function request_fetch(res, data){
    let payload = {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        agent:new HttpsProxyAgent({
            proxy: 'http://proxy:3128'
        })
      };
    
    fetch('http://sep.shaparak.ir/onlinepg/onlinepg', payload)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                res.send(json)
            })
            .catch(function(err){
                console.log('Got Error');
                console.log(err);
                res.send(err)
            })
}

function request_got(res, data){
    got.post('https://sep.shaparak.ir/onlinepg/onlinepg', {
        json: data,
        responseType: 'json',
        agent: {
            https: new HttpsProxyAgent({
                // keepAlive: true,
                // keepAliveMsecs: 1000,
                // maxSockets: 256,
                // maxFreeSockets: 256,
                // scheduling: 'lifo',
                proxy: 'http://proxy:3128'
            })
        }
        })
        .then(function(response){
            console.log(response.body);
            res.send(response.body)
        })
        .catch(function(err){
            console.log(err);
            res.send(err)
        })
}

function request_axios(res, data){

    // axios.get('https://time.ir', data,{
    // // `proxy` means the request actually goes to the server listening
    // // on localhost:3000, but the request says it is meant for
    // // 'http://httpbin.org/get?answer=42' 
    // proxy: {
    //     host: 'proxy',
    //     port: 3128
    // }
    // })
    //     .then(function(response){
    //         console.log(response);
    //         console.log(response.data);
    //         res1.send(response.data)
    //     })
    //     .catch(function(err){
    //         console.log(err);
    //         res1.send(err)
    //     })

    axios.post('https://sep.shaparak.ir/onlinepg/onlinepg', data,{
        proxy: {
            host: 'http://proxy',
            port: 3128
        }
        })
        .then(function(response){
            console.log(response);
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function(err){
            console.log(err);
            res.send(err)
        })
}