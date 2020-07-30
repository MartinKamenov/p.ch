const ROOT_ID = 'root';
let councillors = [];

const sortTable = (key) => {
    councillors = councillors.sort((a, b) => {
        if(a[key] < b[key]) { return -1; }
        if(a[key] > b[key]) { return 1; }
        return 0;
    });
    visualizeCouncillors(councillors);
}

const visualizeLoader = () => {
    const root = document.getElementById(ROOT_ID);
    const loader = document.createElement('div');

    loader.innerText='Fetching councillors';

    root.appendChild(loader);
}

const appendHeaders = (root) => {
    const container = document.createElement('tr');

    Object.keys(councillorMapper).map((key) => {
        const config = councillorMapper[key];
        const cell = document.createElement('th');

        cell.innerText = config.key;

        if(config.sortable) {
            cell.classList.add('sortable');
            cell.addEventListener('click', () => sortTable(config.key));
        }

        container.append(cell);
    });

    root.appendChild(container);
}

const appendCouncillor = (councillor, root) => {
    const container = document.createElement('tr');

    Object.keys(councillorMapper).map((key) => {
        const config = councillorMapper[key];
        const cell = document.createElement('td');

        const initialValue = councillor[config.key];
        const formatter = config.formatter;

        const value = formatter ? formatters[formatter](initialValue) : initialValue;

        cell.innerText = value;

        container.append(cell);
    })

    root.appendChild(container);
}

const visualizeCouncillors = (councillors) => {
    const root = document.getElementById(ROOT_ID);

    root.innerHTML = '';

    const table = document.createElement('table');

    appendHeaders(table);

    councillors.forEach((councillor) => {
        appendCouncillor(councillor, table);
    });

    root.appendChild(table);
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
        visualizeLoader();
        councillors = await fetchCouncillors();
        visualizeCouncillors(councillors);
    });
}

init();