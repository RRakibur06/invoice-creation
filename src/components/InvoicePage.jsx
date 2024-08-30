// import { html2pdf } from 'html2pdf.js/dist/html2pdf.min';
import html2pdf from 'html2pdf.js/dist/html2pdf.min.js';
import React, { useEffect, useState } from 'react';

const InvoicePage = () => {
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        const element = document.getElementById('html-content'); // Replace with your actual HTML content ID
        const opt = {
            margin: 10,
            filename: 'my-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf().from(element).set(opt).toPdf().output('bloburl').then(pdfUrl => {
            setPdfUrl(pdfUrl);
        });

    }, []);
    return (
        <div>
            <a href={pdfUrl} download="my-document.pdf">
                Download PDF
            </a>
            <div id="html-content">
                <div className="bg-white p-8">
                    {/* Header */}
                    <header className="flex justify-between items-center border-b-2 pb-4">
                        <div>
                            {/* <img src="/star-tech-logo.png" alt="Star Tech Logo" className="h-12" /> */}
                            <div className='flex items-end mb-4'>
                                <p className='text-5xl text-blue-500 font-extrabold'>ST</p>
                                <p className='text-blue-500 mb-[-12px]'>Traders</p>
                            </div>
                            <address className="not-italic">
                                Importer, Supplier, Sales & Service Center<br />
                                Block C, Road 7, House 1, Mirpur-1, Dhaka<br />
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
                            Invoice No: STTINV202400130<br />
                            Date:  25/08/2024<br />
                            Customer Name: BGC Trust University Bangladesh
                        </div>
                        <div>
                            Sales Person: <br />
                            Payment Terms: Cash<br />
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
                                    Toner 107, JR Brand (W.Days - 180)
                                </td>
                                <td className="border border-gray-400 px-4 py-2">1,200.00</td>
                                <td className="border border-gray-400 px-4 py-2">10</td>
                                <td className="border border-gray-400 px-4 py-2">12,000.00</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Total Amount */}
                    <div className="mt-4 text-right">
                        <p className="font-semibold">Total Amount: BDT 12,000.00</p>
                        <p className="italic">TWELEVE THOUSAND TAKA ONLY</p>
                    </div>

                    {/* Payment Instructions */}
                    {/* <div className="mt-8">
                        <p>Payment Instructions:</p>
                        <p>COD (Cash on delivery)</p>
                        <p>Mobile banking (Bkash, Nagad, Rocket)</p>
                    </div> */}

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
                        <ul className="list-none">
                            <li>1. Goods once sold will not be refunded & changed.</li>
                            <li>2. The products under warranty will be repaired or replaced by the manufacturer company.</li>
                            <li>3. Timing for the warranty process will be controlled by the manufacturer company.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default InvoicePage;
