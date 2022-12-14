## You can find build here:
https://ram-api.vercel.app/

## Test Task description

Using a third party API as a data source (example: Star Wars API https://swapi.dev/),
implement a SPA application (React or Vue) consisting of two pages.
On the main page, display a list or cards of characters, add the possibility of pagination to the list.
Implement a page with detailed information on the selected character.
Pros:

- Using TypeScript
- Neat layout
- Using UI framework (Material, Ant, Bootstrap, etc.)

### As an extra challenge:

- To work with data, use storage (Vuex, Redux, etc.)
- Subscribe to update the storage status
- Add character search field by API (or local filter)

### Our considerations for evaluation:

- When evaluating the task, take into account, in general, the functional approach and data immutability in the frontend (filter, map, reduce)
- Take into account how accurately the re-render will work when editing
  (so as not to re-render the entire data array and not to sag in performance)
- If React is chosen, the actual approach is to use hooks.

---

Stack: React, Redux Toolkit, RTK Query, TypeScript, Material UI, SASS

### Todo

- [x] Using TypeScript
- [x] Neat layout
- [x] Using UI framework (Material, Ant, Bootstrap, etc.)
- [x] To work with data, use storage (Vuex, Redux, etc.)
- [x] Subscribe to update the storage status
- [x] Add character search field by API (or local filter)
