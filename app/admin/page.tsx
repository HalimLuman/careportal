import {DataTable} from "@/components/table/DataTable";
import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {columns} from "@/components/table/columns";


const Admin = async() => {
  const appointments = await getRecentAppointmentList();
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="h-8 w-fit"
            />
            <h1 className="font-semibold tracking-wider text-xl ml-1">
              CarePortal
            </h1>
          </div>
        </Link>
          <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
            <h1 className="header">Welcome, Admin</h1>
            <p className="text-dark-700">Start the day with managind new appointments</p>
        </section>
        <section className="admin-stat">
            <StatCard type="appointments" count={appointments.scheduledCount} label="Scheduled appointments" icon="/assets/icons/appointments.svg"/>
            <StatCard type="pending" count={appointments.pendingCount} label="Pending appointments" icon="/assets/icons/pending.svg"/>
            <StatCard type="cancelled" count={appointments.cancelledCount} label="Cnancelled appointments" icon="/assets/icons/cancelled.svg"/>
        </section>
        <DataTable data={appointments.documents} columns={columns}/>
      </main>
    </div>
  );
};

export default Admin;
