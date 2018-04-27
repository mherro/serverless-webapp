

(() => {    
    console.log('Running script...');
    const url = 'https://rs50fa9pz5.execute-api.us-east-1.amazonaws.com/dev/';
    fetch(url, {
        headers: {
            'x-api-key': ''
        }
    }
    ).then((res) => {
        res.json().then(x => {

            setTimeout(() => {
                const loadingElement = document.getElementById('loading');
                loadingElement.outerHTML = '';
                delete loadingElement;

                const result = document.getElementById('result');

                x.forEach((y, i) => {
                    setTimeout(() => {
                        const p = document.createElement('p');
                        p.innerHTML += `${y}`;
                        result.appendChild(p);
                    }, (750 * i));
                }
                );
            }, 1000
            );

        });

    })
})();
