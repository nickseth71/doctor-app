import React from "react";
import { Routes, Route } from "react-router-dom";
import Tabs from "../components/Tabs";
import Page_1 from "../pages/Page_1";
import Page_2 from "../components/Page_2";
import Page_3 from "../pages/Page_3";
import Page_4 from "../pages/Page_4";
import Page_5 from "../pages/Page_5";
import Page_6 from "../pages/Page_6";
import Page_7 from "../pages/Page_7";
import Page_8 from "../pages/Page_8";
import Page_9 from "../pages/Page_9";
import Page_10 from "../components/Page_10";
import Page_11 from "../components/Page_11";
import Page_12 from "../pages/Page_12";
import Page_101 from "../components/Page_101";
import Page_102 from "../components/Page_102";
import Page_103 from "../pages/Page_103";
import Page_104 from "../pages/Page_104";

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Page_1 />} />
                <Route
                    path="Page_2"
                    element={(
                        <>
                            <Tabs />
                            <Page_2 />
                        </>
                    )}
                />
                <Route
                    path="Page_10"
                    element={(
                        <>
                            <Tabs />
                            <Page_10 />
                        </>
                    )}
                />
                <Route
                    path="Page_11"
                    element={(
                        <>
                            <Tabs />
                            <Page_11 />
                        </>
                    )}
                />
                <Route
                    path="Page_102"
                    element={(
                        <>
                            <Tabs />
                            <Page_102 />
                        </>
                    )}
                />
                <Route path="/Page_3" element={<Page_3 />} />
                <Route path="/Page_4" element={<Page_4 />} />
                <Route path="/Page_5" element={<Page_5 />} />
                <Route path="/Page_6" element={<Page_6 />} />
                <Route path="/Page_7" element={<Page_7 />} />
                <Route path="/Page_8" element={<Page_8 />} />
                <Route path="/Page_9" element={<Page_9 />} />
                <Route path="/Page_11" element={<Page_11 />} />
                <Route path="/Page_12" element={<Page_12 />} />
                <Route path="/Page_101" element={<Page_101 />} />
                <Route path="/Page_103" element={<Page_103 />} />
                <Route path="/Page_104" element={<Page_104 />} />
            </Routes>
        </div>
    );
}