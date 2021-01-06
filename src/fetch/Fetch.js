async function myFetch(url, metod = 'GET', data) {

    let result
    let dataObj = {
        "method": metod
    }
    if(data) {
        dataObj.body = data
    }
    
    await fetch(`https://api.rawg.io/api/${url}?key=d32c5152044246ab83ca70dafe04e65e`, dataObj).then(resp => {
        return resp.json()
    }).then(response => {
        result =   response.results
        console.log('fetch response',result)
    }).catch(err => {
        console.error(err)
        result = err
    });

    return result
}

export default myFetch