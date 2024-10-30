
// components/QuarterlySales.jsx

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const QuarterlySales = () => {
  const [city, setCity] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
    
      try {
        const response = await axios.get("/api/Employee/quarterly_sales");
        setSalesData(response.data);

        console.log(response.data);

      } catch (err) {
        setError("Failed to load sales data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);



  if (loading) {
    return <p className="loading-text">Loading sales data...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }


  const generateCSV = () => {
    const headers = ["Year", "Quarter", "Total Sales","Number of Orders","Top-Selling Product","Top-Selling Product Quantity"];
    const rows = salesData.map(data => [data.ReportYear, data.ReportQuarter, data.TotalOrders,data.TotalSalesAmount,data.BestSellingItem,data.BestSellingItemQuantity]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "quarterly_sales_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };




  return (
    <div className="quarterly-sales-container">
      <h2>Quarterly Sales Report</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Quarter</th> 
            <th>Number of Orders</th>
            <th>Total Sales</th>
            <th>Top-Selling Product</th>
            <th>Top-Selling Product Quantity</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data, index) => (
            <tr key={index}> 
            <td>{data.ReportYear}</td> 
            <td>{data.ReportQuarter}</td>                        
            <td>{data.TotalOrders}</td> 
            <td>{data.TotalSalesAmount}</td>
            <td>{data.BestSellingItem}</td>
            <td>{data.BestSellingItemQuantity}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generateCSV} className="download-button">
        Download Report
      </button>
    </div>
  );
};


export default QuarterlySales;

