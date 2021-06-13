import Layout from '../components/Layout'
import React from "react";
import { getSession } from 'next-auth/client';
import { GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';

interface PageProps {
    session: Session
}

export default function Page({ session }: PageProps) {
    return (
        <Layout>
            This is the home page
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context
    const session = await getSession({ req })

    // const { data: users } = await fetch('http://localhost:8055/items/users?' + new URLSearchParams({ search: "tohhongxiang@gmail.com" })).then(res => res.json())
    // console.log(users)
    return {
        props: {
            session
        }
    }
}