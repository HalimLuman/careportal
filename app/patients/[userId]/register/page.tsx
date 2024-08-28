import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Sentry from '@sentry/nextjs'

const Register = async({params : {userId}} : SearchParamProps) => {
    
    const user = await getUser(userId);

    Sentry.metrics.set("user_view_register", user.name);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
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
          <RegisterForm user={user}/>
            <p className="copyright py-12">© 2024 CarePortal</p>
        </div>
      </section>
      <Image src="/assets/images/register-img.png" width={1000} height={1000} alt="patient" className="side-img max-w-[390px]"/>
    </div>
  );
};

export default Register;
