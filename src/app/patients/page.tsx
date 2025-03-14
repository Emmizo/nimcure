// app/dashboard/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/header';

interface Patient {
  hospitalId: string;
  name: string;
  phoneNumber: string;
  nextDeliveryDate: string;
  location: string;
  status: 'Completed' | 'Due & Paid' | 'Due & Unpaid' | 'Assigned' | 'Paid';
}

const patientsData: Patient[] = [
  {
    hospitalId: "1AFHFH093",
    name: "Oluwaseun Aragbesola",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Completed"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Stella Omotoye",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Completed"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Chinyere Okafor",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Paid"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Mohammed Danladi",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Unpaid"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Michael Aribisala",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Assigned"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Donatus Emefieje",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Assigned"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Donatus Emefieje",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Completed"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Donatus Emefieje",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Paid"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Donatus Emefieje",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Unpaid"
  },
  {
    hospitalId: "1AFHFH093",
    name: "Donatus Emefieje",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "VI, Lagos",
    status: "Paid"
  },
];

const PatientsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalDeliveries = 87;
  const patientsPerPage = 10;
  const totalPages = Math.ceil(totalDeliveries / patientsPerPage);

  const getStatusClass = (status: Patient['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Due & Paid':
        return 'bg-orange-100 text-orange-800';
      case 'Due & Unpaid':
        return 'bg-red-100 text-red-800';
      case 'Assigned':
        return 'bg-blue-100 text-blue-800';
      case 'Paid':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <Header />
    
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">Patients</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Patient
        </button>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by</span>
          <div className="relative">
            <select className="appearance-none border rounded px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Hospital ID</option>
              <option>Name</option>
              <option>Date</option>
              <option>Status</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by patient name, id"
            className="w-64 border rounded px-3 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-2">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient's Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Delivery Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientsData.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {patient.hospitalId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {patient.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {patient.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {patient.nextDeliveryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {patient.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(patient.status as Patient['status'])}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 border border-blue-600 px-4 py-1 rounded-md text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          You're viewing <span className="font-medium">10</span> out of <span className="font-medium">87</span> deliveries
        </p>
        <div className="flex-1 flex justify-center md:justify-end">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Prev
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === page ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PatientsPage;