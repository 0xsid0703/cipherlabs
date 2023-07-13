import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from '../layouts/index'

import Activity from '../pages/Activity';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    <Route path="/activity"
                        element={
                            <Layout>
                                {<Activity />}
                            </Layout>
                        }
                        exact={true}
                    />
                </Route>
            </Routes>
        </React.Fragment>
    )
};

export default Index;