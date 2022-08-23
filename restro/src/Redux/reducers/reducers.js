const userInitialState = {};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "SUCCESS": {
      return action.payload;
    }
    case "Fail": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const foodInitialState = [];

export const foodReducer = (state = foodInitialState, action) => {
  switch (action.type) {
    case "GETFOOD": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const cartInitialState = [];

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case "CART_SUCCESS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const drawerInitialState = false;

export const drawerReducer = (state = drawerInitialState, action) => {
  switch (action.type) {
    case "DRAWER": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const ChangeInitialState = true;

export const changeReducer = (state = ChangeInitialState, action) => {
  switch (action.type) {
    case "CHANGE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
