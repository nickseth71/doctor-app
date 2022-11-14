import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_10 from "../pages/Page_10";
import Page_2 from "../pages/Page_2";
// import Activity from "./Activity";
// import PageLayout from "./AddSpecialOrderPageLayout";
// import ProductImages from "./ProductImages";
// import ScannedCopy from "./ScannedCopy";
// import SelectCustomer from "./SelectCustomer";
// import SelectManufacturer from "./SelectManufacturer";
// import SpecialOrderDetails from "./SpecialOrderDetails";
import Tabs from "./Tabs";
/*------------This function has routes defined for add special order page-----------------*/
export default function TabsRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/tabs/tabsroutes" element={<Tabs />}>
                    <Route index={true} element={<Page_2 />} />
                    <Route path="page_10" element={<Page_10 />} />
                    {/* <Route
                        path="select_customer"
                        element={<SelectCustomer />}
                    />
                    <Route
                        path="select_manufacturer"
                        element={<SelectManufacturer />}
                    />
                    <Route path="product_images" element={<ProductImages />} />
                    <Route path="activity" element={<Activity />} /> */}
                </Route>
            </Routes>
        </div>
    );
}