import { useEffect, useState } from "react";
import html2pdf from 'html2pdf.js/dist/html2pdf.min.js';


export const Form = () => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [products, setProducts] = useState([
        { id: 1, productDescription: '', unitPrice: '', quantity: '', totalPrice: '' }
    ]);

    const [data, setData] = useState({
        invoiceNo: '',
        date: '',
        customerName: '',
        salesPerson: '',
        paymentTerms: '',
        totalAmount: 0,
        totalAmountInText: ''
    });

    // let data = {
    //     invoiceNo: '',
    //     date: '',
    //     customerId: '',
    //     salesPerson: '',
    //     paymentTerms: ''
    // };

    const handleInput = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const addProduct = () => {
        setProducts([...products, { id: products.length + 1 }]);
    };

    const removeProduct = (id) => {
        setProducts(products.filter(q => q.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setProducts(products.map(q => q.id === id ? { ...q, [field]: value } : q));
    };

    const handleSubmit = () => {
        setData((prevData) => ({
            ...prevData,
            ['products']: products,
        }));
        console.log(data);
    }

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

    }, [data, products]);

    return (
        <div>
            <p className="text-4xl font-bold w-max m-auto mt-2">Invoice Creation</p>
            <form className="w-[60%] m-auto mt-5">
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Invoice No: </label>
                    <input type="text" onChange={(e) => handleInput('invoiceNo', e.target.value)} /></div>
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Date: </label>
                    <input type="text" onChange={(e) => handleInput('date', e.target.value)} /></div>
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Customer Name: </label>
                    <input type="text" onChange={(e) => handleInput('customerName', e.target.value)} /></div>
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Sales Person: </label>
                    <input type="text" onChange={(e) => handleInput('salesPerson', e.target.value)} /></div>
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Payment Terms: </label>
                    <input type="text" onChange={(e) => handleInput('paymentTerms', e.target.value)} /></div>
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Total Amount: </label>
                    <input type="text" onChange={(e) => handleInput('totalAmount', e.target.value)} /></div>
                <div className='flex flex-col'>
                    <label className='font-semibold' htmlFor="">Total Amount in Text: </label>
                    <input type="text" onChange={(e) => handleInput('totalAmountInText', e.target.value)} /></div>

                <div item xs={10} id="education" style={{ border: "1px solid gray", padding: "10px", marginTop: "15px" }}>
                    {products.map((product) => (
                        <div key={product.id} style={{ marginBottom: "10px", display: "flex" }}>
                            <div item xs={6} style={{ padding: "5px" }}>
                                <div className='flex flex-col'>
                                    <label className='font-semibold'>Product Description</label>
                                    <input
                                        type="text"
                                        style={{ height: "25px", width: "380px" }}
                                        value={product.productDescription}
                                        onChange={(e) => handleInputChange(product.id, 'productDescription', e.target.value)}
                                    /></div>
                            </div>
                            <div item xs={6} style={{ padding: "5px" }}>
                                <div className='flex flex-col'>
                                    <label className='font-semibold'>Unit Price</label>
                                    <input
                                        type="text"
                                        style={{ height: "25px" }}
                                        value={product.unitPrice}
                                        onChange={(e) => handleInputChange(product.id, 'unitPrice', e.target.value)}
                                    /></div>
                            </div>
                            <div item xs={6} style={{ padding: "5px" }}>
                                <div className='flex flex-col'>
                                    <label className='font-semibold'>Quantity</label>
                                    <input
                                        type="text"
                                        style={{ height: "25px" }}
                                        value={product.quantity}
                                        onChange={(e) => handleInputChange(product.id, 'quantity', e.target.value)}
                                    /></div>
                            </div>
                            <div item xs={6} style={{ padding: "5px" }}>
                                <div className='flex flex-col'>
                                    <label className='font-semibold'>Total Price</label>
                                    <input
                                        type="text"
                                        style={{ height: "25px" }}
                                        value={product.totalPrice}
                                        onChange={(e) => handleInputChange(product.id, 'totalPrice', e.target.value)}
                                    /></div>
                            </div>
                            <div item xs={12} style={{ padding: "5px", display: product.id > 1 ? 'flex' : 'none', alignItems: "center", cursor: "pointer" }} onClick={() => removeProduct(product.id)}>
                                <div style={{ border: "1px solid gray", display: "flex", alignItems: "center", borderRadius: "5px", padding: "0px 5px", height: "30px", marginBottom: "-15px" }}>
                                    <p style={{ color: "black", fontSize: "16px", display: product.id > 1 ? 'block' : 'none' }}>Delete</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p onClick={addProduct} style={{ color: "blue", textDecoration: "underline", cursor: "pointer", fontSize: "14px" }}>Add Product</p>
                </div>
            </form>

            <a href={pdfUrl} download="my-document.pdf" className=" underline text-blue-500 font-bold text-lg ml-4">
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
                            Invoice No: {data.invoiceNo}<br />
                            Date:  {data.date}<br />
                            Customer Name: {data.customerName}
                        </div>
                        <div>
                            Sales Person: {data.salesPerson}<br />
                            Payment Terms: {data.paymentTerms}<br />
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
                            {products.map((product) => (
                                <tr>
                                    <td className="border border-gray-400 px-2 py-2">{product.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {product.productDescription}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">{product.unitPrice}</td>
                                    <td className="border border-gray-400 px-4 py-2">{product.quantity}</td>
                                    <td className="border border-gray-400 px-4 py-2">{product.totalPrice}</td>
                                </tr>))}
                        </tbody>
                    </table>

                    {/* Total Amount */}
                    <div className="mt-4 text-right">
                        <p className="font-semibold">Total Amount: BDT {data.totalAmount}</p>
                        <p className="italic">{data.totalAmountInText} TAKA ONLY</p>
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
        </div>
    );
}