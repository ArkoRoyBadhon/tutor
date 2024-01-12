"use client"
import { useState } from "react";

const Pagination = ({ totalPages, onPageChange }:any) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (page:number) => {
      setCurrentPage(page);
      onPageChange(page);
    };
  
    // Generate an array of page numbers from 1 to totalPages
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    return (
      <div>
        <ul className="flex rounded-md bg-lighter w-fit">
          {pages.map((page) => (
            <li
              key={page}
              className={`px-4 py-1 cursor-pointer border border-r border-white hover:bg-light ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Pagination