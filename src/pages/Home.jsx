import PageLayout from "../layout/PageLayout";
import productData from "../data/ProductData"
import { useState } from "react";

function Home() {

    const [data, setData] = useState(productData)

    return (
        <PageLayout>
            <div className="mb-6 mx-3">

                <div className="flex flex-col items-center justify-center ">
                    <div className="flex items-center justify-center gap-4 my-12 z-50">
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                        <h1 className=" sm:text-4xl text-3xl font-semibold text-center">OUR PRODUCTS</h1>
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                    </div>

                    {data.map(el => (
                    <table key={el.id} className="w-fit border border-gray border-collapse mx-auto z-50">
                        <tbody>
                            <tr className="border-b border-t border-gray-300">
                                <td className="border border-gray-300 p-3 align-top md:w-auto w-[90px]">
                                    <img src={el.coverImg} className="xs:w-36 w-28" alt="Product-Cover" />
                                </td>
                                <td className="flex flex-col items-center justify-center p-2">
                                    <h2 className="sm:text-3xl text-sm">{el.heading}</h2>
                                    <p className="text-[#000] max-w-[56rem] sm:text-lg text-[11px]">{el.description}</p>
                                    <div>
                                        <button className="bg-[#28a745] text-white py-[6px] px-2 rounded-md sm:text-lg text-sm">{el.quote}</button>
                                    </div>
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

export default Home;
