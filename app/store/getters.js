// --- System --- //
const getSystem = function (state) {
    return state.system
};
const isClient = function (state) {
    return state.system.isClient
};

const isLocalhost = function (state) {
    return state.system.isLocalhost
};
// --- User Agent --- //
const getUserAgent = function (state) {
    return state.system.userAgent
};
// --- Theme --- //
const getTheme = function (state) {
    return state.system.theme.current
};

const getThemeRegister = function (state) {
    return state.system.theme.register
};
// --- Config --- //
const getConfig = function (state) {
    return state.system.config
};

const getPersonalData = function (state) {
    return state.system.config.personal_data
};

// --- Error --- //
const getError = function (state) {
    return state.system.error
};

const isError = function (state) {
    return  !!state.system.error.name
};
// --- Auth --- //
const getAuth = function (state) {
    return state.system.auth
};

const isAuth = function (state) {
    return !!state.system.auth.token
};

const getGapi = function (state) {
    return state.system.apiGoogle
};

export default {
    // --- System --- //
    getSystem,
    isClient,
    isLocalhost,
    getUserAgent,
    getTheme,
    getThemeRegister,
    getConfig,
    getPersonalData,
    getError,
    isError,
    isAuth,
    getAuth,
    getGapi
}
