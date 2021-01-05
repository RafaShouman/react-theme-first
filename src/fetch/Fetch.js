async function myFetch(url, metod, data) {

    let result
    let dataObj = {
        "method": metod
    }
    if(data) {
        dataObj.body = data
    }
    
    fetch(`https://api.rawg.io/api/${url}?key=d32c5152044246ab83ca70dafe04e65e`, dataObj).then(resp => {
        return resp.json()
    }).then(response => {
        result = await response.next
        console.log('fetch response',result)
    }).catch(err => {
        console.error(err)
        result = err
    });

    return result
}

export default myFetch