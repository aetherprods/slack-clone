import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'



function* putNumber(action) {
    try {
        console.log("scoby: "+JSON.stringify(action.payload))
        const butts = yield call(fetch, '/api/values', {
            method: 'POST',
            /* cache: 'no-cache',
            credentials: 'same-origin',*/
            headers: {
                'Content-Type': 'application/json'
            },/*
            redirect: 'follow',
            referrer: 'no-referrer', */
            body: JSON.stringify(action.payload)
        });
        yield put({ type: 'USER_FETCH_SUCCEEDED', butts });
    }
    catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", putNumber);
}

export default mySaga;