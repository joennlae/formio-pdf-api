import fetch from 'node-fetch';
const BACKEND_FORMIO_URL: string = "https://vm-031.s3it.uzh.ch/formio";
export default class FormLoaderService {
    static handleErrors(response) {
        if (response.ok) {
            return response;
        }
        else {
            console.log('error', response);
            throw Error(response.statusText);
        }
    }
    static async  requestAuthWithoutBodyExtern(url) {
        try {
            let response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            })
            await this.handleErrors(response);
            let json = await response.json();
            return json;
        }
        catch (e) {
            throw e;
        }
    }
    static async loadCMSFormsNew(id) {
        let result = await this.requestAuthWithoutBodyExtern(BACKEND_FORMIO_URL + "/form?_id=" + id);
        return result;
    }
}
