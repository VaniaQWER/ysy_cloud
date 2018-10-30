
export default {
  
    namespace: 'global',
  
    state: {
      collapsed: false,
      notices: [],
      menuData: [],
      openMenu: []
    },
  
    subscriptions: {
      setup({ dispatch, history }) { 
        return history.listen(({ pathname, search }) => {
          if (typeof window.ga !== 'undefined') {
            window.ga('send', 'pageview', pathname + search);
          }
        });
      },
    },
  
    effects: {
      *changeLayoutCollapsed({ payload, callback }, { put, call }) {
        yield put({ type: 'changeCollasped', payload });
      },
      *menuChange({ payload, callback }, { put, call }) {
        yield put({ type: 'openMenuChange', payload });
      },
    },
  
    reducers: {
      changeCollasped(state, action) {
        return {
          ...state, collapsed: action.payload
        }
      },
      openMenuChange(state, action) {
        return {
          ...state, openMenu: action.payload
        }
      }
    },
  
  };
  