import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const Users = () => {
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