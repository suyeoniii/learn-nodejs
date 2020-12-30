//get
axios.get('https://www.zerocho.com/api/get')
        .then((result) => {
            console.log(result);
            console.log(result.data);
        })
        .catch((error) => {
            console.error(error);
        })

//async & post
(async () => {
    try {
        const result = await axios.post('https://zerecho.com/api/post/json', {
            name : 'zerecho',
            birth : 1994,
        });
        console.log(result);
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();