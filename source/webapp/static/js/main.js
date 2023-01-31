    async function makeRequest(url, method='GET') {
        let response = await fetch(url, {method});

        if (response.ok) {
            return await response.json();
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    async function buttonClick(event) {
        let target = event.target;
        let url =target.dataset.link;
        let id = target.dataset.pk
        let response = await makeRequest(url);
        counter = document.getElementById(`count_${id}`);

        counter.innerHTML = `${response.get_like}`
        if (response.type === 'dislike'){
            button = document.getElementById(`button_${id}`);
            button.innerText = "Like"
        }
        else if (response.type === 'like'){
            button = document.getElementById(`button_${id}`);
            button.innerText = "Dislike"
        }
        // console.log(response.get_like)
        // console.log(response);
    }

    async function commentButtonClick(event) {
        let target = event.target;
        let uri =target.dataset.link;
        console.log(uri)
        let pk = target.dataset.pk;
        console.log(pk)
        let response = await makeRequest(uri);
        console.log(response)
        counter = document.getElementById(`count_comment_${pk}`);

        counter.innerHTML = `${response.like}`
        if (response.typec === 'dislike'){
            button = document.getElementById(`baton_${pk}`);
            button.innerText = "Like"
        }
        else if (response.typec === 'like'){
            button = document.getElementById(`baton_${pk}`);
            button.innerText = "Dislike"
        }
        // console.log(response.get_like)
        // console.log(response);
    }



