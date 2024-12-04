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
    <div class="container mt-4">    
      <h2 class="mb-4">Zoznam osôb</h2>
      <table class="table table-striped table-bordered">
        <thead class="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Meno</th>
            <th scope="col">Rok narodenia</th>
            <th scope="col">Štát</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ján Novák</td>
            <td>1990</td>
            <td>Slovensko</td>
            <td>jan.novak@example.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Anna Horváthová</td>
            <td>1985</td>
            <td>Česko</td>
            <td>anna.horvathova@example.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Peter Smith</td>
            <td>1992</td>
            <td>Maddarsko</td>
            <td>peter.smith@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  );
};

export default Users;
