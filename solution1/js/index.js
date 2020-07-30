const ROOT_ID = 'root';

const appendCouncillor = (councillor, root) => {
    const container = document.createElement('div');
    container.innerHTML = JSON.stringify(councillor);

    root.appendChild(container);
}

const visualizeCouncillors = (councillors) => {
    const root = document.getElementById(ROOT_ID);

    root.innerHTML = '';

    councillors.forEach((councillor) => {
        appendCouncillor(councillor, root);
    });
};

const fetchCouncillors = async() => {
    
    try {
        const councillors = await request({
            url: 'http://ws-old.parlament.ch/sessions?format=json',
            method: 'GET'
        });
        return councillors;

    } catch(er) {
        alert(er);
    }
};

const init = async() => {
    $(document).ready(async() => {
        const councillors = await fetchCouncillors();
        visualizeCouncillors(councillors);
    });
}

init();