export const state = () => {
    return {
        openSidebar : false
    }
}

export const mutations =  {
    toggle_side_bar(state){
        state.openSidebar = !state.openSidebar
    }
}

export const actions = {
    toggleSideBar({ commit }){
        commit('toggle_side_bar')
    }
}

export const getters = {
    isOpen : (state) => state.openSidebar
}
