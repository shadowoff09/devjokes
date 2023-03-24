import Image from 'next/image';
import React from 'react'

export default function LoadingSpinner() {
  return (
    <div>
      <Image src="spinner.svg" width={99} height={99} alt="Loading" />
    </div>
  );
}
