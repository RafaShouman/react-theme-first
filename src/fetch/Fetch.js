async function myFetch(url, metod = 'GET', data) {

    let result
    let dataObj = {
        "method": metod
    }
    if (data) {
        dataObj.body = data
    }

    await fetch(`http://localhost/wordpress/wp-json/wp/v2/${url}`, dataObj).then(resp => {
        return resp.json()
    }).then(response => {
        result = response
        console.log('fetch response', result)
    }).catch(err => {
        console.error(err)
        result = err
    });


    return result
}

export default myFetch