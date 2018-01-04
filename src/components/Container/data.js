import { getMenu } from 'Services/home';

const keys = ['logo', 'menus', 'footer'];
const initalState = {
  data: {
    logo: null,
    menus: [],
    footer: {},
  },
  created() {
    let init = true;
    return function fn() {
      if (init) {
        getMenu().then((res) => {
          init = false;
          keys.forEach((key) => {
            this[key] = res[key];
            initalState.data[key] = res[key];
          });
        });
      }
    };
  },
};

export default initalState;
