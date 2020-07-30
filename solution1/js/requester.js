const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

const request = (options) => {
    const {url, headers, method} = options;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${PROXY_URL}${url}`,
            method,
            headers: {
                'Access-Control-Allow-Origin': '*',
                ...headers
            },
            success: function(data){
                resolve(data);
            },
            error: function (request, error) {
                reject(error);
            },
        });
    });
}