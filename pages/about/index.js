import React from "react";
import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Index() {
    const onClickHandler = () => {
        Router.push('/')
    }
    return (
        <MainLayout>
            <h1>Hi about</h1>
            <button onClick={onClickHandler}> go back</button>
        </MainLayout>
    )
}