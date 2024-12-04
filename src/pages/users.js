import React, { useState } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const Users = () => {
  const initialData = [
    { id: 1, name: 'Ján Novák', year: 1990, country: 'Slovensko', email: 'jan.novak@example.com' },
    { id: 2, name: 'Anna Horváthová', year: 1985, country: 'Česko', email: 'anna.horvathova@example.com' },
    { id: 3, name: 'Peter Smith', year: 1992, country: 'Maďarsko', email: 'peter.smith@example.com' },
    // Môžeš pridať ďalšie údaje
  ];

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const itemsPerPage = 2;

  const filteredData = initialData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.country.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

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
              <th scope="col" onClick={() => handleSort('name')}>
                Meno
                {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
              <th scope="col" onClick={() => handleSort('year')}>
                Rok narodenia
                {sortConfig.key === 'year' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
              </th>
              <th scope="col" onClick={() => handleSort('country')}>
                Štát
                {sortConfig.key === 'country' ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ''}
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
                <td>{user.name}</td>
                <td>{user.year}</td>
                <td>{user.country}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Stránkovanie */}
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
