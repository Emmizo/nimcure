'use client';

import { useState } from 'react';
import Header from '../components/header';

const deliveries = [
  {
    packageCode: '1AFHFH093',
    deliveryDate: '12th September 2020',
    patientName: 'Oluwaseun Aregbesola',
    phoneNumber: '+2347068642920',
    location: 'VI, Lagos',
  },
  {
    packageCode: '1AFHFH093',
    deliveryDate: '12th September 2020',
    patientName: 'Stella Omotoye',
    phoneNumber: '+2347068642920',
    location: 'VI, Lagos',
  },
  {
    packageCode: '1AFHFH093',
    deliveryDate: '12th September 2020',
    patientName: 'Chinyere Okafor',
    phoneNumber: '+2347068642920',
    location: 'VI, Lagos',
  },
  {
    packageCode: '1AFHFH093',
    deliveryDate: '12th September 2020',
    patientName: 'Mohammed Danladi',
    phoneNumber: '+2347068642920',
    location: 'VI, Lagos',
  },
  {
    packageCode: '1AFHFH093',
    deliveryDate: '12th September 2020',
    patientName: 'Michael Aribasala',
    phoneNumber: '+2347068642920',
    location: 'VI, Lagos',
  },
  {
    packageCode: '1AFHFH093',
    deliveryDate: '12th September 2020',
    patientName: 'Donatus Emefielu',
    phoneNumber: '+2347068642920',
    location: 'VI, Lagos',
  }
];

// Sidebar filter options with counts
const filterOptions = [
  { section: 'Unassigned Deliveries', items: [
    { name: 'Paid', count: 12 },
    { name: 'Unpaid', count: 8 },
  ]},
  { section: 'Assigned Deliveries', items: [
    { name: 'Pending', count: null },
    { name: 'Successful', count: null },
    { name: 'Failed', count: 12 },
  ]}
];

export default function DeliveriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Successful');
  const [successNotification, setSuccessNotification] = useState(false);

  return (
    <div>
       <Header />
   
    <div className=" container mx-auto px-4 py-8">
     
      {/* Success notification */}
      {successNotification && (
        <div className="bg-green-500 text-white py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Package has been successfully assigned to Oluwaseun Aregbesola</span>
          </div>
          <button 
            onClick={() => setSuccessNotification(false)}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}

      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-semibold">Deliveries</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
          Create Delivery
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar filters */}
        <div className="w-64 bg-white border-r border-gray-200">
          {filterOptions.map((section) => (
            <div key={section.section} className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 px-4 py-2">{section.section}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.name}>
                    <button
                      className={`flex justify-between items-center w-full px-4 py-3 text-left ${
                        activeFilter === item.name 
                          ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveFilter(item.name)}
                    >
                      <span>{item.name}</span>
                      {item.count && (
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                          {item.count}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 bg-gray-50">
          {/* Search and Sort */}
          <div className="flex justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-500">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded pl-3 pr-8 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                  <option>Most Recent</option>
                  <option>Patient Name</option>
                  <option>Location</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by package code"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="p-4">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Package Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delivery Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient's Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {deliveries.map((delivery, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {delivery.packageCode}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {delivery.deliveryDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {delivery.patientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {delivery.phoneNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {delivery.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 border border-blue-600 px-4 py-1 rounded">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}