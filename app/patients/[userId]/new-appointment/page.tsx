import AppointmentForm from "@/components/forms/AppointmentForm";
import { PatientForm } from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import * as Sentry from '@sentry/nextjs'

export default async function NewAppointment({params: {userId}}: SearchParamProps) {
  const patient = await getPatient(userId);
  Sentry.metrics.set("user_view_new-appointment", patient.name);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <div className="flex items-center mb-12">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-fit"
            />
            <h1 className="font-semibold tracking-wider text-2xl ml-2">
              CarePortal
            </h1>
          </div>
          <AppointmentForm type="create" userId={userId} patientId={patient.$id}/>
            <p className="copyright mt-10 py-12">© 2024 CarePortal</p>
        </div>
      </section>
      <Image src="/assets/images/appointment-img.png" width={1000} height={1000} alt="patient" className="side-img max-w-[390px] bg-bottom"/>
    </div>
  );
}
