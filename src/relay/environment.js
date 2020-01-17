import {
    Environment,
    Network,
    RecordSource,
    Store
} from 'relay-compiler';

function fetchQuery(
    operation,
    variables,
    cacheConfig,
    uploadables,
) {
    return fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource())

const environment = new Environment({
    network,
    store,
});

export default environment;