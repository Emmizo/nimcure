"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Edit, User } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/header';

// Define the patient data type
interface PatientData {
  hospitalId: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
  nextDelivery: {
    date: string;
    daysRemaining: number;
  };
  paymentStatus: string;
}

// Define component props with proper typing
interface PatientViewProps {
  patientData?: PatientData | null;
}

export default function PatientView({ patientData = null }: PatientViewProps) {
  const [activeTab, setActiveTab] = useState('patient-information');
  const [sidebarActive, setSidebarActive] = useState('rider-profile');
  
  // Sample data for populated view
  const samplePatient: PatientData = {
    hospitalId: '23AB456789',
    firstName: 'Oluwaseun',
    lastName: 'Aregbesola',
    gender: 'Male',
    phone: '+2348123456789',
    email: 'seunregbesola@gmail.com',
    nextDelivery: {
      date: '14th November 2020',
      daysRemaining: 2
    },
    paymentStatus: 'Paid'
  };
  
  // Use sample data if no data is provided
  const patient = patientData || samplePatient;

  return (
    <div>
        <Header />
   
    <div className="min-h-screen bg-gray-50">
     
      
      {/* Breadcrumb and Action Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/patients" className="text-blue-600 hover:underline">Patients</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-700">View Patient</span>
          </div>
          
          <div className="flex items-center">
            <div className="text-right mr-4">
              <p className="text-sm text-gray-600">Patient's next delivery date is</p>
              <p className="font-medium">{patient.nextDelivery.date}, in {patient.nextDelivery.daysRemaining} days</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Assign Package to Patient
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="bg-white rounded shadow">
              <div 
                className={`px-6 py-4 cursor-pointer ${sidebarActive === 'patient' ? 'bg-blue-50 text-blue-600' : ''}`}
                onClick={() => setSidebarActive('patient')}
              >
                Patient
              </div>
              <div 
                className={`px-6 py-4 cursor-pointer ${sidebarActive === 'rider-profile' ? 'bg-blue-50 text-blue-600' : ''}`}
                onClick={() => setSidebarActive('rider-profile')}
              >
                Rider's Profile
              </div>
              <div 
                className={`px-6 py-4 cursor-pointer ${sidebarActive === 'delivery-history' ? 'bg-blue-50 text-blue-600' : ''}`}
                onClick={() => setSidebarActive('delivery-history')}
              >
                Delivery History
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="w-full md:w-3/4 md:pl-6">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <h2 className="text-lg font-medium">Payment Status</h2>
                <span className={`ml-4 px-3 py-1 rounded-md text-sm ${patient.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {patient.paymentStatus}
                </span>
              </div>
            </div>
            
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex">
                <button 
                  className={`pb-3 mr-6 ${activeTab === 'patient-information' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('patient-information')}
                >
                  Patient Information
                </button>
                <button 
                  className={`pb-3 ${activeTab === 'delivery-information' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('delivery-information')}
                >
                  Delivery Information
                </button>
              </div>
            </div>
            
            {/* Patient Information Form */}
            {activeTab === 'patient-information' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium mb-2">Patient's Information</h2>
                  <p className="text-gray-600">Personal information about Patient.</p>
                  
                  <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded flex items-center">
                    <Edit size={16} className="mr-2" />
                    Edit Patient's Information
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Hospital ID</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                      value={patient.hospitalId}
                      readOnly
                    />
                  </div>
                  
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                        value={patient.firstName}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                        value={patient.lastName}
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Gender</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                        value={patient.gender}
                        readOnly
                      />
                      <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                      value={patient.phone}
                      readOnly
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                      value={patient.email}
                      readOnly
                    />
                  </div>
                </div>
                
                <div className="mt-6 text-right">
                  <button className="bg-blue-100 text-blue-600 px-6 py-3 rounded hover:bg-blue-200">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Delivery Information */}
            {activeTab === 'delivery-information' && (
              <div>
                <h2 className="text-lg font-medium mb-4">Delivery Information</h2>
                <p className="text-gray-600">No delivery information available yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// Example usage with empty data - now with proper typing
export function PatientViewEmpty() {
  const emptyPatient: PatientData = {
    hospitalId: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    email: '',
    nextDelivery: {
      date: 'Not scheduled',
      daysRemaining: 0
    },
    paymentStatus: 'Unpaid'
  };
  
  return <PatientView patientData={emptyPatient} />;
}