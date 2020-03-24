import { delay } from "redux-saga/effects";
import {takeLatest,put,call,takeEvery,all} from "redux-saga/effects";
import jsonPlaceholder from '../apis/jsonPlaceholder';




//function* is use for step by step execution

function* incrimentAsync(){
    yield delay(4000);
    yield put({type:"INCRIMENT_VALUE_ASYNC",payload:1});
}

//watcher catches the dispatch
export function* watchIncriment(){
    
    yield takeLatest("INCRIMENT_VALUE",incrimentAsync);
}





function* fetchPostAsync(){
    try {
        //console.log("Calling API");
        const response = yield call(jsonPlaceholder);

        //console.log("reponse", response);
        yield put({ type: "FETCH_POSTS_ASYNC",payload:response.data});
       
      } catch (error) {
       
        console.log("requestfailed: could not ");
        console.log("error", error);
      }
}

export function* watchfetchPost() {
    //alert ("inside saga")
    yield takeEvery("FETCH_POSTS", fetchPostAsync);
  }


  export default function* rootSaga() {
    yield all([call (watchfetchPost),call(watchIncriment)])
  }




//another method

//   function* createPostSaga(action) {
//     const token = yield select(selectToken);
//     const headerParams = {
//       Authorization: `JWT ${token}`
//     };
//     console.log(token, headerParams);
//     try {
//       yield call(axios.post, "/posts/", action.payload, {headers:headerParams});
//       yield call(getPosts());
//     } catch (error) {
//       console.log(error);
//     }
//   }