import { signInFailure, signInStart, signInSuccess } from "./userSlice";


export const signInUser = (formData) => {
    return async (dispatch) => {
        dispatch(signInStart());
        const res = await fetch(`/api/auth/signin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (data.success === false) {
            dispatch(signInFailure(data.message));
            return;
          }
          dispatch(signInSuccess(data));
    }
}