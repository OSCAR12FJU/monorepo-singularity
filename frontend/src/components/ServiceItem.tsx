import React from "react"

interface ServiceItemProps{
    children: React.ReactNode;
    text: string;
    className?: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({children, text, className}) =>{
    return(
    <div className={`flex flex-col items-center justify-center px-8 md:px-12 py-6 md:py-8 text-center rounded-xl bg-white shadow-lg ${className}`}>
     {children}
      <p className="text-lg text-center sm:leading-6 text-gray-500">{text}</p>   
    </div>
    )
}