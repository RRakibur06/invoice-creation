import React from 'react';

const InvoicePageTwo = () => {
    return (
        <div className="bg-white p-8">
            {/* Header */}
            <header className="flex justify-between items-center border-b-2 pb-4">
                <div>
                    {/* <img src="/star-tech-logo.png" alt="Star Tech Logo" className="h-12" /> */}
                    <div className='flex items-end'>
                        <p className='text-5xl text-blue-500 font-extrabold'>ST</p>
                        <p className='text-blue-500'>Traders</p>
                    </div>
                    <address className="not-italic">
                        Block:C, Road:7, House:1, Mirpur-1, Dhaka<br />
                        Importer, Supplier, Sales & Service Center<br />
                        60 SK Mujib Road, Agrabad, Chattogram<br />
                        Phone: +8801876837080<br />
                        Email: st.traders.85@gmail.com
                    </address>
                </div>
                <h1 className="text-xl font-bold">INVOICE</h1>
            </header>

            {/* Invoice Info */}
            <div className="flex justify-between my-4">
                <div>
                    Invoice No: STINV202100001<br />
                    Date: 01/01/2021<br />
                    Customer Name: BGC Trust University Bangladesh
                </div>
                <div>
                    Sales Person: John Doe<br />
                    Payment Terms: Due on Receipt<br />
                    Due Date: 07/01/2021
                </div>
            </div>

            {/* Product Table */}
            <table className="min-w-full table-auto border-collapse border border-gray-400 text-left">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-2 py-2">Serial No.</th>
                        <th className="border border-gray-400 px-4 py-2">Product Description</th>
                        <th className="border border-gray-400 px-4 py-2">Unit Price</th>
                        <th className="border border-gray-400 px-4 py-2">Quantity</th>
                        <th className="border border-gray-400 px-4 py-2">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-2 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">
                            Kenson 12V 7.5AH UPS Battery KS12-7.5AH(12V7.5Ah/20HR)
                            S/N CTGWH67240580 , CTGWH67240578 , CTGWH67240582 , CTGWH67240583
                            , CTGWH67240575 , CTGWH67240576 , CTGWH67240581
                        </td>
                        <td className="border border-gray-400 px-4 py-2">$6,000.00</td>
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">$6,000.00</td>
                    </tr>
                    {/* Add two more rows for other products */}
                    <tr>
                        <td className="border border-gray-400 px-2 py-2">2</td>
                        <td className="border border-gray-400 px-4 py-2">
                            APOLLO 650VA 300W UPS
                            S/N 310035913E35123204115 , 310035913E35123204114
                        </td>
                        <td className="border border-gray-400 px-4 py-2">$6,000.00</td>
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">$6,000.00</td>
                    </tr>
                    {/* Repeat for one more product */}
                </tbody>
            </table>

            {/* Total Amount */}
            <div className="mt-4 text-right">
                <p className="font-semibold">Total Amount Due: $19,000.00</p>
                <p className="italic">NINETEEN THOUSAND ONLY</p>
            </div>

            {/* Payment Instructions */}
            <div className="mt-8">
                <p>Payment Instructions:</p>
                <p>COD (Cash on delivery)</p>
                <p>Mobile banking (Bkash, Nagad, Rocket)</p>
                {/* Add more payment details */}
            </div>

            {/* Signature and Company Stamp */}
            <div className="mt-20 flex justify-between">
                <div className="text-left">
                    <hr className="border-t-2 border-black font-bold" />
                    <p>Customer Signature & Company Stamp</p>
                </div>
                <div className="text-right">
                    <hr className="border-t-2 border-black font-bold" />
                    <p>Authorized Signature & Company Stamp</p>
                </div>
            </div>


            {/* Terms and Conditions */}
            <div className="mt-8">
                <p>Terms and Conditions:</p>
                <ol className="list-decimal pl-4">
                    <li>Goods once sold will not be refunded & changed.</li>
                    <li>The products under warranty will be repaired or replaced by the manufacturer company.</li>
                    <li>Timing for the warranty process will be controlled by the manufacturer company.</li>
                </ol>
            </div>
        </div>
    );
};

export default InvoicePageTwo;
