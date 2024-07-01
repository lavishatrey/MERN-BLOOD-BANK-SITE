import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to our Blood Donation Portal, a unified platform designed to streamline the blood donation process for individuals and organizations alike. Whether you're an individual donor, an administrator, a hospital representative, or part of an organization, our site offers a seamless experience to facilitate and manage blood donations. We provide easy registration, appointment scheduling, and donation tracking for donors, while admins can oversee user management and event coordination. Hospitals benefit from efficient blood request and inventory management, and organizations can partner with us to host donation drives and engage their communities. Join us in our mission to ensure a steady and reliable supply of blood for those in need, fostering a connected community dedicated to saving lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
