export default function handleResponseFromAPI(promise){
    return promise
        .then(() => ({
            status: 200
            body: 'Success'
        }));
        .catch(() => Error());
        .fanally("Got a response from the API");
}