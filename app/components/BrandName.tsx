import React from "react";

interface BrandNameProps {
  className?: string;
}
const BrandName = ({ className }: BrandNameProps) => {
  return (
    <>
      <div className={`${className ? className : ""}`}>
        <span className='text-primary'>N</span>awab{" "}
        <span className='text-primary'>F</span>ashion{" "}
        <span className='text-primary'>G</span>arments
      </div>
    </>
  );
};

export default BrandName;
