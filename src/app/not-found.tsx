import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold text-red-600 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-800 mb-8'>
        Page Not Found
      </h2>
      <p className='text-lg text-gray-600 mb-8'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href='/dashboard'
        className='px-6 py-3 bg-primary text-white rounded-lg  transition duration-300'
      >
        Go Back Home
      </Link>
    </div>
  );
}
