import React, { useState } from 'react'
import './article.css'
import Editarticles from './Editarticles'
const Affichearticles = ({ articles, handleLimitChange, limit, handleDeletearticle,modifarticle }) => {
    const [showe,setShowe]=useState(false)
    const [article,setArticle]=useState({})
    const handleShow=()=>{setShowe(true)}
    const handleClose=()=>{setShowe(false)}
    const handleEdit=(art)=>{
        handleShow();
        setArticle(art);
    }

    return (
        <>
        {showe && <Editarticles
        modifarticle={modifarticle}
            showe={showe}
            art={article}
            handleClose={handleClose} 
            />}
        <div className="table-container">
            <table >
                <thead>
                    <tr>
                        <th >Image</th>
                        <th>Référence</th>
                        <th>Désignation</th>
                        <th>Marque</th>
                        <th>Quanité</th>
                        <th>Prix</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((art, index) =>
                            <tr key={index}>
                                <td><img src={art.imageart} width={80} height={80} /></td>
                                <td>{art.reference}</td>
                                <td>{art.designation}</td>
                                <td>{art.marque}</td>
                                <td>{art.qtestock}</td>
                                <td>{art.prix}</td>
                                <td><button className='edit' onClick={()=>handleEdit(art)}>
                                    <i className="fa-solid fa-pen-to-square"></i>Update</button></td>
                                <td><button className="delete" onClick={() => handleDeletearticle(art._id, art.reference)} >
                                    <i class="fa-solid fa-trash"></i>Delete</button></td>
                            </tr>
                        )}
                </tbody>
                <tfoot>
                    <tr>

                        <td colspan="8">
                            <div className="limit-selector-container">
                                <label>
                                    Afficher &nbsp;
                                    <select
                                        value={limit}
                                        onChange={handleLimitChange}
                                    >
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={100}>100</option>
                                    </select>
                                </label>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </>)
}
export default Affichearticles