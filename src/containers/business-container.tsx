import { FC, useState } from "react";
import HomeTemplate from "../components/templates/home-template/home-template";
import Input from "../components/atoms/input/input";
import Button from "../components/atoms/button/button";

const BusinessContainer: FC = () => {
   interface Company {
       name:string,
       description:string,
       address:string,
       phone:number,
       ruc:number,
       responsible:string
   }

   const [companyData, setCompanyData]= useState<Company>({
    name:"",
    description:"",
    address:"",
    phone:0,
    ruc:0,
    responsible:""
   })
    
   const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
     const {name, value}=e.target
     setCompanyData({...companyData, [name]:value})
   }

   const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       console.log(companyData)
   }

  return (
    <HomeTemplate>
      <header className="bg-white p-5 rounded-md mb-4">
        <h1>Lista de empresas</h1>
      </header>
      <main className="mt-10">
        <form onSubmit={handleSubmit}>
        <div className="flex gap-2 justify-center items-center">
          <Input placeholder="Nombre de empresa" value={companyData.name} name="name" onChange={handleChange}/>
          <Input placeholder="Descripcion de empresa" value={companyData.description} name="description" onChange={handleChange}/>
          <Input placeholder="Direccion de empresa" value={companyData.address} name="address" onChange={handleChange}/>
        </div>
        <div className="flex gap-2 justify-center items-center my-10">
          <Input placeholder="Telefono de empresa" value={companyData.phone}/>
          <Input placeholder="Ruc de empresa" value={companyData.ruc}/>
          <Input placeholder="Responsable de empresa" value={companyData.responsible}/>
        </div>
        <Button label="Save" type="submit"/>

        </form>
       </main>
    </HomeTemplate>
  );
};

export default BusinessContainer;
