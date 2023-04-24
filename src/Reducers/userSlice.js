import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userService from "./userService.js";

const user = JSON.parse(localStorage.getItem("user"));
const signupmessage = JSON.parse(localStorage.getItem("signupmessage"));
// const userUpdate = JSON.parse(localStorage.getItem("userUpdate"));
// const result = JSON.parse(localStorage.getItem("result"));
const joinedUsers = JSON.parse(localStorage.getItem("joinedUsers"));

const initialState = {
    user: user ? user : null,
    signupmessage: signupmessage ? signupmessage : null,
    // userUpdate: userUpdate ? userUpdate : null,
    // result: result ? result : null,
    joinedUsers: joinedUsers ? joinedUsers : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const signup = createAsyncThunk(
    "user/signup",
    async(userData, thunkAPI) => {
        try {
            return await userService.signup(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const forgotpassword = createAsyncThunk(
    "user/forgotpassword",
    async(userData, thunkAPI) => {
        try {
            return await userService.forgotpassword(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const verifyingOtp = createAsyncThunk(
    "user/verifyingOtp",
    async(userData, thunkAPI) => {
        try {
            return await userService.verifyingOtp(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const resetpassword = createAsyncThunk(
    "user/resetpassword",
    async(userData, thunkAPI) => {
        try {
            return await userService.resetpassword(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const updatePassword = createAsyncThunk(
    "user/updatePassword",
    async(userData, thunkAPI) => {
        try {
            return await userService.updatePassword(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk(
    "user/login",
    async(userData, thunkAPI) => {
        try {
            return await userService.login(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getJoinedUsers = createAsyncThunk(
    "user/getJoinedUsers",
    async(thunkAPI) => {
        try {
            return await userService.getJoinedUsers();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selecttenthColor = createAsyncThunk(
    "user/selecttenthColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selecttenthColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selecttweentyColor = createAsyncThunk(
    "user/selecttweentyColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selecttweentyColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const selectfourtyColor = createAsyncThunk(
    "user/selectfourtyColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selectfourtyColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selectsixtyColor = createAsyncThunk(
    "user/selectsixtyColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selectsixtyColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selectseventyColor = createAsyncThunk(
    "user/selectseventyColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selectseventyColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selecthundredColor = createAsyncThunk(
    "user/selecthundredColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selecthundredColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selectoneFiftyColor = createAsyncThunk(
    "user/selectoneFiftyColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selectoneFiftyColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const selecttwoHundredColor = createAsyncThunk(
    "user/selecttwoHundredColor",
    async(userData, thunkAPI) => {
        try {
            return await userService.selecttwoHundredColor(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const joiningUser = createAsyncThunk(
    "user/joiningUser",
    async(userData, thunkAPI) => {
        try {
            return await userService.joiningUser(userData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const tenjoin = createAsyncThunk("user/tenjoin", async(thunkAPI) => {
    try {
        return await userService.tenjoin();
    } catch (err) {
        const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const tweentyjoin = createAsyncThunk(
    "user/tweentyjoin",
    async(thunkAPI) => {
        try {
            return await userService.tweentyjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const fourtyjoin = createAsyncThunk(
    "user/fourtyjoin",
    async(thunkAPI) => {
        try {
            return await userService.fourtyjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const sixtyjoin = createAsyncThunk(
    "user/sixtyjoin",
    async(thunkAPI) => {
        try {
            return await userService.sixtyjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const seventyjoin = createAsyncThunk(
    "user/seventyjoin",
    async(thunkAPI) => {
        try {
            return await userService.seventyjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const hundredjoin = createAsyncThunk(
    "user/hundredjoin",
    async(thunkAPI) => {
        try {
            return await userService.hundredjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const onefiftyjoin = createAsyncThunk(
    "user/onefiftyjoin",
    async(thunkAPI) => {
        try {
            return await userService.onefiftyjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const twohundredjoin = createAsyncThunk(
    "user/twohundredjoin",
    async(thunkAPI) => {
        try {
            return await userService.twohundredjoin();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const logout = createAsyncThunk("user/logout", async(thunkAPI) => {
    try {
        return await userService.logout();
    } catch (err) {
        const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const checkColors = createAsyncThunk(
    "user/checkColors",
    async(thunkAPI) => {
        try {
            return await userService.checkColors();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const resetColor = createAsyncThunk(
    "user/resetColor",
    async(thunkAPI) => {
        try {
            return await userService.resetColor();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.signupmessage = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.signupmessage = null;

                state.message = action.payload;
            })
            .addCase(forgotpassword.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(forgotpassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(forgotpassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(resetpassword.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(resetpassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(resetpassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(verifyingOtp.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(verifyingOtp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(verifyingOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selecttenthColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selecttenthColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selecttenthColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selectoneFiftyColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selectoneFiftyColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selectoneFiftyColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selecttweentyColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selecttweentyColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selecttweentyColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selectfourtyColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selectfourtyColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selectfourtyColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selectsixtyColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selectsixtyColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selectsixtyColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selectseventyColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selectseventyColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selectseventyColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selecthundredColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selecthundredColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selecthundredColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })
            .addCase(selecttwoHundredColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(selecttwoHundredColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(selecttwoHundredColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            })

        .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getJoinedUsers.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getJoinedUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.joinedUsers = action.payload;
            })
            .addCase(getJoinedUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.joinedUsers = null;

                state.message = action.payload;
            })
            .addCase(joiningUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(joiningUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(joiningUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                state.message = action.payload;
            })
            .addCase(checkColors.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(checkColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(checkColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = action.payload;
                state.message = action.payload;
            })
            .addCase(tenjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(tenjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(tenjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(fourtyjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fourtyjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.result = action.payload;
            })
            .addCase(fourtyjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(sixtyjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(sixtyjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(sixtyjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(seventyjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(seventyjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(seventyjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(onefiftyjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(onefiftyjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(onefiftyjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(hundredjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(hundredjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(hundredjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(twohundredjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(twohundredjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(twohundredjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(tweentyjoin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(tweentyjoin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(tweentyjoin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(resetColor.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(resetColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                // state.result = action.payload;
            })
            .addCase(resetColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.result = null;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(updatePassword.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;

                state.message = action.payload;
            });
    },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;