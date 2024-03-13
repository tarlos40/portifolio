import React from "react";

import { Navbar } from "../../components/navbar";
import { Card } from "../../components/card";

function HomePage() {
    return (
        <>
        <Navbar />

        <main className="py-12 px-6">
            <Card className='flex flex-col'>
                <h1>Eleve seu negocio</h1>
            </Card>
        </main>
        </>
    );
};

export default HomePage;