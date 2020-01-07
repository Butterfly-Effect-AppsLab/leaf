export const getCompaniesState = store => store.companies;

export const getStore = store => store;

export const getUser = store => {
    const res = store.user.id == null ? null : store.user.id;
    return res;
}

export const getIdUser = store => 
    getUser(store) ? store.user.id : null;