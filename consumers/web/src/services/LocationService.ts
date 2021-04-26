import { getRequest } from 'utils/request';
import { basePath } from 'utils/config'

class locationService {
    getLocation(props = {}) {
        return getRequest(`${basePath}/trucks`, props, {"Access-Control-Allow-Origin": "*", "X-App-Token":"AEcrq4QkedvYfxQPyDSeeDOPF", "Accept":"application/json", "Content-Type": "application/json"});
    }
}

export default locationService;