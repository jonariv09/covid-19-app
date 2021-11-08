import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { SearchScreen } from '../../../components/search/SearchScreen';
import { Provider } from "react-redux";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null,
	},
  statistics: {
    filteredResults: []
  }
};

let store = mockStore(initState);

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<SearchScreen />
		</MemoryRouter>
	</Provider>
);

describe("SearchScreen tests", () => {

  test("renders <SearchScreen /> component", () => {
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find(Foo));
  })

})
