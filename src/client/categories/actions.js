import request from 'superagent';
export const actions = create();
export const feature = 'categories';

export function create(dispatch, validate) {

    return {

        loadCategories() {


            if (this._accessToken) {
                request
                    .set('X-HELE-ACCESS-TOKEN', this._accessToken);
            }

            request
                .get('http://private-e2326-heleprototype.apiary-mock.com/categories')
                .type('application/json')
                .set('Content-Type', 'application/json')
                .end(function(error, response){
                    if (response.statusText !== 'OK' && response.ok !== true) {
                        console.log(error)
                    }
                    else {
                        let obj = JSON.parse(response["text"]);
                        dispatch(actions.loadCategories, obj.data);
                    }
                });
        }
    };
}