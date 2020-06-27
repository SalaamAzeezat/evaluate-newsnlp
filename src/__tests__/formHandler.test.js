import "babel-polyfill"
const formHandler = require ('../client/js/formHandler');

window.fetch = jest.fn();

test('post data called fetch with post parameters', () => {
    formHandler.postData("http://google.com", {"query": "who am i?"});
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://google.com', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"query": "who am i?"}),
    });

});
