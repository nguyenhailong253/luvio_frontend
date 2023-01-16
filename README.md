# Luvio Frontend

## Style guide

- [Don't use semicolons in Typescript](https://medium.com/@eugenkiss/dont-use-semicolons-in-typescript-474ccfe4bdb3)
- [7 Recommended ESLint rules](https://itnext.io/7-recommended-eslint-rules-for-react-typescript-project-1a22b011b4b5)
- [CSS Module](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)

## Testing

- Use `yarn test --watchAll=false` in CI pipeline
- Use `yarn test -- -coverage` to get test coverage report
- [Jest Typescript](https://jestjs.io/docs/getting-started#using-typescript)

## Reducer rules

- Only calculate new state value based on `state` and `action` arguments
- Not allowed to modify existing `state` - we need to create copies and update the copied values before updating state with that
- Must not do async logic or any side effects
- Only write "mutating" logic in Redux Toolkit's `createSlice` or `createReducer` because they use `Immer` library underneath

## Redux hooks

Because we can't import `store` to any other files, we can't directly call `store.dispatch` or `store.getState` to perform dispatching/selecting states.

`useDispatch` and `useSelector` hooks take care of that

## State

Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in React component's state.

[Redux App Structure](https://redux.js.org/tutorials/essentials/part-2-app-structure)