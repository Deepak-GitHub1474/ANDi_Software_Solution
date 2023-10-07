import PageLayout from "../layout/PageLayout";
import aboutData from "../data/AboutData"
import { useState } from "react";

function About() {

    const [data, setData] = useState(aboutData)

    return (
        <PageLayout>
            <div className="mb-16 mx-[5%]">

                <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-center gap-4 my-4 z-50">
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                        <h1 className=" sm:text-4xl text-3xl font-semibold text-center">ABOUT US</h1>
                        <div className="h-[3px] w-14 bg-[#e7171f] "></div>
                    </div>

                    {data.map(el => (
                    <div key={el.id} className="z-50">
                        <h1 className="text-2xl font-medium ">{el.heading}</h1>
                        <div className="h-[1.8px] w-14 bg-[#e7171f] my-2"></div>
                        <p className="text-lg">{el.description}</p>
                    </div>
                    ))}
                </div>

            </div>
        </PageLayout>
    );
}

export default About;
