// function fetchData() {
//     fetch("http://localhost:8080/api/tasks").then(response => {
//         console.log(response)
//         var data = response.json()
//         console.log(data)
//         return data
//     }).then(data => {
//         console.log(data)
//     });
// }
// fetchData()
// var raw = "";

//     var requestOptions = {
//         method: 'GET',
//         body: raw,
//         redirect: 'follow',
//         // mode: "no-cors",
//         headers: {
//             "Access-Control-Allow-Headers": "Content-Type",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
//         }
//     };
//     fetch("http://localhost:8080/api/tasks", requestOptions)
//         .then(response => response)
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

function fetchData() {
    var raw = "";
    var requestOptions = {
        method: 'GET',
        // body: raw,
        // mode: "no-cors",
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json"
        }
    };
    const fetch_url = "http://localhost:8080/task";
    fetch(fetch_url, requestOptions)
        // get(fetch_url)
        .then(response => console.log(response))
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
fetchData()

