import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.jpg";

import PageLayout from "../layout/PageLayout";
import tableData from "../data/TableData"
import { useState } from "react";

function Home() {

    const [data, setData] = useState(tableData)

    return (
        <PageLayout>
            <div className="mb-6">
                <section className="mt-10">
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">
                            <img src={banner1} className="w-full" />
                        </div> 
                        <div id="item2" className="carousel-item w-full">
                            <img src={banner2} className="w-full" />
                        </div> 
                    </div> 
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a> 
                        <a href="#item2" className="btn btn-xs">2</a> 
                    </div>
                </section>
  
                <section className="flex flex-col items-center justify-center ">
                    <div className="flex items-center justify-center gap-4 my-12">
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                        <h1 className=" text-4xl font-semibold">OUR PRODUCTS</h1>
                        <div className="h-[3px] w-14 bg-[#e7171f]"></div>
                    </div>

                    {data.map(el => (
                    <table key={el.id} className="w-fit border border-gray border-collapse mx-auto">
                        <tbody>
                            <tr className="border-b border-t border-gray-300">
                                <td className="border border-gray-300 p-4 align-top">
                                    <img src={el.coverImg} className="w-36" alt="Product 1" />
                                </td>
                                <td className="flex flex-col items-center gap-3 p-2">
                                    <h2 className="sm:text-3xl sm:font-medium text-md font-medium">{el.heading}</h2>
                                    <p className="text-[#000] max-w-[56rem] sm:text-lg text-xs p-2">{el.description}</p>
                                    <div>
                                    <button className="bg-[#28a745] text-white py-[6px] px-4 rounded-md text-md font-semibold">{el.quote}</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    ))}
                </section>

            </div>
        </PageLayout>
    );
}

export default Home;
