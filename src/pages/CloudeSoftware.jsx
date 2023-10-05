import PageLayout from "../layout/PageLayout";
import softwareData from "../data/SoftwareData"
import { useState } from "react";

function CloudeSoftware() {

    const [data, setData] = useState(softwareData)

    return (
        <PageLayout>
            <div className="mb-6 mx-4">

                <div className="flex flex-col items-center justify-center ">
                    <div className="flex items-center justify-center gap-4 my-12">
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                        <h1 className=" sm:text-4xl text-3xl font-semibold text-center">OUR CLOUD SOFTWARE</h1>
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                    </div>

                    {data.map(el => (
                    <table key={el.id} className="w-fit border border-gray border-collapse mx-auto">
                        <tbody>
                            <tr className="border-b border-t border-gray-300">
                                <td className="border border-gray-300 p-4 align-top md:w-auto w-[120px]">
                                    <img src={el.coverImg} className="w-40" alt="Product-Cover" />
                                </td>
                                <td className="flex flex-col justify-center gap-3 p-2">
                                    <h2 className="sm:text-3xl text-md text-center">{el.heading}</h2>
                                    <p className="text-[#000] max-w-[42rem] sm:text-lg text-xs">{el.sector}</p>
                                    <p className="text-[#000] max-w-[42rem] sm:text-lg text-xs">{el.description}</p>
                                    <p className="text-[#000] max-w-[42rem] sm:text-lg text-xs">{el.quote}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    ))}
                </div>

            </div>
        </PageLayout>
    );
}

export default CloudeSoftware;
