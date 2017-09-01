// --- System --- //
const getSystem = function (state) {
    return state.system
};

const getUserAgent = function (state) {
    return state.system.userAgent
};

const getTheme = function (state) {
    return state.system.theme.current
};

const getThemeRegister = function (state) {
    return state.system.theme.register
};

const getConfig = function (state) {
    return state.system.config
};

const getPersonalData = function (state) {
    return state.system.config.personal_data
};

const getError = function (state) {
    return state.system.error
};

const isError = function (state) {
    return  !!state.system.error.name
};

const isAuthenticated = function (state) {
    return  !!state.system.auth
};

const getAuth = function (state) {
    return  state.system.auth
};

// --- Products --- //
const getProducts = function (state) {
    return state.products.items
};

const getProductsHeaders = function (state) {
    return state.products.headers
};

const getTotalProducts = function (state) {
    return state.products.totalItems
};

const getLoadingProducts = function (state) {
    return state.products.loading
};

export default {
    // --- System --- //
    getSystem,
    getUserAgent,
    getTheme,
    getThemeRegister,
    getConfig,
    getPersonalData,
    getError,
    isError,
    isAuthenticated,
    getAuth,
    // --- Products --- //
    getProducts,
    getProductsHeaders,
    getTotalProducts,
    getLoadingProducts
}
