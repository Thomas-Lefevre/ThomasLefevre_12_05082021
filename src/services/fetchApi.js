const baseUrl = "http://localhost:3000/user"

/**
 * Fetch the current user's data from API
 * @param {string} id User id
 * @param {string} param The optional route of the API request
 * @returns a promise which contain fetch data of current user
 */
const fetchData = async (id, param) => {
    let completeUrl = param ? baseUrl + `/${id}/${param}/` : baseUrl + `/${id}/`;
    const dataFetch = await fetch(completeUrl)
    const data = await dataFetch.json();
    return data;
}

export default fetchData