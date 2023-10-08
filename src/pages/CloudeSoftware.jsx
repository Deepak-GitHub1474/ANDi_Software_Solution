import PageLayout from "../layout/PageLayout";
import softwareData from "../data/SoftwareData"
import { useState } from "react";

function CloudeSoftware() {

    const [data, setData] = useState(softwareData)

    return (
        <PageLayout>
            <div className="mb-6 mx-3">

                <div className="flex flex-col items-center justify-center ">
                    <div className="flex items-center justify-center gap-4 my-12 z-50">
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                        <h1 className=" sm:text-4xl text-3xl font-semibold text-center">OUR CLOUD SOFTWARE</h1>
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                    </div>

                    {data.map(el => (
                    <table key={el.id} className="sm:w-[75%] w-[100%] border border-gray border-collapse z-50">
                        <tbody>
                            <tr className="border-b border-t border-gray-300">
                                <td className="border border-gray-300 p-2 align-top sm:w-[180px] w-[100px]">
                                    <img src={el.coverImg} className="w-40" alt="Product-Cover" />
                                </td>
                                <td className="flex flex-col justify-center p-[6px]">
                                    <h2 className="sm:text-3xl text-sm text-center">{el.heading}</h2>
                                    <p className="text-[#000] sm:text-lg text-xs">{el.sector}</p>
                                    <p className="text-[#000] sm:text-lg text-xs">{el.description}</p>
                                    <p className="text-[#000] sm:text-lg text-xs">{el.quote}</p>
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
