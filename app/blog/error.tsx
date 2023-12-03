'use client';

export default function ErrorWrapper({error}: {error: Error}) {
  return (
    <div className='error'>
      Oops! {error.message}
    </div>
  )
}
