import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { rootReducer } from "./store/reducers/index";
import { GlobalStyle } from "./theme/GlobalStyle";
import { mainTheme } from "./theme/mainTheme";
import { RootView } from "./views/RootView";

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}

const store = configureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <Normalize />
        <ThemeProvider theme={mainTheme}>
          <>
            <GlobalStyle />
            <RootView />
          </>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
