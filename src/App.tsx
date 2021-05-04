import React from 'react';
import UserLists from "./components/UserLists";
import TodoLists from "./components/TodoLists";

function App() {

    return (
        <div>
            <UserLists />
            <hr/>
            <TodoLists />
        </div>
    );

}

export default App;