import Vue from 'vue'
import {
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Tab,
  Tabs,
  Collapse,
  CollapseItem,
  Sku,
  Toast,
  Field,
  Cell,
  CellGroup,
  Popup,
  Picker,
  Loading,
  Locale,
  List,
  NavBar,
  Tabbar,
  TabbarItem,
  PullRefresh,
  RadioGroup,
  Radio,
  Stepper,
  Icon,
  Dialog,
  Checkbox,
  CheckboxGroup
} from 'vant';
import 'vant/lib/index.css';
// import zhTW from 'vant/lib/locale/lang/zh-TW';
import enUS from 'vant/lib/locale/lang/en-US';

Locale.use('en-US', enUS);

Vue.use(Button)
Vue.use(Sku)
Vue.use(Toast)
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Loading);
Vue.use(List);
Vue.use(NavBar);
Vue.use(Cell).use(CellGroup);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(PullRefresh);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Checkbox).use(CheckboxGroup);
