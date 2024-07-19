import React, { useEffect, useState } from 'react'
import { fetcharticlesPagination } from '../../services/articleservice';
import Card  from './Card';
import Pagination from '../Admin/articles/Pagination';


const Listarticlescard = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [totalPages, setTotalPages] = useState(0);
    const [searchText, setSearchText] = useState('');
  
    const fetchProducts = async (page, limit, searchText) => {
      try {
        const res = await fetcharticlesPagination(page, limit, searchText);
        setArticles(res.data.products);
        setTotalPages(res.data.totalPages);
        console.log(res.data.products);
        console.log(res.data.totalPages)
  
      } catch (error) {
        alert("erreur de connexion au serveur")
      }
    }
    useEffect(() => {
      fetchProducts(currentPage, limit, searchText);
    }, [currentPage, limit, searchText]); //if we change current page or limit se load automatically
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    const handleLimitChange = (e) => {
      setLimit(parseInt(e.target.value));
      setCurrentPage(1);
    }
    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
  
    };
  return (
    <>
    <div className="card-container">
    {articles.map((art,index)=>
    <Card image={art.imageart}
    reference={art.reference}
    designation={art.designation}
    prix={art.prix}
    />
    
    )}
    </div>
    <Pagination handlePrevPage={handlePrevPage}
    handleNextPage={handleNextPage}
    handlePageChange={handlePageChange}
    totalPages={totalPages}
    currentPage ={currentPage }
    />
    </>
  )
}

export default Listarticlescard
