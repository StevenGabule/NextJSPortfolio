import Layout from "../components/Layout";
import React from "react";


export default ({statusCode}) => (
    <Layout title={"Error"}>
        {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Couldn't not get that page, Sorry`}
    </Layout>
)