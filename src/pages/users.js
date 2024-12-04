import React, { useState, useEffect } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const itemsPerPage = 2;

  // Získať údaje zo servera
  useEffect(() => {
    fetch('http://localhost:5000/users') // Zmeňte URL, ak je iná
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Chyba pri načítavaní užívateľov:', error));
  }, []);

  // Filtrovanie dát so zabezpečením proti undefined alebo null
  const filteredData = users.filter(item => {
    // Skontrolujte, či dané vlastnosti existujú pred použitím toLowerCase
    const nameMatch = item.meno ? item.meno.toLowerCase().includes(search.toLowerCase()) : false;
    const countryMatch = item.stat ? item.stat.toLowerCase().includes(search.toLowerCase()) : false;
    const emailMatch = item.email ? item.email.toLowerCase().includes(search.toLowerCase()) : false;
    return nameMatch || countryMatch || emailMatch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Zoznam osôb</h2>

        {/* Vyhľadávací input */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Vyhľadajte podľa mena, štátu alebo emailu"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tabuľka */}
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th scope="col" onClick={() => handleSort('id')}>
                #
                {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
              <th scope="col" onClick={() => handleSort('meno')}>
                Meno
                {sortConfig.key === 'meno' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
              <th scope="col" onClick={() => handleSort('rok_narodenia')}>
                Rok narodenia
                {sortConfig.key === 'rok_narodenia' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
              <th scope="col" onClick={() => handleSort('stat')}>
                Štát
                {sortConfig.key === 'stat' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
              <th scope="col" onClick={() => handleSort('email')}>
                Email
                {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.meno}</td>
                <td>{user.rok_narodenia}</td>
                <td>{user.stat}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav>
          <ul className="pagination justify-content-center">
            {[...Array(totalPages).keys()].map(page => (
              <li
                key={page}
                className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
