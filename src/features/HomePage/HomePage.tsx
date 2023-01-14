import { useState } from 'react';
import { MyGlobalContext } from '../../Context';
import Header from "components/Header";
import Articles from "components/Articles";

const HomePage = () => {
    const [filter, setFilter] = useState<string>('');
    return (
        <MyGlobalContext.Provider value={{ filter, setFilter }}>
            <Header />
            <Articles />
        </MyGlobalContext.Provider>
    )

}

export default HomePage;