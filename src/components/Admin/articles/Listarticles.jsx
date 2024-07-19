import React, { useEffect, useState } from 'react'
import { deletearticle, fetcharticlesPagination } from '../../../services/articleservice';
import Affichearticles from './Affichearticles';
import Pagination from './Pagination';

import './article.css'
import Headerarticles from './Headerarticles';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { confirmAlert } from 'react-confirm-alert'; // Import
import Insertarticles from './Insertarticles';


const Listarticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState('');
const [show,setShow]=useState(false);

  const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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
  const handleDeletearticle = async (id, ref) => {
    confirmAlert({
      title: "Confirm delete...",
      message: " supprimer l' article: " + ref,
      buttons: [
        {
          label: 'Oui',
          onClick: () => deletearticle(id)
            .then(res => fetchProducts(currentPage, limit, ''))
            .catch(error => console.log(error))
        },
        {
          label: 'Non',
        }
      ]
    });
  
  
  }
  const modifarticle=(artmod)=>{
    setArticles(articles.map((art)=>art._id===artmod._id ? artmod:art));
  }
  return (
    <div>
      <button className="new" onClick={handleShow} > 
        <i className="fa-solid fa-plus-square"></i> Nouveau
      </button>
      {show && <Insertarticles
        show={show}
        handleClose={handleClose}
        fetchProducts={fetchProducts}
        limit={limit}
      />}




      <Headerarticles searchText={searchText}
        handleSearchChange={handleSearchChange} />
      <Affichearticles articles={articles}
        handleLimitChange={handleLimitChange}
        limit={limit}
        handleDeletearticle={handleDeletearticle}
        modifarticle={modifarticle}
      />


      <Pagination handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        handlePrevPage={handlePrevPage}
        totalPages={totalPages}
        currentPage={currentPage}

      />
     

    </div>

  )
}

export default Listarticles
